import { getWines } from '../services/wineCoolerService';

const GET_WINES_STARTED = 'wines/GET_WINES_STARTED';
const GET_WINES_SUCCEED = 'wines/GET_WINES_SUCCEED';
const GET_WINES_FAILED = 'wines/GET_WINES_FAILED';
const FILTER_WINES = 'wines/FILTER_WINES';
const RESET_FILTER = 'wines/RESET_FILTER';
export const ADD_WINE_TO_LIST = 'wines/ADD_WINE_TO_LIST';


const initialState = {
  inStock: [],
  archive: [],
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
        inStock: state.inStock.map((wine) => {
          return {
            ...wine,
            isHidden: false,
          };
        }),
        archive: state.archive.map((wine) => {
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
        inStock: state.inStock.map((wine) => {
          return {
            ...wine,
            isHidden: shouldBeHidden(wine.info.type, action.payload),
          };
        }),
        archive: state.archive.map((wine) => {
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
        inStock: wines.inStock.map((wine) => { return { ...wine, isHidden: false }; }),
        archive: wines.archived.map((wine) => { return { ...wine, isHidden: false }; }),
      };
    }

    case GET_WINES_FAILED: {
      return {
        ...state,
        isGettingwines: false,
      };
    }

    case ADD_WINE_TO_LIST: {
      const newWine = JSON.parse(action.payload.wine);
      if (!state.inStock.some((wine) => {
        return wine.info.vinmonopoletId === newWine.vinmonopoletId;
      })) {
        return {
          ...state,
          inStock: [...state.inStock, { info: newWine, ids: [newWine.rowKey], isHidden: false }],
        };
      }
      return {
        ...state,
        inStock: state.inStock.map((wine) => {
          if (wine.info.vinmonopoletId === newWine.vinmonopoletId) {
            return {
              ...wine,
              ids: [...wine.ids, newWine.rowKey],
            };
          }
          return wine;
        }),
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
