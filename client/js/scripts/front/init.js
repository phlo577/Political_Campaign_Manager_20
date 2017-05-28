var turns = 15;

var day = 1; 
var playing = 1;

function modifyCol(){
    
   var cols = labelsArr.slice(46,92);
        
        
        var rcol = labelsArr.indexOf(cols[Math.floor(Math.random()*cols.length)]);
        
        console.log(rcol);
        console.log(rcol);
        var db = (playing == 1)? kanyeDb : rockDb;
         var col = selectColumns(db, [rcol]);

//kanyeDb2 = kanyeDb;

var newcol = updateDbSubset(col, {}, {'percent': true, 'value': 0.1}); mergeSubsetIntoDb(playing, newcol);
        
    
}

function nextScreen(){

var c = $('.home-page:visible, .container:visible');

c.slideUp('slow', function(){

var toShow;
if (day == 1) {toShow = c.next('.container');} else if (day > 1){
    
    if (playing == 2){
    toShow = c.next('.container');
    } else {toShow = c.prev('.container');}    
        
    } else if (day == 15) {if (playing == 2) {toShow = $('.debatePage'); }}

toShow.slideDown('slow', function(){

$('.container:visible .day-'+day).show();

$('.tab:visible').eq(1).trigger('click');
    if ($('.debatePage').is(':visible')) { showPollResults();}

    if ($('.day').is(':visible')) {$('.day').not('.day-'+ day).hide();
        
 $('.tabs').find('.tab:eq(0)').filter(':visible').html($('.tabs').find('.tab:eq(0)').filter(':visible').html() + "<span class='mailCount'>" + candidates[playing].inbox[day-1].length + "</span>");
    
      modifyCol();  
    }
    
$('.agendaHeader:visible').insertAfter('.statusBar:visible');

//$('.screen:visible').empty();
showStatusBar(); 
});

});



}


function showActionPlan(candidateFlag){
    
var teamLabels = candidates[playing].team.map(m => m['name'] );

var actions = candidates[playing].team.map(m => Object.keys(m['actions']['Actions']));


var actionTree = teamLabels.map(function(t,i){return "<div class='member'><div class='memberName'>" + t + "</div>" + actions[i].map(function(a, j){return "<div class='action'><div class='actionName'>" + a +"</div><img src='" + candidates[playing].team[i]['actions']['Actions'][a].src + "'/></div><div class='cost'>" + candidates[playing].team[i]['actions']['Actions'][a].cost +"</div><div class='actionButton'>Select</div>"}).join('\n') +  "</div></div>"});


$('.screen').empty();
$('.screen').html(actionTree.join('\n'));

$('.screen:visible').prepend("<div class='statusBar'></div>");

showStatusBar();

$('.cost').filter(function(){return $(this).text() == 'undefined'}).next('.actionButton').removeClass('actionButton').addClass('passiveButton').html('Passive'); 
  $('.cost').filter(function(){return $(this).text() == 'undefined'}).remove(); 
}

