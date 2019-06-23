import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  BaseArrayClass
} from '@ionic-native/google-maps';
import { Platform, AlertController } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MarkerEventService } from '../../services/marker.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LockService } from '../services/lock.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { APIService } from '../API.service';
import { String } from 'aws-sdk/clients/redshift';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  markerDetails: boolean = false;
  marker:any = {};
  acceptDisabled = true;
  map: GoogleMap;
  constructor(private platform: Platform, private alertCtrl: AlertController, private markerService: MarkerEventService,
  private geolocation: Geolocation, private lockService: LockService, private auth: AuthGuardService, private api: APIService) { }

  async ngOnInit() {
    await this.platform.ready();

    this.markerService.triggered.subscribe((marker) => {
      this.marker = marker;
      this.markerDetails = true;
    })

    this.geolocation.getCurrentPosition().then((resp) => {
      this.loadMap(resp.coords.latitude, resp.coords.longitude);
      this.api.ListVehicles().then(data => {
        console.log(data);
        let vehicles = data.items;
        let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>();
  
        vehicles.forEach(element => {
          let pos: String[] = element.location.split(',')
          POINTS.push({
            position: { lat: pos[0], lng: pos[1] },
            iconData: {
              type: element.type,
              battery: element.battery,
              status: element.status,
              provider: element.provider.name,
              description: element.description,
              name: element.name,
              url: "https://www.pinclipart.com/picdir/middle/104-1044515_economy-car-svg-png-icon-free-download-538848.png",
              size: {
                width: 24,
                height: 24
              }
            } 
          })
        });
  
        POINTS.forEach((data: any) => {
          data.disableAutoPan = true;
          let marker: Marker = this.map.addMarkerSync(data);
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
            let marker: Marker = <Marker>params[1];
            let customInfo: any = marker.get('customInfo');
            let iconData: any = marker.get('iconData');
            this.markerService.dispatchEvent(iconData);
          });
          marker.setIcon(marker.get('iconData'));
        });
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadMap(lat: number, lon: number) {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: lat,
          lng: lon
        },
        zoom: 18,
        tilt: 30
      }
    });
  }

  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.presentPrompt();
    }, (err) => {
      // An error occurred
      console.log('error');
    });
  }

  async presentPrompt() {
    let alert = await this.alertCtrl.create({
      header: 'Are you sure you want to book the ' + this.marker.type + '?',
      buttons: [
        {
          text: 'Yes',
          role: 'yes',
          handler: data => {
            if (this.auth.user) {
              this.api.UserByEmail(this.auth.user.attributes.email).then((data) => {
                console.log(data);
                this.lockService.lock(data.items[0].id).subscribe(() => console.log('locked'), err => console.log(err));
              });
            }
          }
        },
        {
          text: 'No',
          role: 'no',
          handler: data => {
            console.log('No clicked');
          }
        }
      ]
    });
    await alert.present();
  }

  unlock() {
    BarcodeScanner.scan().then((barcodeData) => {
      if (this.auth.user) {
        this.api.UserByEmail(this.auth.user.attributes.email).then((data) => {
          console.log(data);
          this.lockService.unlock(data.items[0].id).subscribe(() => console.log('locked'), err => console.log(err));
        });
      }
    }, (err) => {
      // An error occurred
      console.log('error');
    });
  }
}
