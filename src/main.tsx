import { createRoot } from 'react-dom/client'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'
import App from './app/App.tsx'

const queryClient = new QueryClient()

async function enableMocking() {
  const { worker } = await import('@/shared/api/mock/browser.ts')

  return worker.start()
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
  )
})
