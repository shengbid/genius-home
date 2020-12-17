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
  font-size: 12px;
  color: #333;
  background-color: #f7f7f7;
}
#app {
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
i {
  font-style: normal;
}
img {
  width: 100%;
  height: 100%;
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
.bg-white {
  background-color: #fff;
}
</style>
