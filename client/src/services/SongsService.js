import Api from '@/services/Api'

export default {
  songs () {
    return Api().get('songs')
  },
  create (song) {
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
