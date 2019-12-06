import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../model/UserModel';
import { EmpresaModel } from '../../model/EmpresaModel';
@Injectable()
export class RestProvider {

  baseUrl: string = 'https://carmoviestcc2019.herokuapp.com/';
  constructor(public http: HttpClient, public userModel: UserModel) {
    console.log('Hello RestProvider Provider');
  }


  getMotoristas(): any {
    return this.http.get(this.baseUrl + 'motoristas')
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(err => err);

  }


  getVeiculos(): any {
    return this.http.get(this.baseUrl + 'veiculos')
      .toPromise()
      .then(response => {
        return response;
      })
      .catch(err => err);

  }

  // getAgenda(id): any {
  //   return this.http.get(`${this.baseUrl}agenda/${id}`)
  //     .toPromise()
  //     .then(response => {
  //       return response;
  //     })
  //     .catch(err => err);

  // }


  // getAgendaFinalizadas(id): any {
  //   return this.http.get(`${this.baseUrl}agenda/finalizado/${id}`)
  //     .toPromise()
  //     .then(response => {
  //       return response;
  //     })
  //     .catch(err => err);

  // }

  // registerUser(user) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(`${this.baseUrl}users`, user)
  //       .subscribe(response => {
  //         resolve(response)
  //       }, (err) => reject(err))
  //   })
  // }


  // agendamento(agenda) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(`${this.baseUrl}agenda`, agenda)
  //       .subscribe(response => {
  //         resolve(response)
  //       }, (err) => reject(err))
  //   })
  // }



  login(user): Promise<UserModel> {
    return this.http.post(this.baseUrl + 'login', user)
      .toPromise()
      .then(response => {
        return response as UserModel
      })
      .catch((err) => err)

  }
}
