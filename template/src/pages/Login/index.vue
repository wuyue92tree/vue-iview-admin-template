<style>
.login {
  margin-top: 10%;
  width: 340px;
  height: 210px;
  margin-left: auto;
  margin-right: auto;
  text-align: center
}
</style>

<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="md-log-in" />
          欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <Input v-model="form.username" placeholder="请输入用户名" />
              <span slot="prepend">
                <Icon :size="16" type="person"></Icon>
              </span>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码" />
              <span slot="prepend">
                <Icon :size="14" type="locked"></Icon>
              </span>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$router.push({path: '/'})
    }
  }
}
</script>
