<template>
  <div class="myTravel">
    <div class="head">
      <img src="http://xlsb.luokangyuan.com/30.jpg"/>
    </div>
    <div class="center">
        <div data-aos="fade-up"
             data-aos-duration="3000" v-for="(item,index) of myTravel" style="" class="center-travel">
          <div class="center-travel-a">
            <div class="travel-head">
              <span>{{item.name}}</span>
            </div>
          </div>
          <div class="center-travel-b">
            <div class="travel-center">
              <img :src="item.image">
            </div>
            <div class="travel-center-a">
              <div class="center-a-a">
                <div class="center-a1">
                  <span>{{item.name1}}</span>
                </div>
                <div class="center-a2">
                  <div class="center-a2-a">
                    <img :src="item.img1"/>
                  </div>
                  <div class="center-a2-b">
                    <span>{{item.desc1}}</span>
                  </div>
                </div>
              </div>
              <div class="center-a-a">
                <div class="center-a1">
                  <span>{{item.name2}}</span>
                </div>
                <div class="center-a2">
                  <div class="center-a2-a">
                    <img :src="item.img2"/>
                  </div>
                  <div class="center-a2-b">
                    <span>{{item.desc2}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="center-travel-c">
            <div class="travel-c-a">
              <span>{{item.desc}}</span>
            </div>
            <div class="travel-c-b">
                <img :src="item.img"/>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyTravel",
      data(){
          return{
            myTravel:[{
              name:'Welcome to Chengdu',
              image:'http://xlsb.luokangyuan.com/chengdu.jpg',
              desc:'四川山川秀丽、旅游资源丰富。螺髻九十九里、世界自然遗产九寨沟、黄龙寺，世界文化遗产都江堰——青城山，' +
                '世界自然和文化双遗产峨眉山——乐山大佛、世界自然遗产中国四川大熊猫栖息地等享誉中外。' +
                '稻城亚丁自然保护区、伍须海、燕子沟、七洞沟、海螺沟、四姑娘山、三星堆、武侯祠、杜甫草堂、宽窄巷子、蜀南竹海、' +
                '西岭雪山、米亚罗、毕棚沟、红原大草原、若尔盖，黑水达古冰川、蒙顶山、八台山、鱼泉山、花萼山国家级自然保护区、' +
                '龙潭河、大竹河、佛爷山、观音峡、东林山森林公园、白鹿恐龙园等名胜古迹、自然风光独具魅力。' +
                '旅游产业已成为四川的重要支柱产业之一。',
              img:'http://xlsb.luokangyuan.com/tubiao6.png',
              name1:'锦里 (In the jin)',
              img1:'http://xlsb.luokangyuan.com/jinli.jpg',
              desc1:'传说中锦里曾是西蜀历史上最古老、最具有商业气息的街道之一，早在秦汉、三国时期便闻名全国。',
              name2:'熊猫基地 (Panda Base)',
              img2:'http://xlsb.luokangyuan.com/xiongmao.jpg',
              desc2:'大熊猫已在地球上生存了至少800万年，被誉为“活化石”和“中国国宝”，世界自然基金会的形象大使，是世界生物多样性保护的旗舰物种。截至2019年11月，全球圈养大熊猫种群数量达到600只。'
            },{
              name:'Welcome to Nanjing',
              image:'http://xlsb.luokangyuan.com/nanjing.jpg',
              desc:'南京是中国四大古都、首批国家历史文化名城，是中华文明的重要发祥地，历史上曾数次庇佑华夏之正朔，是四大古都中唯一未做过异族政权首都的古都，长期是中国南方的政治、经济、文化中心。' +
                '南京早在100-120万年前就有古人类活动，35-60万年前已有南京猿人在汤山生活，有着7000多年文明史、近2600年建城史和近500年的建都史，有“六朝古都”、“十朝都会”之称。' +
                '旅游产业已成为四川的重要支柱产业之一。',
              img:'http://xlsb.luokangyuan.com/tubiao4.png',
              name1:'夫子庙 (Confucian temple)',
              img1:'http://xlsb.luokangyuan.com/fuzimiao.jpg',
              desc1:'夫子庙始建于东晋咸康三年（337年），根据王导提议“治国以培育人材为重”，立太学于秦淮河南岸；北宋景祐元年（1034年），移东晋学宫于秦淮河北，并在学宫之前建庙祭奉孔夫子',
              name2:'栖霞山 (Qi Xiashan)',
              img2:'http://xlsb.luokangyuan.com/qixiashan.jpg',
              desc2:'栖霞山位于南京市栖霞区，古称摄山，被誉为“金陵第一明秀山”，南朝时山中建有“栖霞精舍”，因此得名，历史上曾有五王十四帝登临栖霞山，其中乾隆六下江南，五次驻跸栖霞山。'
            },{
              name:'Welcome to Qingdao',
              image:'http://xlsb.luokangyuan.com/qingdao.jpg',
              desc:'青岛是国家历史文化名城、中国道教发祥地 。因树木繁多，四季常青而得名。1891年清政府驻兵建制，青岛是2008北京奥运会和第13届残奥会帆船比赛举办城市，' +
                '是中国帆船之都，亚洲最佳航海城，世界啤酒之城、联合国“电影之都” 、全国首批沿海开放城市、全国文明城市、中国最具幸福感城市。被誉为“东方瑞士” 、中国品牌之都。' +
                '2020年9月2日，被交通运输部评为国家公交都市建设示范城市。',
              img:'http://xlsb.luokangyuan.com/tubiao3.png',
              name1:'崂山景区 (In the jin)',
              img1:'http://xlsb.luokangyuan.com/laoshan.jpg',
              desc1:'崂山古称牢山、劳山。坐落在山东半岛的东南，西靠青岛，东南两面濒临黄海。面积386平方公里，崂顶巨峰，海拔1，133米。既是中国道教名山，又是著名的避暑游览胜地。',
              name2:'五四广场 (In the jin)',
              img2:'http://xlsb.luokangyuan.com/wusiguangchang.jpg',
              desc2:'五四广场位于山东省青岛市市南区东海西路，北依青岛市人民政府办公大楼，南临浮山湾，总占地面积10公顷。五四广场因青岛为中国近代史上伟大的五四运动导火索而得名。'
            },],
          }
      }

    }
