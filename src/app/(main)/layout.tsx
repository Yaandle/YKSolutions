import React from 'react';
import Navbar from '@/components/global/navbar';

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow overflow-y-auto">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
