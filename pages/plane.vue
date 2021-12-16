<template>
<div>
    <home-intro introImg="header_bus" :introHead="`${planHead}`" :introDesc="`${planDesc}`" />

    <home-services />

    <home-features />

    <home-message />

    <plane-offers />

    <home-location />
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
layout: `home`,
scrollToTop: true,

components: {
    homeIntro: () => import(`@/components/home/home-intro`),
    homeServices: () => import(`@/components/home/home-services`),
    homeFeatures: () => import(`@/components/home/home-features`),
    homeMessage: () => import(`@/components/home/home-message`),
    planeOffers: () => import(`@/components/home/plane-offers`),
    homeLocation: () => import(`@/components/home/home-location`),
},

data() {
    return {
        planHead: 'رحلات طيران مميزة',
        planDesc: 'برامجنا للعمرة تهدف إلي توفير أوقاتكم وكفايتكم عناء البحث عن الأسعارالمناسبة يمكنكم الاعتماد علينا من أجل رحلة مريحة'
    };
},

head() { return { title: this.$t(`home.title`) } }
}
</script>
