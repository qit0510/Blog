<template>
    <div class="artList">
        <div class="search">
            <el-row :gutter="0">
                <el-col :span="16">
                    <span class="caption">文章列表</span>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchValue"
                              clearable></el-input>
                </el-col>
            </el-row>

            <el-row class="btn" :gutter="0">
                <el-col :span="24">
                    <router-link to="/admin/artedit">
                        <el-button class="create-btn" type="text" icon="el-icon-plus">新建</el-button>
                    </router-link>
                </el-col>
            </el-row>
        </div>
        <div class="table">
            <el-table border stripe :data="ArtList" style="width: 100%">
                <el-table-column type="selection"></el-table-column>

                <el-table-column type="index" width="66" label="文章ID"></el-table-column>

                <el-table-column label="文章标题">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.art_name}}</span>
                    </template>
                </el-table-column>

                <el-table-column prop="art_pubtime" label="发布日期" sortable>
                </el-table-column>

                <el-table-column label="评论数目">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.art_comm}}</span>
                    </template>
                </el-table-column>

                <el-table-column label="栏目分类"  prop="art_topic">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.art_topic}}</span>
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="text">
                            <router-link :to="{path:'/admin/artedit',query: {info: scope.row}}">
                                <span class="el-icon-edit"></span>
                            </router-link>
                        </el-button>
                        <el-button size="mini" type="text" icon="el-icon-delete"
                                   @click="handleDelete(scope.$index, scope.row)">
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>
    import qs from 'qs';
    export default {
        name: "ArtList",
            data() {
                return {
                    searchValue: '',
                    ArtList: [],
                };
            },
        methods: {
            handleDelete(index, row) {
                this.ArtList.splice(index, 1);
                this.axios.post('/blog/artlist.php', qs.stringify(row));
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
        mounted() {
            var self = this;
                this.axios.get('/blog/artlist.php')
                .then(function (response) {
                    self.ArtList = response.data;
                })
        },

    }
</script>

<style scoped>
    .artList {
    }

    .search {
        padding: 20px 0;
    }

    .caption {
        font-size: 18px;
        padding-left: 0.99rem;
    }

    .create-btn {
        width: 100%;
        border: 1px dashed #ccc;
    }

    .btn {
        margin: 10px;
    }

    .table {
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