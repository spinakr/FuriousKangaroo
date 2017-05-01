import getWines from '../services/wineCoolerService';

export const GET_WINES_STARTED = 'score/GET_WINES_STARTED';
export const GET_WINES_SUCCEED = 'score/GET_WINES_SUCCEED';
export const GET_WINES_FAILED = 'score/GET_WINES_FAILED';


const initialState = {
  winesInStock: [],
  wineArchive: [],
  isGettingWines: false,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_WINES_STARTED: {
      return {
        ...state,
        isGettingWines: true,
      };
    }

    case GET_WINES_SUCCEED: {
      const wines = JSON.parse(action.payload.wines);
      return {
        ...state,
        winesInStock: wines.inStock,
        wineArchive: wines.archived,
      };
    }

    case GET_WINES_FAILED: {
      return {
        ...state,
        isGettingScore: false,
      };
    }

    default:
      return state;
  }
};

export const fetchWines = () => (dispatch) => {
  dispatch({ type: GET_WINES_STARTED });
  getWines().then((wines) => {
    dispatch({ type: GET_WINES_SUCCEED, payload: { wines } });
  }).catch((errorMessage) => {
    dispatch({ type: GET_WINES_FAILED, payload: { errorMessage: errorMessage.message } });
  });
};

