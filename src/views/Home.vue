<template>
  <a-layout class="main">
    <a-layout-header class="header">
      <span>239-X-Admin</span>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200">
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          :style="{ height: '100%', borderRight: 0 }"
          theme="light"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                网站管理
              </span>
            </template>
            <a-menu-item key="1">WEB端基本设置 </a-menu-item>
            <a-menu-item key="2">WEB端访问统计</a-menu-item>
            <a-menu-item key="3">评论管理</a-menu-item>
            <a-menu-item key="4">服务器管理</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                博客管理
              </span>
            </template>
            <a-menu-item key="5">博客发表</a-menu-item>
            <a-menu-item key="6">博客查询</a-menu-item>
            <a-menu-item key="7">博客分类</a-menu-item>
            <a-menu-item key="8">博客统计</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                系统管理
              </span>
            </template>
            <a-menu-item key="9">菜单管理</a-menu-item>
            <a-menu-item key="10">用户管理</a-menu-item>
            <a-menu-item key="11">角色管理</a-menu-item>
            <a-menu-item key="12">资源管理</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          
          <div ref='editor'></div>
    <button @click='syncHTML'>同步内容</button>
    <div :innerHTML='content.html'></div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref ,reactive,onMounted,onBeforeUnmount} from "vue";
import WangEditor from 'wangeditor';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'
export default defineComponent({
  data() {
    return {
      value: "",
    };
  },
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    const editor = ref();
        const content = reactive({
            html: '',
            text: '',
        });
        let instance:any;
        onMounted(() => {
            instance = new WangEditor(editor.value);
            instance.highlight = hljs
            Object.assign(instance.config, {
                onchange() {
                    console.log('change');
                },
            });
            instance.create();
        });
        onBeforeUnmount(() => {
            instance.destroy();
            instance = null;
        });
        const syncHTML = () => {
            content.html = instance.txt.html();
        };



    return {
       syncHTML,
            editor,
            content,
      selectedKeys1: ref<string[]>(["2"]),
      selectedKeys2: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(["sub1"]),
    };
  },
});
</script>
<style lang="less" scoped>
@base-color: #607c58;
@base-light-color: #b6cfcb;

.main {
  height: 100%;
  ::v-deep(.ant-layout-header) {
    padding: 0 28px;
  }

  .header {
    background: linear-gradient(to right, #607c58, #B6CFCB;);
    color: #fff;

    span {
      font-size: 32px;
    }
  }
  ::v-deep(.ant-menu-submenu-selected),
  ::v-deep(.ant-menu-item-selected),
  ::v-deep(.ant-menu-item-active),
  ::v-deep(.ant-menu-submenu-active),
  ::v-deep(.ant-menu-submenu-title:hover) {
    color: @base-color;
  }

  ::v-deep(.ant-menu-item::after) {
    border-right: 3px solid @base-color;
  }

  ::v-deep(.ant-menu-submenu-arrow::after),
  ::v-deep(.ant-menu-submenu-arrow::before) {
    background: @base-color !important;
  }
}

.site-layout-background {
  background: #fff;
}
</style>