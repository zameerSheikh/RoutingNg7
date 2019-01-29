import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Zameer'
    },
    {
      id: 2,
      name: 'Sachin'
    },
    {
      id: 3,
      name: 'Amru'
    },
    {
      id: 4,
      name: 'karNakar'
    },
    {
      id: 5,
      name: 'RamSingh'
    }
  ];
}
