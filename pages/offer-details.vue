<template>
<div>
    <home-sub-header :subHeader="`${offferDetailsHead}`" />

    <home-offer-details />

    <home-some-offer />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
layout: `home`,
scrollToTop: true,

components: {
    homeSubHeader: () => import(`@/components/home/home-sub-header`),
    homeOfferDetails: () => import(`@/components/home/home-offer-details`),
    homeSomeOffer: () => import(`@/components/home/home-some-offer`),
},

data() {
    return {
        offferDetailsHead: 'مكة المكرمة ماريوت',    
    };
},

head() { return { title: this.$t(`home.title`) } }
}
</script>