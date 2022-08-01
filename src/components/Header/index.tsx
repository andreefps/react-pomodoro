import { HeaderContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'
import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" title="timer" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
