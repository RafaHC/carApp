import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
import { UserModel } from '../../model/UserModel';
import { EmpresaModel } from '../../model/EmpresaModel';
import { LoginPage } from '../login/login';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private user: UserModel;
  place = new EmpresaModel();
  minhaAgenda = [];
  loading: any;
  showCar = false;
  showMotorista = false;
  carro: any;
  categoriaId;
  veiculos = [];
  motoristas = [];
  motorista : any;
  empresasAux = [];
  pesquisa: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: HttpClient,
     public restProvider: RestProvider,
     public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
     ) {
    this.caregarMotoristas();
    this.caregarVeiculos();

    this.pesquisa = {};
  }

  logout() {
      this.navCtrl.push(LoginPage);
  }

  caregarMotoristas() {
    this.restProvider.getMotoristas()
      .then((response) => {
        this.motoristas = response;
        console.log('Motoristas ==' ,response);
      }).catch(err => console.log(err))
  }


  caregarVeiculos() {
    this.restProvider.getVeiculos()
      .then((response) => {
        this.veiculos = response;
        console.log('Veiculos ===', response);
      }).catch(err => console.log(err))
  }

  buscar(){
    console.log('-------', this.pesquisa);
    if (this.pesquisa.placa && this.pesquisa.placa != ''){
      let result = this.veiculos.filter(veiculo => veiculo.placa == this.pesquisa.placa);
      this.carro = result[0];
      this.showCar = true;
      this.showMotorista = false;
      this.pesquisa.placa = '';
      console.log(result);
    }else{
      let result = this.motoristas.filter(motorista => motorista.nome == this.pesquisa.motorista);
      this.motorista = result[0];
      this.showMotorista = true;
      this.showCar = false;
      this.pesquisa.motorista = '';
    }

  
  }



}
