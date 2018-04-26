<template>
<!--음악재생 박스영역-->
<div class="play_box">
    <!--노래 제목-->
    <p>
        <b>EVERYDAY - WINNER</b>
    </p>
    <!--노래 제목-->
                
    <!--음악 플레이 박스 영역-->
    <div>
        <!--음악플레이 시간-->
        <div class="time cf">   
            <p id="playTime"></p>
            <div>
                <progress id="music_progress" max="100%"></progress>
            </div>
            
            <p id="totalPlayTime"></p>
            
        </div>
        <!--음악플레이 시간-->
        
        <!--음악플레이관련 버튼-->
        <div class="play_btn cf">
            
            <div class="btns cf">
                <a class="prev_btn" href="#" id="prev">
                    <img src="../assets/prev_btn.png" alt="이전버튼">
                </a>
                <a class="play_btn" href="#" id="play">
                    <img src="../assets/play_btn.png" alt="플레이버튼">
                </a>
                <a class="pause_btn" href="#" id="pause">
                    <img src="../assets/pause_btn.png" alt="일시정지버튼">
                </a>
                <a class="next_btn" href="#" id="next">
                    <img src="../assets/next_btn.png" alt="다음버튼">
                </a>
            </div>
            
            <div class="volume cf">
                <img src="../assets/volume_icon.png" alt="볼륨아이콘">
                <progress id="volum_progress" value="0" max="1"></progress>
            </div>
            
        </div>
        <!--음악플레이관련 버튼-->
        
    </div>
    <!--음악 플레이 박스 영역-->
                
</div>
<!--음악재생 박스영역-->
</template>

<script>
export default {
  props: ["music"]
};
</script>

<style scoped>
@charset "utf-8";
/* CSS Document */

/*모바일inc s*/

/*음악재생 박스영역 s*/
.play_box {
  width: 100%;
  text-align: center;
  font-size: 14px;
}
/*음악재생 박스영역 e*/

/* progress 스타일 */

progress {
  height: 4px;
  border-radius: 20px;
  border: none;
}

progress::-webkit-progress-bar {
  height: 4px;
  border-radius: 20px;
  background-color: #c5c5c5;
  border: none;
}

progress::-webkit-progress-value {
  height: 4px;
  border-radius: 20px;
  background-color: #0151b3;
  border: none;
}

progress::-moz-progress-bar {
  height: 4px;
  border-radius: 20px;
  background-color: #c5c5c5;
  border: none;
}

/*음악 플레이 박스 영역 s*/
.play_box div {
  width: 100%;
}

#music_progress {
  margin-top: 10px;
  width: 67%;
  height: 4px;
}

/*음악 플레이 시간 s*/
.play_box div .time {
  width: 90%;
  height: 20px;
  margin: 0 auto;
  position: relative;
}
.play_box div .time p {
  font-size: 11px;
  margin: 0 0 0 0;
  color: #0151b3;
  font-weight: 600;
}

.play_box div .time #playTime {
  float: left;
}
.play_box div .time #totalPlayTime {
  float: right;
}

.play_box div .time div {
  width: 100%;
  position: absolute;
  left: 0;
  top: 5px;
}

/*음악 플레이 시간 e*/

/*음악 플레이 버튼 s*/
.play_box div .play_btn {
  width: 90%;
  height: 20px;
  margin: 0 40px 0 70px;
}

.play_box div .pause_btn {
  display: none;
}

.play_box div .play_btn .btns {
  width: 35%;
  height: 100%;
  float: left;
  margin: 7px 0 0 5%;
}
.play_box div .play_btn .btns a {
  display: block;
  width: 30%;
  height: 100%;
  float: left;
  margin: 0 0 0 5%;
}
.play_box div .play_btn .btns a:first-child {
  margin: 0;
}
.play_box div .play_btn .btns a img {
  width: 100%;
}

.play_box div .play_btn .volume {
  width: 30%;
  height: 100%;
  float: left;
}

.play_box div .play_btn .volume img {
  float: left;
}

.play_box div .play_btn .volume #volum_progress {
  float: right;
  width: 40px;
  margin-top: 5px;
}

