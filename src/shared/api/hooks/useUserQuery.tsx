import { useQuery } from 'react-query'
import { useApi } from '@/shared/api'
import { User } from '@/entities/user/model/types/user.ts'

export const useUserQuery = () => {
  const { $get } = useApi()

  return useQuery({
    queryKey: ['user'],
    queryFn: () =>
      $get<User>('/api/user', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }),
    staleTime: Infinity,
  })
}
