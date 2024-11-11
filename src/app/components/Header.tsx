"use client";

import Link from "next/link";
import { useState } from "react";



const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>N.</h1>
          <p>Muhammad Nouman</p>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
        menuOpen ? 
        </div>
        <ul className={`navItems ${menuOpen ? "active" : ""}`}>
          {navItems.map((nav) => (
            <Link href={nav.href} className="nav" key={nav.name}>
              {nav.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
