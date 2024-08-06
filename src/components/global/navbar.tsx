import Link from 'next/link';
import React from 'react';
import { MenuIcon } from 'lucide-react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-6 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <Link href="/" legacyBehavior>
          <a className="text-3xl font-bold">YK</a>
        </Link>
      </aside>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 list-none">
          <li>
            <Link href="/services" legacyBehavior>
              <a className="hover:text-gray-300 transition-colors">Services</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing" legacyBehavior>
              <a className="hover:text-gray-300 transition-colors">Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="hover:text-gray-300 transition-colors">About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <MenuIcon className="md:hidden cursor-pointer" />
      </aside>
    </header>
  );
};

export default Navbar;