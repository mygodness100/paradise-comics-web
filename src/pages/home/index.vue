<template>
  <div>
    <!-- 番剧推荐 -->
    <el-row :gutter="12" class="index-recommend" style="margin:50px auto;width: 60%;" v-for="recommend in recommends" :key="recommend.labelKey">
      <div><h3 v-text="recommend.labelName"></h3><h4>更多...</h4></div>
      <el-col :span="6" v-for="item in recommend[recommend.labelKey]" :key="item.comicId" style="text-align: center;margin-bottom: 10px;">
        <el-card :body-style="{ padding: '0px',margin:'auto' }">
          <router-link target="_blank" :to="{ name: 'comic', params: { id: item.comicId } }">
            <img :src="item.cover" :alt="item.name" class="image-index" />
            <div class="name">
              <span class="font-ellipsis" :title="item.name" v-text="item.name"></span>
              <div class="bottom clearfix">
                <time class="time">{{ item.createtime }}</time>
              </div>
            </div>
          </router-link>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getRecommends } from "../../api/recommend";

export default {
  name: "index",
  data() {
    return {
      // 番剧推荐
      recommends: []
    };
  },
  created() {
    this.getRecommends();
  },
  methods: {
    // 获得番剧推荐
    getRecommends() {
      getRecommends("HOME_RECOMMEND").then(resp => {
        this.recommends = resp.data;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  @import url("./_index.scss");
</style>