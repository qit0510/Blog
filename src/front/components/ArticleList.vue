<template>
    <div class="home-content">
        <el-row :gutter="0" class="art-list" v-for="item in artList" :key="item.art_id">
            <el-card shadow="hover" class="art">
                <h3>{{item.art_name}}</h3>
                <div class="content ">
                    <p class="intwoline" v-html="delHtmlTag(item.art_content)"></p>
                </div>
                <el-button content="btn"
                           @click="$router.push({name:'article',params: {id:item.art_id}})"
                           plain
                           class="look-more">
                    查看全部
                </el-button>
            </el-card>

        </el-row>
        <!--页码-->
        <div class="block">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="pages.currentPageNum"
                    :page-size="pages.pageSizeNum"
                    layout="total, prev, pager, next"
                    :total="pageTotal">
            </el-pagination>
        </div>
    </div>
</template>

<script>

    import qs from 'qs';

    export default {
        name: "ArticleList",
        data() {
            return {
                pageTotal:0,
                artList: [],
                pages:{currentPageNum:1, pageSizeNum:5}
            };
        },
        watch: {
            '$route'() {
                this.getArt()
            }
        },
        methods: {
            // 过滤掉html元素
            delHtmlTag(str) {
                return str.replace(/<[^>]+>/g, "");
            },
            getArt() {
                this.axios.post('/blog/art.php',
                    qs.stringify({type:this.$route.params.type,pages:this.pages}))
                    .then((response) => {
                        this.artList = response.data.res;
                        this.pageTotal = parseInt(response.data['count']['count']);
                    });
            },

            handleCurrentChange() {
                this.axios.post('/blog/art.php',
                    qs.stringify({type:this.$route.params.type,pages:this.pages}))
                    .then((response) => {
                        this.artList = response.data.res;
                    });
            }
        },
        mounted() {

            this.getArt()
        }

    };
</script>

<style lang="less" scoped>
    .home-content{
        position: relative;
        z-index: 1;
    }
    .art-list {
        opacity: 0.888;
        filter: alpha(opacity=888);
        padding-bottom: 0.58rem;
    }

    .art h3 {
        font-size: 1.0rem;
    }

    .look-more {
        margin-top: 0.3rem;
        font-size: 0.18rem;
    }

    .content p {
        line-height: 1.5;
        font-size: 0.8rem;
        height: 3em;
        overflow: hidden;
    }
    .el-button{
        width: 100%;
    }
    a {
        color: #fff;
        text-decoration-line: none;
    }
    .block{
        padding: .5rem 0;
    }
</style>