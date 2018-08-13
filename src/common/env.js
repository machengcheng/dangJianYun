export default {
    getEnv() {
        let hostname = window.location.host;
        if (hostname.indexOf('.soeasypay.cn')!==-1) {  // 正式
          return 'product'
        } else if (hostname == '172.22.48.168:820') { // 测试
          return 'test'
        } else if (hostname == '172.22.48.169:819') { // 开发
          return 'dev'
        } else if (hostname == 'dev1credit.soeasypay.cn') { //169
          return 'dev1credit'
        } else if (hostname == 'dev2credit.soeasypay.cn') { //179
          return 'dev2credit'
        } else if (hostname == 'dev1scredit.soeasypay.cn') { //169
            return 'dev1scredit'
        } else if (hostname == 'dev2scredit.soeasypay.cn') { //179
            return 'dev2scredit'
        } else { //本地
            return 'local'
        }
    },
  getHost() {
      let host = '';
      if(this.getEnv()==='product'){  // 正式
        host = window.location.origin
      }else if(this.getEnv()==='test'){ // 测试
        host = window.location.origin
      }else if(this.getEnv()==='dev'){ // 开发
        host = window.location.origin
      }else if(this.getEnv()==='dev1credit'){ //169
        host = window.location.origin
      }else if(this.getEnv()==='dev2credit'){ //179
        host = window.location.origin
      }else if(this.getEnv()==='dev1scredit'){ //169
        host = window.location.origin
      }else if(this.getEnv()==='dev2scredit'){ //179
        host = window.location.origin
      }else{ // 本地
        host = 'http'
      }
      return host
    },
    getPlatform() {
      if (location.pathname.indexOf('financial') !== -1) {  // 正式
          return 'financial'
      } else {
          return 'school' //financial
      }
    },
    isSchool() {
        return this.getPlatform()==='school';
    }
}
