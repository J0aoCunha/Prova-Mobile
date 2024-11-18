// src/supabaseClient.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { AppState } from 'react-native';
import "react-native-url-polyfill"

const SUPABASE_URL = ''; // Substitua pela sua URL do Supabase
const SUPABASE_ANON_KEY = ''; // Substitua pela sua chave anônima

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth:{
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession:true,
        detectSessionInUrl:false
    }
});


AppState.addEventListener("change", (state)=>{
    if(state==="active"){
        supabase.auth.startAutoRefresh()
    }else{
        supabase.auth.stopAutoRefresh()
    }
})