<template>
  <h1>Hello</h1>
</template>

<script>
import { ST_Dinet } from "../api/streamers.js";
import axios from 'axios'
export default {
  mounted() {
      ST_Dinet.on("Sutran", data => {
          axios.post('http://190.223.32.139:14555/V17/sutran', data)
      })
  }
};
</script>

<style>
</style>
