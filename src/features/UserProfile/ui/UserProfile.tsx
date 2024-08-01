import { useState, FC } from 'react'
import { UserDisplay } from '@/entities/user/ui/UserDisplay'
import { UserEdit } from '@/entities/user/ui/UserEdit'
import { User } from '@/entities/user/model/types/user.ts'

interface Props {
  user: User
}
export const UserProfile: FC<Props> = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      {isEditing ? (
        <UserEdit closeEdit={() => setIsEditing(false)} user={user} />
      ) : (
        <UserDisplay onEdit={() => setIsEditing(true)} user={user} />
      )}
    </>
  )
}
