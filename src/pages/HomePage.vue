<template>
<div>
  <!-- <HeaderSection @search='onSearch'/> -->
  <div class="container">
    <div class="row">
      <form @submit.prevent>
        <input type="text" v-model="searchQuery" placeholder="Search">
      </form>
      <div class="col-md-4 mt-4">
        <div class="card mb-4" v-for="item in filteredItems" :key="item.product_feed_id">
          <img src="https://www.1dagactie.nl/media/catalog/product/6/0/601015001056020_1_1.jpg" class="card-img-top" alt="Product 1">
          <div class="card-body">
            <h3><strong>{{ item.product_name }}</strong></h3> 
            <h6 class="card-title">{{ item.product_title }} <span class="badge badge-info">{{ item.state }}</span></h6>
            <p class="card-text float-left"><span style="text-decoration: line-through; color:red;">{{ item.reguler_price }} </span>{{ item.discount_price }} tk</p><br>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

// import HeaderSection from '@/components/HeaderSection.vue'

export default {
  name: 'HomePage',

  data(){
    return {
      items : [],
      filteredData: [],
      searchQuery : '',
    }
  },

  components:{
    // HeaderSection
  },

  mounted() {
    this.fetchDatafromAPI();
  },

  methods: {
    async fetchDatafromAPI(){
      try{
        const response = await this.$axios.get('https://admin.aanbieding24.nl/api/lowest-price-products/5');
        this.items = response.data; 
        // console.log(this.items);

        // const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}/data`);
        // const jsonData = await response.json();
        // this.items = jsonData;

      } catch(error){
          console.log(error);
      }
    }
  },
  //   // async onSearch(query) {
  //   //   console.log("Before"+ this.items.product_title);
  //   //   this.items = await this.items.filter(item => item.product_title.toLowerCase().includes(query.toLowerCase()));
  //   //   console.log("After Search - " + this.items);

  //   // }
  // },

  computed: {
    filteredItems() {
      console.log("In search Func "+this.items.product_name);
      return this.items.filter(item =>
        item.product_name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<style>

</style>