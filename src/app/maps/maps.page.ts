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
  constructor(private platform: Platform, private alertCtrl: AlertController, private markerService: MarkerEventService) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();

    this.markerService.triggered.subscribe((marker) => {
      this.marker = marker;
      this.markerDetails = true;
    })
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });

    let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>([
      {
        position: { lat: 43.0741704, lng: -89.3809802 },
        iconData: {
          type: 'Scooter',
          battery: '80%',
          status: 'Available',
          provider: 'MeepMeep',
          url: "https://www.pinclipart.com/picdir/middle/104-1044515_economy-car-svg-png-icon-free-download-538848.png",
          size: {
            width: 24,
            height: 24
          }
        } 
      },
    ]);

    POINTS.forEach((data: any) => {
      data.disableAutoPan = true;
      let marker: Marker = this.map.addMarkerSync(data);
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe((params) => {
        let marker: Marker = <Marker>params[1];
        let customInfo: any = marker.get('customInfo');
        let iconData: any = marker.get('iconData');
        this.markerService.dispatchEvent(iconData);
      });
      // marker.on(GoogleMapsEvent.INFO_CLICK).subscribe((params) => {
      //   let marker: Marker = <Marker>params[1];
      //   let customInfo: any = marker.get('customInfo');
      //   let iconData: any = marker.get('iconData');
      //   this.markerService.dispatchEvent(iconData);        
      // });
      marker.setIcon(marker.get('iconData'));
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
            console.log('Yes clicked');
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
}
