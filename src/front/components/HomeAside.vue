<template>
    <div class="home-aside">
        <el-row :gutter="0" class="aside-list">
            <el-card shadow="hover" >
                <div slot="header" class="clearfix">
                    <span class="title">关于我</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="isAbout=!isAbout">收起</el-button>
                </div>
                <div class="about" v-show="isAbout">
                    <h5>BeastBoy，中文 秦小僧</h5>
                    <h6>明明长得出众，然而我却靠才华吃饭</h6>
                    <p>谦虚一下，下面是形容我的，英俊潇洒，风流倜傥，一表人才，玉树凌风，风度翩翩，气宇不凡，温文尔雅，风流才子，雅人深致，才貌双全，衣冠楚楚，剑眉星目，仪表堂堂，雄姿英发，玉面郎君，气宇轩昂。</p>
                    <div class="contact-link">
                        <a href="#" target="_blank"><img lazy="" src="http://cdn.e8net.cn/uploads/images/2a/2ad56f43b3d304ee684b223e8cf32bc8.png?imageView2/1/w/30/h/30/q/90|imageslim" alt="微博"></a>
                        <a href="#" target="_blank"><img lazy="" src="http://cdn.e8net.cn/uploads/images/e7/e7d5d9b1d7ca26b15924f33198933606.png?imageView2/1/w/30/h/30/q/90|imageslim" alt="GitHub"></a>
                        <a href="#" title="qq" target="_blank"><img lazy="" src="http://cdn.e8net.cn/uploads/images/f1/f14d8fb7fa96e80b2745416d0bd9df59.png?imageView2/1/w/30/h/30/q/90|imageslim" alt="qq"></a>
                    </div>
                </div>
            </el-card>
        </el-row>

        <el-row :gutter="0" class="aside-list">
            <el-card shadow="hover" >
                <div slot="header" class="clearfix">
                    <span class="title">热门推荐</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="isHot=!isHot">收起</el-button>
                </div>


                <div class="hotArt">
                    <el-button plain class="text item"  v-show="isHot"
                               v-for="(item,index) in hotArt" :key="index"
                               @click="$router.push({name:'article',params: {id:item.art_id}})"
                    >
                    {{item.art_name}}
                    </el-button>
                </div>
            </el-card>
        </el-row>

        <el-row :gutter="0" class="aside-list">
            <el-card shadow="hover" >
                <div slot="header" class="clearfix">
                    <span class="title">友情链接</span>
                    <el-button style="float: right; padding: 3px 0" type="text" @click="isfreLine=!isfreLine">收起</el-button>
                </div>

                <div v-show="isfreLine" class="text item freLink">


                    <el-row>
                        <el-button plain>朴素按钮</el-button>
                        <el-button type="primary" plain>主要按钮</el-button>
                        <el-button type="success" plain>成功按钮</el-button>
                        <el-button type="info" plain>信息按钮</el-button>
                        <el-button type="warning" plain>警告按钮</el-button>
                        <el-button type="danger" plain>危险按钮</el-button>
                    </el-row>



                </div>

            </el-card>
        </el-row>


    </div>
</template>

<script>
export default {
  name: "HomeAside",
  data() {
    return {
      isAbout: true,
      isHot: true,
      isTag: true,
      isfreLine: true,
      hotArt: []
    };
  },
  mounted() {
    var self = this;
    this.axios.get("/blog/aside.php").then(function(response) {
      self.hotArt = response.data;
    });
  }
};
</script>

<style lang="less" scoped>
.aside-list {
  z-index: 1;
  opacity: 0.888;
  filter: alpha(opacity=888);
  padding-bottom: 0.58rem;
}
.title {
  font-size: 0.8rem;
  font-weight: bold;
}
.text {
  font-size: 0.9rem;
}
.item {
  margin-bottom: 18px;
}
.el-button {
  margin: 0.3rem 0.5rem;
}

.about p {
  font-size: 0.8rem;
  line-height: 1rem;
}
.about a {
  margin-left: 1rem;
  padding-left: 1rem;
}
</style>