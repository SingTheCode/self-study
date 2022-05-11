<template>
  <div id="app">
    <h1>My First Youtube Project</h1>
    <header>
          <the-search-bar @input-change="onInputChange"></the-search-bar>
    </header>
    <section>
      <video-detail :video='selectVideo'></video-detail>
      <video-list :videos="videos" @select-video="onVideoSelect"></video-list>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import TheSearchBar from './components/TheSearchBar.vue';
import VideoList from './components/VideoList.vue';
import VideoDetail from './components/VideoDetail.vue';




console.log(process.env)


// const API_KEY = 'AIzaSyBwmwNW77rfxP4OYRRtxvYraF4MQyrulb0';
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
const API_URL = process.env.VUE_APP_YOUTUBE_URI;


export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoList,
    VideoDetail,
  },
  data: function () {
    return {
      inputValue: null,
      videos: [],
    }
  },
  methods: {
    onInputChange: function (inputText) {
      this.inputValue = inputText;

      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        q: this.inputValue,
      }

      axios({
        method: 'get',
        url: API_URL,
        params,
      })
      .then(res => {
        console.log(res);
        this.videos = res.data.items;
      })
      .catch(err => {
        console.log(err);
      })
    },
    onVideoSelect: function (video) {
      this.selectVideo = video;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
