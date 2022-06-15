import React from 'react';
import Link from 'next/link';

const Header = () => (
  <div className="h-20 ">
    <nav className="container flex h-full items-center justify-between text-gray-700">
      <Link href="/">
        <a>
          <img src="ATAP_logo-sm.png" className="h-16" />
        </a>
      </Link>
      {/* Right Menu */}
      <ul className="flex divide-x divide-slate-400 text-sm">
        {links.map(({name, link}) => (
          <li className="cursor-pointer px-4 font-semibold first:pl-0 hover:underline">
            <Link key={name} href={link}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Blog',
    link: '/posts',
  },
  {
    name: 'Text Analysis',
    link: '/text-analysis',
  },
  {
    name: 'Events',
    link: '/events',
  },
  {
    name: 'Resources',
    link: '/resources',
  },
  {
    name: 'Organisation',
    link: '/organisation',
  },
];

export default Header;
