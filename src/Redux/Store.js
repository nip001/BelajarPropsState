const { createStore } = require("redux");
const { default: reducer } = require("./Reducer");

export const store = createStore(reducer)