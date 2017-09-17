<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks/>
      <recent-songs class="mt-2"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
import SongsBookmarks from './SongsBookmarks'
import RecentSongs from './RecentSongs'
import {mapState} from 'vuex'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentSongs
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.songs()).data
  }
}
</script>

<style scoped>
</style>
