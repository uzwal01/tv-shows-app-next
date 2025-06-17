"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, []);

  return (
    <section className="w-full bg-[var(--color-header-footer)] py-3">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Row 1: Menu + Logo + Login */}
        <div className="flex justify-between items-center sm:grid sm:grid-cols-3 sm:items-center sm:gap-4">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-3 sm:justify-start">
            <div className="relative inline-block" ref={menuRef}>
              <HiBars3BottomLeft
                className="text-[var(--color-muted)] hover:text-[var(--color-secondary)] transition text-2xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
              <div
                className={`absolute w-[140px] bg-[var(--color-secondary)] rounded-lg shadow-lg px-4 text-left z-20 font-semibold text-[var(--color-primary)] transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "max-h-[500px] py-4 opacity-100"
                    : "max-h-0 py-0 opacity-0"
                }`}
              >
                {["Home", "About", "Movies", "TV Shows", "Favorites"].map(
                  (item, i) => (
                    <Link href={`/${item.toLowerCase().replace(" ", "")}`} key={i}>
                      <h4 className="py-1 hover:text-[var(--color-yellow)]">
                        {item}
                      </h4>
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Logo (only on sm and up inline with menu) */}
            <div className="hidden sm:block">
              <Link href="/">
                <Image
                  src="/iFlix.png"
                  width={100}
                  height={60}
                  alt="iFlix logo"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Mobile Center: Logo */}
          <div className="block sm:hidden absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image
                src="/iFlix.png"
                width={110}
                height={60}
                alt="iFlix logo"
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Center on Desktop: Search Bar */}
          <div className="hidden sm:flex justify-center items-center">
            <form
              onSubmit={handleSearch}
              className="w-full max-w-md flex gap-3 items-center"
            >
              <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-md text-[var(--color-text)] bg-[var(--color-card)] focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]"
              />
              <IoMdSearch
                className="text-[var(--color-secondary)] text-2xl hover:text-[var(--color-muted)] transition cursor-pointer"
                onClick={handleSearch}
              />
            </form>
          </div>

          {/* Right: Login */}
          <div className="flex justify-end">
            <div className="border-2 px-6 py-2 rounded-xl text-[var(--color-muted)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition cursor-pointer">
              Login
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 sm:hidden">
          <form
            onSubmit={handleSearch}
            className="w-full flex gap-3 items-center"
          >
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-md text-[var(--color-text)] bg-[var(--color-card)] focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]"
            />
            <IoMdSearch
              className="text-[var(--color-secondary)] text-2xl hover:text-[var(--color-muted)] transition cursor-pointer"
              onClick={handleSearch}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Header;
