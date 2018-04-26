<template>
<div id="section1" class="section">    
    <div class="inner">
        <symphony-header v-bind="data.header"></symphony-header>

        <symphony-list v-bind:list="data.list"></symphony-list>
    </div>
    <!--inner e-->
</div>
</template>

<script>

import SymphonyHeader from '../components/SymphonyHeader'
import SymphonyList from '../components/SymphonyList'

export default {
    name: "symphony-section",
    props: ["data"],
    components: { SymphonyHeader, SymphonyList }
}
</script>

<style>

</style>

