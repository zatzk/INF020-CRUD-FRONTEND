'use client';
import TeachersList from '@/components/TeachersList'
import UsersList from '@/components/UsersList'
import { useAppContext } from '../contexts/context';
export default function Home() {
  const { showUsersList } = useAppContext();

  return (
    <>
      {showUsersList && (
        <div>
          <UsersList />
        </div>
      )}
      {!showUsersList && (
        <div>
          <TeachersList />
        </div>
      )}
    </>
  )
}
