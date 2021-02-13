<template>
    <el-menu
      default-active="2"
      class="el-menu-demo"
      mode="horizontal"
      @open="handleOpen"
      @select="handleSelect"
      :default-openeds="defaultOpen"
      text-color="#666"
      active-text-color="#e61717">
      <SiderItem :menus="menus" />
    </el-menu>
</template>

<script>
import getMenus from '@/router/menu'
import SiderItem from './siderItem'
import common from '@/utils/common'
import { mapState } from 'vuex'

export default {
  name: 'Side',
  components: {
    SiderItem
  },
  data() {
    return {
      defaultOpen: [],
      menus: []
    }
  },
  computed: {
    ...mapState(['type']),
    // menus() {
    //   return getMenus(this.type)
    // } 
  },
  watch: {
    $route(route) {
      // console.log(77, route.path)
      this.getOpenPath(route)
    }
  },
  created() {
    console.log(11, this.type)
    this.menus = getMenus(this.type)
    this.getOpenPath(this.$route)
  },
  methods: {
    getOpenPath(route) {
      this.defaultOpen = common.handleRouteToArray(route)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>