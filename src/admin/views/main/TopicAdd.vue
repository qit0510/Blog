<template>
    <div class="topic-add">
        <p class="caption">栏目添加</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <!--ref="form" :model="form"  label-position="left"-->
            <el-form-item label="栏目名称" prop="name">
                <el-input v-model="ruleForm.name" style="min-width: 60px;width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="栏目的值" prop="value">
                <el-input v-model="ruleForm.value" style="min-width: 60px;width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="栏目描述">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            <!--<el-form-item>-->
            <!--<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>-->
            <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
            <!--</el-form-item>-->
        </el-form>
    </div>
</template>

<script>
    import qs from 'qs';

    export default {
        name: "TopicAdd",
        data() {
            return {
                searchValue: '',
                ruleForm: {
                    id: '',
                    name: '',
                    value: '',
                    desc: '',
                    ismodel: false
                },
                rules: {
                    name: [
                        {required: true, message: '请输入栏目名称', trigger: 'blur'},
                        {min: 1, message: '最少一个字符', trigger: 'blur'}
                    ],
                    value: [
                        {required: true, message: '请输入栏目的值，尽量和名称一致', trigger: 'blur'},
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                // 数据判断是否正确
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //上传数据
                        if (this.$route.query.info) {
                            this.ruleForm.id = this.$route.query.info.topic_id;
                            this.ruleForm.ismodel = true;
                        }
                        this.axios.post('/blog/topic.php',
                            qs.stringify(this.ruleForm),
                        );
                        this.$notify({
                            title: '成功',
                            message: '栏目插入成功，请到栏目列表中查看',
                            type: 'success'
                        });
                    } else {
                        this.$notify({
                            title: '警告',
                            message: '您的输入有误,查证后重新确定',
                            type: 'warning'
                        });
                        return false;
                    }
                });


            },
            editContent(content) {
                this.ruleForm.edit = content;
            }
        },
        mounted() {
            var _route = this.$route.query.info;
            console.log(_route);
            if (_route) {
                this.ruleForm.name = _route.topic_name;
                this.ruleForm.value = _route.topic_value;
                this.ruleForm.desc = _route.topic_desc;
            }
        }

    }
</script>

<style scoped>
    .topic-add {
        margin: 10px;
    }
</style>