import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Protected from './components/protected'
import Test from './pages/test'
import useOnline from './hooks/use-online'
import Offline from './components/offline'
import Testing2 from './pages/testing2'
import AlertDialog from './components/alert-dialog'
import Auth from './pages/auth/auth'
import PageNotFound from './pages/page-not-found'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Landing page</div>,
  },
  {
    path: '/auth/:authType?',
    element: <Auth />,
  },
  {
    path: '/test',
    element: (
      <Protected>
        <Test />
      </Protected>
    ),
  },
  {
    path: '/alert',
    element: <Testing2 />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

const App = () => {
  const online = useOnline()
  return (
    <>
      <RouterProvider router={router} />

      {/* All other stuff */}
      {!online && <Offline />}
      <AlertDialog />
    </>
  )
}

export default App