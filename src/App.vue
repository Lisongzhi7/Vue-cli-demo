<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>


export default {
    name: 'App',
    data() {
        return {
            dialogFormVisible: false,
            showNav: true
        }
    },
    created() {
        setTimeout(() => {
            window.L2Dwidget.init({
                pluginRootPath: 'static/live2dw/',
                pluginJsPath: 'lib/',
                pluginModelPath: 'live2d-widget-model-z16/assets/',
                tagMode: false,
                debug: false,
                model: {jsonPath: '/static/live2dw/live2d-widget-model-koharu/assets/koharu.model.json'},
                display: {position: 'left', width: 150, height: 300},
                mobile: {show: true},
                log: false
            })
        }, 1000)
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {

        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 100) {
                this.showNav = true;
            } else if (scrollTop < 100) {
                this.showNav = false;
            }
        },
    },
}

</script>

<style>
@font-face {
    font-family: 'Alibaba-PuHuiTi-Medium';
    src: url('/static/font/Alibaba-PuHuiTi-Medium.otf') format('truetype');
}
*, html, body {
    margin: 0;
    padding: 0;
}

.zhezhao {
    height: 200px;
    width: 200px;
}

.zujian {
    font-size: 50px;
    color: #fad0c4;
}

#app {
    display: flex;
    flex-direction: column;
}

.fd-head {
    width: 100%;
    height: 56px;
    background: white;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 10;
}

.second {
    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
}

a {
    text-decoration: none;
}

.fd-head-center {
    width: 1200px;
    height: 100%;
    display: flex;
}

.fd-logo-box {
    height: 52px;
    width: 250px;
    display: flex;
    flex-direction: row;
}

.boke {
    font-size: 25px;
    font-family: 华文细黑;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    font-weight: bold;
}

.logo-one {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-one img {
    height: 60px;
}

.fd-logo-tile {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.fd-logo-tile span {
    margin-left: 10px;
    font-size: 17px;
    color: #2e3032;
    font-family: "Alibaba-PuHuiTi-Medium";
}

.wenzi span {
    color: #fff;
}

.router-link-active span {
    color: coral;
}

.fd-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.fd-bottom {
    display: flex;
    width: 100%;
    height: 60px;
    background: black;
    color: white;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.tubiao {
    font-size: 40px;
}
</style>
