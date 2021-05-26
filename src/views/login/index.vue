<template>
  <div class="login-container">
    <!-- <el-form
      ref="formRef"
      :model="loginForm"
      :rules="loginRules"
      auto-complete="on"
      label-position="left"
      class="login-form"
    >yarn
      <h3 class="title">Alex博客后台管理系统</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          prop="password"
          placeholder="请输入账号"
        ></el-input>
        <span class="svg-container svg-container_login">
          <svg
            t="1620687871717"
            class="icon"
            viewBox="0 0 1820 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1160"
          >
            <path
              d="M910.317037 566.613333c135.68-0.094815 245.665185-110.08 245.665185-245.76S1045.997037 75.093333 910.222222 75.093333 664.462222 185.173333 664.462222 320.853333s109.985185 245.665185 245.665185 245.76c-211.057778 0.094815-382.198519 171.235556-382.198518 382.293334h764.586667c0-211.057778-171.045926-382.198519-382.198519-382.293334z"
              p-id="1161"
            ></path>
          </svg>
        </span>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password"
          show-password
        ></el-input>
        <span class="svg-container">
          <svg
            t="1620688765322"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2065"
          >
            <path
              d="M817.079812 390.04953H756.063133v-81.339539c0-134.512576-109.475344-243.931638-244.062621-243.931639S267.93482 174.197414 267.93482 308.707944v81.341586h-61.015655c-33.69952 0-61.016679 27.301809-61.016679 60.98291v447.206298c0 33.679054 27.318182 60.98291 61.016679 60.98291h610.160647c33.69952 0 61.016679-27.302833 61.016679-60.98291V451.031417c0-33.680077-27.318182-60.981886-61.016679-60.981887z m-488.129336-81.341586c0-100.882642 82.109066-182.948729 183.049012-182.948729 100.939947 0 183.049013 82.066087 183.049013 182.948729v81.341586h-366.098025v-81.341586z m488.129336 589.530794H206.919165V451.031417h610.160647v447.207321z"
              p-id="2066"
              fill="#333333"
            ></path>
            <path
              d="M512.000512 786.446629c16.84362 0 30.507828-13.657045 30.507827-30.491455V593.335447c0-16.832364-13.664208-30.491455-30.507827-30.491455s-30.507828 13.659091-30.507828 30.491455v162.620751c-0.001023 16.83441 13.664208 30.490431 30.507828 30.490431z"
              p-id="2067"
            ></path></svg
        ></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="onSubmit()"
          >登录</el-button
        >
      </el-form-item>
    </el-form> -->
    <!-- <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles> -->
    <a-form
      ref="loginRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <h3 class="title">Alex博客后台管理系统</h3>
      <a-form-item ref="username" name="username">
        <a-input v-model:value="loginForm.username" placeholder="请输入账号" />
        <span class="svg-container svg-container_login">
          <svg
            t="1620687871717"
            class="icon"
            viewBox="0 0 1820 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1160"
          >
            <path
              d="M910.317037 566.613333c135.68-0.094815 245.665185-110.08 245.665185-245.76S1045.997037 75.093333 910.222222 75.093333 664.462222 185.173333 664.462222 320.853333s109.985185 245.665185 245.665185 245.76c-211.057778 0.094815-382.198519 171.235556-382.198518 382.293334h764.586667c0-211.057778-171.045926-382.198519-382.198519-382.293334z"
              p-id="1161"
            ></path>
          </svg>
        </span>
      </a-form-item>
      <a-form-item ref="password" name="password">
        <a-input
          v-model:value="loginForm.password"
          placeholder="请输入密码"
          show-password
        />
        <span class="svg-container">
          <svg
            t="1620688765322"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2065"
          >
            <path
              d="M817.079812 390.04953H756.063133v-81.339539c0-134.512576-109.475344-243.931638-244.062621-243.931639S267.93482 174.197414 267.93482 308.707944v81.341586h-61.015655c-33.69952 0-61.016679 27.301809-61.016679 60.98291v447.206298c0 33.679054 27.318182 60.98291 61.016679 60.98291h610.160647c33.69952 0 61.016679-27.302833 61.016679-60.98291V451.031417c0-33.680077-27.318182-60.981886-61.016679-60.981887z m-488.129336-81.341586c0-100.882642 82.109066-182.948729 183.049012-182.948729 100.939947 0 183.049013 82.066087 183.049013 182.948729v81.341586h-366.098025v-81.341586z m488.129336 589.530794H206.919165V451.031417h610.160647v447.207321z"
              p-id="2066"
              fill="#333333"
            ></path>
            <path
              d="M512.000512 786.446629c16.84362 0 30.507828-13.657045 30.507827-30.491455V593.335447c0-16.832364-13.664208-30.491455-30.507827-30.491455s-30.507828 13.659091-30.507828 30.491455v162.620751c-0.001023 16.83441 13.664208 30.490431 30.507828 30.490431z"
              p-id="2067"
            ></path></svg
        ></span>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" style="width: 100%" @click="onSubmit"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRaw } from "vue";
import { login } from '@a/login' 
export default defineComponent({
  name: "Login",
  setup() {
    const loginRef = ref();
    const loginForm = reactive({
      username: "",
      password: "",
    });
    const loginRules = {
      username: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
      ],
    };

    const onSubmit = () => {
      loginRef.value
        .validate()
        .then(() => {
          console.log("values", loginForm, toRaw(loginForm));
          login(loginForm)
          // $store.dispatch("/auth/login", loginForm)
          .then(response => {
              console.log("login success!!")
          })
        })
        .catch((error) => {
          console.log("error", error);
        });
    };

    return {
      loginRef,
      loginForm,
      loginRules,
      onSubmit,
    };
  },
});
</script>>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .ant-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .ant-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
