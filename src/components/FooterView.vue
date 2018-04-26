<template>
<div id="footer">
    <div class="inner">
        <address>
            상호명 : 마에스트로 ｜ 대표자 : 홍길동 ｜ 주소 : 서울 마포구 00로 123 ｜ 대표전화 : 02-111-1111<br>
            
            사업자등록번호 : 000-00-00000 ｜ COPYRIGHT(C) 2018 MAESTRO.ALL RIGHTS RESERVED.
        </address>
    </div>
</div>
</template>

<script>
export default {
  name: "footer-view"
};
</script>

<style>
/*footer s*/
#footer {
  width: 100%;
  background-color: #041130;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5% 0;
}
#footer .inner address {
  text-align: center;
  font-style: normal;
  font-size: 12px;
  line-height: 23px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 0 0;
}
/*footer e*/
</style>



