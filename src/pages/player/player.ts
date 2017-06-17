import { Component } from '@angular/core';
import { AudioProvider } from 'ionic-audio';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMob } from '@ionic-native/admob';

interface AdMobType {
  banner: string,
  interstitial: string
};

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  myTracks: any[];
  allTracks: any[];
  selectedTrack: any;

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
    },
    {
      "src": "https://www.myinstants.com/media/sounds/masculinity-alert-tema.mp3",
      "artist": "Vinhetas",
      "title": "Masculinity Alert"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/sam-fisher.mp3",
      "artist": "Jovem Nerd",
      "title": "Sam Fisher!"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/jovem-nerd-caraca.mp3",
      "artist": "Jovem Nerd",
      "title": "CARACA!"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/untitled-session-1_mixdown_SxQXMob.mp3",
      "artist": "Sr. K",
      "title": "Animal"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/na-tua-cabeca.mp3",
      "artist": "Jovem Nerd",
      "title": "Headshot"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/babaca_2.mp3",
      "artist": "Azaghal",
      "title": "Tu é Babaca Cara!"
    },
	  {
      "src": "https://www.myinstants.com/media/sounds/untitled_865.mp3",
      "artist": "Azaghal",
      "title": "Azaghal sem palavras"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/eu-sou-formado-na-vida.mp3",
      "artist": "Azaghal",
      "title": "Eu sou formado na vida!"
    },
	  {
      "src": "https://www.myinstants.com/media/sounds/vintteeee-puta-qui-pariuuu.mp3",
      "artist": "Azaghal",
      "title": "VINTEEEE!"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/tem-potencial.mp3",
      "artist": "Sr. K",
      "title": "Eh... Isso vai ser bom"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/ajuda-seu-babaca.mp3",
      "artist": "Azaghal",
      "title": "Ajuda ele seu babaca!"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/ozob.mp3",
      "artist": "Azaghal",
      "title": "Ozob revoltado"
    },
	  {
      "src": "https://www.myinstants.com/media/sounds/milhoes.mp3",
      "artist": "Sr. K",
      "title": "Milhões!"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/untitled_750-mp3cut.mp3",
      "artist": "Sr. K",
      "title": "Caguei!"
    },
 	  {
      "src": "https://www.myinstants.com/media/sounds/gaveta-funk.mp3",
      "artist": "Gaveta",
      "title": "Funk!"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/foda-se-gaveta-filmes.mp3",
      "artist": "Gaveta",
      "title": "F*da-se"
    },
    {
      "src": "https://www.myinstants.com/media/sounds/abertura-nerd-office.mp3",
      "artist": "Vinhetas",
      "title": "Abertura Nerdoffice"
     }
    ];
  }

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
     // use AudioProvider to control selected track
     this._audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }
}
