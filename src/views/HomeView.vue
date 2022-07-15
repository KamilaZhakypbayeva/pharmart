<template>
<div class="conteiner">
<HeaderMain />
    <div class="swipermain">
    <swiper     :pagination="{ clickable: true }"
                :mousewheel="true"
                class="slider">
    <swiper-slide :key="1">
            <div class="slide_col1">
                <a class="slider1_p"><p>Что такое Lorem Ipsum?</p>
                <p class="slider1_p2">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"</p>
                <a href="#"><button class="button_buy">Перейти</button></a></a>
            </div>
            <div class="slide_col2">
                <img src="./../assets/medicine_chest.png"/>
            </div>
    </swiper-slide>
    <swiper-slide>
            <div class="slide_col1">
                <a class="slider1_p"><p>Что такое Lorem Ipsum?</p>
                <p class="slider1_p2">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"</p>
                <a href="#"><button class="button_buy">Перейти</button></a></a>
            </div>
            <div class="slide_col2">
                <img src="./../assets/medicine_things.png"/>
            </div>
    </swiper-slide>
    <swiper-slide>3</swiper-slide>
    </swiper>
    </div>

    <PopularCategories/>
    <span class="bestsellers"><p >Хиты продаж</p></span>
    <BestSellers/>
</div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
 import SwiperCore, { Pagination } from "swiper";
  import 'swiper/css/pagination';

  
  import 'swiper/css'
  import HeaderMain from '../components/HeaderMain.vue'
  import PopularCategories from '../components/popularCategories.vue'
  import BestSellers from '../components/BestSellers.vue'
  
SwiperCore.use([Pagination]);
export default{
    components: {
    Swiper,
    SwiperSlide,
    HeaderMain,
    PopularCategories,
    BestSellers
}
}


</script>
<style scoped>
.conteiner{
    max-width: 1312px;
}
.swipermain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-top:162px;
    
}

.slide_col1{
display: inline-block;
flex-direction: column;
justify-content: center;
align-items: center;
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

.slider{
height: 460px;
width:100%;
left: 55px;
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
.slider1_p {
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
.slider1_p2 {
position: absolute;
height: 48px;
left: 10px;
top: 100px;
font-weight: 500;
font-size: 18px;
line-height: 24px;
/* or 133% */
/* Brand/Blue 700 */

color: #157594;
}
.button_buy {
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 32px;
top:200px;
position: absolute;
height: 51px;
left: 10px;

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
.slide_col2{
display: flex;
flex-direction: column;
justify-content: right;
align-items: center;
margin-left:680px;
margin-top: 65px;
    &img {
        max-width: 100%;
    }
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