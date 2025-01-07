import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mdxfqgpvliitzsmrqmym.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1keGZxZ3B2bGlpdHpzbXJxbXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNzAzOTYsImV4cCI6MjA1MTc0NjM5Nn0.zYKV2lrL9hHHX_2BbG0bjg2N2A9V3s3mh-U7f_lqDWg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
