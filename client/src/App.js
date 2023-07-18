import { Landing, Home, Detail, Form} from './views'
import NavBar from './components/NavBar/navBar.jsx'
import { Route, useLocation } from 'react-router-dom'
import './App.css';


function App() {
  const location = useLocation();

  return (
    <div className="App">
      { location.pathname !== '/' && <NavBar /> }
      <Route exact path='/' component={Landing} /> 
      <Route exact path='/home' component={Home} />
      <Route path='/detail'  component={Detail} /> 
      <Route path='/create'  component={Form} /> 

    </div>
  );
}

export default App;
