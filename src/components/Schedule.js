import React from 'react';
import '../styles/Schedule.css';
import Slide from 'react-reveal/Slide';

import data from '../data/events.json';

import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  AppointmentsProps,
} from '@devexpress/dx-react-scheduler-material-ui';

const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: '#000088',
      borderRadius: '8px',
      borderColor: '#7FDBFF',
      boxShadow:
        '0 9.5px 19px rgba(0, 0, 0, 0.3), 0 7.5px 6px rgba(0, 0, 0, 0.22)',
    }}
  >
    {children}
  </Appointments.Appointment>
);

const Schedule = () => {
  return (
    <div className="schedule" id="calendar">
      <Slide right>
        <h2>Schedule</h2>
      </Slide>
      <div className="schedule-container">
        <Paper>
          <Scheduler data={data.events} height={660}>
            <ViewState currentDate={data.currentDate} />
            <DayView startDayHour={0} endDayHour={24} intervalCount={2} />
            <Appointments appointmentComponent={Appointment} />
          </Scheduler>
        </Paper>
      </div>
    </div>
  );
};

export default Schedule;
