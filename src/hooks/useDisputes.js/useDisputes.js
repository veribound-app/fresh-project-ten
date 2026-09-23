import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useDisputes() {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const { data } = await supabase.from("disputes").select("*").order("created_at", { ascending: false });
      if (data) setDisputes(data);
      setLoading(false);
    }
    load();
  }, []);

  return { disputes, loading };
}