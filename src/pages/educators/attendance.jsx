import React from "react";
import AttendanceCalendar from "../../components/calendar/AttendanceCalendar";

const Attendance = () => {
  return (
    <div className="admin">
      <div className="container-fluid">
        <div className="cont">
            <h1>Attendance</h1>
        </div>
            <AttendanceCalendar />
        </div>
    </div>
  );
};

export default Attendance;
