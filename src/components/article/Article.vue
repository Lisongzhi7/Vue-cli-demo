<template>
<div class="article">
  <div class="fd-nav" >
    <div class="gljm">
      <img src="http://xlsb.luokangyuan.com/1.jpg"/>
      <span>木子李的管理界面</span>
    </div>
    <div class="fd-quxiao"><span>取消</span></div>
    <div  @click="dialogFormVisible = true" class="fd-fabu"><span>发布</span></div>
  </div>

  <el-dialog title="提交发布" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="照片地址" :label-width="formLabelWidth">
        <el-input v-model="form.image" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="内容" :label-width="formLabelWidth">
        <el-input v-model="form.desc" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="时间" :label-width="formLabelWidth">
        <el-input v-model="form.time" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="作者" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" :label-width="formLabelWidth">
        <el-input v-model="form.classify" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
            form: {
              designation: '',
              image: '',
              desc:'',
              time:'',
              name:'',
              classify:'',
            },
          }
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
    margin-right: 1310px;
  }
  .gljm span{
    margin-left: 20px;
    font-size: 22px;
  }
.gljm img{
  height: 40px;
  width: 40px;
  border-radius: 20px;
}
.fd-nav{
  height: 60px;
  width: calc(100% - 10px);
  background: #e4e7ed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left:10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.fd-nav span:hover{
  cursor: pointer;

}
.fd-quxiao{
  padding: 8px 20px 8px 20px;
  background: #fff;
  margin-right: 30px;
  border-radius: 20px;
}
.fd-quxiao:hover{
  background: #409eff;
  color: #fff;
}
.fd-fabu:hover{
  background: #409eff;
  color: #fff;
}
.fd-fabu{
  padding: 8px 20px 8px 20px;
  background: #fff;
  margin-right: 20px;
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
