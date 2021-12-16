<template>
<section class="offers py-20 bg-white">
    <div class="container py-3">
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
                },{
                    code: '4',
                    img: 'offer_1',
                    offerIcon: 'bus',
                    offerDetails: 'رحلات الباص',
                    offerCount: 'عرض 3 أيام',
                    offerDiscount: '-20%',
                    offerTitle: 'مكة المكرمة ماريوت',
                    offerDesc: ' تمتع بخدمات جيدة وبرنامج متكامل بتكلفة جداً ...مناسبة، أقل من التوقعات'
                }, {
                    code: '5',
                    img: 'offer_2',
                    offerIcon: 'bus',
                    offerDetails: 'رحلات الباص',
                    offerCount: 'عرض 3 أيام',
                    offerDiscount: '-20%',
                    offerTitle: 'مكة المكرمة ماريوت',
                    offerDesc: ' تمتع بخدمات جيدة وبرنامج متكامل بتكلفة جداً ...مناسبة، أقل من التوقعات'
                }, {
                    code: '6',
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