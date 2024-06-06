import NewArticle from "./NewArticle"

const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-Off-white pt-[28px] px-[20px]">
      <h1 className="text-SoftOrange text-4xl font-bold pb-[28px]">New</h1>

      <NewArticle 
        titulo="Hydrogen VS Electric Cars" 
        texto="Will hydrogen-fueled cars ever catch up to EVs?">
      </NewArticle>

      <NewArticle 
        titulo="The Downsides of AI Artistry" 
        texto="What are the possible adverse effects of on-demand AI image generation?">
      </NewArticle>

      <NewArticle 
        titulo="Is VC Funding Drying Up?" 
        texto="Private funding by VC firms is down 50% YOY. We take a look at what that means.">
      </NewArticle>

    </aside>
  )
}

export default NewContainer
