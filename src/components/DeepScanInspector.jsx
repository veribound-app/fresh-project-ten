import React from 'react';

export function DeepScanInspector({
  disputeCode = 'DSP-2026-9081',
  scamChannel = 'WhatsApp',
  rawPayload = 'URGENT: Your mobile carrier security update required. Click bit.ly/claim-ug to verify your SIM or call +1-800-555-0199 immediately. Asking for PIN/OTP.',
  riskScore = 88,
}) {
  return (
    <div className="bg-white shadow-md rounded-xl border border-red-200 overflow-hidden">
      {/* Header */}
      <div className="bg-red-50 px-6 py-4 border-b border-red-100 flex justify-between items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100 px-2 py-0.5 rounded">
            Deep Scan Forensic Report ({scamChannel.toUpperCase()})
          </span>
          <h3 className="text-lg font-bold text-gray-900 mt-1">Target Case: {disputeCode}</h3>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-500">Threat Risk Index</span>
          <p className="text-xl font-extrabold text-red-600">{riskScore} / 100</p>
        </div>
      </div>

      {/* Payload Box */}
      <div className="p-6 space-y-4">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Intercepted Raw Payload</label>
          <div className="mt-1 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm font-mono text-gray-800">
            "{rawPayload}"
          </div>
        </div>

        {/* Forensic Indicators Found */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Forensic Threat Indicators Detected</label>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-start space-x-2 bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
              <span className="font-bold">⚠️ Links Found (1):</span>
              <span className="font-mono text-xs mt-0.5">bit.ly/claim-ug (Shortened link hides real destination site)</span>
            </div>

            <div className="flex items-start space-x-2 bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
              <span className="font-bold">📞 Phone Detected:</span>
              <span className="text-xs mt-0.5">Contains direct callback number for social engineering trap.</span>
            </div>

            <div className="flex items-start space-x-2 bg-red-50 border border-red-200 p-3 rounded-lg text-red-900">
              <span className="font-bold">🎯 Scam Vector:</span>
              <span className="text-xs mt-0.5">Prize / Lottery / Carrier Security Impersonation Trick.</span>
            </div>

            <div className="flex items-start space-x-2 bg-red-50 border border-red-200 p-3 rounded-lg text-red-900">
              <span className="font-bold">🔒 Critical Intent:</span>
              <span className="text-xs mt-0.5">Asking for PIN / OTP harvesting. NEVER share.</span>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="p-4 bg-red-600 text-white rounded-lg flex flex-col md:flex-row justify-between items-center shadow-sm">
          <div className="font-bold text-sm tracking-wide">
            🚫 DO NOT click links, DO NOT send money, Report & Delete immediately.
          </div>
          <span className="mt-2 md:mt-0 text-xs bg-red-700 px-3 py-1.5 rounded font-semibold uppercase tracking-wider">
            Automated Intercept Active
          </span>
        </div>
      </div>
    </div>
  );
}