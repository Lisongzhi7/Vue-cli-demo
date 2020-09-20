<template>
    <div class="create">
      <div class="head">
        <div class="create-head">
          <img src="http://xlsb.luokangyuan.com/1.jpg"/>
          <span>文章分类</span>
        </div>
        <div  @click="openCreate" class="fd-xz"><span>新增</span></div>
      </div>
      <div class="bottom">
        <el-table
          :data="categoryData"
          style="width: 100%">
          <el-table-column
            align="center"
            prop="createTimeStr"
            label="创建日期">
          </el-table-column>

          <el-table-column
            align="center"
            prop="name"
            label="类别名称">
          </el-table-column>
          <el-table-column
            align="center"
            prop="articleNum"
            label="文章数量">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="create">
          <el-form-item label="类别名称" label-width="200">
            <el-input v-model="create.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveCreate">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Create",
      data(){
          return{
            dialogFormVisible:false,
            categoryData:[],
            create:{
              name:'',
            }
          }
      },
      methods:{
        openCreate(){
          this.create.name ='',
          this.dialogFormVisible = true;

        },
        saveCreate(){
          this.$api.post(`/api/v1/classify`,this.create, (res) => {
            if (res) {
              this.dialogFormVisible = false;
              this.$message({
                message: '恭喜你，保存成功',
                type: 'success'
              });
                this.getCreate();
            }
          })
        },
        getCreate(){
          this.$api.get(`/api/v1/classify`,null, (res) => {
            if (res) {
              this.categoryData = res.data;
            }
          })
        },
        handleDelete(index, row){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let url = '/api/v1/classify/' + row.id;
            this.$api.delete(url, null, (res) => {
              if (res) {
                this.$message({
                  message: '恭喜你，删除成功',
                  type: 'success'
                });
                this.getCreate();
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
          this.getCreate();
      }
    }
</script>

<style scoped>
  .create{
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

  .create-head {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .create-head span {
    margin-left: 20px;
    font-size: 22px;
  }

  .create-head img {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin-left: 30px;
  }
  .head span:hover {
    cursor: pointer;
  }

  .fd-xz:hover {
    background: #409eff;
    color: #fff;
  }

  .fd-xz {
    padding: 8px 20px 8px 20px;
    background: #fff;
    margin-right: 70px;
    border-radius: 20px;
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
  .bottom{
    height: 100%;
    width: calc(100% - 10px);
    margin-left: 10px;
    margin-top: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

</style>
