import produce from 'immer';
import { put, takeLatest } from 'redux-saga/effects';

const json = {
  "general": {
    "insertionsCount": 643  
  },
  "charts": {
    "general": {
      "followersCount": 9401
    },
    "ratingsByCategory": {
      "followersCount": 3900
    }
  },
  "terms": [
    85.08,
    1.76,
    33.42,
    75.11
  ],
  "supportRequests": [
    {
      "name": "Cecilia Welch",
      "email": "heather_keeling@gottlieb.ca",
      "timestamp": "2012-04-23T01:06:43.511Z",
      "phoneNumber": "215-293-5846",
      "city": "Southe Mariane",
      "status": "sent"
    },
    {
      "name": "Sara Glover",
      "email": "floyd_brakus@lindgren.com",
      "timestamp": "2012-04-23T00:22:43.511Z",
      "phoneNumber": "057-812-3947",
      "city": "East Maryam",
      "status": "sent"
    },
    {
      "name": "Harriett Morgan",
      "email": "jabari.kilback@nelson.tv",
      "timestamp": "2012-04-23T12:22:43.511Z",
      "phoneNumber": "866-668-0327",
      "city": "Monserratmouth",
      "status": "sent"
    },
    {
      "name": "Susie Curry",
      "email": "theo_gleichner@kaia.org",
      "timestamp": "2012-04-23T07:56:43.511Z",
      "phoneNumber": "647-851-5280",
      "city": "Lonnyburgh",
      "status": "sent"
    },
    {
      "name": "Edgar Greer",
      "email": "ankunding_ralph@gmail.com",
      "timestamp": "2012-04-23T08:35:43.511Z",
      "phoneNumber": "985-747-0063",
      "city": "Schmittfurt",
      "status": "unsent"
    },
    {
      "name": "Minerva Massey",
      "email": "lia_purdy@yahoo.com",
      "timestamp": "2012-04-23T03:24:43.511Z",
      "phoneNumber": "488-514-5012",
      "city": "South Lori",
      "status": "unsent"
    }
  ]
}

export const actions = {
  LOAD_DATA: 'App/LOAD_DATA',
  LOAD_DATA_SUCCESS: 'App/LOAD_DATA_SUCCESS',
  LOAD_DATA_ERROR: 'App/LOAD_DATA_ERROR',
  CHANGE_TO_SENT: 'App/CHANGE_TO_SENT',
  ADD_SUPPORT_REQUEST: 'App/ADD_SUPPORT_REQUEST',
}


export function addSupportRequest() {
  return { type: actions.ADD_SUPPORT_REQUEST };
}

export function sendSupportRequest(index) {
  return { type: actions.CHANGE_TO_SENT, index };
}

export function loadData() {
  return { type: actions.LOAD_DATA };
}

export function dataLoaded(data, username) {
  return { type: actions.LOAD_DATA_SUCCESS, data, username };
}

export function dataLoadingError(error) {
  return { type: actions.LOAD_DATA_ERROR, error };
}

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  supportRequests: [],
};


/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.LOAD_DATA:
        draft.loading = true;
        draft.error = false;
        draft.supportRequests = [];
        break;
      case actions.LOAD_DATA_SUCCESS:
        draft.supportRequests = action.data.supportRequests;
        draft.loading = false;
        break;

      case actions.LOAD_DATA_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case actions.CHANGE_TO_SENT:
        draft.supportRequests[action.index]['status'] = 'sent';
        break;
      case actions.ADD_SUPPORT_REQUEST:
        let newItem = Object.assign({}, json.supportRequests[Math.floor(Math.random()*json.supportRequests.length)])
        newItem.status = 'unsent'
        draft.supportRequests.push(newItem)
        break;
      default:
        break;
    }
  });

export default homeReducer;



export function* getData() {
  try {
    // TODO - get json from serverS
    yield put(dataLoaded(json));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

export function* saga() {
  yield takeLatest(actions.LOAD_DATA, getData);  
}
