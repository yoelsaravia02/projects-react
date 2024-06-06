import PropTypes from 'prop-types';

const Article = ({urlImagen, numero, titulo, descripcion}) => {
  return (
    <article className='flex h-[162px]'>
        <div className='w-[100px] flex-none'>
            <img src={urlImagen} alt="Imagen del articulo"></img>
        </div>
        <div className='pl-6 '>
            <p className='text-SoftRed  text-3xl mb-[18px] font-bold'>{numero}</p>
            <h2 className='font-bold mb-[18px] hover:text-SoftRed cursor-pointer '>{titulo}</h2>
            <p className='text-DarkgrayishBlue'>{descripcion}</p>
        </div>
    </article>
  )
}
Article.propTypes = {
    urlImagen: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired
};


export default Article

