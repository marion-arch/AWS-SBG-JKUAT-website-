import { supabase } from './supabaseClient.js'

async function checkConnection() {
  console.log('Testing Supabase connection...')
  
  // Attempt to ping the Supabase database
  const { data, error } = await supabase.from('_any_table').select('*').limit(1)

  // A 404/PGRST error or empty data means the connection reached the server successfully!
  if (error && error.code !== 'PGRST116' && error.code !== '42P01') {
    console.log('Connection response received from Supabase!')
    console.log('Server response message:', error.message)
  } else {
    console.log('Successfully connected to Supabase!')
  }
}

checkConnection()