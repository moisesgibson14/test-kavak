import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';

  constructor(private _apiSerice: ApiService, private route: ActivatedRoute){
    let emailsUnicos = function (emails) {
      let re = /./g;
      let resultado = 'm.p@kavak.com'.replace(re, ''); 
    console.log(resultado = 'm.p@kavak.com'.replace(re, ''));
    };    
  }


 
}
