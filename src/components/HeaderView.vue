<template>
<!--header s-->
<div id="header">
    <div class="inc_inner">        
        <h2>
            <a>
                <img src="../assets/h_logo.png" alt="header logo">
            </a>
        </h2>

        <ul id="main_mn">
            <li>
                <a href="../assets/ensemble.php">ENSEMBLE</a>
            </li>
            <li>
                <a href="../assets/symphony.php">SYMPHONY</a>
            </li>
            <li>
                <a href="#">ABOUT</a>
            </li>
        </ul>
    </div>

    <div class="openM">
        <a href="#" v-on:mouseover="menuHover = true" v-on:mouseleave="menuHover = false">
            <img v-show="menuHover" src="../assets/menu.png" alt="메뉴열기">
            <img v-show="!menuHover" src="../assets/menu_ov.png" alt="메뉴하버이미지">
        </a>
    </div>
</div>
<!--header e-->
</template>

<script>
export default {
  data () {
      return {
          menuHover: false
      }
  }
}
</script>


<style>
@charset "utf-8";
/* CSS Document */

/*header s*/
#header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:130px;
    background:url(../assets/header.jpg) no-repeat center 0/cover;
    z-index:300;
}
#header h2 a{
    display:block;
    width: 60px;
    margin:10px auto;
}
#header h2 a img{
    width:100%;
}
#header #main_mn{
    width:100%;
    height:50px;
    margin:0 auto;
}
#header #main_mn li{
    float:left;
    width:33.333%;
    height:50px;
}
#header #main_mn li a{
    display:block;
    text-align:center;
    width:100%;
    height:100%;
    font-size:13px;
    line-height:45px;
    color:#fff;
    background-color:rgba(255,255,255,0.1);
}

#header .openM{
    width:30px;
    height:auto;
    position:absolute;
    top:35px;
    right:20px;
}
#header .openM img{
    position:absolute;
    top:0;
    left:0;
    width:100%;
}
#header .openM img:last-child{
    display:none;
}
/*header e*/

/*버튼스타일 지정*/
button{
    width:auto;
    height:auto;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    color:#fff;
    padding:0 0;
    display: inline-block;
    cursor: pointer;
    border-radius:5px;
    box-shadow:1px 1px 3px #ccc;
}

/*pc 화면*/
@media all and (min-width: 1023px){
    
    .inc_inner{
        width:900px;
        height:auto;
        margin:0 auto;
    }
    
    /*header s*/
    #header{
        position:fixed;
        width:100%;
        height:80px;
        padding-top:10px;
        top:0;
        left:0;
        background:url(../assets/header.jpg) no-repeat center 0/cover;
    }
    #header h2{
        width:900px;
        height:auto;
        margin:0 auto;
    }
    #header h2 a{
        float:left;
        width:68px;
        margin:0;
        display: block;
    }
    #header #main_mn{
        width:330px;
        height:50px;
        float:right;
        margin:10px 0 0 0;
    }
    #header #main_mn li{
        float:left;
        width:auto;
        height:auto;
    }
    #header #main_mn li a{
        display:block;
        text-align:center;
        padding:0 20px;
        font-size:16px;
        line-height:50px;
        color:#fff;
        background-color:rgba(255,255,255,0);
        transition:all 0.5s;
    }
    #header #main_mn li:last-child a{
        padding:0 0 0 20px;
    }
    #header #main_mn li a:hover{
        color:#3aacf7;
        text-shadow:2px 2px 10px #222;
    }
    
    /*오픈 메뉴s*/
    #header .openM{
        width:30px;
        height:auto;
        position:absolute;
        top:35px;
        right:40px;
        transition:all 0.5s;
    }
    #header .openM img{
        position:absolute;
        top:0;
        left:0;
        width:100%;
    }
    #header .openM img:last-child{
        display:none;
    }
    #header .openM:hover img:last-child{
        display:block;
    }
    /*오픈 메뉴e*/
    /*header e*/
    
    /*버튼스타일 지정*/
    button{
        width:auto;
        height:auto;
        background-color: #f7f7f7;
        border: 1px solid #ccc;
        color:#fff;
        padding:0 2px;
        display: inline-block;
        cursor: pointer;
        border-radius:5px;
        box-shadow:1px 1px 3px #ccc;
    }
    /*버튼스타일 지정*/
    
}
/*pc 화면*/
</style>
