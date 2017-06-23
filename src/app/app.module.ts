import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlayerComponent } from '../pages/player/player';
import { IonicAudioModule } from 'ionic-audio';
import { AdMob } from '@ionic-native/admob';
import { AdMobPro } from '../services/ads/ads.service';
import { AudioService } from '../services/audio/audio.service';
import {AudioFactoryService} from '../services/audio/audio-factory.service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PopoverController } from 'ionic-angular';
import {ShowMore} from '../pages/more/more';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayerComponent,
    ShowMore
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayerComponent,
    ShowMore
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMob,
    AdMobPro,
    AudioService,
    AudioFactoryService,
    SocialSharing,
    PopoverController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
