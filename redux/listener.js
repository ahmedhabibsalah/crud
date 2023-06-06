const { createListenerMiddleware } = require("@reduxjs/toolkit");
const { updateAction, toggleChangeAction } = require("./reducer");

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: toggleChangeAction,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(updateAction(action.payload));
  },
});

export default listenerMiddleware;
