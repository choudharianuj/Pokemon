import './App.css'
import PokemonSearch from './PokemonSearch'
import PokemonTypeFetcher from './TypeSelector';
// import PokemonCardsContainer from './PokemonCardsContainer';

function App() {

  return (
    <div className='page-container'>
        <PokemonSearch/>
        <PokemonTypeFetcher />
    </div>
  )
} 

export default App
