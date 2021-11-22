import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Country from "./components/Country";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {
  const [country, setCountry] = useState(null);
  const [covid, setCovid] = useState(null);

  const navigate = useNavigate();



  const getCountry = async (countryName) => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );
    const result = await response.json();

    if (result.status !== 404) {
      setCountry(result);
    } else {
      navigate("*");
    }
    console.log(result);
  };

    
  const getCovid = async (countryName) => {
    // const response = await fetch("https://api.covid19api.com/summary");
    const response = await fetch(
      `https://api.covid19api.com/total/country/${countryName}`
    );
    const result = await response.json();


  if (result.message !== "Not Found") {
      setCovid(result);
    }  else {
      navigate("*");
    }
 

  /*   console.log(result);
    setCovid(result); */
  };

  /* const searchNewCountry = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() !== "") {
      getCountry(inputRef.current.value);
    }
  }; */
  console.log(country);
console.log(covid)

  useEffect(() => {
    getCountry("malta");
    getCovid("malta");
    /* // eslint-disable-next-line */
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main">
        {/*   <form onSubmit={searchNewCountry}>
          <input ref={inputRef} type="text" name="country" id="" />
          <input type="submit" value="Search" />
        </form> */}

        <Routes>
          <Route
            path="/"
            element={
              country && <Country classname="country" country={country} getCountry={getCountry} getCovid={getCovid} covid={covid}/>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/*   {country && <Country country={country} />}   */}
      </div>
    </div>
  );
}

export default App;
