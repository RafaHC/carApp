import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestProvider } from '../../providers/rest/rest';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserModel } from '../../model/UserModel';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private todo: FormGroup;
  public erro: string;
  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController) {
    this.todo = this.formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      senha: ['', Validators.required]
    });
  }

  logForm() {
    this.loading = this.loadingCtrl.create({ content: "Entrando, aguarde..." });
    this.loading.present();
    this.restProvider.login(this.todo.value)
      .then((response: UserModel) => {
        if (response.error) {
          this.erro = response.error.message;

          setInterval(() => {
            this.loading.dismissAll();
          }, 1000);
          console.log('erro')
        } else {

          setInterval(() => {
            this.loading.dismissAll();
          }, 1000); -
            this.navCtrl.push(HomePage, { user: response });
        }
      })
      .catch(err => console.log(err))

  }



}
