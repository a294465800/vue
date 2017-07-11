var index = new Vue({
  el: '#form',
  data: {
    tel: '',
    //控制手机class
    tel_class: {
      success: false,
      error: false
    },

    captcha: '',
    //控制验证码class
    captcha_class: {
      disabled: true,
      login_btn: false,
      success: false,
      error: false
    },

    password: '',
    //控制密码class
    password_class: {
      success: false,
      error: false
    },

    repassword: '',
    //密码二次检验class
    repassword_class: {
      success: false,
      error: false
    }
  },
  methods: {

    //手机验证
    telCheck() {
      if (!this.tel) {
        return false
      } else if (this.tel.length != 11 || !(/^1[3|4|5|7|8][0-9]\d{8}$/).test(this.tel)) {
        console.log('请输入正确的手机号码！')
        this.tel_class.success = false
        this.tel_class.error = true
        this.captcha_class.disabled = true
        this.captcha_class.login_btn = false
      } else {
        console.log('手机号格式正确')
        this.tel_class.success = true
        this.tel_class.error = false
        this.captcha_class.disabled = false
        this.captcha_class.login_btn = true
      }
    },

    //验证码验证
    captchaCheck(){
      if(!this.captcha){
        return false
      } else if(this.captcha.length != 6){
        this.captcha_class.success = false
        this.captcha_class.error = true
      }else {
        this.captcha_class.success = true
        this.captcha_class.error = false
      }
    },

    //密码检验
    passwordCheck(){
      if(!this.password){
        return false
      }else if (this.password.length <= 8 || !(/^[0-9a-zA-Z]+$/).test(this.password)){
        console.log('密码格式不对')
        this.password_class.success = false,
        this.password_class.error = true
      }else {
        console.log('密码正确')
        this.password_class.success = true,
        this.password_class.error = false
      }
    },

    //密码二次检验
    repasswordCheck(){
      if(this.password != this.repassword) {
        console.log('两次输入的密码不一致')
        this.repassword_class.success = false,
        this.repassword_class.error = true
      }else {
        console.log('密码一致')
        this.repassword_class.success = true
        this.repassword_class.error = false
      }
    }
  },
})