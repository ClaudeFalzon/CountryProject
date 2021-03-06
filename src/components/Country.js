import React, { useRef } from "react";

export default function Country(props) {
  const inputRef = useRef();
  /* console.log(inputRef); */
  /* console.log(inputRef.current.value); */

  const searchNewCountry = (e) => {
    e.preventDefault();

    if (inputRef.current.value.trim() !== "") {
      props.getCountry(inputRef.current.value);
      if (inputRef.current.value.toLowerCase() !== "north korea") {
        props.getCovid(inputRef.current.value);
      } else {
        console.log("eat");
        props.setCovid(null);
      }
    }
    inputRef.current.value = "";
  };

  /* const country1 = props.country.find((item) => {
  return item.
});

console.log(country1) */

  console.log(props.country);
  const country = props.country[0];
  console.log(country);
  /* console.log(props.country[1].name.common) */

  /*   const country = props.country[0]; */
  const countryName = country.name.common ? country.name.common : country.name;

  let capital;
  if (country.name.common) {
    capital = country.capital[0];
  } else {
    capital = country.hasOwnProperty("capital") ? country.capital : "None";
  }
  const population = country.population;
  const region = country.region;
  const subregion = country.subregion;
  const area = country.area;

  let languages;

  if (country.name.common) {
    languages = [country.languages.kor];
  } else {
    languages = country.languages.map((currentValue) => {
      return currentValue.name;
    });
  }

  let languagesTitle;

  if (country.name.common) {
    languagesTitle = "Language:";
  } else {
    languagesTitle = languages.length > 1 ? "Languages:" : "Language:";
  }

  const neighbours = country.hasOwnProperty("borders")
    ? country.borders.map((currentValue) => {
        return currentValue;
      })
    : ["None"];

  console.log(neighbours);

  let neighboursTitle =
    // eslint-disable-next-line
    neighbours.length > 1 || neighbours == "None"
      ? "Neighbours:"
      : "Neighbour:";

  const flag = country.flags.png;
  /*   const name = country.name.common; */
  /* console.log(name); */

  const currency = Object.values(country.currencies)[0].name;
  const currencySymbol = Object.values(country.currencies)[0].symbol;

  /*  console.log(props.covid); */
  /*   console.log(neighbours);

  console.log(props.country[0].capital[0]);

  console.log(Object.values(country.currencies)[0].name); */

  const lastCovidElement = props.covid
    ? props.covid[props.covid.length - 1]
    : null;
  /*  console.log(lastCovidElement)  */

  return (
    <>
      <form onSubmit={searchNewCountry}>
        <input ref={inputRef} type="text" name="country" id="" />
        <input type="submit" value="Search" />
      </form>

      <div className="card">
        <div className="flag">
          <h2>{countryName}</h2>
          <img
            src={flag}
            alt=""
            /* width="220px"
            height="150px" */
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="further_info">
          <p>
            <span className="keys">Capital:</span> &nbsp;
            {capital}
          </p>
          <p>
            <span className="keys">Population:</span> &nbsp;{population}
          </p>
          <p>
            <span className="keys">Region:</span> &nbsp;{region}
          </p>
          <p>
            <span className="keys">Sub-Region:</span> &nbsp;{subregion}
          </p>
          <p>
            <span className="keys">Area: </span> &nbsp;{area} km<sup>2</sup>
          </p>
          <p>
            <span className="keys"> {languagesTitle}</span> &nbsp;{" "}
            {languages.join(", ")}
          </p>
          <p>
            <span className="keys">{neighboursTitle}</span> &nbsp;
            {neighbours.join(", ")}
          </p>
          <p>
            <span className="keys">Currency: </span> &nbsp;{" "}
            {`${currency} - ${currencySymbol}`}
          </p>
          {lastCovidElement && (
            <>
              <p>
                <span className="keys">Confirmed Covid-19 Cases:</span> &nbsp;
                {lastCovidElement.Confirmed}
              </p>
              <p>
                <span className="keys">Covid-19 Deaths:</span> &nbsp;
                {lastCovidElement.Deaths}
              </p>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
}
