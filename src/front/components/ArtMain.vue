<template>
    <div class="artMain">
        <el-row :gutter="0" class="art-list">
            <el-card shadow="hover" class="art">
                <h3 v-text="form.art_name"></h3>
                <h4>栏目:{{form.art_topic}} 评论数:{{form.art_comm}} 发布时间:{{form.art_pubtime}}</h4>
                <div class="content ">
                    <p v-html="form.art_content">
                    </p>
                </div>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    import qs from 'qs';
    export default {
        name: "ArtMain",
        data () {
            return {
                form: {
                    id: '',
                },
            };
        },
        mounted () {
            this.form.id = this.$route.params.id;
            var self = this;
            this.axios.post('/blog/art.php',
                qs.stringify(this.form)
            )
                .then(function (response) {
                    self.form = response.data;
                });

        }
    }
</script>

<style lang="less" >

    .art-list {
        z-index: 1;
        opacity: 0.888;
        filter: alpha(opacity=888);
        padding-bottom: 0.58rem;
    }
    .art{
        position: relative;
    }

    .art h3 {
        padding-top: .6rem;
        font-size: 1.5rem;
        text-align: center;
    }
    .art h4 {
        font-size: 0.8rem;
        font-weight: normal;
        text-align: center;
    }
    p{
        font-size: 0.9rem;
    }
    p pre {
        font-size: 12px;
        padding: 0;
        margin: 0;
        background: #f0f0f0;
        line-height: 20px; /* 行距 */
        background: url(../../assets/images/pre-style.png) repeat-y left top;
        width: 600px;
        overflow: auto; /* 超出宽度出现滑动条 */
        overflow-Y:hidden; /* 作用是隐藏IE的右侧滑动条 */
    }
    .ql-align-center{
        text-align: center;
    }
    .ql-align-justify{
        text-align: justify;
    }
    .content img {
        display: block;
        max-width: 80%;
        height: auto;
        margin: 0 auto;
        text-align: center;
    }
    .ql-indent-1{
        text-indent:2em;
    }
    blockquote{
        font: 14px/22px normal helvetica, sans-serif;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 50px;
        padding-left: 15px;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        border-left: 3px solid #ccc;
        background-color:#f1f1f1
    }
</style>