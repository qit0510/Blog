<template>
    <div class="tag">
        <div class="search">
            <el-row  :gutter="0">
                <el-col :span="16">
                    <span class="caption">标签管理</span>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchValue" clearable></el-input>
                </el-col>
            </el-row>
            <el-row class="btn" :gutter="0">
                <el-col :span="24">
                    <el-button class="create-btn" @click="elaBox()" type="text" icon="el-icon-plus">新建</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table">
            <el-table border stripe :data="tag_list" style="width: 100%">
                <el-table-column type="selection"></el-table-column>

                <el-table-column type="index" width="66" label="标签ID"></el-table-column>

                <el-table-column  property="tag_name"  label="标签名称"></el-table-column>

                <el-table-column  property="tag_time"  label="创建时间"></el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></el-button>
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
        name: "Tag",
        data() {
            return {
                searchValue:'',
                tag_list: [],
            };
        },
        methods: {
            handleEdit(index, row) {
                this.elaBox(row.tag_name,row.tag_id);
                row['tag'] = 'update';
            },
            handleDelete(index, row) {
                this.tag_list.splice(index, 1);
                row['tag'] = 'delete';
                this.axios.post('/blog/tag.php', qs.stringify(row))
            },
            elaBox(name,id) {
                this.$prompt('请输入标签', '添加标签', {
                    inputValue:name,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '插入标签: ' + value,
                    });
                    var arr=[];
                    arr['tag_id'] =id;
                    arr['con'] =name;
                    arr['tag_name'] =value;
                    this.axios.post('/blog/tag.php', qs.stringify(arr));
                    location.reload();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '标签插入已取消'
                    });
                });
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
            },
        },
        mounted () {
            var self = this;
            this.axios.post('/blog/tag.php')
                .then(function (response) {
                    self.tag_list = response.data;
                });
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