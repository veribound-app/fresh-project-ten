import React from 'react';
import  DisputeTable from "./components/DisputeTable"
import { DeepScanInspector } from './components/DeepScanInspector';


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Uganda Telecom Pitch Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-5 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
              Anti-Scam Shield <span className="text-yellow-600 font-semibold">— Uganda Telecom Gateway</span>
            </h1>
            <span className="bg-red-100 text-red-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
              Target: 70% Fraud Reduction
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5">
            Intercepting Fake Promos, Brand Impersonation, and Phishing Links (MTN & Airtel Vectors)
          </p>
        </div>
        <div className="mt-3 md:mt-0 flex items-center space-x-2 text-xs text-gray-600 bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Kampala Gateway: Active (Live Intercept)</span>
        </div>
      </header>
      
      {/* Main Layout */}
      <main className="max-w-7xl mx-auto py-6 px-4 space-y-6">
        
        {/* Pitch KPI Metrics Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold text-gray-500 uppercase">Blocked Fake Promos (24h)</span>
            <p className="text-2xl font-bold text-gray-900 mt-1">4,281</p>
            <span className="text-xs text-emerald-600 font-medium">↓ 72% vs last week's average</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold text-gray-500 uppercase">Brand Impersonation Traps</span>
            <p className="text-2xl font-bold text-red-600 mt-1">1,215</p>
            <span className="text-xs text-red-600 font-medium">MTN/Airtel name masking detected</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold text-gray-500 uppercase">Target Reduction Progress</span>
            <p className="text-2xl font-bold text-yellow-600 mt-1">70.4%</p>
            <span className="text-xs text-yellow-700 font-medium">Goal achieved for Q3</span>
          </div>
        </div>
<DisputeTable />
        {/* Side-by-Side Layout for Table and Deep Scan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Intelligence Table */}
          <div className="lg:col-span-7 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <DisputeTable />
          </div>

          {/* Right Column: Deep Scan Forensic Inspector */}
          <div className="lg:col-span-5">
            <DeepScanInspector 
              disputeCode="UG-SHIELD-9081"
              scamChannel="WhatsApp / SMS"
              rawPayload="CONGRATS! MTN/Airtel Uganda giving free 50GB data & cash prize. Click bit.ly/claim-ug immediately or call +256-700-000199. Send PIN/OTP to verify."
              riskScore={94}
            />
          </div>

        </div>
      </main>
    </div>
  );
}