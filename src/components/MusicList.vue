<template>
<div class="playlist">
                
    <div class="top cf">
                    
        <p>Playlist</p>
                    
        <!--셀렉트박스-->
        <select name="list">
            <option value="추가순">추가순</option>
            <option value="최신순">최신순</option>
            <option value="이름순" selected="selected">이름순</option>
        </select>
        <!--셀렉트박스-->
                    
    </div>
                
    <!--노래 리스트 영역-->
    <ul class="song_list cf" id="list">
        <li>
            <input type="checkbox" name="check" value="HTML">
            <p>1</p>
            <p>
                Heart Shaker<br>
                <span>트와이스</span>
            </p>
        </li>
        <li>
            <input type="checkbox" name="check" value="HTML">
            <p>2</p>
            <p>
                LOVE SCENARIO<br>
                <span>WINNER</span>
            </p>
        </li>
        <li>
            <input type="checkbox" name="check" value="HTML">
            <p>3</p>
            <p>
                뿜뿜<br>
                <span>MOMOLAND</span>
            </p>
        </li>
        <li>
            <input type="checkbox" name="check" value="HTML">
            <p>4</p>
            <p>
                Like it<br>
                <span>윤종신</span>
            </p>
        </li>
        <li>
            <input type="checkbox" name="check" value="HTML">
            <p>5</p>
            <p>
                Shape of You<br>
                <span>WINNER</span>
            </p>
        </li>
        <li>
            <input type="checkbox" name="check" value="HTML">
            <p>6</p>
            <p>
                Red Flavor<br>
                <span>레드벨벳</span>
            </p>
        </li>
        <li>
            <input type="checkbox" name="check" value="HTML">
            <p>7</p>
            <p>
                energetic<br>
                <span>워너원</span>
            </p>
        </li>
                    
    </ul>
                
    <!--아래 버튼 영역-->
    <div class="bot_btn cf">
                    
        <input type="checkbox" name="check" value="HTML">
                    
        <button type="button">
            <img src="../assets/d_btn1.png" alt="아래버튼">
        </button>
        <button type="button">
            <img src="../assets/d_btn2.png" alt="위버튼">
        </button>
        <button type="button">
            <img src="../assets/d_btn3.png" alt="담기버튼">
        </button>
        <button type="button">
            <img src="../assets/d_btn4.png" alt="다운버튼">
        </button>
        <button type="button">
            <img src="../assets/d_btn5.png" alt="삭제버튼">
        </button>
                    
    </div>
    <!--아래 버튼 영역-->
                
</div>
</template>

<script>
export default {
  name: "music-list",
  props: ["list"]
};
</script>
