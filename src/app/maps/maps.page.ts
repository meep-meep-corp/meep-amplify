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
import { Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map: GoogleMap;
  constructor(private platform: Platform) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
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
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
      marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick);
      marker.setIcon(marker.get('iconData'));
    });
  }

  onMarkerClick(params: any) {

  }

}
