
import PropTypes from 'prop-types';

function NewArticle({titulo, texto}) {
  return (
    <article className="lg:h-[170px] h-[140px] border-b-2 border-GrayishBlue pt-5 last:border-none lg:py-4">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-2 lg:text-[16px] font-bold xl:text-[20px]">{titulo}</h2>
        <p className="text-[15px]">{texto}</p>
    </article>
  )
}

NewArticle.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired
};

export default NewArticle
