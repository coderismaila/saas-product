import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useUser } from '../context/user';
import { supabase } from '../utils/supabase';

const Logout = () => {
  const { logout } = useUser();

  useEffect(logout, []);
  return <p>Logging out</p>;
};

export default Logout;
