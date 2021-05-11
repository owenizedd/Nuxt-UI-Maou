<template lang="pug">
v-layout(column)
  v-btn.align-self-start 
    v-icon mdi-plus
    | Tambah Produk
  v-text-field.mt-5(v-model='searchValue', @change='searchProduct', label='Cari Nama Produk/Kode Produk', prepend-inner-icon='mdi-magnify', filled, dense)
  v-data-table(:headers='headers', :items='items', hide-default-footer)
    v-progress-linear(slot='progress', color='primary', indeterminate)
    template(v-slot:item.lokasi="{item}")
      td
        .map-button(@click='handleMap')
          v-icon(large, color="blue darken-2") mdi-map-marker
          span.blue--text Lihat lokasi
    template(v-slot:item.edit='{item}')
      td
        v-btn
          v-icon mdi-pencil
        v-btn.mx-3
          v-icon(color='error') mdi-delete
</template>


<script>
export default {
  name: 'AdminDataProducts',
  data(){
    return{
      items: [
        {
          product_code: 'BR00121',
          nama: 'Blue Band',
          brand: 'Unilever',
          harga: '15000',
          status: 'Ada',
          stock: 21,
        },
      ],
      searchValue: '',
      headers: [
        {text: 'Kode Produk', value: 'product_code'},
        { text: 'Nama Produk', value: 'nama'},
        {text: 'Brand', value: 'brand'},
        {text: 'Harga', value: 'harga'},
        {text: 'Status', value: 'status'},
        {text: 'Stock', value: 'stock'},
        {text: 'Lokasi', value: 'lokasi'},
        {text: 'Edit', value: 'edit'},
      ].map(data => ({...data, sortable: false})),
    }
  },
};
</script>

<style scoped>
</style>