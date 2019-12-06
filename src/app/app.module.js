var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { BeautifulPeople } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AgendamentoPage } from '../pages/agendamento/agendamento';
import { RegisterPage } from '../pages/register/register';
import { RestProvider } from '../providers/rest/rest';
import { UserModel } from '../model/UserModel';
import { EmpresaModel } from '../model/EmpresaModel';
import { MinhaAgendaPage } from '../pages/minha-agenda/minha-agenda';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                BeautifulPeople,
                LoginPage,
                HomePage,
                RegisterPage,
                AgendamentoPage,
                MinhaAgendaPage
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
                HomePage,
                RegisterPage,
                AgendamentoPage,
                MinhaAgendaPage
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map