//https://rickandmortyapi.com/documentation/

export function searchPerso(namePerso) {
  const url = 'https://rickandmortyapi.com/api/character?name='+namePerso
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
