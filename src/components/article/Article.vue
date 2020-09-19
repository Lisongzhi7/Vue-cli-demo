<template>
<div class="article">
  <div class="fd-nav" >
    <div class="gljm">
      <img src="http://xlsb.luokangyuan.com/1.jpg"/>
      <span>木子李的管理界面</span>
    </div>
    <div  @click="openArticle" class="fd-fabu"><span>发布</span></div>
  </div>

  <el-dialog title="提交发布" :visible.sync="dialogFormVisible">
    <el-form :model="article">
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="article.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="配图地址" :label-width="formLabelWidth">
        <el-input v-model="article.image" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="描述信息" :label-width="formLabelWidth">
        <el-input v-model="article.descInfo" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="作者名称" :label-width="formLabelWidth">
        <el-input v-model="article.author" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="观看次数" :label-width="formLabelWidth">
        <el-input v-model="article.view" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="喜欢次数" :label-width="formLabelWidth">
        <el-input v-model="article.likeNum" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="文章内容" :label-width="formLabelWidth">
        <el-input v-model="article.content" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="分类名称" :label-width="formLabelWidth">
        <el-input v-model="article.classifyStr" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="文章标签" :label-width="formLabelWidth">
        <el-select v-model="labelStr.region" placeholder="文章标签">
          <el-option label="区域一" value="Web"></el-option>
          <el-option label="区域二" value="Vue"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="saveArticle">确 定</el-button>
    </div>
  </el-dialog>
  <div class="fd-content">
    <mavon-editor v-model="content"/>
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
            article: {
              name: '',
              image: '',
              descInfo:'',
              author:'',
              view:'',
              likeNum:'',
              content:'',
              classifyStr:''
            },
            labelStr: {
              user: '',
              region: ''
            }
          }
    },
    methods:{
      openArticle(){
        this.dialogFormVisible = true;
      },
      saveArticle(){
        this.$api.post(`/api/v1/blog`,this.article, (res) => {
          if (res) {

            this.dialogFormVisible = false;
            this.$message({
              message: '恭喜你，保存成功',
              type: 'success'
            });

          }
        })
      }
    },
    mounted() {
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
