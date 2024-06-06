import url1 from '../assets/images/image-retro-pcs.jpg'
import url2 from '../assets/images/image-top-laptops.jpg'
import url3 from '../assets/images/image-gaming-growth.jpg'

import Article from "./Article.jsx"

const ArticlesContainer = () => {
  return (
    <section className="sm:flex my-5 gap-x-6">
      <Article 
        urlImagen={url1}
        numero="01"
        titulo="Reviving Retro PCs"
        descripcion="What happens when old PCs are given modern upgrades?">
      </Article>
      <Article
        urlImagen={url2}
        numero="02"
        titulo="Top 10 Laptops of 2022"
        descripcion="Our best picks for various needs and budgets."
        >
      </Article>
      <Article
        urlImagen={url3}
        numero="03"
        titulo="The Growth of Gaming"
        descripcion="How the pandemic has sparked fresh opportunities."
        >
      </Article>
    </section>
  )
}

export default ArticlesContainer