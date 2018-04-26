<template>
<div id="dashboard" class="dashboard" style="right: 0px;">
    <music-player v-bind:music="selectMusic"></music-player>
    <music-info v-bind:music="selectMusic"></music-info>
    <music-list></music-list>
</div>
</template>

<script>

import MusicPlayer from '../components/MusicPlayer'
import MusicInfo from '../components/MusicInfo'
import MusicList from '../components/MusicList'

export default {
    name: 'music-box',
    components: { MusicPlayer, MusicList, MusicInfo },
    data () {
        return {
            musicListPath: []
        }
    },
    created () {
        let host = 'http://localhost:8888/';
        this.musicListPath = [
            host + '001 iKON - 사랑을 했다 (LOVE SCENARIO) - [kang].mp3',
            host + '002 로이킴 - 그때 헤어지면 돼 - [kang].mp3',
            host + '003 장덕철 - 그날처럼 - [kang].mp3',
            host + '004 모모랜드 (MOMOLAND) - 뿜뿜 - [kang].mp3',
            host + '005 Red Velvet (레드벨벳) - Bad Boy - [kang].mp3',
            host + '006 Camila Cabello - Havana (Feat. Young Thug) - [kang].mp3',
            host + '007 선미 - 주인공 - [kang].mp3'
        ];
    },
    computed: {
        selectMusic () {
            return this.musicListPath[0];
        }
    }
}
</script>


<style>

</style>
