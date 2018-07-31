<template>
    <el-container class="home">
        <main-header></main-header>
        <carousel-pic></carousel-pic>

        <el-row :gutter="30" class="home-main">
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

        <main-footer></main-footer>
        <follow-me></follow-me>
        <particles></particles>
    </el-container>
</template>

<script>

    import MainHeader from '@/common/components/MainHeader.vue'
    import Particles from '@/common/components/Particles.vue'
    import CarouselPic from '@/front/components/CarouselPic.vue'
    import ArticleList from '@/front/components/ArticleList.vue'
    import HomeAside from '@/front/components/HomeAside.vue'
    import MainFooter from '@/front/components/MainFooter.vue'
    import FollowMe from '@/front/components/FollowMe.vue'
    export default {
        name: 'home',
        components: {
            MainHeader,
            Particles,
            CarouselPic,
            ArticleList,
            HomeAside,
            MainFooter,
            FollowMe
        },

    }
</script>

<style>
    .home {
        flex-direction: column !important;
    }
    .home-main{
        margin-top: .66rem;
    }
    .grid-content {
        min-height: 50px;
    }
    .el-main {
        padding: 0 !important;
    }
    aside{
        width: 100% !important;
    }
</style>


