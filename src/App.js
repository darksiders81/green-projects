import './assets/bootstrap.min.css'
import './App.css';


import { useRoutes, useLocation } from 'react-router-dom';
import allRoutes from './router';
import NavBars from './Component/Header/NavBar/NavBars';
import { useEffect, useState } from 'react';

function App() {
  let location = useLocation();
  const [ulrPath, setUrlPath] = useState(location.pathname)
  useEffect(() => {
    setUrlPath(location.pathname)

  }, [location]);
  let Router = useRoutes(allRoutes)

  return (
    <>
      <div className={ulrPath === "/notfound" || ulrPath === "/loginpage" || ulrPath === "/rigester" ? "d-none" : "App"}>
        <NavBars />
      </div>
      {Router}

    </>
  );
}

export default App;
// 