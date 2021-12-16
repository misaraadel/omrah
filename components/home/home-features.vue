<template>
<section class="features py-20 bg-white">
    <div class="container py-2">
        <general-heading
        headImg="feature_head"
        :headingTitle="`${featureHead}`"
        headColor="text-dec"
        dispalyText="hidden"/>

        <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10">
            <template v-for="feature in features">
                <div class="box flex flex-col justify-center items-center content-center text-center relative z-40" :key="feature.code">
                    <img
                        :src="`/img/${feature.img}.svg`"
                        class="w-20 h-20 object-contain mb-6"
                        :alt="`${feature.title}`"/>

                    <h4 class="text-2xl leading-8 font-bold text-desc mb-5">
                        {{ feature.title }}
                    </h4>

                    <p class="text-base leading-6 font-medium text-desc">
                        {{ feature.desc }}
                    </p>
                </div>
            </template>
            
        </div>
    </div>
</section>
</template>

<script>
export default {
    data(){
        return{
            featureHead: 'مميزات القافلة',
            features: [
                {
                    code: '1',
                    img: 'money_bag',
                    title: 'تكلفة مناسبة',
                    desc: 'تمتع بخدمات جيدة وبرنامج متكامل بتكلفة جداً مناسبة، أقل من التوقعات',
                },{
                    code: '2',
                    img: 'excellent',
                    title: 'علاقات مميزة',
                    desc: 'نحتفظ بعلاقات طيبة مع أفضل وأقرب الفنادق مع الحرم، يمكنك إستخدام علاقاتنا'
                },{
                    code: '3',
                    img: 'feature_service',
                    title: 'شرف الخدمة',
                    desc: 'نتشرف في قافلة الإيمان بخدمه زروار البيت الحرام، ونرجو أن تلقى خدماتنا إستحسانكم'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.features{
    .box{
        transition: all .4s linear;

        &:hover{
            img{
                animation: bounce-in-top .8s linear;
            }

            h4{
                color: #B38224;
            }
        }
        &::After{
            content: '';
            position: absolute;
            width: 1px;
            height: 100%;
            background-color: rgba($color: #B38224 , $alpha: .15);
            top: 0;
            left: -31.5px;
        }

        &:last-child{
            &::after{
                display: none;
            }
        }
    }
}

@media (max-width: 999px) {
    .features{
        .box{
            &::after{
                width: 100%;
                height: 1px;
                left: 0;
                top: unset !important;
                bottom: -30px;
            }

            &:hover{
                img{
                    animation: bounce-in-left .8s linear !important; 
                }
            }
        }
    }
}
</style>