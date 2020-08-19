import React from 'react';
import '../styles/Schedule.css';
import Slide from 'react-reveal/Slide';

import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';

const Schedule = () => {
  const currentDate = '2020-09-12';
  const schedulerData = [
    {
      startDate: '2020-09-12T09:45',
      endDate: '2020-09-12T11:00',
      title: 'Meeting',
    },
    {
      startDate: '2020-09-12T12:00',
      endDate: '2020-09-12T13:30',
      title: 'Go to a gym',
    },
  ];
  return (
    <div className="schedule">
      <Slide right>
        <h2>Schedule</h2>
      </Slide>
      <div className="schedule-container">
        <Paper>
          <Scheduler data={schedulerData}>
            <ViewState currentDate={currentDate} />
            <DayView startDayHour={9} endDayHour={24} intervalCount={2} />
            <Appointments />
            {/* <AppointmentTooltip showCloseButton showOpenButton={false} /> */}
          </Scheduler>
        </Paper>
      </div>
    </div>
  );
};

export default Schedule;
