import getWines from '../services/wineCoolerService';

export const GET_WINES_STARTED = 'score/GET_WINES_STARTED';
export const GET_WINES_SUCCEED = 'score/GET_WINES_SUCCEED';
export const GET_WINES_FAILED = 'score/GET_WINES_FAILED';
export const FILTER_WINES = 'score/FILTER_WINES';
export const RESET_FILTER = 'score/RESET_FILTER';


const initialState = {
  winesInStock: [],
  wineArchive: [],
  isGettingWines: false,
};

const shouldBeHidden = (wineType, filterType) => {
  if (filterType === 'Muserende') {
    return !(wineType.includes('Champ') ||
             wineType.includes('Perl') ||
             wineType.includes('Cava') ||
             wineType.includes('Crem') ||
             wineType.includes('Mus'));
  }
  return !wineType.includes(filterType);
};

export default (state = initialState, action) => {
  switch (action.type) {

    case RESET_FILTER: {
      return {
        ...state,
        winesInStock: state.winesInStock.map((wine) => {
          return {
            ...wine,
            isHidden: false,
          };
        }),
        wineArchive: state.wineArchive.map((wine) => {
          return {
            ...wine,
            isHidden: false,
          };
        }),
      };
    }

    case FILTER_WINES: {
      return {
        ...state,
        winesInStock: state.winesInStock.map((wine) => {
          return {
            ...wine,
            isHidden: shouldBeHidden(wine.info.type, action.payload),
          };
        }),
        wineArchive: state.wineArchive.map((wine) => {
          return {
            ...wine,
            isHidden: shouldBeHidden(wine.info.type, action.payload),
          };
        }),
      };
    }

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
        winesInStock: wines.inStock.map((wine) => { return { ...wine, isHidden: false }; }),
        wineArchive: wines.archived.map((wine) => { return { ...wine, isHidden: false }; }),
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

export const setNewFilter = (type) => {
  if (type === '*') {
    return { type: RESET_FILTER, payload: type };
  }
  return { type: FILTER_WINES, payload: type };
};
