const serviceBase = '/api/wines/';

export const getWines = () => {
  return new Promise((resolve, reject) => {
    const url = `${serviceBase}`;
    fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } }).then((response) => {
      if (response.ok) {
        response.text().then(resolve);
      } else {
        reject(`failed to fetch from api: ${response.statusText}`);
      }
    });
  });
};

export const postWine = (vinmonopoletId) => {
  console.log(vinmonopoletId);
  return new Promise((resolve, reject) => {
    const url = `${serviceBase}`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: vinmonopoletId,
    }).then((response) => {
      if (response.ok) {
        response.text().then(resolve);
      } else {
        reject(`failed to commit changes: ${response.statusText}`);
      }
    });
  });
};
