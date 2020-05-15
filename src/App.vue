<template>
    <div id="app" :style="{width:PageWidth}">
    <navbar></navbar>
    <div :class="isPhone ? 'vtuber_list_phone' : 'vtuber_list'">
      <!-- direct to -->
      <div v-for="(item , index) in vtuber_msg" :key="index" class="vtuber_card">

        <el-tooltip class="item" effect="dark" :content="item.name + '的官组投稿'" placement="top-start">
          <div @click="showTost(item.uid)" v-show="!isPhone" style='cursor:pointer' :style="{zIndex:Zindex2 - index}" class="btn_bilibili"><img src="./assets/bilibili.png"></div>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="'跳转Youtube空间'" placement="top-start">
          <div @click="directTo(item.youtube)" v-show="!isPhone" style='cursor:pointer' :style="{zIndex:Zindex2 - index}" class="btn_youtube"><img src="./assets/youtube.png"></div>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="'跳转twitter'" placement="top-start">
          <div @click="directTo(item.twitter)" v-show="!isPhone" style='cursor:pointer' :style="{zIndex:Zindex2 - index}" class="btn_twitter"><img src="./assets/twitter.png"></div>
        </el-tooltip>

        <a slot="reference" class="slot" target='_blank' :href="'https://live.bilibili.com/' + vtuber_msg[index].room">
          <div class="real_vtuber_card" :style="{zIndex:Zindex - index}">
            <div class="card_1">
              <img class="avatar" :src="vtuber_msg[index].face">
              <div class="vt_name">{{item.name}}</div>
              <div class="vt_sign">{{item.sign}}</div>
              <div class="isLive" :class="(item.isLiving == '未开播') ? 'no_open_boder' : (item.isLiving == '轮播中') ? 'roll_open_boder' : ''">
                <div :class="item.isLiving == '未开播' ? 'no_open' : (item.isLiving == '轮播中') ? 'roll_open' : ''" class="circle"></div>
                <div class="isLive_text" :class="item.isLiving == '未开播' ? 'no_open_text' : (item.isLiving == '轮播中') ? 'roll_open_text' : ''">{{item.isLiving}}</div>
              </div>
            </div>

            <div v-show="!isPhone" class="living">最近在播&nbsp;&nbsp;</div>
            <div class="TV_icon"></div>
            <div class="TV_icon2"></div>

            <div v-show="!isPhone" class="title">{{item.title}}</div>
            <div v-show="!isPhone" class="recent" :class="'item' + index">
              <img class="recent_img" src="">
            </div>
          </div>
        </a>
      </div>

      <transition name="fade">
        <div class="videoList" v-show="isShowVideo && !isPhone">
          <div @click="close()" style='cursor:pointer' class="close"><i class="el-icon-close"></i></div>
          <router-view></router-view>
        </div>
      </transition>

    </div>

    </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
  name: 'Home',
  components: {
    navbar
  },
  data(){
    return{
      isShowVideo:false,
      isPhone: false,
      Zindex: 100,
      Zindex2: 101,
      PageWidth: 0,
      ReqOver: 0,
      switchIndex: 0,
      vtuber_id:['21584153','21132965','21144047','13946381','8899503','14917277','11588230','190577','21560356','21129632'
      ,'21752681','21545232','21133979','21130785','21107534','4664126','21219990','14275133','21131813','21420932'
      ,'21421141','21267062','21572617','21752694','21752686','21583736','21752719','21752710','21618138','21641569',
      '21618129','21908196','21908209','21908222'],
      vtuber_msg: null
    }
  },
  watch:{
    ReqOver(val){
      // 判断请求是否结束
      if(val === this.vtuber_msg.length){
        // 直播中的排前面
        for(var i = 0;i < this.vtuber_msg.length;i++){
          if(this.vtuber_msg[i].isLiving === '直播中'){
            [this.vtuber_msg[this.switchIndex] , this.vtuber_msg[i]] = [this.vtuber_msg[i] , this.vtuber_msg[this.switchIndex]]
            this.switchIndex++
          }
        }

        // 添加最近在播的截图
        for(var i = 0;i < this.vtuber_msg.length;i++){
          let cal = 'item' + i
          this.$el.querySelector('.' + cal).querySelector('.recent_img').src = this.vtuber_msg[i].url
        }
      }
    },
    $route(to , from){
      if(to.path === '/holog' || to.path === '/holog/'){
        this.isShowVideo = false
      }
    }
  },
  mounted(){
    this.vtuber_msg = this.$store.state.vtuber_msg
    this.$router.push({path : '/holog/'})

    // 请求api
    this.fetchTogetData()

    // 初始化响应页面
      this.PageWidth = document.documentElement.clientWidth + 'px'
      document.body.style.width = document.documentElement.clientWidth + 'px'
      if(parseInt(this.PageWidth) < window.screen.availWidth - 40){
        this.PageWidth = window.screen.availWidth - 40 + 'px'
        document.body.style.width = window.screen.availWidth - 40 + 'px'
      }

    // 初始化判断是不是手机
    let width = document.documentElement.offsetWidth || document.body.offsetWidth
		if(width < 480){
        this.isPhone = true
    }

    // 监听页面宽度
    window.onresize = () => {
      if(document.documentElement.offsetWidth > parseInt(this.PageWidth) || document.body.offsetWidth > parseInt(this.PageWidth)){
        this.PageWidth = document.documentElement.clientWidth + 'px'
        document.body.style.width = document.documentElement.clientWidth + 'px'
      }
      if(document.documentElement.offsetWidth < 480 || document.body.offsetWidth < 480){
        this.isPhone = true
      }else{
        this.isPhone = false
      }
    }
  },
  methods:{
    close(){
      this.isShowVideo = false
      this.$router.push({path:'/holog'})
    },
    showTost(uid){
      this.isShowVideo = true
      this.$router.push({path:'/videoList' , query:{uid : uid}})
    },
    directTo(url){
      window.open(url)
    },
    fetchTogetData(){
      for(var i = 0;i < this.vtuber_id.length;i++){
        (function(index , obj){
          let url = 'https://happycl.kaza.workers.dev/https://api.live.bilibili.com/room/v1/Room/get_info?id=' + obj.vtuber_id[index]
          obj.$axios.get(url).then((response) => {
            obj.isLiving_status(response.data.data , index , obj.vtuber_id[index])
          })
        })(i , this)
      }
    },
    isLiving_status(getData , index , roomNum){
      let data = getData
      if(data.live_status === 0){
        this.vtuber_msg[index].isLiving = '未开播'
      }else if(data.live_status === 1){
        this.vtuber_msg[index].isLiving = '直播中'
      }else{
        this.vtuber_msg[index].isLiving = '轮播中'
      }
      this.vtuber_msg[index].room = roomNum
      this.vtuber_msg[index].title = data.title
      this.vtuber_msg[index].url = 'https://images.weserv.nl/?url=' + data.keyframe
      this.vtuber_msg[index].uid = data.uid
      this.ReqOver++
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
</style>
<style scoped lang="scss">
html , #app{
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgb(248, 248, 248);
}

.fade-enter-active{
  transition: opacity .5s;
  transform: translate(-50% , -40%);
}
.fade-leave-active{
  transition: opacity .5s;
  transform: translate(-50% , -50%);
}
.fade-enter{
  opacity: 0;
  transform: translate(-50% , -50%);
}
.fade-leave-to{
  opacity: 0;
  transform: translate(-50% , -40%);
}

// PC网页样式
.vtuber_list{
  a{text-decoration: none;}
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 2500px;
  width: 100%;
  margin: 0 0 55px;

  .videoList{
    box-shadow: 0px 5px 5px rgb(223, 223, 223);
    z-index: 100000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 500px;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 1);
    .close{
      width: 30px;
      height: 30px;
      position: absolute;
      background-color: rgb(250, 250, 250);
      border-radius: 30px;
      right: 10px;
      top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover{
        background-color: rgb(231, 231, 231);
      }
    }
  }

  .vtuber_card{
    width: 30%;
    height: 150px;
    vertical-align: middle;
    margin-left: 2.5%;
    margin-top: 35px;
    background-color:rgb(255, 255, 255);
    color: rgb(36, 35, 35);
    position: relative;

    @mixin video_btn{
      position: absolute;
      width: 30px;
      height: 30px;
      top: 10px;
      background-color: rgb(250, 250, 250);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      transition: 0.2s;
      img{
        width: 20px;
        height: 20px;
      }
      &:hover{background-color: rgb(231, 231, 231);}
      @content;
    }
    .btn_youtube{
      @include video_btn{
        right: 45px;
      }
    }
    .btn_bilibili{
      @include video_btn{
        right: 10px;
      }
    }
    .btn_twitter{
      @include video_btn{
        right: 80px;
      }
    }


    .real_vtuber_card{
      img{position: absolute;width: 15%;left: 10%;top: 25%;}
      width: 100%;
      height: 150px;
      background-color: rgb(255, 255, 255);
      overflow: hidden;
      position: relative;
      transition: 0.5s;
      &:hover{
        height: 0;
        padding-bottom: calc(13.48vw + 250px);
        position: absolute;
        box-shadow: 1px 1px 10px #cfcdcd;
        z-index: 100;
      }
      .isLive{
        position: relative;
        height: 20px;
        width: 25%;
        border-radius: 20px;
        border: 1.2px solid rgb(233, 121, 139);
        top: 55px;
        left: 35%;
        display: flex;
        justify-content: center;
        align-items: center;
        .circle{
          position: absolute;
          left: 0;
          width: 20px;
          height: 0;
          padding-bottom: 20px;
          background-color: rgb(233, 121, 139);
          clip-path: circle(38% at 50% 50%);
        }
        .isLive_text{
          position: absolute;
          left: 35%;
          font-size: 12px;
          color: rgb(233, 121, 139);
        }
        .no_open{
          background-color: gray;
        }
        .no_open_text{
          color: gray;
        }
        .roll_open{
          background-color: rgb(126, 103, 226);
        }
        .roll_open_text{
          color: rgb(126, 103, 226);
        }
      }

      @mixin TextMod($L , $T , $W , $C , $S){
        position: absolute;
        font-family: Arial, Helvetica, sans-serif;
        left: $L;
        top: $T;
        font-weight: $W;
        color: $C;
        font-size: $S;
        @content;
      }
      .avatar{
        position: absolute;
        width: 64px;
        left: 10%;
        top: 55px;
      }
      .vt_name{
        @include TextMod(65% , 55px , 700 , rgb(17, 16, 16) , 16px);
      }
      .vt_sign{
        @include TextMod(35% , 85px , 400 , rgb(190, 189, 189) , 14px){
          width:60%;
        }
      }
      .living{
        @include TextMod(22% , 156px , 400 , rgb(233, 121, 139) , 16px);
      }
      .title{
        @include TextMod(10% , 185px , 400 , rgb(199, 194, 194) , 16px){
          width: 80%;
        }
      }

      .TV_icon{
        position: absolute;
        height: 20px;
        width: 30px;
        left: 10%;
        border-radius: 10px;
        top: 155px;
        border: 2px solid rgb(233, 121, 139);
      }
      .TV_icon2{
        @extend .TV_icon;
        background-color: rgb(233, 121, 139);
        clip-path: polygon(40% 25%, 40% 75%, 70% 50%);
      }

      .recent{
        position: absolute;
        top: 215px;
        width: 100%;
        .recent_img{
          width: 80%;
        }
      }
      .card_1{
        position: absolute;
        width: 100%;
        height: 150px;
        background-color: rgb(255, 255, 255);
      }
      .no_open_boder{
        border-color: gray;
      }
      .roll_open_boder{
        border-color: rgb(126, 103, 226);
      }
    }
  }
}

