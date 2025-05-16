"use client";

import { Sheet, SheetContent, SheetTrigger } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "HOME", path: "/" },
    { name: "PROJECTS", path: "/projects" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

const MobileNav = () => {
  return (
    <nav>
      mobile nav
    </nav>
  )
}

export default MobileNav
