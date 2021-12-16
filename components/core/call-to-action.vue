<template>
  <div class="call-to-action flex items-center content-center">
    <nuxtLink :to="`${btnLink}`" :class="`${btnWidth} custom-btn flex justify-center items-center content-center h-12 cursor-pointer relative`">
      <svg width="100%" height="100%" class="absolute top-0 left-0 overflow-visible">
          <defs>
              <linearGradient id="grad1">
                  <stop offset="0%" :stop-color="`${borderColor}`"/>
                  <stop offset="100%" :stop-color="`${borderColor}`" />
              </linearGradient>
          </defs>
          <rect x="0" y="0" rx="25"  :fill="`${btnBK}`" :stroke="`${borderColor}`" width="100%" height="100%"></rect>
      </svg >

      <img
        :src="`/img/${arrowImg}.svg`"
        class="w-5 h-5 object-contain ml-2 relative z-30"
        :alt="`${btnTitle}`" />

      <span class="text-white text-base font-medium relative z-30">
        {{ btnTitle }}
      </span>
    </nuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    btnWidth: String,
    borderColor: String,
    btnBK: String,
    btnTitle: String,
    arrowImg: String,
    btnLink: String,
  }
}
</script>

<style lang="scss">
.custom-btn{
  rect {
    stroke-width: 1;
    stroke-dasharray: 460;
    stroke-dashoffset: 0;
    -webkit-transition: all 400ms ease;
    transition: all 400ms ease;
    transform: rotate(180deg);
    transform-origin: center;
  }

  &:hover{
    rect {
      stroke-width: 1;
      stroke-dashoffset: 351;
    }

    img{
      animation: bounce-in-fwd 400ms ease;
    }
  }
}
</style>
