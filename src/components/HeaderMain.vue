<template>
    <div class="header">
        <headermain1>
            <img class="location" src="./../assets/location.png"/>
            <h1 class="Almaty">Алматы, Казахстан</h1>
            <h1 class="be_partner">Стать партнером</h1>
            <h1 class="pharmacies">Аптеки</h1>
            <h1 class="ru">Рус</h1>
            <img class="Russia" src="./../assets/Russia.png"/>
        </headermain1>
        <headermain2>
            <h2 class="Pharmart">Pharmart</h2>
            <img class="logo_pharm1" src="./../assets/logo_pharm1.png"/>
            <button class="katalog"><img src="./../assets/Component.png" alt="" style="vertical-align:middle"> Каталог
            </button>
            <form>
            <input type="text" placeholder="Поиск" class="poisk">
            <button class="button_search"><img src="./../assets/search.png" alt="" style="vertical-align:middle"></button>
            </form>
            <h1 class="basket">Корзина</h1>
            <img class="basket_img" src="./../assets/корзина.png"/>
            <img class="user" src="./../assets/login.png"/>
            <img class="heart" src="./../assets/heart.png"/>
            <h2 class="favorite ">Избранные</h2>
            <h2 class="Бексултан ">Бексултан</h2>
        </headermain2>
    </div>
</template>
<style scoped>

@font-face {
    font-family: 'Inter'; /* Гарнитура шрифта */
    src: url(./../fonts/Inter/Inter-VariableFont_slnt\,wght.ttf); /* Путь к файлу со шрифтом */
   }
.headermain1 {
/* Inside auto layout */
justify-content: space-around;
display: flex;
margin-top: 13px;
margin-right: 64px;
margin-left: 64px;
}
.location {
position: absolute;
height: 16.094757080078125px;
left: 67.33px;
top: 17.5px;
border-radius: [object Object]px;
}
.Almaty {
position: absolute;
height: 17px;
left: 89px;
top: 14px;
border-radius: nullpx;

/* Text/Regular */

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 11px;
/* identical to box height */


/* Text/Grey 400 */

color: #626262;
/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
.be_partner {
position: absolute;
height: 17px;
left: 272px;
top: 11.5px;
/* Tertiary button/Medium */

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */


/* Text/Grey 400 */

color: #626262;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
.pharmacies{
position: absolute;
height: 17px;
left: 425px;
top: 11.5px;
/* Tertiary button/Medium */

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */


/* Text/Grey 400 */

color: #626262;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
.ru {
    position: absolute;
height: 17px;
left: 1330px;
top: 13px;

/* Tertiary button/Medium */

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */


/* Text/Grey 400 */

color: #626262;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
.Russia{
position: absolute;
left: 1360px;
top: 23.8px;
height: 12px;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.Pharmart {
position: absolute;

height: 42px;
left: 116px;
top: 69px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 42px;
letter-spacing: 0.05em;
color: #2AC1CE;
}
.logo_pharm1 {
position: absolute;
height: 42.000003814697266px;

left: 64px;
top: 95px;
border-radius: 0px;

}
.katalog {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: 45px;
gap: 10px;
text-align: right;
background-color: #FE8326;
border-color: #FE8326;
border-radius: 8px;
position: absolute;
height: 46px;
margin-left: 384px;
top: 95.5px;
bottom: 0%;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #FFFFFF;

/* Inside auto layout */
}


.katalog img {
position: absolute;
height: 20px;
/* Inside auto layout */
left:17.67px;
flex: none;
order: 0;
flex-grow: 0;
 }

input[type="text"] {
box-sizing: border-box;
position: absolute;
height: 46px;
margin-left: 533px;
top: 95.4px;
justify-content: center;
background: #FFFFFF;
border: 1px solid #04B2B0;
text-align: left;
border-radius: 10px;
 }
.button_search {
position: absolute;
text-align: left;
left: 983px;
top: 95.5px;
color: #A9A9A9;
height:46px;
background: #AFE7E6;
border: 10px red;
border-radius: 10px;
}
.poisk{
position: absolute;
height: 19px;
left: 24px;
top: 13px;
text-align: left;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

/* Text/Grey 300 */

color: #A9A9A9;
}
.button_search img{
position: absolute;
height: 18.66666603088379px;
left: 32.67px;
top: 13.67px;
}
.basket{
position: absolute;
left: 1096px;
top: 115px;

height: 17px;

/* Text/Regular */

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
/* identical to box height */
color: #2C2C2C;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
}
.basket_img {
position: absolute;
height: 22.399999618530273px;
border-radius: [object Object]px;
left: 1111.3px;
top: 95px;
}
.heart {
position: absolute;
left: 1217.8px;
top: 99.4px;
right: 70px;
height: 19.19999885559082px;
}
.favorite {
position: absolute;
height: 19px;
left: 1190px;
top: 112.3px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;

color: #000000;
}
.Бексултан {
position: absolute;
height: 19px;
left: 1305px;
top: 112.3px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;

color: #000000;
}
.user {
position: absolute;
height: 22.38541030883789px;
left: 1332.5px;
top: 97.8px;
}
</style>