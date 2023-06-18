import { Link, Navigate, Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { useAppContext } from '../../context/appContext'
import { Navbar, SmallSidebar, BigSidebar } from '../../components'

const SharedLayout = () => {
  const { user } = useAppContext()

  if (!user) {
    return <Navigate to='/landing' />
  }

  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}
export default SharedLayout
