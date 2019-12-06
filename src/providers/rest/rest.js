var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../model/UserModel';
var RestProvider = /** @class */ (function () {
    function RestProvider(http, userModel) {
        this.http = http;
        this.userModel = userModel;
        this.baseUrl = 'http://localhost:3000/'; // baseUrl: string = 'https://beutiful-people.herokuapp.com/';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getEmpresas = function () {
        return this.http.get(this.baseUrl + 'places')
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(function (err) { return err; });
    };
    RestProvider.prototype.getAgenda = function (id) {
        return this.http.get(this.baseUrl + "agenda/" + id)
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(function (err) { return err; });
    };
    RestProvider.prototype.registerUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + "users", user)
                .subscribe(function (response) {
                resolve(response);
            }, function (err) { return reject(err); });
        });
    };
    RestProvider.prototype.agendamento = function (agenda) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + "agenda", agenda)
                .subscribe(function (response) {
                resolve(response);
            }, function (err) { return reject(err); });
        });
    };
    RestProvider.prototype.login = function (user) {
        return this.http.post(this.baseUrl + 'login', user)
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(function (err) { return err; });
    };
    RestProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, UserModel])
    ], RestProvider);
    return RestProvider;
}());
export { RestProvider };
//# sourceMappingURL=rest.js.map