import Link from 'next/link';
import { useUser } from '../context/user';

const Nav = () => {
  const { user } = useUser();

  return (
    <nav className='flex py-4 px-6 border-b border-gray-200'>
      <Link href='/'>
        <a className='mr-2'>Home</a>
      </Link>
      <Link href='/pricing'>
        <a>Pricing</a>
      </Link>
      <Link href={user ? '/logout' : '/login'}>
        <a className='ml-auto'>{!!user ? 'Logout' : 'Login'}</a>
      </Link>
    </nav>
  );
};

export default Nav;
