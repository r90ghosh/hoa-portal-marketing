import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-20 px-4"> {/* Pushes content below sticky header */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
