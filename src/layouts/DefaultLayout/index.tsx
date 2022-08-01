import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContaier } from './styles'

export const DefaultLayout = () => {
  return (
    <LayoutContaier>
      <Header />
      <Outlet />
    </LayoutContaier>
  )
}
