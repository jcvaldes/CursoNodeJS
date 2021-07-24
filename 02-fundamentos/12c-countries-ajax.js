const getPaises = () => new Promise((resolve, reject) => {
  const url = 'https://restcountries.eu/rest/v2/all';
debugger
  const req = new XMLHttpRequest();

  req.open('GET', url, true);

  req.onload = () => {
    if (req.status === 200) {
      resolve(JSON.parse(req.responseText).results);
    } else {
      reject(Error(req.statusText));
    }
  }
  req.onerror = (error) => reject(error);

  req.send();
});
getPaises()
  .then((paises) => {
    contenedorApp.innerHTML = renderCountries(paises)
  })
  .catch((err) => {
    console.error(err);
  });

renderCountriesTbl = (countries) => { 

}
renderCountriesTr = (countries) => {

}