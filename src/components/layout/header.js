"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <section className="py-5 px-4">
        <div className="grid grid-cols-3 text-center gap-2 md:grid-flow-col">
          <div className="flex gap-4 items-center">
            <HiBars3BottomLeft className="text-[var(--color-muted)] hover:text-[var(--color-secondary)] transition text-2xl cursor-pointer" />
            <Image
              src="/iFlix.png"
              width={130}
              height={100}
              alt="iFlix logo"
              className="cursor-pointer"
            />
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
            <div className="border-2 px-8 py-2 rounded-xl text-[var(--color-muted)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition cursor-pointer md:">Login</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
