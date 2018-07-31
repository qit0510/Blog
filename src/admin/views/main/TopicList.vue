<template>
    <div class="topicList">
        <div class="search">
            <el-row  :gutter="0">
                <el-col :span="16">
                    <span class="caption">栏目列表</span>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchValue" clearable></el-input>
                </el-col>
            </el-row>
            <el-row class="btn" :gutter="0">
                <el-col :span="24">
                    <router-link to="/admin/topic">
                        <el-button class="create-btn" type="text" icon="el-icon-plus">新建</el-button>
                    </router-link>
                </el-col>
            </el-row>
            <!--<el-alert title="成功提示的文案" type="success" show-icon>-->
            <!--</el-alert>-->
        </div>
        <div class="table">
            <el-table border stripe :data="topicList" style="width: 100%">
                <el-table-column type="selection"></el-table-column>

                <el-table-column type="index" width="66" label="栏目ID"></el-table-column>

                <el-table-column  property="topic_name"  label="栏目标题"></el-table-column>

                <el-table-column  property="topic_value"  label="栏目值"></el-table-column>


                <el-table-column  property="topic_time"  label="创建时间"></el-table-column>

                <el-table-column  property="topic_desc"  label="描述"></el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <router-link :to="{path:'/admin/topic',query: {info: scope.row}}">
                            <span class="el-icon-edit"></span>
                        </router-link>

                        <el-button size="mini" type="text"  icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)"></el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>

    </div>
</template>

<script>
    import qs from 'qs';
    export default {
        name: "TopicList",
        data() {
            return {
                searchValue:'',
                topicList: [],
            };
        },
        methods: {
            handleEdit(index, row) {
                console.log(index,row)
            },
            handleDelete(index, row) {
                this.topicList.splice(index, 1);
                this.axios.post('/blog/topiclist.php', qs.stringify(row));
            },

            formatter(row) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            }
        },
        mounted () {
            var self = this;
            this.axios.post('/blog/topiclist.php')
                .then(function (response) {
                    self.topicList = response.data;
                })
        }
    }
</script>

<style scoped>

    .search{
        padding: 20px 0;
    }
    .caption{
        font-size: 18px;
        padding-left: 0.99rem;
    }
    .create-btn{
        width: 100%;
        border: 1px dashed #ccc;
    }
    .btn{
        margin: 10px;
    }
    .table{
        margin: 10px;
    }
    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .grid-content {
        min-height: 36px;
    }
</style>