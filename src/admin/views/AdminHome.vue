<template>
    <el-container class="wrapper">
        <adm-header></adm-header>
        <main class="admin-main">
            <el-row :gutter="0">
                <el-col :span="4">
                    <admin-menu></admin-menu>
                </el-col>
                <el-col :span="20">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </main>
    </el-container>
</template>

<script>
    import AdmHeader from '@/common/components/MainHeader.vue'
    import AdminMenu from '@/admin/components/AdminMenu.vue'

    export default {
        name: "AdminHome",
        components: {
            AdmHeader,
            AdminMenu,
        }
    }
</script>

<style scoped>
    .wrapper {
        flex-direction: column !important;
    }

    .admin-main {

    }
</style>