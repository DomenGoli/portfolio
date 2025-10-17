import Navigation from '@/app/_components/Navigation';
import Link from 'next/link';

function Header() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between max-w-7xl mx-auto'>
        <Link href="/">Domov</Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
