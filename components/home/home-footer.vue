<template>
	<div>
    <footer class="w-full pt-24 pb-24 bg-white bg-cover bg-no-repeat" style="background-image: url('/img/footer.png');">
      <div class="container">
        <div class="content flex text-center flex-col justify-center items-center content-center">
          <div>
            <img
              src="/img/footer_logo.svg"
              class="w-56 h-20 object-contain"
              :alt="`${footerData}`" />
          </div>

          <p class="text-base lg:w-1/2 md:w-full sm:w-full w-full text-center my-10 m-auto text-desc font-medium">
            {{ footerData }}
          </p>

          <ul class="social-media flex content-center items-center">
            <template v-for="social in socails">
              <li class="ml-2" :key="social.img">
                <a
                  :href="`${social.link}`"
                  target="_blank"
                  class="bg-white relative z-30 w-11 h-11 border border-solid border-primary border-opacity-30 social-icon overflow-hidden flex justify-center items-center content-center"
                >
                  <img
                    :src="`/img/${social.img}.svg`"
                    class="w-1/2 h-1/2 relative z-30 object-contain"
                    :alt="`${social.alt}`" />
                </a>

              </li>
            </template>
          </ul>
        </div>
      </div>
    </footer>

    <section class="copyrights">
      <div class="container">
        <div class="py-3 border-t border-solid border-white border-opacity-10 flex items-center content-center justify-between">
          <p class="text-base copyrights-data text-desc font-medium">
            جميع الحقوق محفوظة لقافلة الإيمان @

            {{ new Date().getFullYear() }}
          </p>

          <a href="#"  target="_blank" class="flex items-center content-center">
            <p class="text-desc font-medium text-base ml-4">
            تصميم وبرمجة
            </p>

            <img src="/img/paramg.svg" class="w-8 h-8 object-contain" alt="" />
          </a>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
export default {
  data() {
    return {
      footerData: 'فنحن نسخر خبراتنا ومواردنا لتوفير أفضل الإختيارات وإبتكار أفضل الحلول لتيسير آداء المناسك وتحسين ظروف السفر والإقامة للحفاظ على ذهن صاف وقلب مطمئن',
      socailMedia: 'تابعنا على',
      socails: [
        {
          img: 'facebook',
          link: 'https://facebook.com',
          alt: 'صفحة قوافل الايمان علي الفيس'
        },{
          img: 'twitter',
          link: 'https://twitter.com',
          alt: 'صفحة قوافل الايمان علي تويتر'
        },{
          img: 'instagram',
          link: 'https://instagram.com',
          alt: 'صفحة قوافل الايمان علي انستاجرام'
        },{
          img: 'youtube',
          link: 'https://youtube.com',
          alt: 'صفحة قوافل الايمان علي يوتيوب'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
footer{
  background-position: bottom;

  .social-media{
    .social-icon{
      border-radius: 50%;
      transition: all .5s linear;
      
      &::After{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #B38224;
        transform: scale(0);
        transition: all .5s linear;
      }
      
      img{
        filter: invert(68%) sepia(39%) saturate(6836%) hue-rotate(13deg) brightness(91%) contrast(72%);
      }

      &:hover{
        &::After{
          transform: scale(1);
        }

        img{
          filter: invert(100%) sepia(6%) saturate(1338%) hue-rotate(231deg) brightness(116%) contrast(100%);
          animation: toRightFromLeft .5s linear;
        }
      }
    }
  }
}


@media (max-width: 800px) {
  .copyrights {
    padding-bottom: 63px;

    div {
      flex-direction: column;
      justify-content: center;

      .copyrights-data {
        margin-bottom: 15px;
      }
    }
  }
}


</style>
