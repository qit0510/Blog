<template>
    <div class="block">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in pic" :key="item.id">
                <a href="#"><img class="pic" :src="item.path" alt=""></a>
            </el-carousel-item>
        </el-carousel>
    </div>

</template>

<script>
    export default {
        name: "CarouselPic",
        data () {
            return {
                pic:[
                    {id:0,path:require('@/assets/images/1.jpg'),url:"www.baidu.com"},
                    {id:1,path:require('@/assets/images/2.jpg'),url:"www.baidu.com"},
                    {id:2,path:require('@/assets/images/3.jpg'),url:"www.baidu.com"},
                    {id:3,path:require('@/assets/images/4.jpg'),url:"www.baidu.com"},
                    {id:4,path:require('@/assets/images/5.jpg'),url:"www.baidu.com"},
                ]
            };
        }
    }
</script>

<style scoped>

    img{
        width: 100%;
        height: auto;
    }

</style>