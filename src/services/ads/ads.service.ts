import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AdMob } from '@ionic-native/admob';

import 'rxjs/add/operator/map';

@Injectable()

export class AdMobPro {
  private _opt;
  private _admobid;


constructor(platform: Platform, private admob: AdMob){
  platform.ready().then(() => {
    this._admobid = {};

    if(platform.is('android')) {
      this._admobid = {
        banner: 'ca-app-pub-8828235459141357/5474062821',
        interstitial: 'ca-app-pub-8828235459141357/5474062821'
      };
    }

    this.init();
  })
}

init(){
  if(this.admob){
    this._opt = {
            // bannerId: admobid.banner,
            // interstitialId: admobid.interstitial,
            // adSize: 'SMART_BANNER',
            // width: integer, // valid when set adSize 'CUSTOM'
            // height: integer, // valid when set adSize 'CUSTOM'
            // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
            bgColor: 'black', // color name, or '#RRGGBB'
            // x: integer,     // valid when set position to 0 / POS_XY
            // y: integer,     // valid when set position to 0 / POS_XY
            isTesting: false, // set to true, to receiving test ad for testing purpose
            // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
    };
    this.admob.setOptions(this._opt);
    this.showBanner()
  }
}

showInterstitial(): boolean{
  if( !this.admob ) return false;

  this.admob.prepareInterstitial({
    adId: this._admobid.interstitial,
    autoShow: true
  })

  return true;
}

showBanner(){
  if( !this.admob ) return false;
  console.log(this._admobid.banner);
  this.admob.createBanner({
    adId: this._admobid.banner,
    position: this.admob.AD_POSITION.BOTTOM_CENTER,
    autoShow: true
  })
  return true;
}

removeAds() {
     if( this.admob ) this.admob.removeBanner();
   }
}
