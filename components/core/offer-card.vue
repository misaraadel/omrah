<template>
<div class="offer-box bg-white w-full flex flex-col overflow-hidden">
    <div class="image-content w-full h-72 overflow-hidden relative z-30">
        <img
            :src="`/img/${offerImg}.jpg`"
            class="w-full h-full object-cover object-center"
            :alt="`${offerTitle}`" />

        <div class="details bg-primary z-0 absolute bottom-0 w-48 h-12 flex justify-center content-center items-center">
            <img
                :src="`/img/${offerIcon}.svg`"
                class="details-icon w-5 h-5 object-contain ml-3"
                :alt="`${offerTitle}`" />

            <span class="text-white text-base font-medium leading-8">
            {{ offerDetails }}
            </span>
        </div>
    </div>
    <div class="content py-7 px-5">
        <div class="flex items-center content-center justify-start">
            <span class="items py-2 px-6 bg-primary bg-opacity-10 text-primary text-base font-medium block ml-3">
                {{ offerCount }}
            </span>

            <span class="items py-2 px-6 bg-secondary text-white text-base font-medium block">
                {{ offerDiscount }}
            </span>
        </div>

        <h4 class="my-5 text-desc font-extrabold text-2xl">
            {{ offerTitle }}
        </h4>

        <p class="text-base font-medium text-pargraph mb-5">
            {{ offerDesc }}
        </p>

        <nuxtLink to="/" class="w-full border-primary rounded-3xl border-solid border custom-btn flex justify-center items-center content-center h-12 cursor-pointer relative">
            <img
                src="/img/gold_arrow.svg"
                class="w-5 h-5 object-contain ml-2 relative z-30"
                :alt="`${offerBtnTitle}`" />

            <span class="text-primary text-base font-medium relative z-30">
                {{ offerBtnTitle }}
            </span>
        </nuxtLink>
    </div>
</div>
</template>

<script>
export default {
    props: ['offerImg', 'offerIcon' , 'offerTitle' , 'offerDetails' , 'offerCount' , 'offerDiscount' , 'offerDesc' ],
    data(){
        return{
            offerBtnTitle: 'تفاصيل العرض'
        }
    }
}
</script>

<style lang="scss">
.offer-box{
    border-radius: 30px;
    box-shadow: 0px 0px 30px rgba($color: #B38224, $alpha: .08);
    transition: all .4s linear;

    .details{
        right: -100%;
        transition: all .4s linear;
        border-radius: 30px 0px 0px 30px;
    }
    
    .content{
        .items{
            border-radius: 20px;
        }
    }

    &:hover{
        transform: translateY(-10px);

        .details{
            right: 0%;
        }
    }
}
</style>