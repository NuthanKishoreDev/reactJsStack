import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';
import placesData from './components/placesData';

// passed the places array to the App component with sorted order by country name
const App = () => {
  return (
    <div className="App">
      <Header />
      {placesData
        .sort((a, b) => a.country.localeCompare(b.country)) // Sorting by name
        .map((place) => (
          <Entry key={place.country} {...place} /> 
          
        ))}
    </div>
  );
};
export default App;
