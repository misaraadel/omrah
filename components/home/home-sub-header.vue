<template>
<section class="sub-header w-full pt-40 pb-16 bg-cover bg-no-repeat" style="background-image: url('/img/header.jpg')">
    <div class="container">
        <div class="content flex flex-col justify-center items-center content-center text-center">
            <h4 class="text-4xl leading-8 text-white font-extrabold mb-5">
                {{ subHeader }}
            </h4>

            <ul class="breadcrumb-list flex justify-center content-center items-center">
                <li class="ml-10 relative z-40 item">
                    <nuxtLink to="/" class="text-base text-white opacity-70 font-medium">
                        الرئيسية
                    </nuxtLink>
                </li>

                <li>
                    <span class="text-base text-white font-medium">
                        {{ subHeader }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</section>
</template>

<script>
export default {
    
    props:['subHeader']
}
</script>

<style lang="scss">
.sub-header{
    .breadcrumb-list{
        .item{
            &::after{
                content: '';
                position: absolute;
                width: 20px;
                height: 20px;
                background-image: url('/img/breadcrumb_arrow.svg');
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
                left: -29px;
                top: calc(50% - 10px);
                z-index: -1;
            }   
        }
    }
}
</style>