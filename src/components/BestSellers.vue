<template>
<div class="best_sell">
    <div>
        <button></button>
        <button></button>
        <img class="drug" src="./../assets/drug.png"/>
        <span>
            <h1></h1>
            <img/>
            <p></p>
            <img/>
            <form>
            </form>
            <button></button>
        </span>

    </div>
    <div>Элемент 2</div>
    <div>Элемент 3</div>
    <div>Элемент 4</div>
    <div>Элемент 5</div>
    <div>Элемент 6</div>
    <div>Элемент 7</div>
    <div>Элемент 8</div>
    <div>Элемент 9</div>
    <div>Элемент 10</div>
</div>
</template>


<style scoped>

template {
     max-width: 1312px;

}
.best_sell {
/*рисуем зелёные рамки*/

/*подключаем сетку*/
display: grid;
margin-top: 295px;
margin-left:64px;
width:1312px;
height: 808px;
grid-template-columns: 243px 243px 243px 243px 243px;
grid-template-rows: 380px 380px 380px 380px 380px;
border:0px;
background: #FFFFFF;
    } 

    /*внешний вид ячеек*/
    .best_sell > * {
    /*фоновый цвет*/

    border-radius: 8px;
    background-color: #FFFFF;
    box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.1);
    /*скругление углов*/

    /*отступ от содержимого до края ячейки*/
    padding: 12px 12px 35px 10px;
    /*расстояние от одной границы ячейки до другой*/
    margin: 24px;

      }
.drug {
    image-rendering: crisp-edges;
    max-width:100%;
}
</style>