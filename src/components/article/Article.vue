<template>
<div class="article">
  <div class="fd-nav" >
    <div class="gljm">
      <img src="http://xlsb.luokangyuan.com/1.jpg"/>
      <span>创建文章</span>
    </div>
    <div  @click="openArticle" class="fd-fabu"><span>发布</span></div>
  </div>

  <el-form ref="form" :model="article" label-width="80px">
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">

      <el-form-item label="名称">
        <el-input v-model="article.name"></el-input>
      </el-form-item>
      <el-form-item label="配图地址">
        <el-input v-model="article.image"></el-input>
      </el-form-item>
      <el-form-item label="描述信息">
        <el-input v-model="article.descInfo"></el-input>
      </el-form-item>
      <el-form-item label="作者名称">
        <el-input v-model="article.author"></el-input>
      </el-form-item>
      <el-form-item @click="getClassify" label="分类名称">
      <el-select v-model="article.classifyId" placeholder="请选择分类名称">
        <el-option v-for="(item,index) of classifyId" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
      <el-form-item @click="getLabelStr" label="文章标签">
      <el-select v-model="article.labelStr" multiple
                 filterable
                 allow-create
                 default-first-option  placeholder="请选择文章标签">
        <el-option v-for="(item,index) of labelStr" :key="item.value" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="saveArticle">立即创建</el-button>
      <el-button @click="dialogFormVisible = false">取消</el-button>
    </el-form-item>
    </el-dialog>
  </el-form>
  <div class="fd-content">
    <mavon-editor v-model="article.content"/>
  </div>

</div>
</template>

<script>

  export default {
        name: "Article",
    components: {
    },
    data(){
          return{
            content:'# your markdown content',
            dialogFormVisible: false,
            labelStr: [],
            classifyId:[],
            value: [],
            article: {
              name: '',
              image:'',
              descInfo:'',
              author:'',
              content:'',

            }
          }
    },
    methods:{
      openArticle(){
        this.dialogFormVisible = true;

      },
      saveArticle(){
        console.log(this.article)
        this.$api.post(`/api/v1/blog`,this.article, (res) => {
          if (res) {

            this.dialogFormVisible = false;
            this.$message({
              message: '恭喜你，保存成功',
              type: 'success'
            });

          }
        })
      },
      getLabelStr(){
        this.$api.post(`/api/v1/blog`,this.labelStr, (res) => {
          if (res) {
              this.labelStr = res.data;
          }
        })
      },
      getClassify(){
        this.$api.get(`/api/v1/classify`,null, (res) => {
          if (res) {
              this.classifyId = res.data;
          }
        })
      }
    },
    mounted() {
      this.getClassify();
    }
  }
</script>

<style scoped>
  .article{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .gljm{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gljm span{
    margin-left: 20px;
    font-size: 22px;
  }
.gljm img{
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-left: 30px;
}
.fd-nav{
  height: 60px;
  width: calc(100% - 10px);
  background: #e4e7ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left:10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.fd-nav span:hover{
  cursor: pointer;

}

.fd-fabu:hover{
  background: #409eff;
  color: #fff;
}
.fd-fabu{
  padding: 8px 20px 8px 20px;
  background: #fff;
  margin-right: 70px;
  border-radius: 20px;
}

  .fd-content{
    flex: 1;
    width: calc(100% - 10px);
    background: #9a6e3a;
    margin-top:10px;
    margin-left: 10px;
  }
  .v-note-wrapper{
    height: 100%;
  }
  >>> h1{
    color: #66b1ff ;
  }
</style>
