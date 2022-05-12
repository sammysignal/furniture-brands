import westelm from './assets/logos/west-elm.png';
import rh from './assets/logos/rh.png';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Icon from './components/Icon'

function App() {
  function handlePurchade(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/api').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, []);

  const logoData = [
    {
      name: "West Elm",
      icon: westelm,
    },
    {
      name: "Restoration Hardware",
      icon: rh,
    }
  ];

  return (
    <div className="App">
      <div>
        {logoData.map(logo =>
          <Icon key={logo.name} name={logo.name} icon={logo.icon}></Icon>
        )}
      </div>
      <button onClick={handlePurchade} type="button">Purchase</button>
    </div>
  );
}

export default App;