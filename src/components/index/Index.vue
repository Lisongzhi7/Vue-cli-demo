<template>
    <div class="index">
        <div class="fd-head">
            <div class="fd-head-center">
                <div class="fd-logo-box">
                    <span class="logo-one"><img src="http://xlsb.luokangyuan.com/1.jpg"></span>
                    <span class="boke">My blog site</span>
                </div>
                <div class="fd-logo-tile">
                    <router-link to="/home"><span>博客首页</span></router-link>
                    <router-link to="/category"><span>文章分类</span></router-link>
                    <router-link to="/guidang"><span>文章归档</span></router-link>
                    <router-link to="/lianjie"><span>友情链接</span></router-link>
                    <router-link to="/guanyuwo"><span>关于我</span></router-link>
                    <span @click="dialogFormVisible = true"><i class="el-icon-search"></i></span>
                </div>
            </div>
            <el-dialog  :modal-append-to-body="false" :show-close="false"  title="搜索" :visible.sync="dialogFormVisible">
                <div class="zhezhao"></div>
            </el-dialog>
        </div>
        <a href="javascript:" id="return_top" title="回到顶部"><i class="iconfont icon-hiiniconhuidaodingbu201"></i></a>
        <div class="fd-center">
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
        }
    }
}
</script>

<style scoped>
#return_top{
    position:fixed;
    right:25px;
    bottom:60px;
    display:none;
}
.iconfont{
    font-size: 70px;
}
.logo-one img{
    height: 50px;
    border-radius: 30px;
}
</style>