import { FC, ReactNode } from 'react'
import { QueryClientProvider as ReactQueryClientProvider } from 'react-query'
import { queryClient } from '@/shared/config/reactQueryConfig'
interface Props {
  children: ReactNode
}
const QueryClientProvider: FC<Props> = ({ children }) => (
  <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>
)

export default QueryClientProvider
