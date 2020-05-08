<template>
    <div id="app" :style="{width:PageWidth}">
    <navbar></navbar>
    <div :class="isPhone ? 'vtuber_list_phone' : 'vtuber_list'">
      <div v-for="(item , index) in vtuber_msg" :key="index" class="vtuber_card">
        <!-- <a style='cursor:default' :target="isPhone ? '_blank' :　''" :href="isPhone ? 'https://live.bilibili.com/' + vtuber_msg[index].room : 'javascript:void(0);'"> -->
        <el-tooltip class="item" effect="dark" :content="item.name + '的视频投稿'" placement="top-start">
          <div @click="showTost(item.uid)" v-show="!isPhone" style='cursor:pointer' :style="{zIndex:Zindex2 - index}" class="video_btn"><i class="el-icon-more"></i></div>
        </el-tooltip>
        <a slot="reference" class="slot" target='_blank' :href="'https://live.bilibili.com/' + vtuber_msg[index].room">
          <div class="real_vtuber_card" :style="{zIndex:Zindex - index}">
            <div class="card_1">
              <img :src="vtuber_msg[index].face">
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

            <div v-show="!isPhone" class="goLive">前往直播间</div>
            <div v-show="!isPhone" class="goVideo">{{item.title}}</div>

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
      ,'21421141','21267062','21572617','21752694','21752686','21583736','21752719','21752710'],
      vtuber_msg:[{
          name:'宝钟玛琳',
          isLiving:'未开播',
          sign:'Hololive Fantasy所属，宝钟海贼团船长~出航〜',
          title:'',
          face: require('./assets/face/marin.jpg'),
          url: ''
        },{
          name:'紫咲诗音',
          isLiving:'未开播',
          sign:'holoIive二期生，魔法使紫咲诗音！',
          title:'',
          face: require('./assets/face/shion.jpg'),
          url: ''
        },{
          name:'樱巫女',
          isLiving:'未开播',
          sign:'hololive所属的虚拟巫女(❀ㆆ ㆆ)و✧喜欢鲷鱼烧的精英女孩子!',
          title:'',
          face: require('./assets/face/miko.jpg'),
          url: ''
        },{
          name:'夏色祭',
          isLiving:'未开播',
          sign:"holoIive一期生，虚拟女子高中生！喜欢祭典之类的有趣的活动！",
          title:'',
          face: require('./assets/face/matsuri.jpg'),
          url: ''
        },{
          name:'时乃空',
          isLiving:'未开播',
          sign:'HOLOLIVE所属,虚拟偶像！',
          title:'',
          face: require('./assets/face/kongma.jpg'),
          url: ''
        },{
          name:'阿库娅',
          isLiving:'未开播',
          sign:'holoIive二期生、虚拟女仆、湊(みなと)あくあ！',
          title:'',
          face: require('./assets/face/aqua.jpg'),
          url: ''
        },{
          name:'白上吹雪',
          isLiving:'未开播',
          sign:'hololive一期生，虚拟白发狐狸白上吹雪是也(^・ω・^§)ﾉ',
          title:'',
          face: require('./assets/face/fbk.jpg'),
          url: ''
        },{
          name:'星街彗星',
          isLiving:'未开播',
          sign:'HOLOLIVE所属，虚拟偶像星街彗星！',
          title:'',
          face: require('./assets/face/suise.jpg'),
          url: ''
        },{
          name:'兔田佩可拉',
          isLiving:'未开播',
          sign:'hololivetv所属VTuber三期生 兔田佩克拉！',
          title:'',
          face: require('./assets/face/usada.jpg'),
          url: ''
        },{
          name:'大空昂',
          isLiving:'未开播',
          sign:'holo-live二期生，我是E-Sports部经理大空昴的说!',
          title:'',
          face: require('./assets/face/subaru.jpg'),
          url: ''
        },{
          name:'天音彼方',
          isLiving:'未开播',
          sign:'HOLOLIVE所属四期生，在天界学园上学的天使！',
          title:'',
          face: require('./assets/face/tiange.jpg'),
          url: ''
        },{
          name:'润羽露西娅',
          isLiving:'未开播',
          sign:'hololive三期生 润羽露西娅 ʚїɞ我乃见习死灵法师 死者苏生之奇迹† Fantasy！！',
          title:'',
          face: require('./assets/face/nanodesu.jpg'),
          url: ''
        },{
          name:'大神澪',
          isLiving:'未开播',
          sign:'hololivegamers所属，喜欢游戏的虚拟狼 大神澪！',
          title:'',
          face: require('./assets/face/mio.jpg'),
          url: ''
        },{
          name:'百鬼绫目',
          isLiving:'未开播',
          sign:'Hololive所属二期生虚拟鬼神￤百鬼绫目（Nakiri Ayame）',
          title:'',
          face: require('./assets/face/ayame.jpg'),
          url: ''
        },{
          name:'癒月巧可',
          isLiving:'未开播',
          sign:'hololive二期生，来自魔界的虚拟保健医生癒月巧可。',
          title:'',
          face: require('./assets/face/sensei.jpg'),
          url: ''
        },{
          name:'萝卜子',
          isLiving:'未开播',
          sign:'hololive所属，Virtual Robot',
          title:'',
          face: require('./assets/face/robo.jpg'),
          url: ''
        },{
          name:'亚绮罗森',
          isLiving:'未开播',
          sign:'hololive一期生，来自异世界的虚拟治愈系半精灵',
          title:'',
          face: require('./assets/face/aki.jpg'),
          url: ''
        },{
          name:'赤井心',
          isLiving:'未开播',
          sign:'holoIive一期生，虚拟女子留学生，赤井心哒呦～(๑•̀ㅂ•́)و✧ ',
          title:'',
          face: require('./assets/face/hato.jpg'),
          url: ''
        },{
          name:'夜空梅露',
          isLiving:'未开播',
          sign:'holoIive一期生，喜欢果汁而不是血的吸血鬼↝',
          title:'',
          face: require('./assets/face/meru.jpg'),
          url: ''
        },{
          name:'猫又小粥',
          isLiving:'未开播',
          sign:'hololive-gamers所属，饭团屋的婆婆所饲养的猫猫❖',
          title:'',
          face: require('./assets/face/okayu.jpg'),
          url: ''
        },{
          name:'戌神沁音',
          isLiving:'未开播',
          sign:'hololive-gamers所属，住在都市中某面包店里的虚拟狗狗，戌神沁音哒！',
          title:'',
          face: require('./assets/face/korone.jpg'),
          url: ''
        },{
          name:'AZKi',
          isLiving:'未开播',
          sign:'hololive lNNK Music成员， Vsinger的AZKi，我很喜欢唱歌。',
          title:'',
          face: require('./assets/face/azuki.jpg'),
          url: ''
        },{
          name:'不知火芙蕾雅',
          isLiving:'未开播',
          sign:'我是hololive所属3期生 半精灵不知火芙蕾雅哦～',
          title:'',
          face: require('./assets/face/furea.jpg'),
          url: ''
        },{
          name:'角卷绵芽',
          isLiving:'未开播',
          sign:'HOLOLIVE所属四期生角卷绵芽！一边做着吟游诗人，一边悠然旅行的羊。',
          title:'',
          face: require('./assets/face/watame.jpg'),
          url: ''
        },{
          name:'桐生可可',
          isLiving:'未开播',
          sign:'Hololive所属4期生，对人类文化很感兴趣，目前在日留学，来自异世界！',
          title:'',
          face: require('./assets/face/koko.jpg'),
          url: ''
        },{
          name:'白银诺艾尔',
          isLiving:'未开播',
          sign:'沉着稳重的同时，又有着想用蛮力解决一切的一面！！ 憧憬强大之人而进行武者修行的轻飘飘猛男女骑士！',
          title:'',
          face: require('./assets/face/noeru.jpg'),
          url: ''
        },{
          name:'姬森璐娜',
          isLiving:'未开播',
          sign:'HOLOLIVE所属四期生。点心国的公主。',
          title:'',
          face: require('./assets/face/runa.jpg'),
          url: ''
        },{
          name:'常暗永远',
          isLiving:'未开播',
          sign:'HOLOLIVE所属四期生。为了成长为独当一面的恶魔来到人间学习。',
          title:'',
          face: require('./assets/face/cyoan.jpg'),
          url: ''
        }
      ],
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
  },
  mounted(){
    this.$router.push({path : '/holog'})

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
    fetchTogetData(){
      for(var i = 0;i < this.vtuber_id.length;i++){
        (function(index , obj){
          let url = 'https://cors.zme.ink/https://api.live.bilibili.com/room/v1/Room/get_info?id=' + obj.vtuber_id[index]
          obj.$axios.get(url).then((response) => {
            obj.isLiving_status(response.data.data , index , obj.vtuber_id[index])
            // console.log(response)
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

html , #app{
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgb(248, 248, 248);
}

body{
  overflow: hidden;
}

// PC网页样式
.vtuber_list{
  a{
    text-decoration: none;
  }
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 2200px;
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
    .video_btn{
      position: absolute;
      width: 30px;
      height: 30px;
      right: 5px;
      top: 5px;
      background-color: rgb(250, 250, 250);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      transition: 0.2s;
      &:hover{
        background-color: rgb(231, 231, 231);
      }
    }
    .real_vtuber_card{
      width: 100%;
      height: 150px;
      background-color: rgb(255, 255, 255);
      overflow: hidden;
      position: relative;
      transition: 0.5s;

      .living{
        position: absolute;
        top: 155px;
        left: 24%;
        color: rgb(233, 121, 139);
        font-size: 18px;
      }
      .title{
        position: absolute;
        top: 185px;
        left: 10%;
        width: 80%;
        color: rgb(199, 194, 194);
        font-size: 16px;
      }
      .TV_icon{
        position: absolute;
        height: 22px;
        width: 34px;
        left: 10%;
        border-radius: 10px;
        top: 155px;
        border: 2px solid rgb(233, 121, 139);
      }
      .TV_icon2{
        position: absolute;
        height: 22px;
        width: 34px;
        left: 10%;
        top: 155px;
        background-color: rgb(233, 121, 139);
        clip-path: polygon(40% 25%, 40% 75%, 70% 50%);
        border: 2px solid rgb(233, 121, 139);
      }
      .recent{
        position: absolute;
        top: 215px;
        width: 100%;
        .recent_img{
          width: 80%;
        }
      }

      &:hover{
        height: 0;
        padding-bottom: 105%;
        position: absolute;
        box-shadow: 1px 1px 10px #cfcdcd;
        z-index: 100;
      }
      .card_1{
        position: absolute;
        width: 100%;
        height: 150px;
        background-color: rgb(255, 255, 255);
      }
      img{
        position: absolute;
        width: 15%;
        left: 10%;
        top: 25%;
      }

      .isLive{
        position: relative;
        height: 20px;
        // padding-bottom: 25%;
        width: 25%;
        border-radius: 20px;
        border: 1.2px solid rgb(233, 121, 139);
        top: 25%;
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
      .no_open_boder{
        border-color: gray;
      }
      .roll_open_boder{
        border-color: rgb(126, 103, 226);
      }
      .vt_name{
        position: absolute;
        left: 65%;
        top: 25%;
        font-weight: 700;
        font-family: Arial, Helvetica, sans-serif;
        color: rgb(17, 16, 16);
      }
      .vt_sign{
        position: absolute;
        left: 35%;
        top: 50%;
        width: 60%;
        color: rgb(190, 189, 189);
        font-size: 1vw;
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
  height: 3200px;
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