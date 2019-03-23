import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fertilizer-calendar-heat-map',
  templateUrl: './calendar-heat-map.component.html',
  styleUrls: ['./calendar-heat-map.component.scss']
})
export class CalendarHeatMapComponent implements OnInit {
  @Input('data') data: any[];

  view: [1100, 200];

  aqua = {
    name: 'aqua',
    selectable: true,
    group: 'Continuous',
    domain: [
      '#e0f7fa',
      '#b2ebf2',
      '#80deea',
      '#4dd0e1',
      '#26c6da',
      '#00bcd4',
      '#00acc1',
      '#0097a7',
      '#00838f',
      '#006064'
    ]
  };

  constructor() {}

  ngOnInit() {
    this.data = this.getCalendarData();
  }

  getCalendarData(): any[] {
    const weekdayName = new Intl.DateTimeFormat('en-us', { weekday: 'short' });

    // today
    const now = new Date();
    const todaysDay = now.getDate();
    const thisDay = new Date(now.getFullYear(), now.getMonth(), todaysDay);

    // Monday
    const thisMonday = new Date(thisDay.getFullYear(), thisDay.getMonth(), todaysDay - thisDay.getDay() + 1);
    const thisMondayDay = thisMonday.getDate();
    const thisMondayYear = thisMonday.getFullYear();
    const thisMondayMonth = thisMonday.getMonth();

    // 52 weeks before monday
    const calendarData = [];
    const getDate = d => new Date(thisMondayYear, thisMondayMonth, d);
    for (let week = -52; week <= 0; week++) {
      const mondayDay = thisMondayDay + week * 7;
      const monday = getDate(mondayDay);

      // one week
      const series = [];
      for (let dayOfWeek = 7; dayOfWeek > 0; dayOfWeek--) {
        const date = getDate(mondayDay - 1 + dayOfWeek);

        // skip future dates
        if (date > now) {
          continue;
        }

        // value
        const value = dayOfWeek < 6 ? date.getMonth() + 1 : 0;

        series.push({
          date,
          name: weekdayName.format(date),
          value
        });
      }

      calendarData.push({
        name: monday.toString(),
        series
      });
    }

    return calendarData;
  }
}
