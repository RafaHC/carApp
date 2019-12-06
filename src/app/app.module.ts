import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { BeautifulPeople } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';
import { UserModel } from '../model/UserModel';
import { EmpresaModel } from '../model/EmpresaModel';


@NgModule({
  declarations: [
    BeautifulPeople,
    LoginPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(BeautifulPeople),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BeautifulPeople,
    LoginPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider,
    UserModel,
    EmpresaModel
  ]
})
export class AppModule { }
