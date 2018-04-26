<template>
    <div id="wrap">
        <!--intro s-->
        <div id="intro">
            
            <!--logo s-->
            <div id="logo">
                <div class="inner">
                    <img src="../assets/logo.png" alt="MAESTRO LOGO">
                </div>
            </div>
            <!--logo e-->
            <main-menu></main-menu>
        </div>
        <!--intro e-->
    </div>
</template>

<script>
import MainMenu from "../components/MainMenu";

export default {
  components: { MainMenu }
};
</script>

<style>
/*공통속성 지정*/
@charset "utf-8";
/* CSS Document */

/*모바일화면*/

/*공통속성 지정*/
.inner {
  padding: 0 15px;
}
/*공통속성 지정*/

#wrap {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(../assets/bg.jpg) no-repeat center 0/cover;
  overflow: hidden;
}

#intro {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
}

/*logo s*/
#logo .inner img {
  width: 100%;
}
/*logo e*/

/*모바일화면*/

/*태블릿 화면*/
@media all and (min-width: 767px) {
  #intro {
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
  }

  /*logo s*/
  #logo .inner img {
    width: 100%;
  }
  /*logo e*/

}
/*태블릿 화면*/

/*pc 화면*/
@media all and (min-width: 1023px) {
  #wrap {
    position: relative;
    width: 100%;
  }

  /*공통속성 지정*/
  .inner {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  /*공통속성 지정*/

  #wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url(../assets/bg.jpg) no-repeat center 0/cover;
  }

  #intro {
    width: 1200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
  }

  /*logo s*/
  #logo .inner img {
    width: 65%;
  }
  /*logo e*/
}

/*logo s*/
</style>


