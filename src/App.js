import wall from './asets/wall.jpg'
import blue2 from './asets/blue2.jpg'
import Description from './components/Description'
import './App.css'

const App = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${wall})` }}>
      <div className='container'>
        <div className="grid grid1">
          <div className='input-field'>
            <div className='search'>
              <input type='text' name='city' placeholder='Enter city...' />
              <button type='submit'>Search</button>
            </div>
            <button type='submit'>°F</button>
          </div>
        </div>
        <div className="grid grid2">
          <div className='temprature_section'>
            <h2>Bareilly</h2>
            <div className='img'>
              <img src='https://openweathermap.org/img/wn/02d@2x.png' alt='CloudyWeather' />
            </div>
            <h3>Cloudy</h3>
          </div>
          <div className='temprature'>
            <h1>34°C</h1>
          </div>
        
        </div>
        <div className="grid grid3">
        <Description/>
        </div>

      </div>
    </div>
  )
}

export default App