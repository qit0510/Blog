<template>
    <div class="artEdit">
        <div class="edit-cat">
            <p class="caption">发布文章</p>
        </div>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

            <!--ref="form" :model="form" label-position="left"-->
            <el-form-item label="文章标题" placeholder="请输入标题" prop="name">
                <el-input v-model="ruleForm.name"  style="min-width: 60px;width: 30%"></el-input>
            </el-form-item>

            <el-form-item label="栏目分类" prop="topic">
                <el-select v-model="ruleForm.topic" placeholder="请选择栏目">
                    <el-option v-for="(item,index) in topic" :key="index"
                               :label=item.topic_name :value=item.topic_value>
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="标签" prop="tag">
                <el-checkbox-group v-model="ruleForm.tag">
                    <el-checkbox  v-for="(item,index) in tag" :key="index"
                                  :label=item.tag_name name="type">
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <editor :edit="ruleForm.edit" @sendContent="editContent"></editor>

            <el-form-item class="btn">
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>


    </div>
</template>

<script>
    import qs from 'qs';
    import Editor from '@/common/components/Editor.vue'
    export default {
        name: "ArtEdit",
        components: {
            Editor
        },
        data () {
            return {
                searchValue:'',
                topic:[],
                tag:[],
                ruleForm: {
                    id:'',
                    name: '',
                    topic:'',
                    tag: [],
                    edit:'',
                    ismodel:false
                },
                rules: {
                    name: [
                        { required: true, message: '请输入文章标题', trigger: 'blur' },
                        { min: 1,  message: '最少一个字符', trigger: 'blur' }
                    ],
                    topic: [
                        { required: true, message: '请选择栏目', trigger: 'change' }
                    ],
                    tag: [
                        { type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName){
                // 信息无误
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // 上传
                        if(this.$route.query.info){
                            this.ruleForm.id = this.$route.query.info.art_id;
                            this.ruleForm.ismodel = true;
                        }
                        this.axios.post('/blog/artadd.php',
                            qs.stringify(this.ruleForm,this.$route.query.info),
                        );
                        // 弹窗
                        this.$notify({
                            title: '成功',
                            message: '文章插入成功，请到文章列表中查看',
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

            editContent (content) {
                this.ruleForm.edit = content;
            }
        },
        mounted () {
            var self = this;
            this.axios.post('/blog/artadd.php')
                .then(function (response) {
                    self.topic = response.data[0];
                    self.tag = response.data[1];
                })

            var _route=this.$route.query.info;
            if (_route) {
                this.ruleForm.name = _route.art_name;
                this.ruleForm.topic = _route.art_topic;
                this.ruleForm.tag.push(_route.art_tag);
                this.ruleForm.edit = _route.art_content;
            }

        }
    }
</script>

<style scoped>
    .artEdit{
        margin: 10px;
    }
    .create-btn{
        width: 100%;
        border: 1px dashed #ccc;
    }
    .caption{
        font-size: 1.2rem;
        font-weight: normal;
    }
    .btn{
        margin:.66rem;
        text-align: center;
    }


</style>