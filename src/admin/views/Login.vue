<template>
    <div class="login">
        <particlesw></particlesw>
        <div class="login-main">
            <div class="log">
                <h2>BeastBoy is blog</h2>
            </div>
            <div class="login-content">
                <h3>用户登陆</h3>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-input v-model="form.name" placeholder="请输入用户名或邮箱"></el-input>
                    <el-input type="password" v-model="form.psd" placeholder="请输入密码"></el-input>
                    <el-switch v-model="form.isPwd"></el-switch>
                    <el-button style="width: 100%" type="primary"  @click="onSubmit">提交</el-button>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>
    import qs from 'qs';
    import Particlesw from '@/common/components/Particlesw.vue'
    export default {
        name: 'home',
        components: {
            Particlesw,
        },
        data() {
            return {
                form: {
                    name: '',
                    psd:'',
                    isPwd:false
                },
            };
        },
        methods: {
            onSubmit () {
                var self = this;
                this.axios.post('/blog/login.php',
                    qs.stringify(this.form)
                )
                    .then(function (response) {
                        if (response.data == 'success')
                        {
                            self.$router.push('/admin/topiclist');
                        }else {
                            self.$notify.error({
                                title: '错误',
                                message: '这是一条错误的提示消息'
                            });
                        }
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
            }
        },
        mounted () {

        }
    }
</script>

<style scoped>
    .login {
        position: absolute;
        width: 100%;
        height: 100vh;
        background: #3f9ffe;
    }

    .login-main {
        position: relative;
        z-index: 1;
        width: 500px;
        margin: 0 auto;
    }

    h2 {
        margin-top: 120px;
        text-align: center;
        font-size: 1.6rem;
        color: #fff;
    }

    .login-content {
        width: 300px;
        margin: 0 auto;
        margin-top: 44px;
        padding: 33px;
        background: #fff;
        border-radius: 0.1rem;
    }

    h3 {
        text-align: center;
        font-size: .9rem;
        color: #3f9ffe;
    }
    .el-input,.el-switch{
        padding: .2rem 0px;
    }
</style>



