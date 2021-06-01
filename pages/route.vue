<template lang="pug">
  v-layout(column)
    h1.display-0.mb-10 Pilih produk yang ingin anda cari
    v-row(row, nowrap)
      v-col(cols='9')
        v-row(row, wrap)
          v-col(v-for='i in 4', cols='6')
            v-card.card-light.mx-auto.mb-3()
              v-list-item-content
                v-row.justify-space-between.px-6.py-6(column, nowrap)
                  v-col.text-center.card-image.flex-grow-0.mx-auto(style='flex-basis: 300px')
                    img.mx-3( :src='`/product-1.jpg`', alt='product', height='200')
                  v-col.item-description-container()
                    h4.display-1.mb-3 Blue Band {{i}} 250 gram
                    p #[b Rp 10.000 ]
                    v-btn(@click='toggle(i-1)' :color='indexExists(i-1) ? "primary": "secondary" ') {{ indexExists(i-1) ? 'Hapus' : 'Cari' }}
      v-col(cols='3')
        p 
          strong Produk dipilih: {{selectedProducts.length}}
        small *minimal cari 2 produk
        br
        v-btn(@click='findProduct' color='primary') Cari
</template>

<script>

export default {
  name: 'Route',
  data(){
    return{
      selectedProducts: [],
    }
  },
  computed: {
  },
  methods: {
    findProduct(){
      
    },

    indexExists(idx){
      return this.selectedProducts.includes(idx);
    },
    toggle(idx){
      const findIdx = this.selectedProducts.indexOf(idx);
      if (findIdx !== -1) {
        this.selectedProducts.splice(findIdx,1);
      }
      else this.selectedProducts.push(idx);
      console.log(this.selectedProducts);
    },
  },
}
</script>
