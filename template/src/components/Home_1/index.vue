<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 34px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <div class="layout-logo-left">
          <div style="padding: 10px; color: white; text-align:center;">
            <span v-if="isCollapsed">
              <strong>Home</strong>
            </span>
            <span v-else>
              <strong>Home</strong>
            </span>
          </div>
        </div>
        <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
          <Submenu name="1">
              <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  导航
              </template>
              <MenuItem name="1-1" @click.native="changePath('/list')">列表</MenuItem>
          </Submenu>
          <!-- <MenuItem name="1-2" @click.native="changePath('/site')">
          <Icon type="search"></Icon>
          <span>站点管理</span>
          </MenuItem> -->
          <MenuItem name="1-3" @click.native="changePath('/setting')">
          <Icon type="md-settings" />
          <span>设置</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Row>
            <Col :span="2">
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 20px 20px'}" type="md-menu" size="24"></Icon>
            </Col>
            <Col :span="4" :offset="18">
            <div style="padding-right: 25px; float: right;">
              <Dropdown>
                <a href="javascript:void(0)" v-if="nickname">
                  {{ nickname }}
                  <Icon type="arrow-down-b"></Icon>
                </a>
                <a href="javascript:void(0)" v-else>
                  {{ username }}
                  <Icon type="arrow-down-b"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem @click.native="changePath('/profile')">个人资料</DropdownItem>
                  <DropdownItem v-if="is_staff" @click.native="getAdmin">后台管理</DropdownItem>
                  <DropdownItem divided @click.native="logout">退出登录</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Avatar style="margin-bottom: 10px;" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            </div>
            </Col>
          </Row>
        </Header>
        <Content :style=contentStyle>
          <div :style="{padding: '10px'}">
            <router-view></router-view>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nickname: 'Admin',
      username: 'Admin',
      is_staff: false,
      isCollapsed: false,
      contentStyle: 'margin: 10px; background: #fff; minHeight: ' + window.screen.height + 'px;'
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    logout () {
      this.$router.push('/login')
      this.$db.del('access_token')
    },
    changePath (path) {
      this.$router.push(path)
    },
    getAdmin () {
    }
  },
  mounted () {
    // this.getProfile()
  }
}
</script>
