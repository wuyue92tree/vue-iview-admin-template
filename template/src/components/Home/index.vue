<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 520px;
  margin: 0 auto;
  margin-right: 10px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Item 1
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
            </MenuItem>
            <MenuItem name="4" style="text-align: right; width: 200px;">
              <Dropdown style="text-align: left;">
                <a href="javascript:void(0)" v-if="nickname" style="color: white">
                  Test
                  <Icon type="md-arrow-dropdown" />
                </a>
                <a href="javascript:void(0)" v-else style="color:white;">
                  Test
                  <Icon type="md-arrow-dropdown" />
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem @click.native="changePath('/profile')">个人资料</DropdownItem>
                  <DropdownItem v-if="is_staff" @click.native="getAdmin">后台管理</DropdownItem>
                  <DropdownItem divided @click.native="logout">退出登录</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1" @click.native="changePath('/list')">列表</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style=contentStyle>
          <router-view />
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      nickname: '',
      is_staff: false,
      contentStyle: 'padding: 0 24px 24px; minHeight: ' + window.screen.height + 'px;'
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
      this.$db.del('access_token')
    },
    changePath (path) {
      this.$router.push(path)
    },
    getAdmin () {
    }
  }
}
</script>
