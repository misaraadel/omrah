<template>
<header class="w-full pt-52 lg:pb-28 md:pb-28 sm:pb-0 pb-0 bg-cover bg-no-repeat" style="background-image: url('/img/header.jpg')">
<div class="container-fluid">
    <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-0 md:gap-5 sm:gap-5 gap-5">
        <div class="w-full lg:pr-24 md:pr-7 sm:pr-4 pr-4 h-full flex flex-col justify-center">
            <h4 class="text-4xl font-bold text-white">
                {{ introHead }}
            </h4>

            <p class="text-base leading-8 lg:w-3/4 md:w-full sm:w-full w-full font-medium text-white mt-11 mb-10">
                {{ introDesc }}
            </p>

            <call-to-action
                btnWidth="w-40"
                borderColor="#fff"
                btnBK="none"
                arrowImg="white_arrow"
                :btnTitle="`${headBtn}`"
                btnLink="/"  />
        </div>

        <div class="image-content">
            <img 
                :src="`/img/${introImg}.svg`"
                class="w-full h-96 object-contain object-left"
                :alt="$t(`app.title`)" />
        </div>
    </div>
</div>
</header>
</template>

<script>
export default {
    props:{
        introImg: String,
        introHead: String,
        introDesc: String,
    },
    data() {
        return {
            headBtn: 'إحجز رحلتك',
        };
    },
}
</script>