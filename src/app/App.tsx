import { FC } from 'react'
import { UserProfile } from '@/features/UserProfile/ui/UserProfile'
import { useUserQuery } from '@/shared/api'
import { Spinner } from '@/shared/ui'

const App: FC = () => {
  const { data: user, isLoading, isSuccess } = useUserQuery()
  return (
    <div className="container grid h-screen place-items-center">
      {isLoading && <Spinner />}
      {isSuccess && <UserProfile user={user} />}
    </div>
  )
}

export default App
