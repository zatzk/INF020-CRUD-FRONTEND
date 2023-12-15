'use client'
import { useState } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi"
import { useEffect } from "react";

export default function TeacherList() {
  useEffect(() => {
    fetch("http://localhost:5000/api/teachers")
    .then((res) => res.json())
    .then((data) => setTeachers(data))
  }, [])

  const [teachers, setTeachers] = useState([])

  return (
    <>
      {teachers.map((teacher) => (
        <div key={teacher.id} className="p-4 border items-center gap-5 border-slate-300 my-3 flex justify-between">
          <div>
            <h2 className="font-bold text-2xl">{teacher.id}</h2>
            <div>{teacher.name}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/editTopic/${teacher.id}`}>
              <HiPencilAlt size={24}/>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}