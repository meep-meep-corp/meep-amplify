import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  acceptDisabled = true;

  constructor() { }
  ngOnInit() { }

  scan() {
    BarcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.acceptDisabled = false;
    }, (err) => {
      // An error occurred
      console.log('error');
    });
  }
}
