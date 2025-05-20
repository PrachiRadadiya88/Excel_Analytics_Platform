import React from 'react';

export default function UploadFile() {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Upload New Excel File</h2>
      <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center">
        <input type="file" accept=".xlsx, .xls" className="block mx-auto" />
        <p className="mt-2 text-sm text-gray-500">Drag and drop or choose a file</p>
      </div>
    </div>
  );
}
