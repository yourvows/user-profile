import { FC } from 'react'
import { Wrapper } from '@/features/UserProfile/ui'
import { User } from '@/entities/user/model/types/user.ts'
import { Button } from '@/shared/ui'

interface Props {
  user: User
  onEdit: () => void
}

export const UserDisplay: FC<Props> = ({ user, onEdit }) => {
  function getUserName(name: string) {
    if (!name) return ''
    const nameArray = name.split(' ')
    return nameArray[0][0] + nameArray[1][0]
  }

  return (
    <Wrapper>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-4">
          {user?.profilePicture ? (
            <img
              className="relative flex shrink-0 overflow-hidden rounded-full"
              src={user?.profilePicture}
              width={64}
              height={64}
              alt="Profile Picture"
            />
          ) : (
            <span className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-gray-200">
                {getUserName(user?.name)}
              </span>
            </span>
          )}
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-gray-500">{user?.bio}</p>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-full shrink-0 bg-gray-500/20"
          />
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="text-muted-foreground grid gap-1">
              <div>
                <span className="font-medium">Email:</span>{' '}
                <a href={`mailto:${user?.email}`}>{user?.email}</a>
              </div>
            </div>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="h-[1px] w-full shrink-0 bg-gray-500/20"
          />
          <div className="flex justify-end">
            <Button onClick={onEdit}>Edit</Button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
