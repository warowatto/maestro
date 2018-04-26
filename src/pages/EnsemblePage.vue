<template>
<!--section s-->
<div id="section">
    <div class="inner">
        <div class="ttl cf">
            <img src="../assets/ttl_icon.png" alt="타이틀 아이콘입니다">
            <h3><span>P</span>ROJECTS</h3>
            
            <!--셀렉트박스-->
            <select name="list" v-model="selected">
                <option value="가나다순">가나다순</option>
                <option value="마감일순">마감일순</option>
                <option value="진행량순" selected="selected">진행량순</option>
            </select>
            <!--셀렉트박스-->
            
        </div>
        
        <!--후원컨텐츠-->
        <ul v-for="item in items">
            <ensemble-item v-bind:data="item"></ensemble-item>
        </ul>
        <!--후원컨텐츠-->
        
    </div>
    <!--inner end-->
    
</div>
<!--section e-->
</template>

<script>
import moment from "moment";
import EnsembleItem from "../components/EnsembleItem";

export default {
  components: { EnsembleItem },
  data() {
    return {
      items: [],
      selected: "마감일순"
    };
  },
  created() {
    this.items = [
      {
        title: "나 뮤직마마의 프로젝트",
        description: "자살예방 생명존중 콘서트",
        manyPerson: 100,
        nowPrice: 6400400,
        targetPrice: 8000000,
        date: {
          start: "2018-01-01",
          end: "2018-08-02"
        }
      },
      {
        title: "가 뮤직마마의 프로젝트",
        description: "자살예방 생명존중 콘서트",
        manyPerson: 100,
        nowPrice: 6400400,
        targetPrice: 80000000,
        date: {
          start: "2018-01-01",
          end: "2018-05-31"
        }
      },
      {
        title: "다 뮤직마마의 프로젝트",
        description: "자살예방 생명존중 콘서트",
        manyPerson: 100,
        nowPrice: 5000000,
        targetPrice: 8000000,
        date: {
          start: "2018-01-01",
          end: "2018-04-30"
        }
      }
    ];

    this.sort();
  },
  watch: {
    selected() {
        this.sort();
    }
  },
  methods: {
    sort() {
      let sortType = this.selected;
      if (sortType == "가나다순") {
        this.items.sort((a, b) => {
          return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
        });
      } else if (sortType == "마감일순") {
        this.items.sort((a, b) => {
          return this.toTime(a.date.end) - this.toTime(b.date.end);
        });
      } else {
        this.items.sort((a, b) => {
          let aValue = a.targetPrice - a.nowPrice;
          let bValue = b.targetPrice - b.nowPrice;
          return aValue - bValue;
        });
      }
    },
    toTime(dateText) {
      return moment(dateText, "YYYY-MM-DD")
        .toDate()
        .getTime();
    }
  }
};
</script>

<style>

</style>
