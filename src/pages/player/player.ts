import { Component } from '@angular/core';
import { AudioProvider } from 'ionic-audio';
import { AdMobPro } from '../../services/ads/ads.service';

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

  constructor(private _audioProvider: AudioProvider, private adsService: AdMobPro) {
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
  }

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    // use AudioProvider to control selected trac
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
