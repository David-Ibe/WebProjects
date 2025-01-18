import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { NetworkStatus } from '@/components/common/NetworkStatus'
import { router } from '@/routes';

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <RouterProvider router={router} />
        <Toaster />
        <NetworkStatus />
      </Suspense>
    </ErrorBoundary>
  )
}
