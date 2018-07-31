<template>
    <div class="follow-me">
        <div class="text">
            <h3>关注我  @BeastBoy</h3>
            <p>这个世界上 <strong>最帅</strong> 的 <strong> 程序员 </strong></p>
        </div>
        <div class="copy">
            ©2018 个人博客 禁止盗版 非法使用
        </div>
    </div>
</template>

<script>
    export default {
        name: "FollowMe"
    }
</script>

<style scoped>
    .follow-me{
        position: relative;
        background: beige;
        min-height: calc(100vh - 66px);
    }
    .text{
        text-align: center  ;
        position: absolute;
        top: 2rem;
        width: 100%;
    }
    h3{
        text-align: center;
        font-size: 1.6rem;
        line-height: 2rem;
    }
    p{
        text-align: center;
        font-size: 1.0rem;
        color: #666;
        margin: 20px 0;
    }
    .copy{
        position: absolute;
        bottom: .6rem;
        width: 100%;
        text-align: center;
        font-size: 14px;
    }
</style>