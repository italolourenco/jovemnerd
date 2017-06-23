import { Component } from '@angular/core';
import { AudioProvider } from 'ionic-audio';
<<<<<<< HEAD
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMob } from '@ionic-native/admob';

interface AdMobType {
  banner: string,
  interstitial: string
};
=======
import { AdMobPro } from '../../services/ads/ads.service';
import { Audio } from '../../models/audio.model';
import { AudioService } from '../../services/audio/audio.service';
import { SocialSharing } from '@ionic-native/social-sharing';
import {ShowMore} from '../more/more';
import { PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
>>>>>>> develop

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  myTracks: Array<Audio>;
  allTracks: any[];
  selectedTrack: any;

<<<<<<< HEAD
  constructor(private _audioProvider: AudioProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private admob: AdMob) {
    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      var admobid: AdMobType;
      if (/(android)/i.test(navigator.userAgent)) {
        admobid = { // for Android
          banner: 'ca-app-pub-8828235459141357/5474062821',
          interstitial: 'ca-app-pub-8828235459141357/5474062821'
        };
      } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
          banner: 'ca-app-pub-8828235459141357~6032466023',
          interstitial: 'ca-app-pub-8828235459141357/5474062821'
        };
      } else {
        admobid = { // for Windows Phone
          banner: 'ca-app-pub-8828235459141357~6032466023',
          interstitial: 'ca-app-pub-8828235459141357/5474062821'
        };
      }

      this.admob.createBanner({
        adId: admobid.banner,
        isTesting: true,//comment this out before publishing the app
        autoShow: true
      })
      splashScreen.hide();

      this.admob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
      })

    });

    this.myTracks = [{
      src: 'https://www.myinstants.com/media/sounds/canalha-jovem-nerd.mp3',
      artist: 'Azaghal',
      title: 'CANALHA',
    },
    {
      src: 'https://www.myinstants.com/media/sounds/aaah-meu-pc.mp3',
      artist: 'NerdCast',
      title: 'AAH O MEU PC',
    },
    {
      src: 'https://www.myinstants.com/media/sounds/lolita.mp3',
      artist: 'Jovem Nerd',
      title: 'VEM CA LOLITA',
    }
    ];
=======
  constructor(private _audioProvider: AudioProvider, private adsService: AdMobPro, private audioService: AudioService, private sharingVar: SocialSharing, public popoverCtrl: PopoverController, public loadingCtrl: LoadingController) {
    this.myTracks = [];
    this.presentLoading();
    this.startApp();
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Carregando ...",
      duration: 3000
    });
    loader.present();
  }


  startApp():void {
    this.audioService.getAudios().subscribe(audio => {
      this.myTracks.push(audio);
    })
>>>>>>> develop
  }

  ngAfterContentInit() {
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
     this._audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {
  }

  showmore():void {
      let popover = this.popoverCtrl.create(ShowMore);
      popover.present();
}

  whatsappShare(track : Audio): void{
    this.sharingVar.shareViaWhatsApp("Jovem Nerd Talks", track.getSrc(),  null /* url */)
        .then(()=>{},
          ()=>{})
        }

}
