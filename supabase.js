// ===================================
// CONFIGURAÇÃO DO SUPABASE
// ===================================

const SUPABASE_URL = 'https://lljvcfnauqpfcgldthix.supabase.co';
const SUPABASE_KEY = 'sb_publishable_k6VoPcmXUDLm77oVIyXifQ_SJ9TsyI3';

// Sempre usa a origem real — nunca localhost
const SITE_URL = window.location.origin;

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    redirectTo: SITE_URL + '/index.html'
  }
});