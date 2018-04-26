<template>
<!--앨범01-->
<li>
    <!--앨범안 재생하기 / 재생목록 추가하기 버튼-->
    <div class="btn_box cf">
        
        <div>
            <a href="#" class="a_play"><img src="../assets/symphony/play_btn.png" alt="재생하기 버튼입니다"></a>
            <a href="#"><img src="../assets/symphony/plus_btn.png" alt="재생목록 추가하기 버튼입니다"></a>
        </div>
        
    </div>
    <!--앨범안 재생하기 / 재생목록 추가하기 버튼-->
    
    <img src="../assets/symphony/popular01.jpg" alt="앨범이미지입니다">
    
    <p>
        <b>{{ item.artist }}</b><br>
        {{ item.album }}<br>
        {{ item.title }}
    </p>
    
</li>
</template>

<script>
export default {
    name: 'SmphonyItem',
    props: ["item"],
    computed: {
        playListAdd() {
            let music
        }
    }
}
</script>

