<template>
    <div class="timerShaft">
      <div class="head">
        <div class="timerShaft-head">
          <img src="http://xlsb.luokangyuan.com/1.jpg"/>
          <span>碎言碎语</span>
        </div>
        <div class="fd-xz"><span>新增</span></div>
      </div>
      <div class="bottom"></div>
    </div>
</template>

<script>
    export default {
        name: "TimerShaft"
    }
</script>

<style scoped>
  .timerShaft{
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

  .timerShaft-head {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1300px;
  }

  .timerShaft-head span {
    margin-left: 20px;
    font-size: 22px;
  }

  .timerShaft-head img {
    height: 40px;
    width: 40px;
    border-radius: 20px;
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
    justify-content: flex-end;
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