function showStatusBar(){

$('.statusBar').empty(); $("<div class='money'> You currently have <b>$" + candidates[playing].funds + "</b> remaining funds.</div>").appendTo('.statusBar:visible'); $("<div class='risk'> You are currently incurring a legal risk of <b>" + candidates[playing].penalties + "</b> percent.</div>").appendTo('.statusBar:visible'); $("<div class='turns'> There are <b>" + (turns - day) + "</b> remaining until the elections.</div>").appendTo('.statusBar:visible');
$("<div class='team'> Your campaign team currently consists of <b>" + candidates[playing].team.length + " members</b>.</div>").appendTo('.statusBar');
$("<div class='politics'> Your candidate's political agenda currently consists of <b>" + candidates[playing].agenda.join(', ') + ".</div>").appendTo('.statusBar');


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

$('.screen, .selectScreen, .agendaScreen').prepend("<div class='statusBar'></div>");

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

 $('.selectScreen').prepend("<div class='agendaHeader'><span class='big'>Team selection</span><br/><br/>As the new political campaign manager you need to first hire a new team. Please review all the below options at your disposal, but note you have only 5 slots available to hire people. Think it through, prioritize your needs and choose very wisely. Your staff can make or break your campaign. Each position comes with a certain number of \"abilities\". Read them carefully as some of them bring great benefits and others increase the chance of you or you candidate to face legal liability. Plan ahead, prioritize traits and most importantly, don't get distracted by the looks.</div>");
$('.abilityDesc').css('position', 'absolute');
$('.abilityImage').mouseover(function(ev){ var d = $(ev.target).closest('.ability').find('.abilityDesc').show() }).mouseout(function(){$('.abilityDesc').hide()});

$(".container:not(':first')").hide();

$('.home-page .turnButton').hide();

var agendaOpts = labelsArr.slice(29,46).map(function(e,i) { return "<div class='agendaItem agendaItem-" + e + "'>" + e.replace('_', ' ') + "</div><div class='agendaButton'>Pick</div>"})

$('.agendaScreen').html(agendaOpts);

$('.screen, .agendaScreen').prepend("<div class='statusBar'></div>");

$('.agendaScreen').prepend("<div class='agendaHeader'><span class='big'>Political agenda</span><br/><br/>Okay, now that you've put together your staff, it's time to set your political agenda. Below items represent some points to focus on during your candidate's campaign. Please review each item and choose your points of interest, but note that your agenda can have only 6 items on it.</div>");


$('.home-page button').on('click', function(){

nextScreen();

});

$('.hireButton').on('click', function(ev){

var tx = $(ev.target).closest('.entity').find('.entityText').text().trim();
$(ev.target).closest('.entity').fadeOut(function(){
    
    $(ev.target).closest('.entity').remove();
    
});


candidates[playing]['team'].push({'name': tx, 'actions': entities[tx]}); withdrawSum(playing, entities[tx].cost); showStatusBar();

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

$('.screen').on('click', function(ev){
    
    if ($(ev.target).is('.actionButton')) { $('.actionButton:visible').removeClass('selected').text('Select'); $(ev.target).addClass('selected').text('Selected'); 
    
    candidates[playing].actions['ongoing'] = $('.actionButton.selected:visible').prevAll('.action').first().find('.actionName').text().trim();
    
}}) 

$('.tabs').find('.tab:eq(0)').on('click', function(){showInbox(playing, day);});    

$('.tabs').find('.tab:eq(2)').on('click', showPollResults);  

$('.turnButton').on('click', function(){
    
   modifyCol();
    
     if (playing == 2) {switchDay();} switchPlayer(); nextScreen();
    
    
})

});



function showInbox(candidateFlag, day) {
    
    var ind = day - 1;
    
    var mailTree = candidates[1].inbox[day-1].map(function(e,i){ return "<div class='mail'><div class='header'>New email</div> <div class='mailbody'>" + e + "</div></div>"}).join('\n')
    $('.screen').empty();
    
    $('.screen').html(mailTree);
    
    $('.screen:visible').prepend("<div class='statusBar'></div>");

showStatusBar();
    
}
    
    
    function showPollResults(){
        
        
 var polls = getVotesPercentages({});

$('.screen:visible').empty();

$("<div class='pollResults'></div>").appendTo('.screen:visible, .debatePage:visible');

//$('.pollResults').html("<div class='kanyeRes'>If the elections were tomorrow, <br/>mr. Kanye West would receive" + polls[0].toFixed(2) + "% of the  votes</div><div> while mr. Dwane Johnson would receive "  + polls[0].toFixed(2) + "% of the votes");

$('.screen:visible').empty();

$('<div class=\'pollResults\'></div>').appendTo('.screen:visible');

var branch = ($('.debatePage').is(':visible'))? ' - and what do you know, they actually ARE tomorrow - <br/>' : '';
$('.pollResults').html("<div class='kanyeRes'>If the elections were tomorrow" + branch + ", mr. Kanye West would receive" + polls[0].toFixed(2) + "% of the  votes</div><div> while mr. Dwayne Johnson would receive "  + polls[1].toFixed(2) + "% of the votes"); 

    $('.screen:visible').prepend("<div class='statusBar'></div>");

showStatusBar();    
        
    }
