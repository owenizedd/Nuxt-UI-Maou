<template lang="pug">
  v-layout(column)
    author-card(title='Nama1')
    author-card.mt-3(title='Nama2')

</template>

<script>
import AuthorCard from '~/components/AuthorCard.vue';

export default {
  name: 'AboutUs',
  components: {
    AuthorCard,
  },
}
</script>
