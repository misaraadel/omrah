<template>
<div class="mb-12">
    <h4 class="offer-head text-desc font-extrabold text-3xl leading-7 pb-5 relative z-20">
        {{ offerHead }}
    </h4>
</div>
</template>

<script>
export default {
    props:['offerHead']
}
</script>

<style lang="scss">
.offer-head{
    &::after{
        content: '';
        position: absolute;
        width: 50px;
        height: 3px;
        background-color: #B38224;
        bottom: 0;
        right: 0;
        border-radius: 3px;
        z-index: -1;
    }
}
</style>