import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import gymLogo from '/public/gymlogo.webp';
//import { usePathname } from 'next/navigation';
//import Image from 'next/image';

export const metadata: Metadata = {
  title: 'GymVS',
  icons: 'gymlogo.webp',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*   const pathname = usePathname();
   */ return (
    <html lang='en'>
      <body>
        <header className='flex flex-col items-center'>
          <h2>Gym Victor</h2>
          <img src={gymLogo.src} alt='header image' width={80} height={80} />
          <nav className='w-full flex justify-around'>
            {/* <Image src={'/image'} alt='header image' width={1000} height={300} /> */}
            {/* hasta 1000 request gratis */}
            {/* <Link className={`${pathname === '/' ? 'bg-sky-100 text-blue-600' : ''}`} href={'/'}>
            home
            </Link> */}
            <Link href={'/'}>home</Link>
            {/* <Link href={'/dashboard'}>dashboard</Link>
            <Link href={'/dashboard/customers'}>customers</Link>
            <Link href={'/dashboard/invoices'}>invoices</Link> */}
            <Link href={'/login'}>Inicia sesión</Link>
          </nav>
        </header>
        {children}
        <footer className='w-full absolute bottom-0'>footer </footer>
      </body>
    </html>
  );
}
