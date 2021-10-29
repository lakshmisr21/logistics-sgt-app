import { createStore } from 'vuex'


export default createStore({
  state: {
    api_url: 'http://localhost:3000/',
    isAuthenticated: false,
     
    feed: [
      /*{
        id: 0,
        user_id: 0,
        display_name: 'Admin1',        
        desc: 'Look at Bird....',
        image: 'https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png?w=590&h=800&756A88D1-C0EA-4C21-92BE0BB43C14B265',
        timestamp: 1634744012000
      },
      {
        id: 1,
        user_id: 1,
        display_name: 'User1',        
        desc: 'Look at Peacock....',
        image: 'https://www.treehugger.com/thmb/tuD1l1wYphb8xRv9ThAQulWJ2aM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-590367297-9a7ea91c035d4179be1bcbfd26a6b215.jpg',
        timestamp: 1634792366000
      },*/
    ]
  },
  mutations: {
    getFeed (state, feed) {
      feed = feed.sort(function(a,b){
        return b.timstamp - a.timestamp
      })
      state.feed = feed
    },
    isAuthenticated (state){
      if(localStorage.getItem('jwt') != null)
      state.isAuthenticated = true
      else state.isAuthenticated = false
    }
  },
  login (state, token) {
    state.isAuthenticated = true
    localStorage.setItem('jwt', token)
    this.$router.push('/')
    //router.push('/')
  },
  logout (state) {
    state.isAuthenticated = false
    localStorage.removeItem('jwt')
    this.$router.push('/login')
    //router.push('/login')
  },

  actions: {
  },
  modules: {
  }
})
