import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Audio} from "../../models/audio,model";
import {AudioFactoryService} from "./audio-factory.service";

@Injectable()
export class AudioService {
  private audios: Array<Audio>

  constructor(public audioFactory: AudioFactoryService) {
    this.audios = [];
  }

  getAudios(): Observable<Audio> {
    return this.memeFactory.buildAudios().map(audio =>{
      return
    });
  }
}
