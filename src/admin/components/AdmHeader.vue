<template>
    <el-container class="wrapper">
        <el-header height="66px" :style="{ 'background-color': primaryColor }">

            <el-row :gutter="20">
                <el-col :span="3">
                    <div class="grid-content"></div>
                </el-col>

                <el-col :span="6" class="main-caption">
                    <span class="el-icon-loading"></span>
                    <span class="title">BeastBoy is blog</span>
                </el-col>

                <el-col :span="12" class="main-nav">
                    <el-menu  :router="true" class="el-menu-demo" :default-active="activeIndex2" mode="horizontal" background-color="#3f9ffe" text-color="#fff" active-text-color="#ffd04b">

                        <el-menu-item index="/">首页</el-menu-item>

                        <el-submenu index="2">
                            <template slot="title">IT技术分享</template>

                            <el-menu-item index="/itemList/web_frontend">web前端</el-menu-item>

                            <el-menu-item index="/itemList/web-backend">web后端</el-menu-item>

                            <el-menu-item index="/itemList/game-development">游戏开发</el-menu-item>

                            <el-menu-item index="/itemList/Other">其他项目</el-menu-item>
                        </el-submenu>

                        <el-menu-item index="/itemList/life">生活分享区</el-menu-item>

                        <el-menu-item index="/itemList/forum">话题讨论区</el-menu-item>

                        <el-menu-item index="/itemList/personal">个人简介区</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>
    </el-container>
</template>

<script>
    export default {
        name: "AdmHeader",
        data() {
            return {
                primaryColor: "#3f9ffe",
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .main-caption {
        font-size: 1.2rem;
        line-height: 60px;
        color: ivory;
    }
    .title {
        padding-left: 10px;

    }
    .main-nav {
        float: left;
    }

    .el-menu::after,
    .el-menu::before {
        display: none;
    }


</style>