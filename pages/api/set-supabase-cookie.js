import { defaultHead } from 'next/head';
import { supabase } from '../../utils/supabase';

const handler = async (req, res) => {
  await supabase.auth.api.setAuthCookie(req, res);
};

export default handler;
