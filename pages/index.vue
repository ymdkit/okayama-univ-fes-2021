<template>
  <div>
    <img class="h-screen w-screen object-cover" src="@/assets/img/hero.jpg" alt="岡山大学祭">
    <div v-if="isStreaming" class="container max-w-screen-xl mt-20 mx-auto relative">
      <Header title="ライブ配信" colors="bg-red-500 text-white" :icon-path="require('@/assets/img/streaming.png')" />
      <VerticalTitle text="STREAMING" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-10 mx-auto">
        <div class="px-5">
          <div class="relative overflow-hidden" style="padding-bottom: 56.25%">
            <iframe
              class="absolute h-full w-full"
              src="https://www.youtube-nocookie.com/embed/mEVC3prQz0Y?controls=0"
              title="学祭2021 パフォーマンス"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <client-only>
            <light-timeline :items="items" class="text-center" />
          </client-only>
        </div>
      </div>
    </div>

    <div v-else class="container max-w-screen-xl mt-20 mx-auto relative">
      <Header title="今年の学祭について" colors="bg-themeColor text-white" />
      <VerticalTitle text="ABOUT" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-14 mx-auto">
        <div class="w-4/5 tracking-widest leading-6 px-4">
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </div>
      </div>
    </div>

    <canvas class="waveCanvas mt-4" />
    <div class="bg-themeColor">
      <div class="container max-w-screen-xl mx-auto relative">
        <Header title="現在のピックアップ" colors="bg-white text-themeColor" />
        <VerticalTitle text="PICKUP" colors="text-themeLight" />
        <CenterTitle text="写真部 学祭展覧会" colors="border-white text-white" />
        <div class="bg-white text-center mt-16 mx-auto h-48 sm:h-96 w-4/5 sm:w-2/3 rounded-3xl relative z-10">
          画像
        </div>
        <div class="text-center pb-3 mt-12">
          <a href="#" class="border-b-2 pb-2 sm:text-lg text-white">
            その他の団体企画はこちら >
          </a>
        </div>
      </div>
    </div>
    <canvas class="waveCanvas transform rotate-180" />

    <div class="container max-w-screen-xl pt-6 mx-auto relative">
      <Header title="スタンプラリー企画" colors="bg-themeColor text-white" />
      <VerticalTitle text="CAMPAIGN" colors="text-gray-200" />
      <div class="container max-w-screen-lg mt-4 sm:mt-14 mx-auto px-10">
        <client-only placeholder="Client Only">
          <swiper :options="swiperOption">
            <swiper-slide v-for="i of 2" :key="i">
              <div
                class="text-center text-xl sm:text-2xl border-b-3 font-bold tracking-widest mt-8 mx-auto pb-2 relative z-10 border-themeColor text-themeColor"
              >
                10/30（土） ピックアップ
              </div>
              <table class="w-full text-center mt-1">
                <tr v-for="n of 6" :key="n" class="border-b-2 border-gray-400">
                  <td
                    class="text-center text-gray-800 text-sm sm:text-base font-medium tracking-widest pr-1 sm:pr-5 py-2.5"
                    :class="{'text-accentColor': n === 2}"
                  >
                    13:00〜14:00
                  </td>
                  <td
                    class="text-center text-gray-800 text-sm sm:text-base font-medium tracking-widest pl-1 sm:pl-5 py-2.5"
                    :class="{'text-accentColor': n === 2}"
                  >
                    写真部 学祭展覧会
                  </td>
                </tr>
              </table>
            </swiper-slide>
          </swiper>
        </client-only>
        <div slot="pagination" class="swiper-pagination" />

        <div class="grid grid-cols-2 gap-4 sm:mt-20">
          <div class="col-span-2 md:col-span-1 text-center md:text-right mt-7 sm:mt-0 md:pr-3">
            <a
              href="#"
              class="border-3 border-themeColor inline-block font-medium text-center text-themeColor text-lg tracking-wider rounded-full w-11/12 md:w-72 py-3 transform transition duration-300 hover:scale-105"
            >スタンプラリーとは？</a>
          </div>
          <div class="col-span-2 md:col-span-1 text-center md:text-left md:pl-3">
            <a
              href="#"
              class="border-3 border-themeColor bg-themeColor inline-block font-medium text-center text-white text-lg tracking-wider rounded-full w-11/12 md:w-72 py-3 transform transition duration-300 hover:scale-105"
            >参加する →</a>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-themeColor mt-20 pb-14">
      <div class="container max-w-screen-xl pt-16 mx-auto relative">
        <Header title="イベント参加団体" colors="bg-white text-themeColor" />
        <VerticalTitle class="mt-16" text="CLUBS" colors="text-themeLight" />
        <client-only placeholder="Client Only">
          <slick :options="slickOptions" class="slick mt-14">
            <div v-for="m of 15" :key="m" class="px-1">
              <a href="#">
                <img src="@/assets/img/uraja_logo.png" alt="uraja">
              </a>
            </div>
          </slick>
          <slick :options="slickOptions" class="slick">
            <div v-for="m of 15" :key="m" class="px-1 transform translate-x-1/2">
              <a href="#">
                <img src="@/assets/img/campus_nuts_logo.png" alt="campus_nuts">
              </a>
            </div>
          </slick>
          <slick :options="slickOptions" class="slick">
            <div v-for="m of 15" :key="m" class="px-1">
              <a href="#">
                <img src="@/assets/img/uraja_logo.png" alt="uraja">
              </a>
            </div>
          </slick>
        </client-only>
        <div class="text-center pb-3 mt-12">
          <a href="#" class="border-b-2 pb-2 sm:text-lg text-white">
            団体の紹介ページはこちら >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CenterTitle from '@/components/CenterTitle.vue'
import Header from '@/components/Header.vue'
import VerticalTitle from '@/components/VerticalTitle.vue'

export default Vue.extend({
  components: {
    CenterTitle,
    Header,
    VerticalTitle
  },
  data () {
    return {
      isStreaming: true,
      items: [
        {
          tag: '10:00',
          color: '#dcdcdc',
          content: '校友会あいさつ'
        },
        {
          tag: '10:10',
          color: '#F04444',
          content: '軽音部パフォーマンス'
        },
        {
          type: 'star',
          tag: '11:00',
          color: '#F04444',
          htmlMode: true,
          content: 'ゲスト: 岡大太郎'
        },
        {
          tag: '12:00',
          color: '#dcdcdc',
          content: '昼休憩'
        },
        {
          tag: '13:00',
          color: '#F04444',
          content: '軽音部パフォーマンス'
        },
        {
          tag: '14:30',
          color: '#F04444',
          content: '軽音部パフォーマンス'
        },
        {
          tag: '15:00',
          color: '#F04444',
          content: '軽音部パフォーマンス'
        },
        {
          tag: '16:30',
          color: '#F04444',
          content: '軽音部パフォーマンス'
        },
        {
          tag: '17:00',
          color: '#dcdcdc',
          content: '閉会のあいさつ'
        }
      ],
      swiperOption: {
        breakpoints: {
          768: {
            allowTouchMove: false,
            pagination: false,
            slidesPerView: 2,
            spaceBetween: 60
          }
        },
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      slickOptions: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        draggable: false,
        speed: 6900,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        touchMove: false,
        cssEase: 'linear',
        slidesToShow: 8,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      }
    }
  },
  mounted () {
    init()
  },
  beforeDestroy () {
    stop()
  }
})
</script>

<style>
.swiper-pagination {
  @apply mt-4 text-center static w-full
}

/*noinspection CssUnusedSymbol*/
.swiper-pagination-bullet {
  @apply mx-1.5
}
</style>
