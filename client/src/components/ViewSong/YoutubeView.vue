<template>
  <panel title="Youtube Video">
    <div class="videoWrapper">
      <iframe :src="youtubeUrl" frameborder="0" allowfullscreen></iframe>
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  computed: {
    youtubeUrl () {
      return 'https://www.youtube.com/embed/' + this.youtubeId
    }
  },
  components: {
    Panel
  },
  props: [
    'youtubeId'
  ]
}
</script>

<style lang="css" scoped>

.videoWrapper {
  height: 240px;
}
.videoWrapper iframe {
  width: 100%;
  height: 100%;
}

</style>