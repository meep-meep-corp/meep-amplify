import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      console.log('cenas');
    }, (err) => {
      // An error occurred
      console.log('error');
    });
  }
}
