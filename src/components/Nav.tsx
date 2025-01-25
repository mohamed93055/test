"use client";
import { header } from "@/data/header";
import Link from "next/link";
import { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import Icons from "./Icons";
export default function Nav() {
  const [navList, setNavList] = useState(header);
  return (
    <nav>
      <ul className="w-fit">
        {navList.map((nav) => (
          <li
            key={nav.id}
            className={`group h-9 flex justify-center items-center p-2 rounded-full cursor-pointer border border-transparent hover:${"bg-blue-600 text-gray-100"} ${
              nav.active
                ? "bg-blue-600 text-gray-100 "
                : "bg-gray-200 text-gray-700"
            } w-fit mb-2 hover:bg-blue-600 hover:text-gray-100`}
          >
            <Link href={""} className="flex gap-2 items-center">
              <Icons title={nav.name} active={nav.active} />
              <span className={`hidden group-hover:inline pr-3`}>
                {nav.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
