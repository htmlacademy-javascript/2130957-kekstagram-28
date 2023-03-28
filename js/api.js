const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error();
    });

const getData = () => load(Route.GET_DATA);

const sendData = (body) => load(Route.SEND_DATA, Method.POST, body);


// Для тестирования ошибок (нужно расскоментить и закомментить код выше)
// const getData = () => fetch(
//   'https://28.javascript.pages.academ/kekstagram/data')
//   .then((response) => response.json());

// const sendData = (body) => fetch(
//   'https://28.javascript.pages.academ/kekstagram',
//   {
//     method: 'POST',
//     body,
//   })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error();
//     }
//   })
//   .catch(() => {
//     throw new Error();
//   });

export {getData, sendData};
