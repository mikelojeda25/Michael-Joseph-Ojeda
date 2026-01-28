/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // dagdag ka pa dito kung may iba ka pang variables
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
