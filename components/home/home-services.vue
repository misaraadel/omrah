<template>
<section class="services w-full py-24 bg-thirdColor">
    <div class="container">
        <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-11">
            <div class="lg:col-start-1 lg:col-end-2">
                <div class="content w-full h-full flex flex-col justify-center">
                    <h4 class="text-3xl font-bold leading-10 text-desc mb-6">
                        {{ servicesHead }}
                    </h4>

                    <p class="text-base leading-8 font-medium text-desc">
                        {{ servicesDesc }}
                    </p>
                </div>
            </div>

            <div class="lg:col-start-2 lg:col-end-4">
                <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4">
                    <template v-for="service in services">
                        <div class="box w-60 h-60 overflow-hidden rounded-full bg-white flex flex-col justify-center items-center content-center relative z-30" :key="service.code">
                            <img
                                :src="`/img/${service.img}.svg`"
                                class="w-20 h-20 object-contain general-icon"
                                :alt="`${service.title}`" />

                            <h4 class=" text-desc text-2xl leading-8 font-bold mt-6">
                                {{ service.title }}
                            </h4>

                            <img
                                :src="`/img/${service.img}.svg`"
                                class="w-10/12 h-5/6 absolute bottom-0 object-contain z-0 absolute-icon"
                                :alt="`${service.title}`" />
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data(){
        return{
            servicesHead: 'نقدم باقة من أفضل الخدمات',
            servicesDesc: 'خدمات حجز رحلات الباص والطيران فتمتع بإقامة مميزة في أفضل فنادق المملكة',
            services: [
                {
                    code: '1',
                    img: 'service_bus',
                    title: 'رحلات الباص'
                },{
                    code: '2',
                    img: 'service_airplane',
                    title: 'رحلات الطيران'
                },{
                    code: '3',
                    img: 'service_hotel',
                    title: 'حجز الفنادق فقط'
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.services{
    .box{
        .general-icon{
            filter: invert(42%) sepia(79%) saturate(385%) hue-rotate(1deg) brightness(108%) contrast(100%);
        }

        .absolute-icon{
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(73deg) brightness(103%) contrast(103%);
            left: -100%;
            opacity: .04;
            transition: all .3s linear;
            transition-delay: .4s;
        }

        &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            opacity: 0;
            top: 0;
            left: 0;
            z-index: -1;
            background-color: #38568A;
            transition: all .4s linear;
        }

        &:hover{
            &::after{
                opacity: 1;
                animation: sideClip .3s linear;
            }
            .general-icon{
                animation: fadeInLeft .3s linear;
                filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(73deg) brightness(103%) contrast(103%);
            }

            .absolute-icon{
                left: 0;
            }

            h4{
                color: #fff;
            }
        }
    }
}

@media (max-width: 999px) {
    .services{
        .box{
            margin: auto !important;
        }
    }
}
</style>