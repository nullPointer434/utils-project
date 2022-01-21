import { Component, Input, OnInit } from '@angular/core';
import { InfoDetail } from './interfaces/info-detail.interface';
import { InfoDetailModel } from './model/info-detail-model';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.scss']
})
export class InfoDetailComponent implements OnInit {

  @Input()
  infoDetail: InfoDetailModel = new InfoDetailModel();

  constructor() { }

  ngOnInit(): void {
    // this.infoDetail = {
    //   title: '',
    //   items: [
    //   ],
    //   config: {
    //     width: '',
    //     columns: ''
    //   }
    // };
  }

}
