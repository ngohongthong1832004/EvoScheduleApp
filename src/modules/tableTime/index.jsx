import { useState } from "react";
import "./styles.css";

export const TableTimeModule = () => {
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
      <h1 className="text-md sm:text-xl font-bold border-b-2">Table Time</h1>
      <div className="flex justify-start mt-5 bg-white shadow-lg p-5">
        <ul className="flex justify-center flex-col">
          <li className="w-full">
            <p className="w-full text-black py-2 rounded-md">Giáo viên chọn vào ngày có thể tham gia dạy học.</p>
          </li>
          <li className="w-full">
            <p className="w-full text-black py-2 rounded-md">Ghi rõ ghi chú và giải thích.</p>
          </li>
        </ul>
      </div>
      <div className="mt-5 bg-white shadow-lg p-5">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              {data[0].map((header, colIndex) => (
                <th key={`header-${colIndex}`} className="border border-gray-300">
                  <input
                    className="bg-white w-full h-[40px] px-2"
                    type="text"
                    value={header}
                    onChange={(e) => handleTextChange(0, colIndex, e)}
                    disabled={colIndex === 0}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`} className="border-b border-gray-300">
                {row.map((cell, colIndex) => (
                  <td key={`cell-${rowIndex}-${colIndex}`} className="border border-gray-300 p-2">
                    {colIndex === 0 ? (
                      <input
                        className="bg-white w-full h-[40px] px-2"
                        type="text"
                        value={cell} // For the first column, use the session name
                        onChange={(e) => handleTextChange(rowIndex + 1, colIndex, e)}
                        disabled={colIndex === 0}
                      />
                    ) : (
                      <div className="flex items-center space-x-2">
                        <input
                          className="bg-white w-full h-[40px] px-2"
                          type="text"
                          value={cell.text} // Access the text property here
                          onChange={(e) => handleTextChange(rowIndex + 1, colIndex, e)}
                        />
                        <input
                          className="color-white border border-gray-300 w-5 h-5"
                          type="checkbox"
                          checked={cell.checked} // Access the checked property here
                          onChange={(e) => handleCheckboxChange(rowIndex + 1, colIndex, e)}
                        />
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-5 bg-white shadow-lg p-5">
        <button className="bg-blue-500 text-white px-5 py-2 rounded-md">Submit</button>
      </div>
    </div>
  );
};
