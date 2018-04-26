<template>
    <div id="menu">
        <div class="inner">
            <ul>
                <li>
                    <router-link to="/ensemble"
                       v-on:mouseleave="ensemble.hover = false"
                       v-on:mouseover="ensemble.hover = true" >
                        <img 
                            v-show="!ensemble.hover"
                            src="../assets/ensemble.png" 
                            alt="ensemble btn">
                        <img
                            v-show="ensemble.hover"
                            src="../assets/ensemble_ov.png"
                            alt="ensemble btn">
                    </router-link>
                </li>

                <li>
                    <router-link to="/ensemble"
                       v-on:mouseleave="symphony.hover = false"
                       v-on:mouseover="symphony.hover = true" >
                        <img 
                            v-show="!symphony.hover"
                            src="../assets/symphony.png" 
                            alt="play btn">
                        <img
                            v-show="symphony.hover"
                            src="../assets/symphony_ov.png"
                            alt="symphony btn">
                    </router-link>
                </li>

                <li>
                    <router-link to="/ensemble"
                       v-on:mouseleave="about.hover = false"
                       v-on:mouseover="about.hover = true" >
                        <img 
                            v-show="!about.hover"
                            src="../assets/about.png" 
                            alt="about btn">
                        <img
                            v-show="about.hover"
                            src="../assets/about_ov.png"
                            alt="about btn">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "main-menu",
  data() {
    return {
      symphony: {
        hover: true
      },
      ensemble: {
        hover: true
      },
      about: {
        hover: true
      }
    };
  }
};
</script>

<style>
@charset "utf-8";
/* CSS Document */

/*모바일화면*/
/*menu s*/
#menu{
    margin:5% 0 0 0;
}
#menu .inner ul{
    width:50%;
    height:auto;
    margin:0 auto;
}
#menu .inner ul li{
    width:100%;
    height:auto;
    position:relative;
}

#menu .inner ul li img{
    width:100%;
    margin:7% 0 0 0;
}
#menu .inner ul li:first-child img{
    margin:0;
}

#menu .inner ul li img:first-child{
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    transition:0.3s;
}
/*menu e*/

/*pc 화면*/
@media all and (min-width: 1023px){
    /*menu s*/
    #menu{
        margin:3% 0 0 0;
    }
    #menu .inner ul{
        width:31%;
        height:auto;
        margin:0 auto;
    }
    #menu .inner ul li{
        width:100%;
        height:auto;
        position:relative;
    }

    #menu .inner ul li img{
        width:100%;
        margin:8% 0 0 0;
    }
    #menu .inner ul li:first-child img{
        margin:0;
    }

    #menu .inner ul li img:first-child{
        position:absolute;
        top:0;
        left:0;
        opacity:0;
        transition:0.3s;
    }
    #menu .inner ul li:hover img:first-child{
        opacity:1;
    }
    /*menu e*/
}
</style>


