//title//
$("#titleMain").click(function(){
    location.reload(true);
});

$("#titleMain").click(function(){
    $('#goHidden').removeClass("hide")
});

$("#titleMain").click(function(){
    $('#aboutHidden').addClass("hide")
});

$("#titleMain").click(function(){
    $('#locationHidden').addClass("hide")
});

$("#titleMain").click(function(){
    $('#kitepicHidden').addClass("hide")
});

//about//

$("#about").click(function(){
    $('#aboutHidden').removeClass("hide")
});

$("#about").click(function(){
    $('#goHidden').addClass("hide")
});

$("#about").click(function(){
    $('#locationHidden').addClass("hide")
});

$("#about").click(function(){
    $('#kitepicHidden').addClass("hide")
});


//random button//
$("#clickRandom").click(function(){
    location.reload(true);
});

$("#kitepics").click(function(){
    $('#kitepicHidden').removeClass("hide")
});

$("#clickRandom").click(function(){
    $('#aboutHidden').addClass("hide")
});

$("#clickRandom").click(function(){
    $('#locationHidden').addClass("hide")
});

$("#clickRandom").click(function(){
    $('#goHidden').addClass("hide")
}); 

//clickgo//
$("#clickGo").click(function(){
    $('#msg').removeClass("msghidden")
});


//Location//
$("#location").click(function(){
    $('#locationHidden').removeClass("hide")
});

$("#location").click(function(){
    $('#aboutHidden').addClass("hide")
});

$("#location").click(function(){
    $('#kitepicHidden').addClass("hide")
});

$("#location").click(function(){
    $('#goHidden').addClass("hide")
});

//kitepics
$("#kitepics").click(function(){
    $('#kitepicHidden').removeClass("hide")
});

$("#kitepics").click(function(){
    $('#aboutHidden').addClass("hide")
});

$("#kitepics").click(function(){
    $('#locationHidden').addClass("hide")
});

$("#kitepics").click(function(){
    $('#goHidden').addClass("hide")
});

