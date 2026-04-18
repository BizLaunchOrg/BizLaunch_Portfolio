import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ivqjfzgxeqcjdntvbrbc.supabase.co";
const supabaseKey = "YOUR_ANON_PUBLIC_KEY"; // from Supabase dashboard

export const supabase = createClient(supabaseUrl, supabaseKey);