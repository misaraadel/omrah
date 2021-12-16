<template>
<div>
<home-sub-header :subHeader="`${planHead}`"/>

<all-offers />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
layout: `home`,
scrollToTop: true,

components: {
    homeSubHeader: () => import(`@/components/home/home-sub-header`),
    allOffers: () => import(`@/components/home/all-offers`),
},

data() {
    return {
        planHead: 'كل عروض الباصات',    
    };
},

head() { return { title: this.$t(`home.title`) } }
}
</script>
