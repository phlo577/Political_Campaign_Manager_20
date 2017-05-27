var turns = 15;

var day = 1; 
var playing = 1;

function nextScreen(){

var c = $('.home-page:visible, .container:visible');

c.slideUp('slow', function(){

c.next('.container').slideDown('slow');

});

}

$( document ).ready(function() {
    $(".intro-text").html(textsObj['intro-text']);
    
    $("<div class='selection-kanye selectScreen container'></div>").insertBefore('.container-kanye');
    
    $("<div class='selection-rock selectScreen container'></div>").insertBefore('.container-kanye');
    
    $("<div class='agenda-kanye agendaScreen container'></div>").insertBefore('.container-kanye');
    
    $("<div class='agenda-rock agendaScreen container'></div>").insertBefore('.container-kanye');
    
    for (var i = 1; i <= turns; i++) {

$('.container-kanye').append("<div class='day day-"+i + "'></div>");
$('.container-rock').append("<div class='day day-"+i + "'></div>");

}

$('.day').each(function(i){

$(this).append("<div class='screen'></div>");
$(this).append("<div class='tabs'></div>");
$(this).append("<div class='endTurn'></div>");

})

$('.tabs').each(function(){

$(this).append("<div class='tab col-md-4'>Inbox</div>");
$(this).append("<div class='tab col-md-4'>Action plan</div>");
$(this).append("<div class='tab col-md-4'>Poll results</div>");
})

$('.endTurn').each(function(){

$(this).append("<div class='turnButton'>End Turn</div>");

});


for (var i in entities) {
    
    $('.selectScreen').append("<div class='entity entity-" + i.replace('\'', '').replace(/\s/g, '') + "'><div class='entityText'>" + i + "</div></div>");
    var actions = entities[i]['Actions'];
    
    
    for (var j in actions) {
        
        
        $('.entity-'+i.replace('\'', '').replace(/\s/g, '')).append("<div class='ability ability-" + j.replace('\'', '').replace(/\s/g, '') + "'>" + j + "</div>");
        $('.ability-'+j.replace('\'', '').replace(/\s/g, '')).append("<div class='abilityImage abilityImage-" + j.replace('\'', '').replace(/\s/g, '')  + "'><img src='" + actions[j].src + "'/></div>");
          $('.ability-'+j.replace('\'', '').replace(/\s/g, '')).append("<div class='abilityDesc abilityDesc-" + j.replace('\'', '').replace(/\s/g, '') + "'>" + actions[j].description + "</div>");
         $('.ability-'+j.replace('\'', '').replace(/\s/g, '')).append("<div class='abilityType abilityType-" + j.replace('\'', '').replace(/\s/g, '')  + "'>" + actions[j].type + "</div>");
    }
    
     $('.entity-'+i.replace('\'', '').replace(/\s/g, '')).append("<div class='hireButton hire-" + i.replace('\'', '').replace(/\s/g, '') + "'>Hire</div>");
    $('.entity-'+i.replace('\'', '').replace(/\s/g, '')).prepend("<div class='entityPic'>" + entities[i].src + "</div>");
    $('.entity-'+i.replace('\'', '').replace(/\s/g, '')).prepend("<div class='entityDesc'>" + entities[i].description + "</div>");
}

$(".container:not(':first')").hide();

$('.home-page .turnButton').hide();

$('.home-page button').on('click', function(){

nextScreen();

});

$('.hireButton').on('click', function(ev){

var tx = $(ev.target).closest('.entity').find('.entityText').text().trim();
$(ev.target).closest('.entity').remove();
candidates[playing]['team'].push(entities[tx]); withdrawSum(playing, entities[tx].cost);

if (candidates[playing]['team'].length == 5) { nextScreen(); switchPlayer();}  

});
});