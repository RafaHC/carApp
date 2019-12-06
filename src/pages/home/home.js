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
import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
import { EmpresaModel } from '../../model/EmpresaModel';
import { AgendamentoPage } from '../agendamento/agendamento';
import { MinhaAgendaPage } from '../minha-agenda/minha-agenda';
import { LoginPage } from '../login/login';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, http, restProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.place = new EmpresaModel();
        this.minhaAgenda = [];
        this.empresas = [];
        this.empresasAux = [];
        this.showCadastro = true;
        this.user = navParams.get('user');
        console.log(this.user, 'user');
        this.carregarAgenda(this.user.id);
        this.categoriaId = 2;
        this.caregarEmpresas();
    }
    HomePage.prototype.goAgenda = function () {
        this.navCtrl.push(MinhaAgendaPage, { minhaAgenda: this.minhaAgenda, user: this.user });
    };
    HomePage.prototype.logout = function () {
        this.navCtrl.push(LoginPage);
    };
    HomePage.prototype.carregarAgenda = function (id) {
        var _this = this;
        this.restProvider.getAgenda(this.user.id)
            .then(function (data) {
            console.log('agenda', data);
            _this.minhaAgenda = data;
        })
            .catch(function (err) { return console.log(err); });
    };
    HomePage.prototype.filtro = function () {
        var _this = this;
        console.log('cheguei', this.categoriaId);
        this.empresasAux = this.empresas.filter(function (produto) {
            return produto.categoriaId == _this.categoriaId;
        });
    };
    HomePage.prototype.caregarEmpresas = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: "Carregando..." });
        this.loading.present();
        this.restProvider.getEmpresas()
            .then(function (response) {
            _this.empresas = response;
            console.log('cheguei', _this.categoriaId);
            _this.empresasAux = _this.empresas.filter(function (produto) {
                return produto.categoriaId == _this.categoriaId;
            });
            setInterval(function () {
                _this.loading.dismissAll();
            }, 1000);
        }).catch(function (err) { return console.log(err); });
    };
    HomePage.prototype.agendarItem = function (item) {
        this.navCtrl.push(AgendamentoPage, { empresa: item, user: this.user, minhaAgenda: this.minhaAgenda });
    };
    HomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            HttpClient,
            RestProvider,
            LoadingController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map