import { createClient } from '../plugins/contentful'

const client = createClient()

export const state = () => ({
    index: [],
    punktlista: [],
    infoStartsida: [],
    carousel: []
})

export const mutations = {
    setImages(state, payload) {
        // Sets state[obj.content_type] (an object passed in from page) to content[Object Objec] from Contentful
        state[payload[1]] = payload[0]
    }
}

export const actions = {
    async getImages() {
        await client.getAssets() 
            .then(function (assets) {
                assets.items.map(function (asset) {
                    let imageURL = "https:" + asset.fields.file.url;
                    if (assets.items.length > 0) {
                        commit('setImages', response.items)
                    }
                    console.log('from getassets ' + imageURL)
                    /* return imageURL */
                });
            })
            .catch(function (e) {
                console.log(e);
            });
    }
}

/* export const actions = {
    async getPage({ commit }, obj) {
        const response = await client.getEntries(obj)
        if (response.items.length > 0) {
            commit('setPage', [response.items, obj.content_type])
        }
    }
} */
