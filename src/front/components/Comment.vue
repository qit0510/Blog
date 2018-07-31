<template>
    <div class="comment">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.name" placeholder="请输入您的昵称"></el-input>
            </el-form-item>

            <el-form-item label="邮箱">
                <el-input type="email" v-model="form.email" placeholder="请输入您的邮箱"></el-input>
            </el-form-item>

            <el-form-item label="性别">
                <el-select v-model="form.sex" placeholder="请输入">
                    <el-option label="男" value="Man"></el-option>
                    <el-option label="女" value="wuMan"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="评论内容">
                <el-input type="textarea" v-model="form.comm"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        data() {
            return {
                form: {
                    name: '',
                    email:'',
                    sex: '',
                    comm: ''
                }
            }
        },
        methods: {
            onSubmit() {
                
            }
        }

    }
</script>

<style scoped>

</style>