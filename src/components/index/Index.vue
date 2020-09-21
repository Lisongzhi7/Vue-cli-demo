<template>
    <div class="index">
        <div class="fd-head">
            <div class="fd-head-center">
                <div class="fd-logo-box">
                    <span class="logo-one"><img src="http://xlsb.luokangyuan.com/1.jpg"></span>
                    <span class="boke">My blog site</span>
                </div>
                <div class="fd-logo-tile">
                    <router-link to="/home"><span class="fd-icon"><i
                      class="iconfont icon-shouye"></i></span><span>网站首页</span></router-link>
                  <router-link to="/guidang"><span class="fd-icon"><i
                    class="iconfont icon-guanyuwo1"></i></span><span>博客日记</span></router-link>
                  <router-link to="/lianjie"><span class="fd-icon"><i
                    class="iconfont icon-tubiao-"></i></span><span>碎言碎语</span></router-link>
                  <router-link to="/category"><span class="fd-icon"><i
                    class="iconfont icon-hua"></i></span><span>时间轴</span></router-link>
                    <router-link to="/guanyuwo"><span class="fd-icon"><i
                      class="iconfont icon-guanyuwo"></i></span><span>关于我</span></router-link>
                    <span @click="dialogFormVisible = true"><i class="iconfont icon-sousuo"></i></span>
                </div>
            </div>
            <el-dialog  :modal-append-to-body="false" :show-close="false" :visible.sync="dialogFormVisible">
                <div class="zhezhao">
                  <span>搜索</span>
                  <div class="sousuo">
                    <el-input
                      placeholder="请输入内容"
                      v-model="input"
                      clearable>
                    </el-input>
                  </div>
                </div>
            </el-dialog>
        </div>
        <a href="javascript:" id="return_top" title="回到顶部"><i class="iconfont icon-hiiniconhuidaodingbu201"></i></a>
        <div class="fd-center">
<!--          <div class="home-head">-->
<!--            <el-carousel :interval="5000" arrow="always" height="600px">-->
<!--              <el-carousel-item v-for="(item,index) of imglist">-->
<!--                <img :src="item">-->
<!--              </el-carousel-item>-->
<!--            </el-carousel>-->
<!--          </div>-->



            <router-view></router-view>
        </div>
        <div class="fd-bottom">
            蜀ICP备18020377号
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
  data(){
    return {
      input: '',
      // imglist: [
      //   "http://xlsb.luokangyuan.com/a5.jpg",
      //   "http://xlsb.luokangyuan.com/8.jpg",
      //   "http://xlsb.luokangyuan.com/a3.jpg",
      //   "http://xlsb.luokangyuan.com/20.jpg"
      // ],
      dialogFormVisible: false,
      showNav: true
    }
  },

    //      回到顶部效果
   vra: window.onload = function(){
        var obtn = document.getElementById('return_top');  //获取回到顶部按钮的ID
        var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
        var timer = null; //定义一个定时器
        var isTop = true; //定义一个布尔值，用于判断是否到达顶部

        window.onscroll = function(){         //滚动条滚动事件

            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;

            if(osTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
                obtn.style.display = 'block';
            }else{         //否则隐藏
                obtn.style.display = 'none';
            }

            //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
            if(!isTop){
                clearInterval(timer);
            }
            isTop = false;
        }

        obtn.onclick = function(){    //回到顶部按钮点击事件
            //设置一个定时器
            timer = setInterval(function(){
                //获取滚动条的滚动高度
                var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                //用于设置速度差，产生缓动的效果
                var speed = Math.floor(-osTop / 6);
                document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
                isTop =true;  //用于阻止滚动事件清除定时器
                if(osTop == 0){
                    clearInterval(timer);
                }
            },30);
        };
     (function(){
       var a_idx = 0;
       window.onclick = function(event){
         var a = new Array("❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤");

         var heart = document.createElement("b");	//创建b元素
         heart.onselectstart = new Function('event.returnValue=false');	//防止拖动

         document.body.appendChild(heart).innerHTML = a[a_idx];		//将b元素添加到页面上
         a_idx = (a_idx + 1) % a.length;
         heart.style.cssText = "position: fixed;left:-100%;";	//给p元素设置样式

         var f = 16, 	// 字体大小
           x = event.clientX - f / 2, // 横坐标
           y = event.clientY - f, // 纵坐标
           c = randomColor(),  // 随机颜色
           a = 1, 				// 透明度
           s = 1.2; 			// 放大缩小

         var timer = setInterval(function(){		//添加定时器
           if(a <= 0){
             document.body.removeChild(heart);
             clearInterval(timer);
           }else{
             heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";

             y--;
             a -= 0.016;
             s += 0.002;
           }
         },15)

       }
       // 随机颜色
       function randomColor() {

         return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";

       }
     }());

    }

}

</script>

<style scoped>
#return_top{
    position:fixed;
    right:25px;
    bottom:60px;
    display:flex;
}
.fd-icon i{
  color: #000;
}
.iconfont{
    font-size: 70px;
}
.logo-one img{
    height: 50px;
    border-radius: 30px;
}
  .fd-logo-tile i{
    font-size: 18px;
  }
.zhezhao span{
  font-size: 20px;
}
  .fd-logo-tile i:hover{
    cursor: pointer;
  }
  .iconfont{
    color: cadetblue;
  }
.sousuo{
  margin-top: 20px;
}

</style>
