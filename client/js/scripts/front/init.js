var turns = 15;

var day = 1; 
var playing = 1;

function nextScreen(){

var c = $('.home-page:visible, .container:visible');

c.slideUp('slow', function(){

c.next('.container').slideDown('slow', function(){
    
    if ($('.day').is(':visible')) {$('.day').not('.day-'+ day).hide();
        
 $('.tabs').find('.tab:eq(0)').filter(':visible').html($('.tabs').find('.tab:eq(0)').filter(':visible').html() + "<span class='mailCount'>" + candidates[playing].inbox[day-1].length + "</span>");

    }

});

});

}


function showActionPlan(candidateFlag){
    
var teamLabels = candidates[playing].team.map(m => m['name'] );



var actions = candidates[playing].team.map(m => Object.keys(m['actions']['Actions']));





var actionTree = teamLabels.map(function(t,i){return "<div class='member'><div class='memberName'>" + t + "</div>" + actions[i].map(function(a, j){return "<div class='action'><div class='actionName'>" + a +"</div><img src='" + candidates[playing].team[i]['actions']['Actions'][a].src + "'/></div><div class='cost'>" + candidates[playing].team[i]['actions']['Actions'][a].cost +"</div><div class='actionButton'>Select</div>"}).join('\n') +  "</div></div>"});
$('.screen').empty();
$('.screen').html(actionTree.join('\n'));
    
}

$( document ).ready(function() {
    
    generateInbox();
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

var agendaOpts = labelsArr.slice(29,46).map(function(e,i) { return "<div class='agendaItem agendaItem-" + e + "'>" + e.replace('_', ' ') + "</div><div class='agendaButton'>Pick</div>"})

$('.agendaScreen').html(agendaOpts);


$('.home-page button').on('click', function(){

nextScreen();

});

$('.hireButton').on('click', function(ev){

var tx = $(ev.target).closest('.entity').find('.entityText').text().trim();
$(ev.target).closest('.entity').fadeOut(function(){
    
    $(ev.target).closest('.entity').remove();
    
});

candidates[playing]['team'].push({'name': tx, 'actions': entities[tx]}); withdrawSum(playing, entities[tx].cost);

if (candidates[playing]['team'].length == 5) { nextScreen(); switchPlayer();}  

});

$('.agendaButton').on('click', function(ev){

var tx = $(ev.target).prev('.agendaItem').text().trim();
$(ev.target).prev('.agendaItem').add($(ev.target)).fadeOut(function(){
    
   $(ev.target).prev('.agendaItem').add($(ev.target)).remove();
    
})
candidates[playing]['agenda'].push(tx); 

if (candidates[playing]['agenda'].length == 6) { nextScreen(); switchPlayer();}  

});



$('.tabs').find('.tab:eq(1)').on('click', function(){showActionPlan(playing);});

$('.screen').on('click', function(ev){if ($(ev.target).is('.actionButton')) { $('.actionButton:visible').removeClass('selected').text('Select'); $(ev.target).addClass('selected').text('Selected'); }}) 

$('.tabs').find('.tab:eq(0)').on('click', function(){showInbox(playing, day);});    
    
});



function showInbox(candidateFlag, day) {
    
    var ind = day - 1;
    
    var mailTree = candidates[1].inbox[day-1].map(function(e,i){ return "<div class='mail'><div class='header'>New email</div> <div class='mailbody'>" + e + "</div></div>"}).join('\n')
    $('.screen').empty();
    
    $('.screen').html(mailTree);
}
    
