import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-word',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.css']
})
export class SearchWordComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute, private _apiService: ApiService) {
    this.route.params.subscribe(res => {
      if (res.palabra) {
        this.searchWord(res.palabra);
      }
    })
  }
  ngOnInit() {
    this.data = []
  }
  searchWord(text) {
    this._apiService.searchWord(text).subscribe(response => {
      this.data = response;
    }, error => {
    }
    )
  }

}