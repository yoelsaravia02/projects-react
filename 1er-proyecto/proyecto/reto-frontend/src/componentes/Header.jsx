import logo from '../assets/images/logo.svg'
import NavBar from './NavBar'

function Header() {
  return (
    <header className=' flex place-content-between items-center mb-6'>
      <img src={logo} alt="Logo" />
      <NavBar></NavBar>
    </header>
  )
}

export default Header
