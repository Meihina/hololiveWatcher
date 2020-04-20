<template>
    <div id="navbar" :style="{}">
        <div id="left">
            <img class="holoImg" src="../assets/holo.png">
            <span :class="isPhone ? 'text_isPhone' : ''" class="text">HololiveGuider</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
          isPhone: false,
          navWdith: 0,
      }
    },
    mounted(){
        this.navWdith = document.documentElement.clientWidth + 'px'
        document.body.style.width = document.documentElement.clientWidth + 'px'
        let width = document.documentElement.offsetWidth || document.body.offsetWidth
		if(width < 480){
            this.isPhone = true
        }

        window.onresize = () => {
            if(document.documentElement.offsetWidth > parseInt(this.navWdith) || document.body.offsetWidth > parseInt(this.PageWidth)){
                this.navWdith = document.documentElement.clientWidth + 'px'
                document.body.style.width = document.documentElement.clientWidth + 'px'
            }
            if(document.documentElement.offsetWidth < 480 || document.body.offsetWidth < 480){
                this.isPhone = true
            }else{
                this.isPhone = false
            }
        }
    },
    watch:{

    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
    @mixin XFlex($a , $b , $c){
        display: $a;
        justify-content: $b;
        align-items: $c;
        @content;
    }

    #navbar{
        @include XFlex(flex , center , center);
        height: 70px;
        background-color: white;
        border-bottom: whitesmoke 2px solid;
        box-shadow: whitesmoke 2px 2px 5px;
        #left{
            @include XFlex(flex , center , center);
            position: absolute;
            left: 20px;
            .holoImg{
                width: 50px;
            }
        }
    }

    .text{
        margin-left: 20px;
        background-image: linear-gradient(135deg, rgb(60, 57, 223), rgb(112, 179, 245));
        font-size: 30px;
        font-weight: bold;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
        -moz-box-decoration-break: clone;
        color: transparent;
        position:relative;
        &::selection{
            color:rgb(24, 20, 255);
            background-color: rgb(112, 179, 245);
        }
    }
    .text_isPhone{
        font-size: 6vw;
    }
</style>