</script>

<style scoped>
  @font-face {
    font-family: 'Alibaba-PuHuiTi-Regular';
    src: url('/static/font/Alibaba-PuHuiTi-Regular.otf') format('truetype');
  }
  .myTravel{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f5f5f5;;
  }
  .head{
    height: 400px;
    width: 100%;
  }
  .head img{
    height: 400px;
    width: 100%;
  }
  .center{
    height: 100%;
    width: 1100px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }
  .center-travel{
    width: 1100px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .center-travel:hover{
    cursor: pointer;
  }
  .center-travel-a{
    height: 70px;
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .travel-head{
    height: 50px;
    width: 1080px;
    font-size: 26px;
    display: flex;
    align-items: center;
  }
  .center-travel-b{
    height: 400px;
    width: 1100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .travel-center{
    overflow: hidden;
    height: 380px;
    width: 570px;
  }
    .travel-center img{
      height: 380px;
      width: 570px;
      transform: scale(1.0, 1.0);
      transition: transform 0.7s ease;
    }
    .travel-center img:hover{
      transform: scale(1.05,1.05);
      transition: transform 0.7s ease;
    }
  .travel-center-a{
    height: 400px;
    width: 500px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    margin-top: -20px;
  }
  .center-a-a{
    height: 160px;
    width: 500px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .center-a1{
    height: 50px;
    width: 500px;
    display: flex;
    align-items: center;
  }
  .center-a1 span{
    font-size: 24px;
    font-family: Alibaba-PuHuiTi-Regular;
  }
  .center-a2{
    height: 110px;
    width: 500px;
    display: flex;
    flex-direction: row;
  }
  .center-a2-a{
    overflow: hidden;
    height: 110px;
    width: 200px;
  }
  .center-a2-a img{
    height: 110px;
    width: 200px;
    transform: scale(1.0, 1.0);
    transition: transform 0.7s ease;
  }
  .center-a2-a img:hover{
    transform: scale(1.05,1.05);
    transition: transform 0.7s ease;
  }
  .center-a2-b{
    height: 110px;
    width: 290px;
    margin-left: 10px;
    font-size: 14px;
  }
  .center-a2-b span:hover{
    color: #66b1ff;
  }
  .center-travel-c{
    height: 230px;
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .travel-c-a{
    height: 150px;
    width: 1080px;
  }
  .travel-c-a span:hover{
    color: #9a6e3a;
  }
  .travel-c-b{
    height: 80px;
    width: 1080px;
    display: flex;
    justify-content: flex-end;
  }
  .travel-c-b img{
height: 60px;
    width: 40px;
    margin-right: 40px;
  }
</style>
