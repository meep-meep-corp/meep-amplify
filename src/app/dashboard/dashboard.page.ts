import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  viewTitle = '';
  eventSource = [];
  eventDetails = false;
  event = '';
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  constructor(private api: APIService, private auth: AuthGuardService) { }

  ngOnInit() {
    if (this.auth.user) {
      this.api.UserByEmail(this.auth.user.attributes.email).then(data => {
        this.eventSource = this.createEvents(data.items[0].trips['items']);
        console.log(this.eventSource)
      });
    }
  }

  createEvents(events: any) {
    let toRet = [];
    events.forEach(element => {
      var start = new Date(element.startTime * 1000);
      var end = new Date(element.endTime * 1000);
      var startCoords = element.startCoords;
      var endCoords = element.endCoords;
      var cost = element.cost;

      toRet.push({
        title: 'Event - test',
        startTime: start,
        endTime: end,
        startCoords: startCoords,
        endCoords: endCoords,
        cost: cost,
      });
    });
    return toRet;
  }

  onEventSelected(event) {
    this.event = event;
    this.eventDetails = true;
    console.log(event);
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
        if (eventType === 0) {
            startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
            if (endDay === startDay) {
                endDay += 1;
            }
            endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
            events.push({
                title: 'All Day - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: true
            });
        } else {
            var startMinute = Math.floor(Math.random() * 24 * 60);
            var endMinute = Math.floor(Math.random() * 180) + startMinute;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
            endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
            events.push({
                title: 'Event - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
        }
    }
    return events;
  }
}
