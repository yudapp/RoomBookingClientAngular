import { Injectable } from '@angular/core';
import { Layout, LayoutCapacity, Room } from './model/Room';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  rooms: Array<Room>;
  users: Array<User>;

  constructor() {
      this.rooms = new Array<Room>();
      this.users = new Array<User>();

      //USer 1 and 2
      const user1 = new User();
      user1.id = 1;
      user1.name = 'Matt';


      const user2 = new User();
      user2.id = 2;
      user2.name = 'Donald';

      const user3 = new User();
      user3.id = 3;
      user3.name = 'Suzan';

      //add users to array
      this.users.push(user1);
      this.users.push(user2);
      this.users.push(user3);



      // Room 1
      const room1 = new Room();
      room1.id = 1;
      room1.name = 'First Room';
      room1.location = 'First Floor';

      const capacity1 = new LayoutCapacity();
      capacity1.layout = Layout.THEATER;
      capacity1.capacity = 50;

      const capacity2 = new LayoutCapacity();
      capacity2.layout = Layout.USHAPE;
      capacity2.capacity = 20;

      room1.capacities.push(capacity1);
      room1.capacities.push(capacity2);

      // Room 2
      const room2 = new Room();
      room2.id = 2;
      room2.name = 'Second Room';
      room2.location ='Third Floor';

      const capacity3= new LayoutCapacity();
      capacity3.layout = Layout.THEATER;
      capacity3.capacity = 60;

      room2.capacities.push(capacity3);

      //add the rooms to the array.
      for(let i = 0; i < 10 ; i++){
      this.rooms.push(room1);
      this.rooms.push(room2);
      }
     }
}
