
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://cputwakixvcaxzzdejgz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwdXR3YWtpeHZjYXh6emRlamd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMjgzMTcsImV4cCI6MjA3MzcwNDMxN30.NWOuAkmFKx8LAqp3KLiInokowEwF8V7fjFZROyvv3TQ"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;