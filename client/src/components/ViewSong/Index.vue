<template>
  <div>
  <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-2">
        <youtube :youtubeId="song.youtubeId" />
      </v-flex>
  </v-layout>
  <v-layout>
      <v-flex xs6>
        <lyrics :song="song" class="mt-2"/>
      </v-flex>
      <v-flex xs6>
         <tab :song="song"  class=" ml-2 mt-2"/>
      </v-flex>
  </v-layout>
  </div>
</template>

<script>
import SongMetadata from './SongMetadata'
import Youtube from './YoutubeView'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongMetadata,
    Youtube,
    Lyrics,
    Tab
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>
</style>
