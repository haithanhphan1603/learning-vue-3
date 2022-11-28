import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      didLogout: false,
      userId: null,
      token: null,
    };
  },
  getters,
  actions,
  mutations,
};
