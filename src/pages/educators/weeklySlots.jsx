import React from "react";
import WeeklySlotsCalendar from "../../components/calendar/WeeklySlotsCalendar";

const WeeklySlots = () => {
  return (
    <div className="admin">
      <div className="container-fluid enrolled_2">
        <div className="cont">
            <h1>Weekly Slots</h1>
        </div>

        <WeeklySlotsCalendar />

        </div>
    </div>
  );
};

export default WeeklySlots;
