'use client'
import { useState } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi"
import { useEffect } from "react";

export default function UsersList() {
  useEffect(() => {
    fetch("https://72fe1aeb-a9af-4e6c-8b25-2efe3b6cecd2.mock.pstmn.io/users")
    .then((res) => res.json())
    .then((data) => setUsers(data))
  }, [])

  const [users, setUsers] = useState([])

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="p-4 border items-center gap-5 border-slate-300 my-3 flex justify-between">
          <div>
            <h2 className="font-bold text-2xl">{user.id}</h2>
            <div>{user.name}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/editTopic/${user.id}`}>
              <HiPencilAlt size={24}/>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}