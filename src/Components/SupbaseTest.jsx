// src/components/SupabaseTest.jsx
import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

export default function SupabaseTest() {
  const [ok, setOk] = useState('testing...')

  useEffect(() => {
    async function test() {
      // simple read from canteens table (change table name if different)
      const { data, error } = await supabase.from('canteens').select('*').limit(1)
      if (error) {
        console.error('Supabase error', error)
        setOk('error: ' + (error.message || 'check console'))
      } else {
        console.log('Supabase sample data:', data)
        setOk('connected ✓')
      }
    }
    test()
  }, [])

  return <div style={{padding:20}}>Supabase connection status: {ok}</div>
}
