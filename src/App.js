import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <>
      <div style={{border: '1px solid white',margin: 'auto',marginTop: '50px'}}>
      <div style={{background: 'black',height: '70px',display: 'flex',justifyContent: 'left',alignItems: 'center',paddingLeft: '10px'}}>
      <a href='#' ><img src={logo} width="80px" alt="React logo"/></a>
      <h1 style={{color:'white',fontFamily:'Verdana'}}>Welcome</h1>
      </div>
        
        <div className="App" style={{ justifyContent: 'center' ,paddingLeft:'10px'}}>
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
        </div>
      </>
    </main>
  );
}

export default App;
