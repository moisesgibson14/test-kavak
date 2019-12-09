import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {
  data : any;
  constructor(private _apiService : ApiService) { }
  ngOnInit() {
    this.getAllData()
  }
  getAllData(){
    this._apiService.getAllData().subscribe(
      response =>{
        this.data = response
      },error =>{
      }
    )
  }
}
