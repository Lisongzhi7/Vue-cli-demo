<template>
  <div class="trave">
    <div class="head">
      <div class="trave-head">
        <img src="http://xlsb.luokangyuan.com/1.jpg"/>
        <span>我的旅游</span>
      </div>
      <div @click="openTrave" class="fd-xz"><span>新增</span></div>
    </div>
    <div class="bottom">
      <el-table
        :data="traveData"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="url"
          label="图片地址" show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          align="center"
          prop="address"
          label="旅游地点">
        </el-table-column>
        <el-table-column
          align="center"
          prop="descInfo"
          label="旅游心得" show-overflow-tooltip="true">
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
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="trave">
        <el-form-item label="图片地址" label-width="200">
          <el-input v-model="trave.url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="旅游地点" label-width="200">
          <el-input v-model="trave.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="旅游心得" label-width="200">
          <el-input v-model="trave.descInfo" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveTrave">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Trave",
    data() {
      return {
        dialogFormVisible: false,
        traveData: [],
        trave: {
          url: '',
          address: '',
          descInfo: '',

        }
      }
    },
    methods: {
      /**
       * @description: 查询列表数据
       */
      getTrave() {
        this.$api.get(`/api/v1/travel`, null, (res) => {
          if (res) {
            this.traveData = res.data;
          }
        })
      },
      /**
       * @description: 再次打开新增按钮，内容清空
       */
      openTrave() {
        this.trave.url = '';
        this.trave.address = '';
        this.trave.descInfo = '';
        this.dialogFormVisible = true;
      },
      /**
       * @description: 保存我的旅游新增对象
       */
      saveTrave() {
        this.$api.post(`/api/v1/travel`, this.trave, (res) => {
          if (res) {
            this.dialogFormVisible = false;
            this.$message({
              message: '恭喜你，保存成功',
              type: 'success'
            });
            this.getTrave();
          }
        })
      },
      /**
       * @description: 删除数据
       * @param index: 下表
       * @param row: 删除的我的旅游对象
       */
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let url = '/api/v1/travel/' + row.id;
          this.$api.delete(url, null, (res) => {
            if (res) {
              this.$message({
                message: '恭喜你，删除成功',
                type: 'success'
              });
              this.getTrave();
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
      this.getTrave();
    }
  }
</script>

<style scoped>
  .trave {
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

  .trave-head {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .trave-head span {
    margin-left: 20px;
    font-size: 22px;
  }

  .trave-head img {
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

  .bottom {
    height: 100%;
    width: calc(100% - 10px);
    margin-left: 10px;
    margin-top: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>
