<template>
  <div>
    <template v-for="item in menus">
      <router-link
        :key="item.path"
        v-show="!item.hidden"
        v-if="!item.children"
        :to="{name: item.name}"
      >
        <el-menu-item :index="item.path" :class="{'active': item.name === routeName}">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>
      <el-submenu v-else :key="item.path" :index="item.path">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
        </template>
        <SideItem
          :menus="item.children"
        />
      </el-submenu>
    </template>
  </div>
</template>

<script>

export default {
  name: 'SideItem',
  props: {
    menus: {
      type: Array,
      default: () => {return []}
    }
  },
  data() {
    return {
      routeName: this.$route.name
    }
  },
  watch: {
    $route(route) {
      // console.log(77, route.path)
      this.routeName = route.name
    }
  }
}
</script>

<style>
  .el-menu .active {
    color: #e61717 !important;
    border-bottom: 2px solid #e61717 !important;
  }
  .el-menu .active i {
      color: #e61717 !important;
    }
</style>