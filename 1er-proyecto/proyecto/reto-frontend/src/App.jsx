import Header from './componentes/Header.jsx'
import MainArticle from './componentes/MainArticle.jsx'
import NewContainer from './componentes/NewContainer.jsx'

function App() {

  return (
    <main className='px-4 pt-6'>
      <Header></Header>
      <div className='sm:flex sm:gap-8'>
        <MainArticle></MainArticle>
        <NewContainer></NewContainer>
      </div>
      
    </main>
  )
}

export default App
