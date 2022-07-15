<template>
<div class="popular">
    <div class="popular_category"><p >Популярные категории</p></div>
    <swiper     :slidesPerView="5"
                :spaceBetween="32"
                class="mySwiper">
      <swiper-slide><a class="med_teh" href="#"><img class="med_teh_img" src="./../assets/med_teh.png"/>
      <p class="med_teh_text">Мед.техника</p></a>
      </swiper-slide>
      <swiper-slide><a class="med_teh" href="#"><img class="med_teh_img" src="./../assets/protectivefunds.png"/>
      <p class="med_teh_text">Защитные средства</p></a>
      </swiper-slide>
      <swiper-slide><a class="med_teh" href="#"><img class="med_teh_img" src="./../assets/for_kids.png"/>
      <p class="med_teh_text">Для малышей</p></a></swiper-slide>
      <swiper-slide><a class="med_teh" href="#"><img class="med_teh_img" src="./../assets/vitamins.png"/>
      <p class="med_teh_text">Витамины</p></a></swiper-slide>
      <swiper-slide><a class="med_teh" href="#"><img class="med_teh_img" src="./../assets/lenses.png"/>
      <p class="med_teh_text">Линзы</p></a>
      </swiper-slide>

    </swiper>    
</div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide
  }}
</script>
<style lang="scss" scoped>
.popular {
margin-top:149px;
}
.popular_category {
position: absolute;
height: 39px;
left: 64px;
/* Header/H2 */

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;
/* identical to box height */


/* Text/Gray 500 */

color: #2C3131;
}
.swiper {
  top:149px;
  left: 64px;
  height: 287px;
}
.swiper-slide {
  left: 4px;
  top: 4px;
  height: 267px;
  border-radius: 20px;
}

.swiper-slide img {
  display: block;
}
.mySwiper .swiper-slide {
 color: #157594;
 background: #FFFFFF;
 align-items: center;
 box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.1);
}
.swiper-slide:hover {
background: linear-gradient(147.28deg, #5AE1E1 -35.63%, #D4FCF2 151.87%);
box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.1);
top: -2px;
height: 267px;
}
.med_teh{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
        text-decoration: none;
    &_img{
        max-width: 100%;
        border-radius: 0px;
    }
    &_text{
text-decoration: none;
color: #157594;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 24px;
text-align: center;
    }
}


</style>