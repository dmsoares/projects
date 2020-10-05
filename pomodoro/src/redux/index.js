// REDUX IMPLEMENTATION

import { combineReducers, createStore, applyMiddleware } from 'redux'

// Importing ReduxThunk...
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
// ...ReduxThunk imported

export function incrementSession() {
  return (dispatch, getState) => {
    dispatch({
      type: "INCREMENT_SESSION",
      payload: getState().settings.session
    });
  };
}

export function decrementSession() {
  return (dispatch, getState) => {
    dispatch({
      type: "DECREMENT_SESSION",
      payload: getState().settings.session
    });
  };
}

export function incrementBreak() {
  return {
    type: "INCREMENT_BREAK"
  };
}

export function decrementBreak() {
  return {
    type: "DECREMENT_BREAK"
  };
}

const defaultLengths = { session: 25, break: 5 };

function settingsReducer(lengths = defaultLengths, action) {
  switch (action.type) {
    case "INCREMENT_SESSION":
      return { ...lengths, session: lengths.session + 1 };
    case "DECREMENT_SESSION":
      return { ...lengths, session: lengths.session - 1 };
    case "INCREMENT_BREAK":
      return { ...lengths, break: lengths.break + 1 };
    case "DECREMENT_BREAK":
      return { ...lengths, break: lengths.break - 1 };
    case "RESET_TIMER":
      return defaultLengths;
    default:
      return lengths;
  }
}

export function startStopTimer() {
  return {
    type: "START_STOP_TIMER"
  };
}

export function resetTimer() {
  return {
    type: "RESET_TIMER"
  };
}

export function elapseOneSecond() {
  return {
    type: "ELAPSE_ONE_SECOND"
  };
}

export function toggleSession() {
  return (dispatch, getState) => {
    if (getState().timer.isSessionOn) {
      dispatch({
        type: "TOGGLE_SESSION",
        payload: getState().settings.break
      });
    } else
      dispatch({
        type: "TOGGLE_SESSION",
        payload: getState().settings.session
      });
  };
}

const timerDefaultStatus = {
  isTimerOn: false,
  isSessionOn: true,
  timeLeft: 25 * 60
};

function timerReducer(timerStatus = timerDefaultStatus, action) {
  switch (action.type) {
    case "START_STOP_TIMER":
      return {
        ...timerStatus,
        isTimerOn: !timerStatus.isTimerOn
      };
    case "RESET_TIMER":
      return timerDefaultStatus;
    case "ELAPSE_ONE_SECOND":
      return {
        ...timerStatus,
        timeLeft: timerStatus.timeLeft - 1
      };
    case "TOGGLE_SESSION":
      return {
        ...timerStatus,
        isSessionOn: !timerStatus.isSessionOn,
        timeLeft: action.payload * 60
      };
    case "INCREMENT_SESSION":
      return {
        ...timerStatus,
        isSessionOn: true,
        timeLeft: (action.payload + 1) * 60
      };
    case "DECREMENT_SESSION":
      return {
        ...timerStatus,
        timeLeft: (action.payload - 1) * 60
      };

    default:
      return timerStatus;
  }
}

const rootReducer = combineReducers({
  settings: settingsReducer,
  timer: timerReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
//store.subscribe(() => console.log(store.getState()));
export default store


