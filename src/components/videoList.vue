<template>
  <div v-loading="loading" id="videoList">
    <div class="blank"></div>
    <div :title="item.title" @click="open(item.aid)" style='cursor:pointer' :style="{backgroundImage: 'url(' + item.pic + ')', backgroundSize:'100% 80%', backgroundRepeat: 'no-repeat'}" class="videoCard" v-for="(item , index) in toShowList">
      <div class="title">{{item.title}}</div>
      <div class="playtimes"><i class="el-icon-video-play"></i> {{item.play}}次</div>
      <div class="date"><i class="el-icon-date"></i> {{$moment(item.created * 1000).format("YYYY-MM-DD")}}</div>
      <div class="length"><i class="el-icon-time"></i> {{item.length}}</div>
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="6"
        layout="prev, pager, next, jumper"
        :total="count">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
    name:'videoList',
    data(){
      return{
        currentPage: 1,
        count: 0,
        loading: true,
        toShowList:[]
      }
    },
    // length
    mounted(){
      this.req(this.$route.query.uid , 1 , 6).then((data) => {
        this.toShowList = data.data.vlist
        this.count = data.data.count
        this.loading = false
      })
    },
    methods: {
      open(aid){
        let url = 'https://www.bilibili.com/video/av' + aid
        window.open(url)
      },
      handleSizeChange(val) {
        console.log(val)
      },
      handleCurrentChange(val) {
        this.req(this.$route.query.uid , val , 6).then((data) => {
          this.toShowList = data.data.vlist
          this.loading = false
        })
      },
      req(userID , page , pagesize){
        return fetch("http://hololive_api.kaza.ink/getVideo", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'userID' : userID,
                'page' : page,
                'pagesize' : pagesize
            })
        }).then(function(response) {
            return response.json().then((data) => {
                return new Promise((resolve, reject) => {
                  if(data){
                    console.log(data)
                    resolve(data)
                  }else{
                    console.log('There is something wrong with api.')
                    reject(error)
                  }
                })
            })
        })
      }
    },
}
</script>

<style lang='scss' scoped>
.block{
  position: absolute;
  bottom: 10px;
  left: 259px;
}

#videoList{
  min-height: 500px;
  min-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .blank{
    width: 100%;
    height: 40px;
  }
  .videoCard{
    position: relative;
    background-color: rgb(255, 255, 255);
    width: 26%;
    margin-top: 10px;
    height: 192px;
    vertical-align: middle;
    margin-left: 5.5%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .title{
      top: 82%;
      position: absolute;
      font-size: 14px;
      font-weight: 700;
      color: rgb(54, 54, 54);
    }
    .playtimes{
      top: 92%;
      position: absolute;
      font-size: 12px;
      left: 5px;
      color: rgb(179, 179, 179);
      .el-icon-video-play{
        transform: scale(1.2);
        color: rgb(179, 179, 179);
      }
    }
    .date{
      top: 92%;
      position: absolute;
      font-size: 12px;
      left: 100px;
      color: rgb(179, 179, 179);
      .el-icon-date{
        transform: scale(1.2);
        color: rgb(179, 179, 179);
      }
    }
    .length{
      top: 92%;
      position: absolute;
      font-size: 12px;
      right: 5px;
      color: rgb(179, 179, 179);
      .el-icon-time{
        transform: scale(1.2);
        color: rgb(179, 179, 179);
      }
    }
  }
}

</style>