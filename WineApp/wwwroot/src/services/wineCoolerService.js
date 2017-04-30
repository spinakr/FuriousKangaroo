const serviceBase = '/api/wines/';

const getWines = () => {
  return new Promise((resolve, reject) => {
    const url = `${serviceBase}`;
    fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } }).then((response) => {
      if (response.ok) {
        response.text().then(resolve);
      } else {
        reject(`failed to commit changes: ${response.statusText}`);
      }
    });
  });
};

export default getWines;
