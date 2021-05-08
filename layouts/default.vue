<template lang='pug'>
  v-app(dark)
    v-app-bar(:clipped-left='clipped' fixed app)
      
      v-toolbar-title(v-text='title')
      v-spacer
      nuxt-link.app-bar-link(v-for='link in links' :key='link.to' :to='link.to' :class='link.to === $route.path ? "active" : ""')
        div {{link.title}}
      p.ml-5(v-if='true') Admin1
    v-main
      v-container
        nuxt
    v-navigation-drawer(v-model='rightDrawer' :right='right' temporary fixed)
      v-list
        v-list-item(@click.native='right = !right')
          v-list-item-action
            v-icon(light)  mdi-repeat 
          v-list-item-title Switch drawer (click me)
    v-footer(:absolute='!fixed' app)
      span &copy; {{ new Date().getFullYear() }}

</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      links: [
        {
          to: '/',
          title: 'HOME',
        },
        {
          to: '/products',
          title: 'PRODUK',
        },
        {
          to: '/about',
          title: 'ABOUT US',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'MAOU',
    }
  },
}
</script>

<style scoped>
a{
  text-decoration:  none !important;
  color: inherit;  
}
.app-bar-link{
  margin-right: 10px;
}
.app-bar-link.active{
  color: orange;
}
</style>