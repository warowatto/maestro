<template>
<div id="wrapper">
  <div id="wrap">
    <header-view></header-view>
    <div class="openM" v-on:click="toggle">
      <a href="#">
        <img src="../assets/menu.png" alt="메뉴열기">
        <img src="../assets/menu_ov.png" alt="메뉴하버이미지">
      </a>
    </div>
    <music-box></music-box>
  </div>
</div>
</template>

<script>
import HeaderView from "../components/HeaderView";
import MusicBox from "../components/MusicBox";

export default {
  components: { HeaderView, MusicBox },
  data() {
    return {
      opened: false
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;

      if (!this.opened) {
        // $(".blackBg").fadeIn(200)
        // $(".dashboard").animate({right:0},400)
      } else {

      }
    }
  }
};
</script>