.play_box div .play_btn .volume .v_scrubber {
  float: left;
  width: 70%;
  height: 4px;
  background-color: #ddd;
  border-radius: 10px;
  margin: 5px 0 0 0;
  overflow: hidden;
}
.play_box div .play_btn .volume .v_scrubber .v_progress {
  width: 30%;
  height: 5px;
  border-radius: 20px;
  background-color: #0151b3;
  margin: 0;
}
/*음악 플레이 버튼 e*/

/*앨범이미지 s*/
.play_info .album_img {
  display: none;
}
/*앨범이미지 e*/

/*음악 플레이 박스 영역 e*/

/*음악정보영역 s*/
.play_info .info {
  width: 90%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 10px auto;
}
.play_info .info .album_img2 img {
  float: left;
  width: 60px;
  margin: 10px 20px 0 0;
}
.play_info .info p {
  font-size: 12px;
  line-height: 22px;
  float: left;
  margin: 5px 0;
}
/*음악정보영역 e*/

/*플레이리스트 영역 s*/
.playlist {
  position: relative;
  margin: 0 auto;
  width: 90%;
  height: 40%;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.playlist .top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25px;
  border-bottom: 1px solid #ccc;
}

.playlist .top p {
  float: left;
  font-size: 12px;
  line-height: 25px;
  margin: 0 0 0 10px;
}

/*셀렉트박스 영역 s*/
.playlist .top select {
  float: right;
  margin: 3px 5px 0 0;
}
/*셀렉트박스 영역 e*/

/*노래 리스트 영역 s*/
.playlist .song_list {
  position: absolute;
  top: 30px;
  width: 100%;
  height: 77%;
  overflow-y: scroll;
}
.playlist .song_list li {
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  transition: all 0.3s;
  cursor: pointer;
}
.playlist .song_list li:hover {
  background-color: #f2f2f2;
}

.playlist .song_list li input {
  margin: 15px 10px 0 10px;
  float: left;
}
.playlist .song_list li p {
  float: left;
}
.playlist .song_list li p span {
  color: #999;
}
.playlist .song_list li p:nth-child(2) {
  line-height: 40px;
}
.playlist .song_list li p:nth-child(3) {
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0 10px;
}
/*노래 리스트 영역 e*/

/*아래 버튼영역 s*/
.playlist .bot_btn {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25px;
  background-color: #ddd;
}
.playlist .bot_btn input {
  margin: 3px 5px 0 5px;
}
.playlist .bot_btn button {
  height: 20px;
}
.playlist .bot_btn button img {
  height: 100%;
}

/*버튼스타일 지정*/
button {
  width: auto;
  height: auto;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  color: #fff;
  padding: 0 0;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 1px 1px 3px #ccc;
}

/*아이폰이나 다른 핸드폰 브라우저에서도 기존 버튼 속성 그대로 가져가게 하는 스타일_아이폰은 ios에서 지원하는 버튼 형식으로 버튼 잡힘*/
input[type="submit"] i {
  -webkit-appearance: none;
}
/*버튼스타일 지정*/
/*아래 버튼영역 e*/

/*플레이리스트 영역 e*/

/*모바일inc e*/

