import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useDisputes() {
  const [disputes, setDisputes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from('disputes').select('*')
      if (data) setDisputes(data)
      setLoading(false)
    }
    load()
  }, [])

  return { disputes, loading }
}