<template>
    <div class="aboutMe">
      <div class="head">
        <div class="aboutMe-head">
          <img src="http://xlsb.luokangyuan.com/1.jpg"/>
          <span>关于我</span>
        </div>
        <div class="miaoshu">
        <div  @click="dialogFormVisible = true" class="fd-xz"><span>新增</span></div>
        <div  @click="dialogFormVisible = true" class="fd-xg"><span>修改</span></div>
        </div>
      </div>
      <div class="bottom">
        <el-form ref="about" :model="about">
          <el-form-item label="个人描述：">
            <span>{{about.describeInfo}}</span>
          </el-form-item>
        </el-form>
        <el-form ref="about" :model="about">
          <el-form-item label="邮箱地址：">
            <span>{{about.email}}</span>
          </el-form-item>
        </el-form>
        <el-form ref="about" :model="about">
          <el-form-item label="自我鼓励文字：">
            <span>{{about.encourageFont}}</span>
          </el-form-item>
        </el-form>
        <el-form ref="about" :model="about">
        <el-form-item label="GitHub地址：">
          <span>{{about.github}}</span>
        </el-form-item>
      </el-form>
        <el-form ref="about" :model="about">
        <el-form-item label="头像地址：">
          <span>{{about.headImage}}</span>
        </el-form-item>
      </el-form>
        <el-form ref="about" :model="about">
        <el-form-item label="个人介绍：">
          <span>{{about.introduction}}</span>
        </el-form-item>
      </el-form>
        <el-form ref="about" :model="about">
        <el-form-item label="昵称：">
          <span>{{about.name}}</span>
        </el-form-item>
      </el-form>
        <el-form ref="about" :model="about">
        <el-form-item label="QQ号：">
          <span>{{about.qq}}</span>
        </el-form-item>
      </el-form>
        <el-form ref="about" :model="about">
        <el-form-item label="配图地址：">
          <span>{{about.url}}</span>
        </el-form-item>
      </el-form>
        <el-form ref="about" :model="about">
        <el-form-item label="微信号：">
          <span>{{about.weChat}}</span>
        </el-form-item>
      </el-form>
      </div>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="about">
          <el-form-item label="个人描述" :label-width="formLabelWidth">
            <el-input v-model="about.describeInfo" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱地址" :label-width="formLabelWidth">
            <el-input v-model="about.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="自我鼓励文字" :label-width="formLabelWidth">
            <el-input v-model="about.encourageFont" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="GitHub地址" :label-width="formLabelWidth">
            <el-input v-model="about.github" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="头像地址" :label-width="formLabelWidth">
            <el-input v-model="about.headImage" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="个人介绍" :label-width="formLabelWidth">
            <el-input v-model="about.introduction" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="昵称" :label-width="formLabelWidth">
            <el-input v-model="about.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="QQ号" :label-width="formLabelWidth">
            <el-input v-model="about.qq" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="配图地址" :label-width="formLabelWidth">
            <el-input v-model="about.url" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="微信号" :label-width="formLabelWidth">
            <el-input v-model="about.weChat" autocomplete="off"></el-input>
          </el-form-item>





        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveAbout">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "AboutMe",
      data() {
        return {
          dialogFormVisible: false,
          about: {}
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        },
        /**
         * @description: 查询
         */
        getAbout(){
          this.$api.get(`/api/v1/about`,null, (res) => {
            if (res) {
             this.about = res.data
            }
          })
        },
        /**
         * @description: 保存和修改关于我的信息
         */
        saveAbout(){
          if(this.about.id == null){``
            this.$api.post(`/api/v1/about`,this.about, (res) => {
              if (res) {
                this.dialogFormVisible = false;
                this.$message({
                  message: '恭喜你，保存成功',
                  type: 'success'
                });
                this.getAbout();

              }
            })
          }else {
            this.$api.put(`/api/v1/about`,this.about, (res) => {
              if (res) {
                this.dialogFormVisible = false;
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                });
                this.getAbout();
              }
            })
          }

        }
      },
      mounted() {
          this.getAbout()
      }
    }
</script>

<style scoped>
.aboutMe{
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
.miaoshu{
  display: flex;
  flex-direction: row;
}

.aboutMe-head {
  display: flex;
  align-items: center;
  justify-content: center;
}

.aboutMe-head span {
  margin-left: 20px;
  font-size: 22px;
}

.aboutMe-head img {
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
.fd-xg:hover {
  background: #409eff;
  color: #fff;
}

.fd-xz {
  padding: 8px 20px 8px 20px;
  background: #fff;
  margin-right: 20px;
  border-radius: 20px;
}
.fd-xg{
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
  .el-form{
    margin-left: 20px;
  }
</style>
