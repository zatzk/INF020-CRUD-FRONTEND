import { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  const handleRemove = (teacherId) => {
    // Assuming you have a function to handle removal and update state locally
    // You can implement similar logic for editing or other operations
    removeTeacherLocally(teacherId);
  };

  const removeTeacherLocally = (teacherId) => {
    setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.id !== teacherId));
  };

  return (
    <>
      {teachers.map((teacher) => (
        <div key={teacher.id} className="p-4 border items-center gap-5 border-slate-300 my-3 flex justify-between">
          <div>
            <h2 className="font-bold text-2xl">{teacher.id}</h2>
            <div>{teacher.name}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={teacher.id} onRemove={() => handleRemove(teacher.id)} />
            <Link href={`/editTopic/${teacher.id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
