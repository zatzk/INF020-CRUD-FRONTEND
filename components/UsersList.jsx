'use client'
import { useState } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi"
import { useEffect } from "react";

export default function UsersList() {
  useEffect(() => {
    fetch("http://localhost:5000/api/users/")
    .then((res) => res.json())
    .then((data) => setUsers(data))
  }, [])

  const [users, setUsers] = useState([])

  const handleRemove = (userId) => {
    // Assuming you have a function to handle removal and update state locally
    // You can implement similar logic for editing or other operations
    removeUserLocally(userId);
  };

  const removeUserLocally = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="p-4 border items-center gap-5 border-slate-300 my-3 flex justify-between">
          <div>
            <h2 className="font-bold text-2xl">{user.id}</h2>
            <div>{user.name}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={user.id} onRemove={() => handleRemove(user.id)}/>
            <Link href={`/editTopic/${user.id}`}>
              <HiPencilAlt size={24}/>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}