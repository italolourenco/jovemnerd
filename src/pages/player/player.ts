import { Component } from '@angular/core';
import { AudioProvider } from 'ionic-audio';
import { AdMobPro } from '../../services/ads/ads.service';
import { Audio } from '../../models/audio.model';
import { AudioService } from '../../services/audio/audio.service'

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  myTracks: Array<Audio>;
  allTracks: any[];
  selectedTrack: any;

  constructor(private _audioProvider: AudioProvider, private adsService: AdMobPro, private audioService: AudioService) {
    this.myTracks = []
    this.startApp();
  }


  startApp():void {
    this.audioService.getAudios().subscribe(audio => {
      this.myTracks.push(audio)
    })
  }

  ngAfterContentInit() {
    console.log(this.myTracks);
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
     this._audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }
}
