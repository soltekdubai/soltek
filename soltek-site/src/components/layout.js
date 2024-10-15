import React from 'react';
const Layout = ({ children }) => (
  <div>
    <header className="text-3xl text-center">SolTek</header>
    <main>{children}</main>
    <footer className="text-center">© 2024 SolTek, All Rights Reserved</footer>
  </div>
);
export default Layout;
