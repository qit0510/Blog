<template>
    <el-container class="ItemList">
        <main-header></main-header>
        <div class="content">
            <el-row :gutter="30">
                <el-col :span="3"><div class="grid-content"></div></el-col>

                <el-col :span="14">
                    <main>
                        <article-list></article-list>
                    </main>
                </el-col>

                <el-col :span="5">
                    <aside>
                        <home-aside></home-aside>
                    </aside>
                </el-col>
                <el-col :span="2"><div class="grid-content"></div></el-col>
            </el-row>
        </div>
        <main-footer></main-footer>
        <follow-me></follow-me>
        <particles></particles>
    </el-container>
</template>

<script>
    import MainHeader from '@/common/components/MainHeader.vue'
    import Particles from '@/common/components/Particles.vue'
    import ArticleList from '@/front/components/ArticleList.vue'
    import HomeAside from '@/front/components/HomeAside.vue'
    import MainFooter from '@/front/components/MainFooter.vue'
    import FollowMe from '@/front/components/FollowMe.vue'
    export default {
        name: "ItemList",
        components: {
            MainHeader,
            Particles,
            ArticleList,
            HomeAside,
            MainFooter,
            FollowMe
        }
    }
</script>

<style>
    .ItemList {
        flex-direction: column !important;
        font:0.26rem/0.5rem"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .el-main {
        padding: 0 !important;
    }
    aside{
        width: 100% !important;
    }
    .content{
        padding-top: .66rem;
    }

</style>