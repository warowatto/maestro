<template>
  <div id="app">
    <router-view/>
    <footer-view></footer-view>
  </div>
</template>

<script>

import FooterView from './components/FooterView'

export default {
  name: 'App',
  components: { FooterView }
}
</script>

<style>
@charset "utf-8";
/* CSS Document */

@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css); 

/*reset.css*/
*{
    padding:0px;
    margin:0px;
}

ul,li {
    list-style:none;
}

a {
    text-decoration:none;
    color:#333;
}
img{
    border: 0;
    vertical-align: top;
}
body {
    width:100%;
    font-family:'Noto Sans KR', sans-serif;
    color:#333;
}

.cf:after{
    content:"";
    clear:both;
    display:block;
}
/*reset.css end*/
</style>

