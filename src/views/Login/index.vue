<template>
  <div class="login-container">
    <div class="main">
      <div class="title">
        {{ $t('login.title') }}
        <lang-select/>
      </div>
      <el-form
        ref="loginForm"
        :model="ruleForm"
        :rules="rules"
        label-position="left"
        class="loginform">
        <el-form-item
          prop="username"
          class="citemform">
          <i class="el-icon-info loginicon"/>
          <el-input
            v-model="ruleForm.username"
            :placeholder="$t('login.username')"

            class="inputlogin"/>
        </el-form-item>
        <el-form-item
          prop="password"
          class="citemform">
          <i class="el-icon-setting loginicon"/>
          <el-input
            v-model="ruleForm.password"
            :placeholder="$t('login.password')"
            class="inputlogin"/>
        </el-form-item>
        <el-button
          type="primary"
          class="loginbutton"
          @click="login">
          {{ $t('login.button') }}
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { Login }  from '@/api/user'
  import LangSelect from '@/components/LangSelect/index.vue'
  import store      from '@/store'
  import NProgress  from 'nprogress'

  export default {
    name: 'Login',
    components: {
      LangSelect
    },
    data () {
      return {
        ruleForm: {
          username: 'admin',
          password: '123'
        },
        rules: {
          username: [
            { required: true, message: '请输入用户姓名', trigger: 'blur' },
            { min: 3, max: 58, message: '长度在 3 到 58个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      login () {
        (this.$refs['loginForm']).validate(async (valid) => {
          if (valid) {
            NProgress.start()
            const status = await Login({ ...this.ruleForm })
            if (status) {
              try {
                store.commit('SET_TOKEN', status.token)
                store.commit('SET_ROLE', status.role)
                store.commit('SET_USERINFO', status.userInfo)
              } catch (error) {
                NProgress.done()
                store.commit('SIGN_OUT')
                throw error
              }
              this.$router.replace(this.$route.query.redirect)
            }
          } else {
            return false
          }
        })
      }
    },
    watch: {
      $route() {
        console.log(this.$route.query)
      }
    },
  }
</script>

<style lang="scss">
  .login-container {
    box-sizing: border-box;
    position: fixed;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-color: #2d3a4b;
    background-size: cover;
    background-position: center center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #eee;

    .main {
      position: absolute;
      width: 300px;
      left: 50%;
      padding: 20px 50px 10px 50px;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
    }

    .title {
      font-size: 20px;
      color: #eee;
      text-align: center;
      font-weight: bold;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 10px;
    }

    .inputlogin {
      width: 244px;
    }

    .loginicon {
      width: 32px;
      text-align: center;
    }

    .citemform {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding: 9px;
    }

    .el-input input {
      background: transparent;
      border: none;
      color: #eee;
    }

    .el-form-item__error {
      left: 46px
    }

    .loginbutton {
      width: 100%;
    }
  }

</style>
