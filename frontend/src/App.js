import westelm from "./assets/logos/west-elm.png";
import rh from "./assets/logos/rh.png";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Icon from "./components/Icon";
import PurchaseTable from "./components/PurchaseTable";

function App() {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [purchases, setPurchases] = useState([]);

  const [refreshKey, setRefreshKey] = useState(0);


  function handlePurchase(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api", {
        brands: selectedBrands,
      })
      .then(function (response) {
        console.log(response);
        setRefreshKey(refreshKey+1);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  function toggleSelectBrand(brand) {
    if (selectedBrands.includes(brand)) {
      // remove the brand by filtering
      setSelectedBrands(selectedBrands.filter((x) => x !== brand));
    } else {
      // add the brand
      setSelectedBrands([...selectedBrands, brand]);
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api")
      .then((response) => {
        console.log("SUCCESS", response);
        setPurchases(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshKey]);

  const logoData = [
    {
      name: "West Elm",
      icon: westelm,
    },
    {
      name: "Restoration Hardware",
      icon: rh,
    },
  ];

  return (
    <div className='App'>
      <div>
        {logoData.map((logo) => (
          <Icon
            key={logo.name}
            name={logo.name}
            icon={logo.icon}
            selected={selectedBrands.includes(logo.name)}
            toggleSelectBrand={toggleSelectBrand}
          ></Icon>
        ))}
      </div>
      <button onClick={handlePurchase} type='button'>
        Purchase
      </button>
      <PurchaseTable purchases={purchases}></PurchaseTable>
    </div>
  );
}

export default App;
