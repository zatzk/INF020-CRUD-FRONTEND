import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi"
export default function TeachersList() {
  return (
    <>
      <div className="p-4 border items-center gap-5 border-slate-300 my-3 flex justify-between">
        <div>
          <h2 className="font-bold text-2xl">111</h2>
          <div>Name</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn />
          <Link href="/editTopic/111">
            <HiPencilAlt size={24}/>
          </Link>
        </div>
      </div>
    </>
  )
}