<template>
<section class="contact-us w-full bg-white py-20">
    <div class="container py-2">
        <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-14">
            <div class=" lg:col-start-1 lg:col-end-2 ">
                <div class="content w-full h-full flex flex-col justify-center">
                    <img
                        src="/img/booking.svg"
                        class="w-20 h-20 object-contain mb-6"
                        :alt="`${contactHead}`"/>
                    
                    <h4 class="text-3xl leading-10 font-extrabold text-desc mb-5">
                        {{ contactHead }}
                    </h4>

                    <p class="text-base font-medium leading-8 text-desc">
                        {{ contactDesc }}
                    </p>
                </div>
            </div>
            
            <div class="lg:col-start-2 lg:col-end-4">
                <div class="form-content lg:p-12 md:p-5 sm:p-3 p-3 bg-white">
                    <form>
                        <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            <div class="content mb-5">
                                <label class="text-base text-desc font-medium leading-10 mb-5 block">
                                    الاسم بالكامل
                                </label>

                                <div class="form-input rounded-3xl relative z-30 w-full h-12">
                                    <img src="/img/user.svg" class="icon w-7 h-7 object-contain absolute z-10 right-5" :alt="`${contactHead}`">

                                    <input 
                                        type="text"
                                        class="input w-full rounded-3xl border border-solid border-transparent text-dark h-full bg-primary bg-opacity-5 pr-14"
                                        placeholder="مثال : محمود محمد"/>
                                </div>
                            </div>

                            <div class="content mb-5">
                                <label class="text-base text-desc font-medium leading-10 mb-5 block">
                                    رقم الجوال
                                </label>

                                <div class="form-input rounded-3xl relative z-30 w-full h-12">
                                    <img src="/img/call.svg" class="icon w-7 h-7 object-contain absolute z-10 right-5" :alt="`${contactHead}`">

                                    <input 
                                        type="text"
                                        class="input w-full rounded-3xl border border-solid border-transparent text-dark h-full bg-primary bg-opacity-5 pr-14"
                                        placeholder="مثال : +966445451"/>
                                </div>
                            </div>

                            <div class="content mb-5">
                                <label class="text-base text-desc font-medium leading-10 mb-5 block">
                                    الجنسية     
                                </label>

                                <div class="form-input select-option rounded-3xl relative z-30 w-full h-12">
                                    <img src="/img/national.svg" class="icon w-7 h-7 object-contain absolute z-10 right-5" :alt="`${contactHead}`">

                                    <select class="input w-full rounded-3xl border border-solid border-transparent text-dark h-full bg-primary bg-opacity-5 pr-14">
                                        <option>
                                            اختر الجنسية
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="content mb-5">
                                <label class="text-base text-desc font-medium leading-10 mb-5 block">
                                    الفندق     
                                </label>

                                <div class="form-input select-option rounded-3xl relative z-30 w-full h-12">
                                    <img src="/img/hotels.svg" class="icon w-7 h-7 object-contain absolute z-10 right-5" :alt="`${contactHead}`">

                                    <select class="input w-full rounded-3xl border border-solid border-transparent text-dark h-full bg-primary bg-opacity-5 pr-14">
                                        <option>
                                            إختر الفندق
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="content mb-5">
                                <label class="text-base text-desc font-medium leading-10 mb-5 block">
                                    تاريخ السفر
                                </label>

                                <div class="form-input rounded-3xl relative z-30 w-full h-12">
                                    <img src="/img/date.svg" class="icon w-7 h-7 object-contain absolute z-10 right-5" :alt="`${contactHead}`">

                                    <input 
                                        type="text"
                                        class="input w-full rounded-3xl border border-solid border-transparent text-dark h-full bg-primary bg-opacity-5 pr-14"
                                        placeholder="اختر تاريخ سفرك"/>
                                </div>
                            </div>

                            <div class="content mb-5">
                                <label class="text-base text-desc font-medium leading-10 mb-5 block">
                                    تاريخ العودة  
                                </label>

                                <div class="form-input rounded-3xl relative z-30 w-full h-12">
                                    <img src="/img/date.svg" class="icon w-7 h-7 object-contain absolute z-10 right-5" :alt="`${contactHead}`">

                                    <input 
                                        type="text"
                                        class="input w-full rounded-3xl border border-solid border-transparent text-dark h-full bg-primary bg-opacity-5 pr-14"
                                        placeholder="اختر تاريخ العودة"/>
                                </div>
                            </div>
                        </div>

                        <button class="w-full mt-2 custom-btn bg-white flex justify-center items-center content-center h-12 cursor-pointer relative border border-primary border-solid outline-none">
                            <img
                                src="/img/gold_arrow.svg"
                                class="w-5 h-5 object-contain ml-2 relative z-30"
                                :alt="`${contactHead}`" />

                            <span class="text-primary text-base font-medium relative z-30">
                                طلب عرض سعر
                            </span>
                        </button>
                    </form>
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
            contactHead: 'رحلة سريعة، تكفيك وعثاء السفر وكآبة المنظر',
            contactDesc: 'أطلب عرض سعر لأكثر من رحلة طيران مختلفة ومتنوعة على مستوى المملكة العربية السعودية'
        }
    }
}
</script>

<style lang="scss">
.contact-us{
    .form-content{
        box-shadow: 0px 0px 20px rgba($color: #B38224, $alpha: .08);
        border-radius: 30px;
    }
    
    .custom-btn{
        border-radius: 30px;
    }

    .form-input{
        .icon{
            top: calc(50% - 12px);
        }

        .input{
            transition: all .4s linear;
            border-color: transparent;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;

            &::placeholder{
                color: #989898;
                font-size: 16px;
                font-weight: 500;
                line-height: 40px;
            }

            &:hover , &:focus {
                outline: none;
                border-color: #B38224;
            }
        }

        &.select-option{
            &::after{
                content: '';
                position: absolute;
                width: 24px;
                height: 24px;
                background-image: url('/img/down_arrow.svg');
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                left: 10px;
                top: calc(50% - 12px);
                z-index: -1;
            }

            select , option{
                color: #989898;
                font-size: 16px;
                font-weight: 500;
                line-height: 40px;
            }
        }
    }
}
</style>