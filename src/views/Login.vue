<template>
  <a-layout class="main">
    <a-layout-content class="content">
      <a-card class="card" title="239-X-后端管理系统" :headStyle="headStyle" :bordered="false">
        <a-form
          layout="inline"
          :model="formState"
          @finish="handleFinish"
          @finishFailed="handleFinishFailed"
        >
          <a-form-item>
            <a-input v-model:value="formState.user" placeholder="用户名">
              <template #prefix
                ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="formState.password"
              type="password"
              placeholder="密码"
            >
              <template #prefix
                ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="formState.user === '' || formState.password === ''"
            >
             登录
            </a-button>
          </a-form-item>
        </a-form>
      </a-card></a-layout-content
    >
    <a-layout-footer class="footer"
      >Copyright © 2021-present 239-X-Admin</a-layout-footer
    >
  </a-layout>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, reactive, UnwrapRef } from "vue";
interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
  data() {
    return {
      headStyle: {
        fontSize: 18,
        textAlign: "center",
        border:'none',
        color:'#fff'
      },
    };
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: "",
      password: "",
    });
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  background: url("../assets/img/lg_bg.jpg") no-repeat;
  background-size: 100% 100%;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    .card {
      background: none;
    }
  }

  .footer {
    width: 100%;
    background: none;
    text-align: center;
    color: white;
  }
}
</style>
