import { FC } from 'react'
import { UserProfile } from '@/features/UserProfile/ui/UserProfile'
import { useUserQuery } from '@/shared/api'

const App: FC = () => {
  const { data: user, isLoading, isSuccess } = useUserQuery()
  return (
    <div className="container flex justify-center items-center h-screen">
      {isLoading && (
        <div className="animate-spin border-4 size-10 rounded-full border-dotted border-black"></div>
      )}
      {isSuccess && <UserProfile user={user} />}
    </div>
  )
}

export default App
