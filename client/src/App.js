import { Landing, Home, Detail, Form} from './views'
import './App.css';


import { Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing} /> 
      <Route exact path='/home' component={Home} />
      <Route path='/detail'  component={Detail} /> 
      <Route path='/create'  component={Form} /> 

    </div>
  );
}

export default App;
