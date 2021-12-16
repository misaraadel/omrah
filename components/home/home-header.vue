<template>
<nav class="w-full absolute top-0 left-0 z-50 pt-7">
   <div class="container mx-auto">
      <div class="content w-full flex justify-between items-center content-center">
         <img
            src="/img/logo.svg"
            class="lg:w-56 md:w-52 sm:w-32 w-32 h-20 object-contain"
            :alt="`${NavAlt}`" />

         <ul class="navbar-nav flex items-center content-center">
            <template v-for="navLink in navLinks">
               <li class="ml-6" :key="navLink.code">
                  <a @click.prevent="scrollTo(`#${navLink.link}`)" class="flex items-center content-center cursor-pointer">
                     <img
                        :src="`/img/${navLink.img}.svg`"
                        class="w-6 h-6 object-contain ml-2"
                        :alt="`${NavAlt}`" />

                     <span class="text-base font-medium text-white">
                        {{ navLink.title }}
                     </span>
                  </a>
               </li>
            </template>
         </ul>

         <call-to-action
            btnWidth="w-40"
            borderColor="#fff"
            btnBK="none"
            arrowImg="white_arrow"
            :btnTitle="`${navBtn}`"
            btnLink="/"  />
      </div>
   </div>
</nav>
</template>

<script>
export default {
data() {
   return {
      NavAlt: 'فنحن نسخر خبراتنا ومواردنا لتوفير أفضل الإختيارات وإبتكار أفضل الحلول لتيسير آداء المناسك وتحسين ظروف السفر والإقامة للحفاظ على ذهن صاف وقلب مطمئن',
      navBtn: 'إحجز رحلتك',
      navLinks: [
         {
            code: '1',
            img: 'feature',
            title: 'مميزات القافلة',
            link: '',
         },{
            code: '2',
            img: 'bus',
            title: 'رحلات الباص',
            link: '',
         },{
            code: '3',
            img: 'airplane',
            title: 'رحلات الطيران',
            link: '/plane'
         },{
            code: '4',
            img: 'price_tag',
            title: 'عروضنا',
            link: ''
         },{
            code: '5',
            img: 'location',
            title: 'فروعنا',
            link: ''
         }
      ]
   }
}
}
</script>

<style lang="scss">
nav{
   .navbar-nav{
      li{

         &:last-child{
            margin: 0px !important;
         }

         a{
            &:hover{
               img{
                  animation: bounce-in-fwd .5s linear;
               }
            }
         }
      }
   }
}

@media (max-width: 999px) {
   nav{
      z-index: 99999 !important;

      .navbar-nav{
         width: 100%;
         position: fixed;
         bottom: 0;
         left: 0;
         padding: 10px 0px;
         background-color: #B38224;
         box-shadow: 0px 0px 10px rgba($color: #FCFAF7 , $alpha: .2);

         li{
            width: calc(100% / 4);
            display: flex;
            justify-content: center;
            align-items:  center;
            align-content: center;
            margin: 0px !important;

            &:last-child{
               display: none;
            }

            a{
               width: 100%;
               text-align: center;
               justify-content: center;
               align-items: center;
               flex-direction: column;

               span{
                  font-size: 14px !important;
               }
            }
         }
      }
   }
}
</style>
