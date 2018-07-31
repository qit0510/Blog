<template>
    <footer class="main-footer">
            <div class="foot-content">
                <header>
                    <h3 class="border-bottom">联系作者</h3>
                </header>
                <div class="container">
                    <p>网易邮箱:qit0510@163.com</p>
                    <p>qq:1292198069    </p>
                </div>
                <div class="contact-link">
                    <a href="#" title="微博" target="_blank"><img lazy="" src="http://cdn.e8net.cn/uploads/images/2a/2ad56f43b3d304ee684b223e8cf32bc8.png?imageView2/1/w/30/h/30/q/90|imageslim" alt="微博"><span>微博</span></a>
                    <a href="#" target="_blank"><img lazy="" src="http://cdn.e8net.cn/uploads/images/e7/e7d5d9b1d7ca26b15924f33198933606.png?imageView2/1/w/30/h/30/q/90|imageslim" alt="GitHub"><span>GitHub</span></a>
                    <a href="#" title="qq" target="_blank"><img lazy="" src="http://cdn.e8net.cn/uploads/images/f1/f14d8fb7fa96e80b2745416d0bd9df59.png?imageView2/1/w/30/h/30/q/90|imageslim" alt="qq"><span>qq</span></a>
                </div>
            </div>
    </footer>
</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>

<style scoped>
.main-footer{
    padding: 0 ;
    z-index: 2;
}
.foot-content{
    background: beige;
    overflow: hidden;
    width: 100%;
    padding: 20px 0;
}
.foot-content h3{
    text-align: center;
    font-size: 1.6rem;
    padding-bottom: 1.1rem;
    box-sizing: border-box;
    color: #333;
}
.container p{
    text-align: center;
    font-size: 1rem;
    color: #666;
    margin: 20px 0;
}
.contact-link{
    text-align: center;
    margin-top: 60px;
    overflow: hidden;
}
.contact-link a{
    margin: 0 60px;
    display: inline;
    text-decoration: none;
    font-size: 15px;
    color: #909090;
    line-height: 21px;
}

</style>