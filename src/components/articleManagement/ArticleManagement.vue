<template>
  <div class="articleManagement">
    <div class="head">
      <div class="articleManagement-head">
        <img src="http://xlsb.luokangyuan.com/1.jpg"/>
        <span>文章管理</span>
      </div>
    </div>
    <div class="bottom">
      <el-table
        :data="articleManagementData">

        <el-table-column
          align="center"
          prop="name"
          label="文章名称">
        </el-table-column>
        <el-table-column
          align="center"
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          align="center"
          prop="descInfo"
          label="文章描述">
        </el-table-column>
        <el-table-column
          align="center"
          prop="image"
          label="图片地址">
        </el-table-column>
        <el-table-column
          align="center"
          prop="view"
          label="浏览次数">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">保存
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleManagement",

    data() {
      return {
        dialogFormVisible: false,
        articleManagementData: [],
        articleManagement: {
          name: '',
          author: '',
          descInfo: '',
          image: '',
          view:''
        }
      }
    },
    methods: {
      getArticleManagement() {
        this.$api.post(`/api/v1/blogs`, this.articleManagement, (res) => {
          if (res) {
            this.articleManagementData = res.data;
          }
        })
      },
      handleEdit(index,row){
        this.$api.post(`/api/v1/blog`,this.handleEdit, (res) => {
          if (res) {
            this.$message({
              message: '恭喜你，保存成功',
              type: 'success'
            });
          }
          this.getArticleManagement();
        })
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let url = '/api/v1/blog/' + row.id;
          this.$api.delete(url, null, (res) => {
            if (res) {
              this.$message({
                message: '恭喜你，删除成功',
                type: 'success'
              });
              this.getArticleManagement();
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    mounted() {
      this.getArticleManagement()
    }
  }
</script>

<style scoped>
  .articleManagement {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .articleManagement-head {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .articleManagement-head span {
    margin-left: 20px;
    font-size: 22px;
  }

  .articleManagement-head img {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin-left: 30px;
  }

  .head {
    height: 60px;
    width: calc(100% - 10px);
    background: #e4e7ed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

  .bottom {
    height: 100%;
    width: calc(100% - 10px);
    margin-left: 10px;
    margin-top: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>
