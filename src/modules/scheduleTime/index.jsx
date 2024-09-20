import { useState } from "react";
import FullCalendar from '@fullcalendar/react'; // FullCalendar component
import timeGridPlugin from '@fullcalendar/timegrid'; // Import timeGrid plugin
import "./styles.css";

export const ScheduleTimeModule = () => {
  // Initialize state for table data
  const [data, setData] = useState(() => {
    const daysOfWeek = ["", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];
    const sessions = ["Tiết 1-3", "Tiết 4-6", "Tiết 7-9", "Tiết 10-12", "Tiết 13-15"];

    return [
      daysOfWeek, // Header row
      ...sessions.map(session => [session, ...Array(7).fill({ text: '', checked: false })])
    ];
  });

  const events = [
    // Monday (Thứ 2)
    { title: 'Morning Session', start: '2024-09-17T08:00:00', end: '2024-09-17T10:00:00', daysOfWeek: [1] },
    { title: 'Afternoon Session', start: '2024-09-17T12:00:00', end: '2024-09-17T15:00:00', daysOfWeek: [1] },
    { title: 'Evening Session', start: '2024-09-17T18:00:00', end: '2024-09-17T20:00:00', daysOfWeek: [1] },

    // Tuesday (Thứ 3)
    { title: 'Morning Session', start: '2024-09-20T08:00:00', end: '2024-09-20T10:00:00', daysOfWeek: [2] },
    { title: 'Afternoon Session', start: '2024-09-20T12:00:00', end: '2024-09-20T15:00:00', daysOfWeek: [2] },
    { title: 'Evening Session', start: '2024-09-20T18:00:00', end: '2024-09-20T20:00:00', daysOfWeek: [2] },

    // Similarly for other days...
  ];

  // Handle cell text change
  const handleTextChange = (rowIndex, colIndex, event) => {
    const newData = data.map((row, rIdx) =>
      row.map((cell, cIdx) => (
        rIdx === rowIndex && cIdx === colIndex
          ? { ...cell, text: event.target.value }
          : cell
      ))
    );
    setData(newData);
  };

  // Handle checkbox change
  const handleCheckboxChange = (rowIndex, colIndex, event) => {
    const newData = data.map((row, rIdx) =>
      row.map((cell, cIdx) => (
        rIdx === rowIndex && cIdx === colIndex
          ? { ...cell, checked: event.target.checked }
          : cell
      ))
    );
    setData(newData);
  };


  return (
    <div className="mt-[120px] p-12 min-h-[100vh]">
      <h1 className="text-md sm:text-xl font-bold border-b-2">Schedule Time</h1>
      <div className="mt-5 bg-white shadow-lg p-5">
      <FullCalendar
      plugins={[timeGridPlugin]} // Use timeGrid for time-based slots
      initialView="timeGridWeek" // Show a week view
      slotMinTime="06:30:00" // Start time (morning)
      slotMaxTime="20:00:00" // End time (evening)
      events={events} // Attach event data
      allDaySlot={false} // Disable the all-day slot
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek' // Set to weekly view
      }}
    />
      </div>
    </div>
  );
};
