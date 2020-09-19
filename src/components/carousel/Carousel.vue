<template>
  <div class="carousel">
    <div class="head">
      <div class="carousel-head">
        <img src="http://xlsb.luokangyuan.com/1.jpg"/>
        <span>走马灯管理</span>
      </div>
      <div @click="saveCarousel" class="fd-fb"><span>新增</span></div>
    </div>
    <div class="bottom">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="createTimeStr"
          label="创建日期">
        </el-table-column>
        <el-table-column
          align="center"
          prop="url"
          label="图片地址">
        </el-table-column>
        <el-table-column
          align="center"
          prop="sfyx"
          label="是否有效">
          <template slot-scope="scope">
            <span v-if="scope.row.sfyx =='2'">有效</span>
            <span v-if="scope.row.sfyx =='1'">无效</span>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="图片">
          <template slot-scope="scope">
            <img width="40px" height="20px" :src="scope.row.url "/>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
            <el-button v-if="scope.row.sfyx == '2'"
                       size="mini"
                       @click="updateSfyx(scope.$index, scope.row)">置为无效
            </el-button>
            <el-button v-if="scope.row.sfyx == '1'"
                       size="mini"
                       @click="updateSfyx(scope.$index, scope.row)">置为有效
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      /**
       * @description: 编辑单个走马灯
       * @param index: 下表
       * @param row: 编辑的走马灯对象
       */
      handleEdit(index, row) {
        console.log(index, row);
        this.$prompt('请输入图片地址', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {
          if (value == null) {
            this.$message({
              message: '警告哦，图片地址不能为空',
              type: 'warning',
            });
          } else {
            row.url = value;
            this.$api.put(`/api/v1/carouse`, row, (res) => {
              if (res) {
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                });
              }
              this.getList();
            })
          }

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      /**
       * @description: 删除单个走马灯
       * @param index: 下表
       * @param row: 编辑的走马灯对象
       */
      handleDelete(index, row) {
        console.log(index, row);
        let url = '/api/v1/carouse/' + row.id;
        this.$api.delete(url, null, (res) => {
          if (res) {
            this.$message({
              message: '恭喜你，删除成功',
              type: 'success'
            });
            this.getList();
          }
        })
      },
      /**
       * @description: 修改单个走马灯是否置为有效与无效
       * @param index: 下表
       * @param row: 编辑的走马灯对象
       */
      updateSfyx(index, row) {
        let sfyx = row.sfyx == '2' ? '1' : '2';
        let url = '/api/v1/carouse/' + row.id + '/' + sfyx;
        this.$api.put(url, null, (res) => {
          if (res) {
            this.$message({
              message: '恭喜你，修改成功',
              type: 'success'
            });
            this.getList();
          }
        })
      },
      /**
       * @description:保存走马灯
       */
      saveCarousel() {
        this.$prompt('请输入图片地址', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {
          if (value == null) {
            this.$message({
              message: '警告哦，图片地址不能为空',
              type: 'warning',
            });
          } else {
            let carouse = {
              url: value
            }
            this.$api.post(`/api/v1/carouse`, carouse, (res) => {
              if (res) {
                this.$message({
                  message: '恭喜你，新增成功',
                  type: 'success'
                });
              }
              this.getList();
            })
          }

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      /**
       * @description: 查询列表数据
       */
      getList() {
        this.$api.get(`/api/v1/carouse`, null, (res) => {
          if (res) {
            this.tableData = res.data;
          }
        })
      }
    },
    mounted() {
      this.getList();

    }
  }
</script>

<style scoped>
  .carousel {
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

  .carousel-head {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-head span {
    margin-left: 20px;
    font-size: 22px;
  }

  .carousel-head img {
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

  .head span:hover {
    cursor: pointer;
  }

  .fd-fb:hover {
    background: #409eff;
    color: #fff;
  }

  .fd-fb {
    padding: 8px 20px 8px 20px;
    background: #fff;
    margin-right: 70px;
    border-radius: 20px;
  }

  .bottom {
    height: 100%;
    width: calc(100% - 10px);
    margin-top: 10px;
    margin-left: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

</style>
