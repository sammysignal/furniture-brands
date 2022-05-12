import westelm from './assets/logos/west-elm.png';
import rh from './assets/logos/rh.png';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Icon from './components/Icon'

function App() {
  function handlePurchase(e) {
    e.preventDefault();

    console.log('You clicked submit.');

    axios.post('http://localhost:5000/api', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const [getSelectedBrands, setSelectedBrands] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/api').then(response => {
      console.log("SUCCESS", response)
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
          <Icon key={logo.name} name={logo.name} icon={logo.icon} selected={true}></Icon>
        )}
      </div>
      <button onClick={handlePurchase} type="button">Purchase</button>
    </div>
  );
}

export default App;