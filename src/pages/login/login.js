var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';
import { Validators, FormBuilder } from '@angular/forms';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, restProvider, formBuilder, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.todo = this.formBuilder.group({
            email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
            senha: ['', Validators.required]
        });
    }
    LoginPage.prototype.logForm = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: "Entrando, aguarde..." });
        this.loading.present();
        this.restProvider.login(this.todo.value)
            .then(function (response) {
            if (response.error) {
                _this.erro = response.error.message;
                setInterval(function () {
                    _this.loading.dismissAll();
                }, 1000);
                console.log('erro');
            }
            else {
                setInterval(function () {
                    _this.loading.dismissAll();
                }, 1000);
                -_this.navCtrl.push(HomePage, { user: response });
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginPage.prototype.registerUser = function () {
        this.navCtrl.push(RegisterPage);
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            RestProvider,
            FormBuilder,
            LoadingController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map