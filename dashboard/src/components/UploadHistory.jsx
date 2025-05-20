import React from 'react';

export default function UploadHistory() {
  const mockData = [
    { name: 'sales_q1.xlsx', date: '2025-05-10', analysis: 'Yes' },
    { name: 'marketing_data.xls', date: '2025-05-05', analysis: 'No' },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Upload & Analysis History</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">File Name</th>
            <th className="p-2">Upload Date</th>
            <th className="p-2">Analysis Done</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((file, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{file.name}</td>
              <td className="p-2">{file.date}</td>
              <td className="p-2">{file.analysis}</td>
              <td className="p-2">
                <button className="text-blue-500">Download Chart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
