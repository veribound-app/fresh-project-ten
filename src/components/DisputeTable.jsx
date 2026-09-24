// src/components/DisputeTable.jsx
import React from 'react';
import { useDisputes } from '../hooks/useDisputes';

export function DisputeTable() {
  const { disputes, loading, error, refetch } = useDisputes();

  const getChannelBadge = (channel) => {
    const ch = (channel || 'whatsapp').toLowerCase();
    switch (ch) {
      case 'whatsapp':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
}