export const state = () => ({
  loading: false,

  nav: false,

  resources: {},
})

export const mutations = {
  loading: (state, loading) => { state.loading = loading },

  nav: (state, bool) => { state.nav = bool },

  resources: (state, resources) => { state.resources = resources },

  service: (state, service) => { state.service = service }
}

export const actions = {
  resources({ commit }, payload) {
    return this.$axios.$post(`home/assets`, payload).then(ok => {
      commit('resources', ok.data)
    }).catch(() => false)
  },

  register({ commit }, payload) {
    return this.$axios.$post(`lead/register`, payload).then(ok => {
      return ok
    }).catch(() => false)
  }
}
