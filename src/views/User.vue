<template>
<div class="user">
  <div class="header">
    <div class="avater">
      <img :src="base+user.head_img">
    </div>
    <div class="info">
      <div class="name">
        <span v-if="user.gender===1" class="iconfont iconxingbienan"></span>
        <span v-else class="iconfont iconxingbienv"></span>
        <span>{{user.nickname}}</span>
      </div>
      <div class="time">
        {{user.create_date | time}}
      </div>
    </div>
    <div class="arrow">
      <span class="iconfont iconjiantou1"></span>
    </div>
  </div>
  <hm-navitem to="/follow">
    <template>
      我的关注
    </template>
    <template #content>
      关注的内容
    </template>
  </hm-navitem>
  <hm-navitem to="/follow">
    <template>
      我的跟帖
    </template>
    <template #content>
      跟帖/回复
    </template>
  </hm-navitem>
  <hm-navitem to="/follow">
    <template>
      我的收藏
    </template>
    <template #content>
      文章/视频
    </template>
  </hm-navitem>
  <hm-navitem to="/edit">
    设置
  </hm-navitem>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: ''
    }
  },
  async created() {
    const token = localStorage.getItem('token')
    const useId = localStorage.getItem('userId')
    const res = await this.$axios.get(`/user/${useId}`, {
      headers: {
        Authorization: token
      }
    })
    // console.log(res)
    const {
      statusCode,
      data
    } = res.data
    if (statusCode === 200) {
      this.user = data
    }
  },
  computed: {
    base() {
      return this.$axios.defaults.baseURL
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  .header {
    display: flex;
    align-items: center;
    padding: 20px 20px;
    border-bottom: 3px solid #ddd;
  }

  .avater {
    width: 70px;
    height: 70px;

    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }

  .info {
    flex: 1;
    padding-left: 10px;
    font-size: 14px;

    .time {
      margin-top: 10px;
      color: #666;
    }

    .iconxingbienan {
      color: #7bbcec;
    }

    .iconxingbienv {
      color: pink;
    }
  }
}
</style>
