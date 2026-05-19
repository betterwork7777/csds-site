import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://brjxclxlptwjzawevzwx.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_modA-En_NPTxFcUOHSjVdA_mzK2-Dpy";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
