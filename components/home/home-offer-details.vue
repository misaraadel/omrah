<template>
<section class="offer-details w-full py-20 bg-white">
    <div class="container py-1">
        <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-28">
            <div class="box">
                <img
                    :src="`/img/${offerImg}.jpg`"
                    class="w-full object-cover img-header"
                    :alt="`${tilte}`"/>

                <div class="flex my-7 justify-between items-center content-center">
                    <div class="flex items-center content-center justify-start">
                        <span class="details py-2 px-6 bg-primary bg-opacity-10 text-primary text-base font-medium block ml-3">
                            {{ offerCount }}
                        </span>

                        <span class="details py-2 px-6 bg-secondary text-white text-base font-medium block">
                            {{ offerDiscount }}
                        </span>
                    </div>

                    <div class="details bg-primary w-48 h-12 flex justify-center content-center items-center">
                        <img
                            :src="`/img/${offerIcon}.svg`"
                            class="details-icon w-5 h-5 object-contain ml-3"
                            :alt="`${tilte}`" />

                        <span class="text-white text-base font-medium leading-8">
                        {{ offerType }}
                        </span>
                    </div>
                </div>
                
                <h4 class="text-desc text-3xl leading-6 font-extrabold mb-4">
                    {{ tilte }}
                </h4>

                <div class="flex mb-6 justify-start items-center content-center">
                    <span class="text-3xl leading-6 font-extrabold text-primary">
                        {{ price }}
                    </span>

                    <span class="text-sm pt-3 mr-1 font-bold leading-6 text-primary">
                        {{ currency }}
                    </span>

                    <span class="text-base font-medium text-secondary mr-3">
                        {{ peopleCount }}
                    </span>
                </div>

                <call-to-action
                    btnWidth="w-full"
                    borderColor="#B38224"
                    btnBK="#B38224"
                    arrowImg="white_arrow"
                    :btnTitle="`${offerBtn}`" />
            </div>

            <div class="content">
                <offer-head :offerHead="`${hotelName}`" />

                <div class="hotel-conent mb-12 flex bg-thirdColor p-7">
                    <img
                        :src="`/img/${hotelLogo}.svg`"
                        class="w-32 h-24 object-contain ml-6"
                        :alt="`${hotel}`"/>

                    <div class="content">
                        <h4 class="text-desc text-xl font-bold leading-7 mb-5">
                            {{ hotel }}
                        </h4>

                        <span class="details py-2 px-6 bg-primary bg-opacity-10 text-primary text-base font-medium block mb-3">
                            {{ hotelLocation }}
                        </span>

                        <div class="flex justify-start items-center content-center">
                            <span class="text-3xl leading-6 font-extrabold text-primary">
                                {{ price }}
                            </span>

                            <span class="text-sm pt-3 mr-1 font-bold leading-6 text-primary">
                                {{ currency }}
                            </span>

                            <span class="text-base font-medium text-secondary mr-3">
                                {{ peopleCount }}
                            </span>
                        </div>
                    </div>
                </div>

                <offer-head :offerHead="`${offerHeadDetails}`" />

                <p class="text-base leading-7 text-desc mb-12 font-medium">
                    {{ offerDetails }}
                </p>

                <offer-head :offerHead="`${offerVideoHead}`" />

                <div class="video-content mb-12 w-full relative z-20 overflow-hidden">
                    <img
                        :src="`/img/${videoPostar}.jpg`"
                        class="w-full h-full postar object-cover object-center"
                        :alt="`${tilte}`"/>

                    <a href="#" class="video-icon w-12 h-12 z-30 flex justify-center items-center content-center rounded-full absolute">
                        <img
                            src="/img/video_icon.svg"
                            class="w-full h-full relative z-40 object-contain"
                            :alt="`${tilte}`" />
                    </a>
                </div>

                <offer-head :offerHead="`${Polices}`" /> 

                <ul class="polices">
                    <template v-for="police in policesList">
                        <li class="relative text-base text-desc font-medium leading-7 pr-10 z-40 mb-5" :key="police.code">
                            {{ police.content }}
                        </li>
                    </template>
                </ul>   
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data(){
        return{
            offerImg: 'offer_1',
            offerCount: 'عرض 3 أيام',
            offerDiscount: '-20%',
            offerIcon: 'bus',
            offerType: 'رحلات الباص',
            tilte: 'مكة المكرمة ماريوت',
            price: '510',
            currency: 'SAR',
            peopleCount: 'السعر للفرد الواحد',
            offerBtn: 'أطلب العرض الأن',
            hotelName: 'الفندق',
            offerHeadDetails: 'تفاصيل العرض',
            offerDetails: ' هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو. عبارات محرجة أو غير لائقة مخبأة في هذا النص',
            offerVideoHead: 'الفيديو التعريفي',
            videoPostar: 'video_play',
            Polices: 'الشروط والأحكام',
            policesList: [
                {
                    code: '1',
                    content: 'يمكنك الحجز من الموقع والسداد عن طريق التحويل البنكي'
                },{
                    code: '2',
                    content: 'نعتذر عن إضافة أقاربك و أصحابك علي الحافلة بعد إقفال التسجيل عليها ونرحب بك على حافلة أخري'
                },{
                    code: '3',
                    content: 'لا تسترد القيمة المالية في حالة التخلف عن موعد الحضور للرحلة أو حالة عدم الاعتذار قبل الرحلة بزمن مقداره (48 ساعة كحد أدنى) ولا يمكن استرداد المبلغ ولو كان الحجز قبل 24 ساعة من الرحلة'
                },{
                    code: '4',
                    content: 'لا يحق للمشترك الاعتراض علي موقع جلوسه في الحافلة'
                },{
                    code: '5',
                    content: 'المكتب غير مسئول عن الاغراض التي تفقد أو تنسى في الحافلة أو الفندق'
                },{
                    code: '6',
                    content: 'يمنع التدخين منعا باتا أثناء الرحلة'
                }
            ],
            hotelLogo: 'accor',
            hotel: 'فندق أكور الإقليمي',
            hotelLocation: 'مكة المكرمة'
        }
    }
}
</script>

<style lang="scss">
.offer-details{
    .box{
        .img-header{
            height: 350px;
            border-radius: 30px;
        }
        .details{
            border-radius: 30px;
        }

    }

    .hotel-conent{
        border-radius: 30px;

        .details{
            width: fit-content;
            border-radius: 30px;
        }
    }

    .video-content{
        height: 300px !important;
        border-radius: 30px;
        
        .postar{
            transition: all .5s linear;
        }
        
        .video-icon{
            top: calc(50% - 25px);
            left: calc(50% - 25px);

            &:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #B38224;
                z-index: 0;
                opacity: 1;
                visibility: visible;
                animation: pulsecust 1.8s linear;
                animation-iteration-count: infinite;
                transition: visibility 0.1s ease-out, opacity 0.2s ease-out;
                background-color: #B38224;
            }
        }

        &:hover{
            .postar{
                transform: rotate(10deg) scale3d(1.5, 1.5, 1.5);
            }
        }
    }

    .polices{
        li{
            &::after{
                content: '';
                position: absolute;
                width: 24px;
                height: 24px;
                background-image: url('/img/check.svg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                right: 0px;
                top: 7px;
            }
        }
    }
}
</style>