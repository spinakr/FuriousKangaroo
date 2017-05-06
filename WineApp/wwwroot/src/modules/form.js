import { postWine } from '../services/wineCoolerService';
import { ADD_WINE_TO_LIST } from './wines';


const POST_WINE_STARTED = 'form/POST_WINE_STARTED';
const POST_WINE_SUCCESS = 'form/POST_WINE_SUCCESS';
const POST_WINE_FAILED = 'form/POST_WINE_FAILED';


export const FORM_CHANGED = 'form/FORM_CHANGED';

const initialState = {
  vinmonopoletId: '',
  postingWine: false,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_CHANGED: {
      return {
        ...state,
        vinmonopoletId: action.payload.vinmonopoletId,
      };
    }
    case POST_WINE_STARTED: {
      return {
        ...state,
        postingWine: true,
      };
    }
    case POST_WINE_SUCCESS: {
      return {
        ...state,
        postingWine: false,
      };
    }
    case POST_WINE_FAILED: {
      return {
        state,
        postingWine: false,
        errorMessage: action.payload.errorMessage,
      };
    }
    default:
      return state;
  }
};

export const addNewWine = () => (dispatch, getState) => {
  dispatch({ type: POST_WINE_STARTED });
  postWine(getState().form.vinmonopoletId).then((wine) => {
    dispatch({ type: POST_WINE_SUCCESS });
    dispatch({ type: ADD_WINE_TO_LIST, payload: { wine } });
  }).catch((errorMessage) => {
    dispatch({ type: POST_WINE_FAILED, payload: { errorMessage: errorMessage.message } });
  });
};

export const updateForm = (event) => {
  return {
    type: FORM_CHANGED,
    payload: {
      vinmonopoletId: event.target.value,
    },
  };
};
