<template>
    <el-aside class="menu">
        <el-menu default-active="2" :router="true" class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>栏目管理</span>
                </template>
                <el-menu-item index="/admin/topiclist">栏目列表</el-menu-item>
                <el-menu-item index="/admin/topic">添加栏目</el-menu-item>
            </el-submenu>
            <!--1-->
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-edit-outline"></i>
                    <span>文章管理</span>
                </template>
                <el-menu-item index="/admin/artlist">文章列表</el-menu-item>
                <el-menu-item index="/admin/artedit">发布文章</el-menu-item>
            </el-submenu>
            <!--2-->
            <el-menu-item index="/admin/tag">
                <i class="el-icon-star-on"></i>
                <span>添加标签</span>
            </el-menu-item>
            <!--3-->
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "AdminAside",
    }
</script>

<style scoped>
    .menu{
        height: calc(100vh - 66px);
    }
    .el-menu{
        height: 100%;
    }

</style>