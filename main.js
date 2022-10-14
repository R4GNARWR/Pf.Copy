$(document).ready(function() {

    var nice = $("html").niceScroll();  // The document page (body)

    $(".overview__grid").niceScroll({
        cursorborder:"",cursorcolor:"#00F",
        emulatetouch: true,    
        autohidemode: false,
        preventmultitouchscrolling: true,
        cursordragontouch: true,
        cursordragspeed: '0.3',
    }); // First scrollable DIV
    $sideMenu = $('#sideMenu');
    
    $dataFloor = '';
    $dataFlatNumber = '';
    $dataPorch = '';
    $dataPrice = '';
    $dataPriceSq = '';
    $dataHouse = '';
    $dataJk = '';
    $dataRooms = '';
    $dataSq = '';
    $dataCond = '';
    $condFree = '<span class="legend-item__color legend-item__color-free"></span> Свободная';
    $condBooked = '<span class="legend-item__color legend-item__color-reserved"></span> Забронированная';
    $condSelled = '<span class="legend-item__color legend-item__color-sold"></span> Проданная';
    $condDis = '<span class="legend-item__color legend-item__color-disabled"></span> Недоступна';

});

function insertData(block, btn)
{
    $dataFloor = btn.dataset.floor;
    $dataFlatNumber = btn.dataset.flatNumber;
    $dataPorch = btn.dataset.porch;
    $dataPrice = btn.dataset.price;
    $dataPriceSq = btn.dataset.priceSq;
    $dataHouse = btn.dataset.house;
    $dataJk = btn.dataset.jk;
    $dataRooms = btn.dataset.rooms;
    $dataSq = btn.dataset.sq;
    $dataCond = btn.dataset.cond;

    $('#flatNumber').html($dataFlatNumber);
    $('#flatPrice').html($dataPrice);
    $('#flatPriceSq').html($dataPriceSq);
    $('#flatFloor').html($dataFloor);
    $('#flatPorch').html($dataPorch);
    $('#flatHouse').html($dataHouse);
    $('#flatJk').html($dataJk);
    $('#flatRooms').html($dataRooms);
    $('#flatSq').html($dataSq);
    switch($dataCond)
    {
        case('Свободная'):
            $('#flatCond').append($condFree); 
            break;
        case('Забронированная'):
            $('#flatCond').append($condBooked);   
            break;
        case('Проданная'):
            $('#flatCond').append($condSelled);   
            break;
        case('Недоступна'):
            $('#flatCond').append($condDis);  
            break;
    }
}

$(document).ready(function() {
    $('.sideMenu__close').on('click', function(){
        $sideMenu.hide(400); 
     });

    $('.section-floor__cell').on('click', function(){
    if($sideMenu.css('display') != 'none' )
    {
        insertData($sideMenu, this);
    }
    else
    {
        $sideMenu.show(400);
        insertData($sideMenu, this); 
    }
});
});

