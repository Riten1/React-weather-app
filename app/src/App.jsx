
import './App.css'
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Search from './components/search/Search'

function App() {
const handleOnSearchChange = (searchData) => {
  console.log(searchData);
}
  return (
    <div className='max-w-5xl mt-5 mb-5 ml-auto mr-auto'>
     <Search onSearchChange={handleOnSearchChange}/>
       <CurrentWeather />
    </div>
  )
}

export default App
