import { Component, OnInit } from '@angular/core';
import { InfoDetail } from 'src/app/generic-components/info-detail/interfaces/info-detail.interface';
import { UserService } from 'src/app/http/user.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  infoDetail: InfoDetail = {
    title: 'General Information',
    items: [
      {
        subtitle: 'User Information',
        data: [
          {
            key: 'Nombre',
            value: 'Jhon Doe'
          }
        ]
      }
    ],
    config: {
      width: '5',
      columns: '2'
    }
  };

  response: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.response = value;
      console.log('-->', this.response);
    });
  }

}
