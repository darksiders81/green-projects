import './assets/bootstrap.min.css'
import './App.css';
<<<<<<< HEAD
import './style.css'
=======

>>>>>>> darkMode


import { useRoutes } from 'react-router-dom';
import allRoutes from './router';
import NavBars from './Component/Header/NavBar/NavBars';

function App() {

  let Router = useRoutes(allRoutes)
  
  return (
    <>
      <div className="App" >
        <NavBars />
      </div>
      {Router}

    </>
  );
}

export default App;
