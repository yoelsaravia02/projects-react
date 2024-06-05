import burguerMenu from '../assets/images/icon-menu.svg'

const NavBar = () => {
  return (
    <>
      <ul className=" hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li><a href="#"></a>Home</li>
        <li><a href="#"></a>News</li>
        <li><a href="#"></a>Popular</li>
        <li><a href="#"></a>Trending</li>
        <li><a href="#"></a>Categories</li>
       </ul>
       <img src={burguerMenu} alt="IconoMenu" className='w-10 h-6 cursor-pointer sm:hidden'/>
    </>
  )
}

export default NavBar

