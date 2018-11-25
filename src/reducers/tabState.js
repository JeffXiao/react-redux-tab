import * as actions from "../actions/tabActions";

export const tabState = (state = { activeTab_id: "Office" }, action) => {
  switch (action.type) {
    case actions.ACTIVE_TAB:
      return { ...state, activeTab_id: action.activeTab };
    default:
      return state;
  }
};
