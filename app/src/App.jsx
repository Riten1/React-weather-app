
import './App.css'
import Search from './components/search/Search'

function App() {
const handleOnSearchChange = (searchData) => {
  console.log(searchData);
}
  return (
    <div className='max-w-5xl mt-5 mb-5 ml-auto mr-auto'>
     <Search onSearchChange={handleOnSearchChange}/>
       
    </div>
  )
}

export default App
