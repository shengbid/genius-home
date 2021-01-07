<template>
  <div class="message-note-container">
    <ul class="note-list">
      <li 
        v-for="item in messageList"
        :key="item.id"
        class="nt-item bg-white">
        <div class="logo">
          <img :src="item.logo" alt="">
        </div>
        <div class="info-list">
          <div class="name">{{ item.name }}</div>
          <ul class="infos">
            <li 
              v-for="subitem in item.list"
              :key="subitem.id"
              class="in-item">
              <div class="time">{{ subitem.time }}</div>
              <div class="text">{{ subitem.msg }}</div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getNoteList } from '@/service/list'

  export default {
    name: 'Message',
    data() {
      return {
        messageList: []
      }
    },
    created() {
      this.getNoteData()
    },
    methods: {
      getNoteData() {
        getNoteList().then(res => {
          this.messageList = res.data
        })
      }
    }
  }
</script>

<style lang="less">
.message-note-container {
  .note-list {
    margin-top: 5px;
    .nt-item {
      display: flex;
      margin-bottom: 5px;
      padding: 10px;
      .logo {
        flex-basis: 150px;
        height: 170px;
      }
      .info-list {
        flex: 1;
        margin-left: 10px;
        .name {
          font-size: 16px;
          color: rgba(0, 0, 0, .7);
          margin-bottom: 10px;
        }
        .infos {
          border: 1px solid #f5f5f5;
          border-radius: 3px;
          padding: 5px 15px;
          .in-item {
            padding: 10px 0;
            .time {
              color: #999;
            }
            .text {
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>