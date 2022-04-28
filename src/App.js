import logo from './logo.svg';
import Spinner from './components/loading-spinner/Spinner';
import RandomImages from './components/random-images/RandomImages';
import Header from './components/header/Header';

import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Header /> 
      <RandomImages/>
   </div>
  );
}

export default App;
