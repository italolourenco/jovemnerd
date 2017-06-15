import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import {Audio} from "../../models/audio,model";


@Injectable()
export class AudioFactoryService {

  constructor(public http: Http) {

  }

  private getAudios() {
    return this.http.get("assets/audios.json")
      .map((res: any) => res.json())
      .catch((error: any) => {
        console.log(error);
        return Observable.throw(new Error(error.status));
      });
  }

  public buildAudios(): Observable<Audio> {
    return this.getAudios().flatMap(json => {
      return Observable.from(json['AUDIOS'].map(Audio.build))
    })
  }

}
