import { useState, FC } from 'react'
import { UserDisplay } from '@/entities/user/ui/UserDisplay'
import { UserEdit } from '@/entities/user/ui/UserEdit'
import { useApi } from '@/shared/api'
import { useQuery } from 'react-query'
import { User } from '@/entities/user/model/types/user.ts'

export const UserProfile: FC = () => {
  const [isEditing, setIsEditing] = useState(false)

  const { $get } = useApi()

  const { data: user, isSuccess } = useQuery({
    queryKey: ['user'],
    queryFn: () => $get<User>('/user'),
  })

  return (
    <>
      {!isEditing
        ? isSuccess && <UserEdit user={user} />
        : isSuccess && (
            <UserDisplay onEdit={() => setIsEditing(true)} user={user} />
          )}
    </>
  )
}
