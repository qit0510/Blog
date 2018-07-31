<template>
    <div class="article">
        <main-header></main-header>
        <particles></particles>
        <div class="main">
            <el-row :gutter="0">
                <el-col :span="4"><div class="grid-content"></div></el-col>
                <el-col :span="16">
                        <art-main></art-main>
                    <!--<comment-list></comment-list>-->
                </el-col>
                <el-col :span="4"><div class="grid-content"></div></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import MainHeader from '@/common/components/MainHeader.vue'
    import ArtMain from '@/front/components/ArtMain.vue'
    import Comment from '@/front/components/Comment.vue'
    import CommentList from '@/front/components/CommentList.vue'
    import Particles from '@/common/components/Particles.vue'
    export default {
        name: "Article",
        components: {
            MainHeader,
            ArtMain,
            Comment,
            CommentList,
            Particles
        }
    }
</script>

<style scoped>
    .grid-content {
        min-height: 50px;
    }
    .main {
        margin-top: .9rem;
    }
    .el-main {
        padding: 0 !important;
    }
    aside{
        width: 100% !important;
    }
</style>