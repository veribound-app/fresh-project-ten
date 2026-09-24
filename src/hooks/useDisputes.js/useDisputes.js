// src/hooks/useDisputes.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

export function useDisputes() {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDisputes = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
       .from('disputes')
       .select('*')
       .order('created_at', { ascending: false });

      if (error) throw error;
      setDisputes(data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDisputes();
  }, [fetchDisputes]);

  return { disputes, loading, error, refetch: fetchDisputes };
}