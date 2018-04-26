<template>
<!--컨텐츠01-->
<li class="cf">
    
    <a>
        <div class="img">
            <img src="../assets/ensemble/con_img1.jpg" alt="컨텐츠이미지1">
        </div>

        <div class="txt">
            <h3>{{ data.title }}</h3>
            <h2>{{ data.description }}</h2>

            <!--후원참여 그래프-->
            <div class="donate_box">

                <!--후원수치, 그래프 및 후원버튼-->
                <div class="donate cf">

                    <div class="percent cf">
                        <p>{{ persent }}%</p>
                        <p>({{ data.manyPerson }}명 참여)</p>
                    </div>

                    <div class="donate_bar">
                        <div v-bind:style="{width: persent + '%' }"></div>
                    </div>

                    <img src="../assets/ensemble/donate_btn.png" alt="donate btn">

                </div>
                <!--후원수치, 그래프 및 후원버튼-->

                <h4><span>현재후원금액</span> <span>{{ formatMoney(data.nowPrice) }}원</span> /{{ formatMoney(data.targetPrice) }}원</h4>
                <p class="date">마감까지 <b>{{ dday }}일 </b>남음</p>
                <p class="date">({{ formatDate(data.date.start) }}~{{ formatDate(data.date.end) }})</p>

            </div>
            <!--후원참여 그래프-->
        </div>                    
    </a>
</li>
</template>

<script>
import moment from "moment";

export default {
  name: "ensemble-item",
  props: ["data"],
  methods: {
    moneyFormat: function(price) {
      return price;
    }
  },
  computed: {
    persent() {
      let data = this.data;
      let nowPrice = data.nowPrice;
      let targetPrice = data.targetPrice;

      return (nowPrice / targetPrice * 100) | 0;
    },
    dday() {
      let nowDate = new Date();
      let endDate = moment(this.data.date.end, "YYYY-MM-DD").toDate();
      let gap = endDate.getTime() - nowDate.getTime();

      return Math.floor(gap / (1000 * 60 * 60 * 24));
    }
  },
  methods: {
    formatMoney(money) {
      return money.toLocaleString();
    },
    formatDate(date) {
      let dateObject = moment(date, "YYYY-MM-DD").toDate();
      return moment(dateObject).format("YYYY.MM.DD");
    }
  }
};
</script>

<style>
@charset "utf-8";
/* CSS Document */

/*모바일화면*/
#wrapper {
  position: relative;
}
#wrap {
  width: 100%;
  min-width: 320px;
}
.inner {
  padding: 0 15px;
}

/*section s*/
#section {
  width: 100%;
  background-color: #ebebeb;
  padding-top: 150px;
  padding-bottom: 30px;
}
#section .inner .ttl {
  width: 100%;
  margin: 0 auto;
}
#section .inner .ttl img {
  width: 40px;
  float: left;
}
#section .inner .ttl h3 {
  float: left;
  font-size: 25px;
  margin: 0 0 0 10px;
  font-weight: bolder;
}
#section .inner .ttl span {
  color: #014da1;
}

/*셀렉트박스*/
#section .inner .ttl select {
  float: right;
  width: 90px;
  height: 25px;
  padding-left: 10px;
  font-size: 13px;
  color: #333;
  border: 1px solid #666;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.5);
  margin: 5px 0 0 0;
}
/*셀렉트박스*/

#section ul li:first-child {
  margin: 20px 0 0 0;
}
#section ul li {
  width: 100%;
  margin: 30px 0 0 0;
}
#section ul li .img {
  width: 100%;
  height: 50%;
  overflow: hidden;
  margin: 0 0 10px 0;
}
#section ul li a {
  display: block;
  width: 100%;
  height: 100%;
}
#section ul li .img img {
  width: 100%;
  height: 100%;
}

#section ul li .txt {
  width: 100%;
  height: 180px;
}

/*타이틀 속성 지정*/
#section ul li .txt h3 {
  font-size: 15px;
  color: #333;
}
#section ul li .txt h2 {
  font-size: 23px;
  color: #333;
  margin: 0 0 10px 0;
}
/*타이틀 속성 지정*/

/*후원그래프 위 수치*/
#section ul li .txt .donate_box .donate .percent {
  width: 88%;
}
#section ul li .txt .donate_box .donate .percent p:first-child {
  float: left;
  font-size: 16px;
  font-weight: bolder;
}
#section ul li .txt .donate_box .donate .percent p:last-child {
  float: right;
  font-size: 11px;
}
/*후원그래프 위 수치*/

