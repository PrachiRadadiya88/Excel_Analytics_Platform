import React from 'react';
import UploadFile from '../components/UploadFile';
import ChartGenerator from '../components/ChartGenerator';
import UploadHistory from '../components/UploadHistory';

export default function DashboardHome() {
  return (
    <div>
      <main className="p-6 max-w-5xl mx-auto">
        <UploadFile />
        <ChartGenerator />
        <UploadHistory />
      </main>
    </div>
  );
}
