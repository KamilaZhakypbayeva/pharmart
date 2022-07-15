<template>

<div class="conteiner">
<upload-media
    server="/api/upload"
    error="@error('media'){{$message}}@enderror">
</upload-media>
<HeaderMain />
    <swiper     :pagination="{ clickable: true }"
                :mousewheel="true"
                class="slider">
    <swiper-slide :key="1">
        <div class="slide1 row">
            <div class="col">
            
            </div>
            <div class="col">
            
            </div>
            <h1 class="slider1_h1">Что такое Lorem Ipsum?</h1>
            <p class="slider1_p">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"</p>
            <img class="slider1_img" src="./../assets/Аптечка2.png"/>
            <input name="button_buy" type="button" value="Перейти">
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="slide2">
            <h1 class="slider2_h2">Что такое Lorem Ipsum?</h1>
            <p class="slider2_p">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"</p>
            <img class="slider2_img" src="./../assets/medicine_things.png"/>
            <input name="button_buy" type="button" value="Перейти">
        </div>
    </swiper-slide>
    <swiper-slide>3</swiper-slide>
    </swiper>
    <span class="slider_buttons">
      <button @click="prepend()" class="goto1slide"></button>
      <button @click="slideTo(2)" class="goto2slide"></button>
      <button @click="slideTo(1)" class="goto3slide"></button>
    </span>
    <h2 class="popular_category">Популярные категории</h2>
    <PopularCategories/>
    <h2 class="bestsellers">Хиты продаж</h2>
    <update-media
        server="/api/upload"
        media_file_path="/post_images"
        media_server="/api/media/{{$post->id}}"
        error="@error('media'){{$message}}@enderror">
  </update-media>
</div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
 import SwiperCore, { Pagination } from "swiper";
  import 'swiper/css/pagination';

  
  import 'swiper/css'
  import HeaderMain from '../components/HeaderMain.vue'
  import PopularCategories from '../components/popularCategories.vue'
  
SwiperCore.use([Pagination]);
export default{
    components: {
    Swiper,
    SwiperSlide,
    HeaderMain,
    PopularCategories
}
}
</script>
<style scoped>
.conteiner{
    max-width: 1312px;
}
/*@media {max-width: 1312px;}{
    .conteiner{
        max-width: 970px;
    }
}*/
.slider1{
position: absolute;
height: 460px;
left: 64px;
top: 162px;
}
.slider1_h1 {
position: absolute;
height: 58px;
left: 118px;
top: 274px;

/* Header/H1 */

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 58px;
/* identical to box height */


/* Brand/Blue 700 */

color: #157594;
}
.slider1_p {
position: absolute;
height: 48px;
left: 151px;
top: 346px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
/* or 133% */
/* Brand/Blue 700 */

color: #157594;
}


input[name="button_buy"]{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 32px;
gap: 10px;

position: absolute;
height: 51px;
left: 150px;
top: 426px;

/* Brand/Orange 500 */
background: rgba(254, 131, 38, 1);
border-radius: 8px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;
}

.slider{
position: absolute;
margin-top: 162px;
margin-left: 64px;
height: 460px;
/* Brand/Banner linear */
background:  linear-gradient(120deg, #5AE1E1, #D4FCF2); 
/* баннер */

box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
border-radius: 20px;

}
/*.slide1 {
    background-image: url("../assets/Аптечка2.png");
    background-repeat: no-repeat;
    height: 279px;
    width: 482px;
    background-position:  left 180px ;
}*/
.slider1_h1 {
position: absolute;
height: 58px;
left: 53px;
top: 112px;

/* Header/H1 */

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 58px;
/* identical to box height */


/* Brand/Blue 700 */

color: #157594;
}
.slider1_p {
position: absolute;
height: 48px;
left: 85px;
top: 190px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
/* or 133% */
/* Brand/Blue 700 */

color: #157594;
}
.slider1_img {
position: absolute;
height: 279px;
left: 760px;
top: 65px;
}


.slider2_h2 {
/* Что такое Lorem Ipsum? */


position: absolute;
height: 58px;
left: 54px;
top: 112px;

/* Header/H1 */

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 58px;
/* identical to box height */


/* Brand/Blue 700 */

color: #157594;
}
.slider2_p {
position: absolute;
height: 48px;
left: 85px;
top: 190px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
/* or 133% */
/* Brand/Blue 700 */

color: #157594;
}
.slider2_img {
position: absolute;
height: 366px;
width: 401px;
left: 819px;
top: 47px;
border-radius: 0px;

}

input[name="button_buy"]{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 32px;
gap: 10px;

position: absolute;
height: 51px;
left: 88px;
top: 280px;

/* Brand/Orange 500 */
background: rgba(254, 131, 38, 1);
border-radius: 8px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
border-color: rgba(254, 131, 38, 1); ;
color: #FFFFFF;
}

.goto1slide {
width: 45px;
height: 5px;

/* Brand/Blue 500 */

background: #2AC1CE;
opacity: 0.5;
border-radius: 3px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
margin-top: 638px;
left: 585px;
border:0px;
}
.goto2slide {
width: 50px;
height: 5px;

/* Brand/Blue 500 */

background: #2AC1CE;
opacity: 0.5;
border-radius: 3px;

/* Inside auto layout */
left: 640px;
flex: none;
order: 1;
flex-grow: 0;
border:0px;
}
.goto3slide {
width: 50px;
height: 5px;

/* Brand/Blue 500 */

background: #2AC1CE;
opacity: 0.5;
border-radius: 3px;
border-color: #FFFFFF;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
border:0px;
}
.popular_category {
position: absolute;
width: 372px;
height: 39px;
left: 64px;
top: 771px;

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
.bestsellers{
position: absolute;
height: 39px;
left: 64px;
top: 1273px;

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
</style>