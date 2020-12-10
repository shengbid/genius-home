<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
.left-f {
  float: left;
}
.right-f {
  float: right;
}
.clearfix {
  clear: both;
}
.clearfix::after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  line-height: 0;
  overflow: hidden;
}
</style>
