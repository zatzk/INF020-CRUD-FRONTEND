"use client";
import Link from "next/link"
import {NextUIProvider} from "@nextui-org/react";
import {Switch} from "@nextui-org/react";
import { useAppContext } from '../contexts/context';

export default function Navbar() {
  const { showUsersList, toggleUsersList } = useAppContext();

  const title = showUsersList  ? 'Users' : 'Teachers';

  return (
    <NextUIProvider>
      <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
        <Link className="text-2xl font-bold text-white" href="/">
          Home
        </Link>
        <div className="flex items-center">
          <div className="flex gap-2">
            <h2 className="text-1xl font-bold text-white">
              {title}
            </h2>
            <Switch defaultSelected size="sm" onChange={toggleUsersList} />
          </div>

          <Link className="ml-4 bg-white p-2 border rounded-sm" href="/addTopic">
            Add
          </Link>
        </div>
      </nav>
    </NextUIProvider>
  )
}