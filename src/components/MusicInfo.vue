<template>
<div class="play_info">                
    <div class="album_img">
        <img src="../assets/d_album_img.jpg" alt="대쉬보드 앨범이미지">
    </div>
                
    <div class="info cf">
        <div class="album_img2">
            <img src="../assets/d_album_img2.jpg" alt="대쉬보드 앨범이미지2">
        </div>
                    
        <p>
            <b>아티스트</b> &nbsp;&nbsp;{{ info }}<br>
            <b>앨범종류</b> &nbsp;&nbsp;정규<br>
            <b>장르</b> &nbsp;&nbsp;랩/힙합<br>
        </p>


    </div>
                
</div>
</template>

<script>

import MusicTag from '../modules/MusicTag.js'

export default {
    name: 'music-info',
    props: ['music'],
    data () {
        return {
            info: {}
        }
    },
    mounted () {
        MusicTag.getInfo(this.music)
            .then(result => { 
                this.info = result;
            })
            .catch(err => {
                console.log(err)
            })
    }
}
</script>
