import { useState } from "react";
import "./styles.css";

export const TableLessonModule = () => {
  // Initialize state for table data
  const [data, setData] = useState(() => {
    const daysOfWeek = ["", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"];
    const sessions = ["Tiết 1-3", "Tiết 4-6", "Tiết 7-9", "Tiết 10-12", "Tiết 13-15"];
    
    return [
      daysOfWeek, // Header row
      ...sessions.map(session => [session, ...Array(7).fill({ text: '', checked: false })])
    ];
  });

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
      <h1 className="text-md sm:text-xl font-bold border-b-2">Table Lesson</h1>
      <div className="flex justify-start mt-5 bg-white shadow-lg p-5">
        <ul className="flex justify-center flex-col">
          <li className="w-full">
            <p className="w-full text-black py-2 rounded-md">Giáo viên chọn vào môn có thể dạy hoặc chọn vào chuyên ngành của mình</p>
          </li>
          <li className="w-full">
            <p className="w-full text-black py-2 rounded-md">Ghi rõ ghi chú và giải thích.</p>
          </li>
        </ul>
      </div>
      <div className="mt-5 bg-white shadow-lg p-5">
        
      </div>
      <div className="flex justify-end mt-5 bg-white shadow-lg p-5">
        <button className="bg-blue-500 text-white px-5 py-2 rounded-md">Submit</button>
      </div>
    </div>
  );
};
