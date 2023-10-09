"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  return (
    <nav className="flex flex-between flex-row gap-2 w-full py-2 text-gray-200 bg-black px-4 z-50">
      <Link href='/' className="flex flex-center w-fit">Home</Link>
      <Link href='/contact' className="flex flex-center w-fit">Contact</Link>
    </nav>
  );
}

export default Nav;
