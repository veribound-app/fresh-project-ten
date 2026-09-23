import React from 'react';
import { useDisputes } from '../hooks/useDisputes';

export function DisputeTable() {
  const { disputes, loading, error, refetch } = useDisputes();

  // Helper function for channel badge styles (pure JS, no type annotations)
  const getChannelBadge = (channel) => {
    const ch = (channel || 'whatsapp').toLowerCase();
    switch (ch) {
      case 'whatsapp':
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">WhatsApp</span>;
      case 'voice':
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">Voice / Call</span>;
      case 'email':
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">Email Phishing</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">{ch}</span>;
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500 font-medium">Loading multi-channel intelligence...</div>;
  }

  if (error) {
    return (
      <div className="p-6 m-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
        <p className="font-semibold">Error loading dispute intelligence:</p>
        <p className="text-sm mt-1">{error}</p>
        <button onClick={refetch} className="mt-3 px-4 py-1.5 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Multi-Channel Scam Intelligence Engine</h2>
          <p className="text-xs text-gray-500">Live Telecommunication Threat Feed (WhatsApp, Voice, Email Vectors)</p>
        </div>
        <button onClick={refetch} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50 transition shadow-sm">
          Refresh Feed
        </button>
      </div>

      {disputes.length === 0 ? (
        <div className="p-12 text-center text-gray-400">
          <p className="text-base font-medium">No scam vectors detected in engine database.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider font-semibold border-b border-gray-100">
                <th className="px-6 py-3">Dispute Code</th>
                <th className="px-6 py-3">Vector Channel</th>
                <th className="px-6 py-3">Intercepted Scam Payload / Metadata</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Risk Score</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {disputes.map((dispute) => (
                <tr key={dispute.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4 font-mono font-medium text-indigo-600">
                    {dispute.disputeCode || dispute.dispute_code || '—'}
                  </td>
                  <td className="px-6 py-4">
                    {getChannelBadge(dispute.scamChannel || dispute.scam_channel)}
                  </td>
                  <td className="px-6 py-4 max-w-xs truncate text-xs text-gray-600 font-sans" title={dispute.rawPayload || dispute.raw_payload}>
                    {dispute.rawPayload || dispute.raw_payload || 'No payload logged'}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {dispute.currency || 'USD'} {Number(dispute.amount).toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      (dispute.riskScore ?? dispute.risk_score ?? 0) > 75 
                        ? 'bg-red-100 text-red-800' 
                        : (dispute.riskScore ?? dispute.risk_score ?? 0) > 40 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      Score: {dispute.riskScore ?? dispute.risk_score ?? 0}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 capitalize">
                      {(dispute.status || '').replace(/_/g, ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}