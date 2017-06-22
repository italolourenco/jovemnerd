import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Audio} from "../../models/audio.model";
import {AudioFactoryService} from "./audio-factory.service";

@Injectable()
export class AudioService {
  private audios: Array<Audio>

  constructor(public audioFactory: AudioFactoryService) {
    this.audios = [];
  }

  getAudios(): Observable<Audio> {
    return this.audioFactory.buildAudios().map(audio =>{
      this.audios.push(audio);
      return audio;
    });
  }
}
