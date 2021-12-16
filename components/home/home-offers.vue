<template>
<section class="offers py-20 bg-white">
    <div class="container py-3">
        <general-heading
            headImg="offer_head"
            :headingTitle="`${offerHead}`"
            headColor="text-desc"
            :headingDesc="`${offerDesc}`"
        />

        <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <template v-for="offer in BusOffer" >
                <offer-card 
                    :offerImg="`${offer.img}`"
                    :offerIcon="`${offer.offerIcon}`"
                    :offerDetails="`${offer.offerDetails}`"
                    :offerCount="`${offer.offerCount}`"
                    :offerDiscount="`${offer.offerDiscount}`"
                    :offerTitle="`${offer.offerTitle}`"
                    :offerDesc="`${offer.offerDesc}`"
                    :key="offer.code"/>
            </template>
        </div>

        <call-to-action
            btnWidth="lg:w-1/3 md:w-2/4 sm:w-full w-full mt-12 mx-auto"
            borderColor="#B38224"
            btnBK="#B38224"
            arrowImg="white_arrow"
            :btnTitle="`${offerBtn}`"
            btnLink="/offers"  />
    </div>
</section>
</template>

<script>
export default {
    data(){
        return{
            offerHead: 'عروضنا' ,
            offerDesc: 'تمتع بأفضل العروض المخفضة لفترة محدودة',
            offerBtn: 'شاهد كل عروض الباص',

            BusOffer:[
                {
                    code: '1',
                    img: 'offer_1',
                    offerIcon: 'bus',
                    offerDetails: 'رحلات الباص',
                    offerCount: 'عرض 3 أيام',
                    offerDiscount: '-20%',
                    offerTitle: 'مكة المكرمة ماريوت',
                    offerDesc: ' تمتع بخدمات جيدة وبرنامج متكامل بتكلفة جداً ...مناسبة، أقل من التوقعات'
                }, {
                    code: '2',
                    img: 'offer_2',
                    offerIcon: 'bus',
                    offerDetails: 'رحلات الباص',
                    offerCount: 'عرض 3 أيام',
                    offerDiscount: '-20%',
                    offerTitle: 'مكة المكرمة ماريوت',
                    offerDesc: ' تمتع بخدمات جيدة وبرنامج متكامل بتكلفة جداً ...مناسبة، أقل من التوقعات'
                }, {
                    code: '3',
                    img: 'offer_3',
                    offerIcon: 'bus',
                    offerDetails: 'رحلات الباص',
                    offerCount: 'عرض 3 أيام',
                    offerDiscount: '-20%',
                    offerTitle: 'مكة المكرمة ماريوت',
                    offerDesc: ' تمتع بخدمات جيدة وبرنامج متكامل بتكلفة جداً ...مناسبة، أقل من التوقعات'
                }
            ]
        }
    }
}
</script>