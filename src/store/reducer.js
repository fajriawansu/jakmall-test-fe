import deliveryReducer from "./DeliveryReducer";

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

const initialState = {
  deliveryReducer,
};

const rootReducer = combineReducers({ deliveryReducer });
