import React from 'react';
import '../styles/Schedule.css';
import Slide from 'react-reveal/Slide';

import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

function Schedule() {
  // const currentDate = '2018-11-01';
  // const schedulerData = [
  //   {
  //     startDate: '2018-11-01T09:45',
  //     endDate: '2018-11-01T11:00',
  //     title: 'Meeting',
  //   },
  //   {
  //     startDate: '2018-11-01T12:00',
  //     endDate: '2018-11-01T13:30',
  //     title: 'Go to a gym',
  //   },
  // ];
  return (
    <div className="schedule" id="schedule">
      <Slide right>
        <h2>Schedule</h2>
      </Slide>

      <div className="schedule-container">
        testing
        {/* <Paper>
          <Scheduler data={schedulerData}>
            <ViewState currentDate={currentDate} />
            <DayView startDayHour={9} endDayHour={14} />
            <Appointments />
          </Scheduler>
        </Paper> */}
      </div>
    </div>
  );
}

export default Schedule;
