<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont text-blue">&#xe63c;</div>
      <strong class="flex-1 text-blue pl-2">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">
        2019-06-19
      </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont">&#xe9f4;</i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
    </div>
    <div class="pt-2 fs-lg ml-3">
    <router-link  class="py-2 "
    tag="div"
    :to="`/articles/${item._id}`"
    v-for="item in model.related" 
    :key="item._id">
      {{item.title}}
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    id:{ require:true}
  },
  data(){
    return{
      model:null
    }
  },
  watch:{
   id:'fetch'
  },
  methods:{
    async fetch(){
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created(){
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article{
  .iconfont{
    font-size: 1.6923rem
  }
  .body{
    img{
      width: 100%;
      height: auto;
    }
    iframe{
      height: auto;
      width: 100%

    }
  }
}
</style>
