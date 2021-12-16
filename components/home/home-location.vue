<template>
<section class="locations w-full py-20 bg-cover bg-no-repeat" style="background-image:url('/img/location.jpg')">
    <div class="container py-3">
        <general-heading
            headImg="location_head"
            :headingTitle="`${locationHead}`"
            headColor="text-white"/>

        <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5">
            <div class="lg:col-start-1 lg:col-end-2">
                <div class="loaction h-full flex flex-col justify-center content-center text-center items-center py-12 px-10 bg-white">
                    <h4 class="text-2xl font-extrabold leading-6 text-desc mb-7">
                        {{ loactionName }}
                    </h4>

                    <a href="#" target="_blank" class="box mb-7 flex flex-col justify-center content-center text-center items-center">
                        <img
                            src="/img/location_data.svg"
                            class="w-10 h-10 object-contain mb-5"
                            :alt="`${loactionDesc}`" />

                        <h4 class="text-base text-desc leading-6 font-bold">
                            {{ loactionDesc }}
                        </h4>
                    </a>

                    <a href="#" target="_blank" class="box flex flex-col justify-center content-center text-center items-center">
                        <img
                            src="/img/phone.svg"
                            class="w-10 h-10 object-contain mb-5"
                            :alt="`${phoneDesc}`" />

                        <h4 class="text-base text-desc leading-6 font-bold">
                            {{ phoneDesc }}
                        </h4>
                    </a>
                </div>
            </div>

            <div class="lg:col-start-2 lg:col-end-4">
                <a href="#">
                    <img
                        src="/img/map.jpg"
                        class="w-full h-96 object-cover object-left map"
                        :alt="`${locationHead}`"/>
                </a>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data(){
        return{
            locationHead: 'فروع القافلة',
            loactionName: 'فرع البديعة',
            loactionDesc: ' الرياض - البديعة - شارع عائشة بنت أبي بكر ( شارع الأبراج )',
            phoneDesc: '+966509361106'
        }
    }
}
</script>

<style lang="scss">
.locations{
    background-position: right;

    .loaction , .map{
        border-radius: 30px;

        .box{
            &:hover{
                h4{
                    color: #B38224;
                }
            }
        }
    }
}
</style>