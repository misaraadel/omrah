<template>
<div class="w-full global-heading mb-16 text-center flex flex-col justify-center items-center content-center">
    <img
        :src="`/img/${headImg}.svg`"
        :class="`${display} w-12 h-12 object-contain mb-5 `"
        :alt="`${headingTitle}`"
    />

    <h4 :class="`${headColor} text-3xl leading-8 mb-4 font-bold`">
        {{ headingTitle }}
    </h4>

    <p :class="`${dispalyText} text-base mb-11 font-normal text-desc `">
        {{ headingDesc }}
    </p>
</div>
</template>

<script>
export default {
    props: ['headImg', 'headingTitle', 'display' , 'headingDesc' , 'dispalyText' , 'headColor' ]
}
</script>
