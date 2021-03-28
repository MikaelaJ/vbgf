import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
  index: [],
  punktlista: [],
  infoStartsida: [],
  carouselStartsida: [],
  blog: []
})

export const mutations = {
  setPage(state, payload) {
    // Sets state[obj.content_type] (an object passed in from page) to content[Object Objec] from Contentful
    state[payload[1]] = payload[0]
  }
}

export const actions = {
  async getPage({ commit }, obj) {
    const response = await client.getEntries(obj)
    if (response.items.length > 0) {
      /* console.log('response.items: ' + response.items[0]) */
      commit('setPage', [response.items, obj.content_type])
    }
  }
}
