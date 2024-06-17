import Link from 'next/link';
import React from 'react';
import { MenuIcon } from 'lucide-react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">YK</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#" legacyBehavior>
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="pricing" legacyBehavior>
              <a>Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="#" legacyBehavior>
              <a>Resources</a>
            </Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
