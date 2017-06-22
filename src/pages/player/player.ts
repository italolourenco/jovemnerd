import { Component } from '@angular/core';
import { AudioProvider } from 'ionic-audio';
import { AdMobPro } from '../../services/ads/ads.service';
import { Audio } from '../../models/audio.model';
import { AudioService } from '../../services/audio/audio.service';
import { SocialSharing } from '@ionic-native/social-sharing';
import {ShowMore} from '../more/more';
import { PopoverController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  myTracks: Array<Audio>;
  allTracks: any[];
  selectedTrack: any;

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
