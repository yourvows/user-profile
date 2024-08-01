import { useState, FC } from 'react'
import { UserDisplay } from '@/entities/user/ui/UserDisplay'
import { UserEdit } from '@/entities/user/ui/UserEdit'
import { useApi } from '@/shared/api'
import { useQuery } from 'react-query'
import { User } from '@/entities/user/model/types/user.ts'

export const UserProfile: FC = () => {
  const [isEditing, setIsEditing] = useState(false)
  const { $get, $put } = useApi()
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => $get<User>('/user'),
  })

  async function save(params: User) {
    await $put('/user', { params })
    setIsEditing(false)
  }

  return (
    <>
      {isEditing
        ? user && <UserEdit user={user} onSave={save} />
        : user && <UserDisplay onEdit={() => setIsEditing(true)} user={user} />}
    </>
  )
}
