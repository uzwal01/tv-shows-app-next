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

  // Close Menu onclick, anywhere on window
  const menuRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

  //Close menu on scroll or click on the window screen
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
    <>
      <section className="py-5 w-full bg-[var(--color-header-footer)]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 text-center gap-2 md:grid-flow-col">
          <div className="flex gap-4 items-center">
            {/* Menu  */}
            <div className="relative inline-block " ref={menuRef}>
              <HiBars3BottomLeft
                className="text-[var(--color-muted)] hover:text-[var(--color-secondary)] transition text-2xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
              {/* toggle menu */}
              <div
                className={`absolute w-[120px] bg-[var(--color-secondary)] rounded-lg shadow-lg px-5 text-left z-10 font-semibold text-[var(--color-primary)] transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "max-h-[500px] py-5 opacity-100"
                    : "max-h-0 py-0 opacity-0"
                }`}
              >
                <Link href="/">
                  <h4 className="py-1 hover:text-[var(--color-yellow)]">
                    Home
                  </h4>
                </Link>
                <Link href="/about">
                  <h4 className="py-1 hover:text-[var(--color-yellow)]">
                    About
                  </h4>
                </Link>
                <Link href="/movies">
                  <h4 className="py-1 hover:text-[var(--color-yellow)]">
                    Movies
                  </h4>
                </Link>
                <Link href="/tvshows">
                  <h4 className="py-1 hover:text-[var(--color-yellow)]">
                    TV Shows
                  </h4>
                </Link>
                <Link href="/favorites">
                  <h4 className="py-1 hover:text-[var(--color-yellow)]">
                    Favorites
                  </h4>
                </Link>
              </div>
            </div>
            <Link href="/">
              <Image
                src="/iFlix.png"
                width={130}
                height={100}
                alt="iFlix logo"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSearch}
              className="w-full max-w-sm flex gap-4 items-center mx-auto"
            >
              <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-md text-[var(--color-text)] focus:outline-none focus:ring-1 focus:ring- opacity-80"
              />
              <IoMdSearch
                className="text-[var(--color-secondary)] text-2xl hover:text-[var(--color-muted)] transition cursor-pointer"
                onClick={handleSearch}
              />
            </form>
          </div>
          <div className="flex justify-end items-center">
            <div className="border-2 px-8 py-2 rounded-xl text-[var(--color-muted)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition cursor-pointer md:">
              Login
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
