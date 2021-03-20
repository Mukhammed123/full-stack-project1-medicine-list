<template>
  <div class="container">
    <h1>Medicine GUI interface- Query All</h1>
    <h2><router-link to='edit'>Edit</router-link></h2>
    <!-- CREATE POST HERE -->
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="medicine-container">
      <table>
        <tr>
          <td>No.</td>
          <td>種類</td>
          <td>品號</td>
          <td>品名</td>
          <td>時價</td>
          <td>健保代號</td>
          <td>第一次筆畫分類</td>
          <td>備註</td>
          <td>組成</td>
        </tr>
        <tr v-for="(item, index) in allItemsSheetOne" :key="index" class="sheet-one">
          <td> {{index+1}}. </td>
          <td>複方</td>
          <td>{{item.number}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.hicode}}</td>
          <td>{{item.classFirstStroke}}</td>
          <td>{{item.remark}}</td>
          <td>{{item.composition}}</td>
        </tr>
      </table>

      <table>
        <tr>
          <td>No.</td>
          <td>種類</td>
          <td>品號</td>
          <td>品名</td>
          <td>時價</td>
          <td>健保代號</td>
          <td>第一次筆畫分類</td>
          <td>備註</td>
          <td>組成</td>
        </tr>
        <tr v-for="(item, index) in allItemsSheetTwo" :key="index*100" class="sheet-two">
          <td> {{index+1}}. </td>
          <td>單方</td>
          <td>{{item.number}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.hicode}}</td>
          <td>{{item.classFirstStroke}}</td>
          <td>{{item.remark}}</td>
          <td>{{item.composition}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// import PostService from '../PostService';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'posts-component',
  data() {
    return {
      medicine1: [],
      medicine2: [],
      error: '',
      newPostData: '',
    }
  },
  methods: {
    ...mapActions(['fetchItemsOne', 'fetchItemsTwo'])
  },
  computed: {
    ...mapGetters(['allItemsSheetOne', 'allItemsSheetTwo'])
  },
  async created() {
    // this.medicine1 = await PostService.getSheetOne();
    // this.medicine2 = await PostService.getSheetTwo();
    await this.fetchItemsOne();
    await this.fetchItemsTwo();
    // console.log(this.allItemsSheetOne);
    // console.log(this.allItemsSheetTwo);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
  table tr.sheet-one{
    background: rgb(214, 248, 135);
    white-space: nowrap;
    overflow: scroll;
  }
  table tr.sheet-two{
    background: rgb(255, 209, 195);
    white-space: nowrap;
    overflow: scroll;
  }
  table {
    min-width: 1200px;
    overflow: scroll;
  }
  table tr td {
    overflow: scroll;
    width: 90px;
    text-overflow: ellipsis;
    text-align: center;
    display: inline-block;
    margin: 20px;
  }
</style>
