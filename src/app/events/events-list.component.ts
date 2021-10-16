import { Component } from '@angular/core';


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {

  event = {
    id: 1,
    name: 'Intro to Robotics',
    date: '10/10/2021',
    time: '11:00 am',
    price: 37.99,
    // imageUrl: 'app/assets/images/robot.png',
    location: {
      address: '31 Baker Street',
      city: 'London',
      country: 'England'
    }
  }


}
