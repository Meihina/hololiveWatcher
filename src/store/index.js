import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vtuber_msg : [{
      name:'宝钟玛琳',
      isLiving:'未开播',
      sign:'Hololive Fantasy所属，宝钟海贼团船长~出航〜',
      title:'',
      face: require('../assets/face/marin.jpg'),
      url: ''
    },{
      name:'紫咲诗音',
      isLiving:'未开播',
      sign:'holoIive二期生，魔法使紫咲诗音！',
      title:'',
      face: require('../assets/face/shion.jpg'),
      url: ''
    },{
      name:'樱巫女',
      isLiving:'未开播',
      sign:'hololive所属的虚拟巫女(❀ㆆ ㆆ)و✧喜欢鲷鱼烧的精英女孩子!',
      title:'',
      face: require('../assets/face/miko.jpg'),
      url: ''
    },{
      name:'夏色祭',
      isLiving:'未开播',
      sign:"holoIive一期生，虚拟女子高中生！喜欢祭典之类的有趣的活动！",
      title:'',
      face: require('../assets/face/matsuri.jpg'),
      url: ''
    },{
      name:'时乃空',
      isLiving:'未开播',
      sign:'HOLOLIVE所属,虚拟偶像！',
      title:'',
      face: require('../assets/face/kongma.jpg'),
      url: ''
    },{
      name:'阿库娅',
      isLiving:'未开播',
      sign:'holoIive二期生、虚拟女仆、湊(みなと)あくあ！',
      title:'',
      face: require('../assets/face/aqua.jpg'),
      url: ''
    },{
      name:'白上吹雪',
      isLiving:'未开播',
      sign:'hololive一期生，虚拟白发狐狸白上吹雪是也(^・ω・^§)ﾉ',
      title:'',
      face: require('../assets/face/fbk.jpg'),
      url: ''
    },{
      name:'星街彗星',
      isLiving:'未开播',
      sign:'HOLOLIVE所属，虚拟偶像星街彗星！',
      title:'',
      face: require('../assets/face/suise.jpg'),
      url: ''
    },{
      name:'兔田佩可拉',
      isLiving:'未开播',
      sign:'hololivetv所属VTuber三期生 兔田佩克拉！',
      title:'',
      face: require('../assets/face/usada.jpg'),
      url: ''
    },{
      name:'大空昂',
      isLiving:'未开播',
      sign:'holo-live二期生，我是E-Sports部经理大空昴的说!',
      title:'',
      face: require('../assets/face/subaru.jpg'),
      url: ''
    },{
      name:'天音彼方',
      isLiving:'未开播',
      sign:'HOLOLIVE所属四期生，在天界学园上学的天使！',
      title:'',
      face: require('../assets/face/tiange.jpg'),
      url: ''
    },{
      name:'润羽露西娅',
      isLiving:'未开播',
      sign:'hololive三期生 润羽露西娅 ʚїɞ我乃见习死灵法师 死者苏生之奇迹† Fantasy！！',
      title:'',
      face: require('../assets/face/nanodesu.jpg'),
      url: ''
    },{
      name:'大神澪',
      isLiving:'未开播',
      sign:'hololivegamers所属，喜欢游戏的虚拟狼 大神澪！',
      title:'',
      face: require('../assets/face/mio.jpg'),
      url: ''
    },{
      name:'百鬼绫目',
      isLiving:'未开播',
      sign:'Hololive所属二期生虚拟鬼神￤百鬼绫目（Nakiri Ayame）',
      title:'',
      face: require('../assets/face/ayame.jpg'),
      url: ''
    },{
      name:'癒月巧可',
      isLiving:'未开播',
      sign:'hololive二期生，来自魔界的虚拟保健医生癒月巧可。',
      title:'',
      face: require('../assets/face/sensei.jpg'),
      url: ''
    },{
      name:'萝卜子',
      isLiving:'未开播',
      sign:'hololive所属，Virtual Robot',
      title:'',
      face: require('../assets/face/robo.jpg'),
      url: ''
    },{
      name:'亚绮罗森',
      isLiving:'未开播',
      sign:'hololive一期生，来自异世界的虚拟治愈系半精灵',
      title:'',
      face: require('../assets/face/aki.jpg'),
      url: ''
    },{
      name:'赤井心',
      isLiving:'未开播',
      sign:'holoIive一期生，虚拟女子留学生，赤井心哒呦～(๑•̀ㅂ•́)و✧ ',
      title:'',
      face: require('../assets/face/hato.jpg'),
      url: ''
    },{
      name:'夜空梅露',
      isLiving:'未开播',
      sign:'holoIive一期生，喜欢果汁而不是血的吸血鬼↝',
      title:'',
      face: require('../assets/face/meru.jpg'),
      url: ''
    },{
      name:'猫又小粥',
      isLiving:'未开播',
      sign:'hololive-gamers所属，饭团屋的婆婆所饲养的猫猫❖',
      title:'',
      face: require('../assets/face/okayu.jpg'),
      url: ''
    },{
      name:'戌神沁音',
      isLiving:'未开播',
      sign:'hololive-gamers所属，住在都市中某面包店里的虚拟狗狗，戌神沁音哒！',
      title:'',
      face: require('../assets/face/korone.jpg'),
      url: ''
    },{
      name:'AZKi',
      isLiving:'未开播',
      sign:'hololive lNNK Music成员， Vsinger的AZKi，我很喜欢唱歌。',
      title:'',
      face: require('../assets/face/azuki.jpg'),
      url: ''
    },{
      name:'不知火芙蕾雅',
      isLiving:'未开播',
      sign:'我是hololive所属3期生 半精灵不知火芙蕾雅哦～',
      title:'',
      face: require('../assets/face/furea.jpg'),
      url: ''
    },{
      name:'角卷绵芽',
      isLiving:'未开播',
      sign:'HOLOLIVE所属四期生角卷绵芽！一边做着吟游诗人，一边悠然旅行的羊。',
      title:'',
      face: require('../assets/face/watame.jpg'),
      url: ''
    },{
      name:'桐生可可',
      isLiving:'未开播',
      sign:'Hololive所属4期生，对人类文化很感兴趣，目前在日留学，来自异世界！',
      title:'',
      face: require('../assets/face/koko.jpg'),
      url: ''
    },{
      name:'白银诺艾尔',
      isLiving:'未开播',
      sign:'沉着稳重的同时，又有着想用蛮力解决一切的一面！！ 憧憬强大之人而进行武者修行的轻飘飘猛男女骑士！',
      title:'',
      face: require('../assets/face/noeru.jpg'),
      url: ''
    },{
      name:'姬森璐娜',
      isLiving:'未开播',
      sign:'HOLOLIVE所属四期生。点心国的公主。',
      title:'',
      face: require('../assets/face/runa.jpg'),
      url: ''
    },{
      name:'常暗永远',
      isLiving:'未开播',
      sign:'HOLOLIVE所属四期生。为了成长为独当一面的恶魔来到人间学习。',
      title:'',
      face: require('../assets/face/cyoan.jpg'),
      url: ''
    },{
      name:'希薇娅',
      isLiving:'未开播',
      sign:'想要成为你睁开眼时最钟情的那抹阳光 ❀Hololive China一期生',
      title:'',
      face: require('../assets/face/civia.png'),
      url: ''
    },{
      name:'黑桃影',
      isLiving:'未开播',
      sign:'hololive CN所属，星空下的白色幻影，怪盗Spade Echo参上！',
      title:'',
      face: require('../assets/face/hty.png'),
      url: ''
    },{
      name:'夜霧',
      isLiving:'未开播',
      sign:'吸猫BOT＊HOLOLIVE CHINA一期生YOGIRI',
      title:'',
      face: require('../assets/face/yogiri.png'),
      url: ''
    },{
      name:'阿媂娅',
      isLiving:'未开播',
      sign:'Hololive CN二期生 普通的冰元素使。寒冰一笑如魇花，冰封千年只为你 。',
      title:'',
      face: require('../assets/face/artia.png'),
      url: ''
    },{
      name:'朵莉丝',
      isLiving:'未开播',
      sign:'Hololive CN二期生 朝向下一道光辉横渡大海吧！ ——来自深海中的人鱼公主～',
      title:'',
      face: require('../assets/face/Doris.png'),
      url: ''
    },{
      name:'罗莎琳',
      isLiving:'未开播',
      sign:'Hololive CN二期生 来自异世界的图书管理员，来一起探索这个世界吧！',
      title:'',
      face: require('../assets/face/rosalyn.png'),
      url: ''
    }
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
