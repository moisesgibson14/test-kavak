import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-data-by-id',
  templateUrl: './data-by-id.component.html',
  styleUrls: ['./data-by-id.component.css']
})
export class DataByIdComponent implements OnInit {
  data : any;
  constructor(private route: ActivatedRoute, private _apiService: ApiService) {
    this.route.params.subscribe(res => {
      console.log(res.id)
      if(res.id){
        this.getDataById(res.id);
      }
    })
   }

  ngOnInit() {
  }

  getDataById(id){
    this._apiService.getAllDataById(id).subscribe(res =>{
      this.data = res
    })
  }

}