// 手机样式
.vtuber_list_phone{
  a{
     text-decoration: none;
  }
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 4000px;
  margin: 0 0 55px;
  .vtuber_card{
    width: 90vw;
    height: 100px;
    vertical-align: middle;
    margin-left: 5vw;
    margin-top: 3vw;
    background-color:rgb(255, 255, 255);
    color: rgb(36, 35, 35);
    position: relative;
    border-radius: 50px;
    .card_1{
      position: absolute;
      width: 100%;
      height: 100px;
      img{
        position: absolute;
        left: 5%;
        top: 20%;
        clip-path: circle(50% at 50% 50%);
      }
      .vt_name{
        position: absolute;
        left: 65%;
        top: 20%;
        color: rgb(17, 16, 16);
        font-weight: 700;
        font-family: Arial, Helvetica, sans-serif;
      }
      .vt_sign{
        position: absolute;
        left: 30%;
        top: 45%;
        width: 65%;
        color: rgb(190, 189, 189);
        font-size: 12px;
      }
      .isLive{
        position: relative;
        height: 18px;
        width: 25%;
        border-radius: 20px;
        border: 1.2px solid rgb(233, 121, 139);
        top: 23%;
        left: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        .circle{
          position: absolute;
          left: 0;
          width: 18px;
          height: 18px;
          background-color: rgb(233, 121, 139);
          clip-path: circle(35% at 50% 50%);
        }
        .isLive_text{
          position: absolute;
          left: 35%;
          font-size: 12px;
          color: rgb(233, 121, 139);
        }
        .no_open{
          background-color: gray;
        }
        .no_open_text{
          color: gray;
        }
        .roll_open{
          background-color: rgb(51, 13, 219);
        }
        .roll_open_text{
          color: rgb(51, 13, 219);
        }
      }
      .no_open_boder{
        border-color: gray;
      }
      .roll_open_boder{
        border-color: rgb(126, 103, 226);
      }
    }
  }
}
</style>