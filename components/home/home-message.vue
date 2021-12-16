<template>
<section class="w-full message overflow-hidden relative z-40 bg-thirdColor py-20">
    <div class="container py-3">
        <div class="content lg:w-3/6  md:w-full sm:w-full w-full mx-auto flex flex-col justify-center items-center text-center">
            <h4 class=" text-2xl leading-10 font-extrabold text-desc mb-8">
                {{ messageHead }}
            </h4>

            <p class="text-base leading-7 font-medium text-desc mb-10">
                {{ messageDesc }}
            </p>

            <call-to-action
                btnWidth="w-64"
                borderColor="#B38224"
                btnBK="#B38224"
                arrowImg="white_arrow"
                :btnTitle="`${messageBtn}`"
                btnLink="/"  />
        </div>
    </div>
</section>
</template>

<script>
export default {
    data(){
        return{
            messageHead: 'إعتمر وأنت راضي عن رحلتك ,, لا تحمل هم البحث عن رحلات مريحة بأسعار مميزة',
            messageDesc: 'فنحن نسخر خبراتنا ومواردنا لتوفير أفضل الإختيارات وإبتكار أفضل الحلول لتيسير آداء المناسك وتحسين ظروف السفر والإقامة للحفاظ على ذهن صاف وقلب مطمئن .. نتمنى لكم رحلة سعيدة وطاعة جديدة',
            messageBtn: 'إحجز رحلتك الأن'
        }
    }
}
</script>

<style lang="scss">
.message{
    &::after{
        content:'';
        position: absolute;
        width: 100%;
        height: 370.01px;
        background-size: contain;
        background-image: url('/img/take_ticket.svg');
        background-position: right;
        background-repeat: no-repeat;
        bottom: 0px;
        right: -22px;
        z-index: -1;
    }
}

@media (max-width: 999px) {
.message{
    &::after{
        display:none
    }
}
}
</style>