/*pc 화면*/
@media all and (min-width: 1023px) {
  /*음악재생 박스영역 s*/
  .play_box {
    width: 100%;
    height: 90px;
    text-align: center;
    margin: 20px 0 0 0;
  }
  /*음악재생 박스영역 e*/

  /*음악 플레이 박스 영역 s*/
  .play_box div {
    width: 100%;
  }

  /*음악 플레이 시간 s*/
  .play_box div .time {
    width: 240px;
    height: 35px;
    margin: 0 auto;
  }
  .play_box div .time p {
    float: left;
    font-size: 12px;
    margin: 10px 0 0 0;
    color: #0151b3;
    font-weight: 600;
  }
  .play_box div .time .scrubber {
    float: left;
    width: 68%;
    height: 4px;
    border-radius: 20px;
    background-color: #c5c5c5;
    overflow: hidden;
    margin: 17px 5px 0 5px;
  }
  .play_box div .time .scrubber .progress {
    width: 20%;
    height: 5px;
    border-radius: 20px;
    background-color: #0151b3;
  }
  /*음악 플레이 시간 e*/

  /*음악 플레이 버튼 s*/
  .play_box div .play_btn {
    width: 240px;
    height: 30px;
    margin: 0 20px 0 90px;
  }

  .play_box div .pause_btn {
    display: none;
  }

  .play_box div .play_btn .btns {
    width: 80px;
    height: 100%;
    float: left;
    margin: 0 15px 0 25px;
  }
  .play_box div .play_btn .btns a {
    display: block;
    width: 30%;
    height: 100%;
    float: left;
    margin: 0 0 0 5%;
  }
  .play_box div .play_btn .btns a:first-child {
    margin: 0;
  }
  .play_box div .play_btn .btns a img {
    width: 100%;
  }

  .play_box div .play_btn .volume {
    width: 60px;
    height: 100%;
    float: left;
  }
  .play_box div .play_btn .volume a {
    float: left;
    display: block;
    width: 30%;
    height: 100%;
    margin: 0px 10% 0 0;
  }
  .play_box div .play_btn .volume a img {
    width: 100%;
  }
  .play_box div .play_btn .volume .v_scrubber {
    float: left;
    width: 60%;
    height: 4px;
    background-color: #ddd;
    border-radius: 10px;
    margin: 5px 0 0 0;
    overflow: hidden;
  }
  .play_box div .play_btn .volume .v_scrubber .v_progress {
    width: 30%;
    height: 5px;
    border-radius: 20px;
    background-color: #0151b3;
  }
  /*음악 플레이 버튼 e*/
  /*음악 플레이 박스 영역 e*/

  /*앨범이미지 s*/
  .play_info .album_img {
    display: block;
    width: 100%;
    text-align: center;
  }
  .play_info .album_img img {
    width: 240px;
    height: 240px;
    overflow: hidden;
  }
  /*앨범이미지 e*/

  /*음악정보영역 s*/
  .play_info .info {
    width: 240px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 10px auto;
  }
  .play_info .info .album_img2 img {
    float: left;
    width: 80px;
    margin: 10px 20px 0 0;
  }
  .play_info .info p {
    font-size: 13px;
    line-height: 22px;
    float: left;
    margin: 10px 0;
  }
  /*음악정보영역 e*/

  /*플레이리스트 영역 s*/
  .playlist {
    margin: 0 auto;
    width: 240px;
    height: 30%;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  .playlist .top {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #ccc;
  }

  .playlist .top p {
    float: left;
    font-size: 12px;
    margin: 3px 0 0 10px;
  }

  /*셀렉트박스 영역 s*/
  .playlist .top select {
    height: 70%;
    float: right;
    margin: 1.5% 5px 0 0;
  }
  /*셀렉트박스 영역 s*/

  /*노래 리스트 영역 s*/
  .playlist .song_list {
    width: 100%;
    height: 77%;
    overflow-y: scroll;
  }
  .playlist .song_list li {
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    transition: all 0.3s;
    cursor: pointer;
  }
  .playlist .song_list li:hover {
    background-color: #f2f2f2;
  }

  .playlist .song_list li input {
    margin: 20px 10px 0 10px;
    float: left;
  }
  .playlist .song_list li p {
    float: left;
  }
  .playlist .song_list li p span {
    color: #999;
  }
  .playlist .song_list li p:nth-child(2) {
    line-height: 50px;
  }
  .playlist .song_list li p:nth-child(3) {
    font-size: 13px;
    line-height: 18px;
    margin: 8px 0 0 10px;
  }
  /*노래 리스트 영역 e*/

  /*아래 버튼영역 s*/
  .playlist .bot_btn {
    width: 100%;
    height: 30px;
    background-color: #ddd;
  }
  .playlist .bot_btn button {
    float: left;
    height: 20px;
    margin: 5px 0 0 5px;
    background-color: #fcfcfc;
  }
  .playlist .bot_btn button img {
    height: 100%;
  }
  .playlist .bot_btn input {
    float: left;
    margin: 8px 10px 0 4%;
  }
  /*버튼스타일 지정*/
  button {
    width: auto;
    height: auto;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    color: #fff;
    padding: 0 2px;
    display: inline-block;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #ccc;
  }
  /*버튼스타일 지정*/
}
/*pc 화면*/
</style>



