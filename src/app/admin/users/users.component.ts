import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  selectedUser: User;

  constructor(private dataService: DataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.users = this.dataService.users;
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        const id = params['id'];
        if(id){
          this.selectedUser = this.users.find( user => user.id === +id);
        }
      }
    );

  }

  selectUser(id: number){
      this.router.navigate(['admin','users'], {queryParams: {id: id}});
  }

  addUser(){

  }
}
