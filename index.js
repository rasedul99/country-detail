const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

loadCountries();
const displayCountries = (countries) => {
  //   console.log(countries);
  const countriesDiv = document.getElementById("countries");
  for (const country of countries) {
    const div = document.createElement("div");
    div.classList.add("country");
    const countryName = (div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.capital}</p>

    <button onClick="loadCountryByName('${country.name.common}')"> Details </button> `);

    countriesDiv.appendChild(div);
  }
};

const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountry(data[0]));
  //   .then((data) => console.log(data[0]));
};

const displayCountry = (country) => {
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
    <h5>${country.name.common}</h5>
    <p>${country.population}</p>
    <img width='200px' src='${country.flags.png}'/>
    `;
};