/*후원그래프*/
#section ul li .txt .donate_box .donate_bar {
  width: 85%;
  height: 10px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  float: left;
  margin: 5px 10px 0 0;
}

#section ul li .txt .donate_box .donate_bar div {
  height: 100%;
  background-color: #0661d2;
}
/*후원그래프*/

/*후원버튼*/
#section ul li .txt .donate_box .donate a {
  float: left;
  display: block;
  width: 24px;
  height: auto;
}
/*후원버튼*/

/*후원금액 속성지정*/
#section ul li .txt .donate_box h4 {
  font-size: 17px;
  margin: 10px 0;
}
#section ul li .txt .donate_box h4 span:first-child {
  font-size: 13px;
}
#section ul li .txt .donate_box h4 span {
  color: #0661d2;
}
/*후원금액 속성지정*/

#section ul li .txt .date {
  font-size: 13px;
  float: left;
}
#section ul li .txt .date:last-child {
  margin: 0 0 0 10px;
}
/*section e*/

/*모바일화면*/

/*pc 화면*/
@media all and (min-width: 1023px) {
  #wrapper {
    width: 100%;
  }
  #wrap {
    position: relative;
    width: 100%;
  }

  /*공통속성 지정*/
  .inner {
    width: 900px;
    margin: 0 auto;
  }
  /*공통속성 지정*/

  /*section s*/
  #section {
    width: 100%;
    padding: 130px 0 50px 0;
  }
  #section .inner .ttl {
    width: 100%;
    margin: 0;
  }
  #section .inner .ttl img {
    width: 45px;
    float: left;
  }
  #section .inner .ttl h3 {
    float: left;
    font-size: 30px;
    margin: 0 0 0 10px;
    font-weight: bolder;
  }
  #section .inner .ttl span {
    color: #014da1;
  }

  /*셀렉트박스*/
  #section .inner .ttl select {
    cursor: pointer;
    float: right;
    width: 90px;
    height: 25px;
    padding-left: 10px;
    font-size: 13px;
    color: #333;
    border: 1px solid #666;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.5);
    margin: 14px 0 0 0;
  }
  /*셀렉트박스*/

  #section ul li {
    width: 100%;
    height: 270px;
    margin: 30px 0 0 0;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 10px #ddd;
    cursor: pointer;
    transition: all 0.3s;
  }
  #section ul li:hover {
    box-shadow: 0 0 15px #aaa;
  }
  #section ul li a {
    display: block;
    width: 100%;
    height: 100%;
  }
  #section ul li .img {
    width: 30%;
    height: 200px;
    float: left;
    overflow: hidden;
    margin: 35px 0 0 5%;
  }
  #section ul li .img img {
    width: 100%;
    height: 100%;
  }

  #section ul li .txt {
    width: 60%;
    height: 270px;
    padding-left: 3%;
    float: right;
  }

  /*타이틀 속성 지정*/
  #section ul li .txt h3 {
    font-size: 14px;
    color: #333;
    margin: 40px 0 0 0;
  }
  #section ul li .txt h2 {
    font-size: 24px;
    color: #333;
    margin: 0 0 5px 0;
  }
  /*타이틀 속성 지정*/

  /*후원그래프 위 수치*/
  #section ul li .txt .donate_box .donate .percent {
    width: 400px;
  }
  #section ul li .txt .donate_box .donate .percent p:first-child {
    float: left;
    font-size: 16px;
    font-weight: bolder;
  }
  #section ul li .txt .donate_box .donate .percent p:last-child {
    float: right;
    font-size: 11px;
  }
  /*후원그래프 위 수치*/

  /*후원그래프*/
  #section ul li .txt .donate_box .donate_bar {
    width: 400px;
    height: 10px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    float: left;
    margin: 5px 20px 0 0;
  }
  /*후원그래프*/

  /*후원금액 속성지정*/
  #section ul li .txt .donate_box h4 {
    font-size: 18px;
    margin: 3px 0;
    font-weight: 500;
  }
  #section ul li .txt .donate_box h4 span:first-child {
    font-size: 15px;
  }
  /*후원금액 속성지정*/

  #section ul li .txt .date {
    font-size: 14px;
    float: none;
    margin: 5px 0;
  }
  #section ul li .txt .date:last-child {
    font-size: 12px;
    margin: 0 0 0 0;
  }
  /*section e*/
}
/*pc 화면*/
</style>
