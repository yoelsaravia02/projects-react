import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

const MainArticle = () => {
  return (
    <section className=''>
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile}></source>
        <source media="(min-width: 641px)" srcSet={imageDesktop}></source>
        <img src={imageMobile} alt="Articulo principal imagen" />
      </picture>
      <div className='sm:flex sm:gap-x-6'>

        <div className='flex-1 py-6'>
          <h2 className='text-[40px] font-bold sm:text-[58px] sm:text-VeryDarkBlue leading-none'>The Bright Future of Web 3.0?</h2> 
        </div>

        <div className='flex-1 py-9 '>
          <p className='text-[13px] mb-10 sm:text-[15px]'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?</p>
          <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-Off-white hover:bg-VeryDarkBlue'>READ MORE</button>
        </div>

      </div>
      
    </section>
  )
}

export default MainArticle
