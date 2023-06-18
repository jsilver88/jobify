import { Landing, Register, Error } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  Addjob,
  Alljobs,
  Profile,
  Stats,
  SharedLayout,
} from './pages/dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Stats />,
      },
      {
        path: 'all-jobs',
        element: <Alljobs />,
      },
      {
        path: 'add-job',
        element: <Addjob />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '*',
    element: <Error />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
