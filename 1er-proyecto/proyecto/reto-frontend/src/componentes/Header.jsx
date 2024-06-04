import logo from '../assets/images/logo.svg'
import NavBar from './NavBar'

function Header() {
  return (
    <header className='bg-red-200 flex place-content-between items-center'>
      <img src={logo} alt="Logo" />
      <NavBar></NavBar>
    </header>
  )
}

export default Header
