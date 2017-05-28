var excLines = exc.split('\n').slice(1);
var labelsArr = exc.split('\n')[0].split('\t');
 
var labelsObj = {
 
'18' : [1,2,3,4,5,6,7,8,9], 
'22' : [1,2,3,4,5,6], 
'20': [1,2,3],
'21': `1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50`.split('\n').map(e => parseInt(e, 10)),
 
'19' : [1,2,3,4,5,6,7,8],
'23' : [1,2,3],
'24': [1,2,3]
};
 
var finalArr = [];

var kanyeEq, rockEq; 

var kanyeDb, rockDb;

kanyeDb = finalArr;
rockDb = finalArr

var preferencesScale = [ 0.3, 0.7] // less than 0.3 => doesn't matter, anything in between is ok, anything more => matters very much

//for (var i = 0; i < excLines.length; i++) {

function populateDb(){
    
if (excLines.length > 0){
    
var lineArr = excLines[0].split('\t');
 
var lineArrResult = lineArr.map(function(e,i){ 
 
var ind = i + 1;
 
//console.log(ind);
if (ind in labelsObj) { var oArr = labelsObj[ind]; return oArr[Math.floor(Math.random()*oArr.length)] } else {
 
return parseFloat(Math.random(1).toFixed(2), 10);

}
 
});

lineArrResult = lineArrResult.map(function(e,i){if (i > 45 && i < 92) {return parseInt(lineArrResult[i-46] * 100, 10)} else {return lineArrResult[i]}});
 
finalArr.push(lineArrResult);

if (finalArr.length <= 100) {
    
  if (finalArr.length == 1) {
     
     kanyeEq = new smr.Regression({ numX: finalArr[0].slice(0,92).length, numY: 1 });   
rockEq = new smr.Regression({ numX: finalArr[0].slice(0,92).length, numY: 1 });
      
  }  
  
  var len = finalArr.length;
  
  var kanyeXArr = finalArr[len - 1].slice(0, 92), kanyeYArr = [finalArr[len - 1][92]], 
   rockXArr = finalArr[len - 1].slice(0, 92), rockYArr = [finalArr[len - 1][93]];
   
    kanyeEq.push({x: kanyeXArr, y: kanyeYArr});
    rockEq.push({x: rockXArr, y: rockYArr});
} 
excLines.shift();

splitDbs();


//}

} else {clearInterval(dbInterval); 

splitDbs();
    
}
}

var dbInterval = setInterval(populateDb, 5);


function selectColumns(db, colIndexArr){
    
    var obj = {};
    
    for (var i = 0; i < colIndexArr.length; i++) {
        
        obj[colIndexArr[i]] = db.map(e => e[colIndexArr[i]]);
        
    }
    
    return obj;
    
}

function updateDbSubset(columnObj, condObj, amountObj) {
    
    var resultObj = {};
    
    var colKeys = Object.keys(columnObj).map(e=> parseInt(e));
    
    for (var i = 0; i < colKeys.length; i++) {
        
        resultObj[colKeys[i]] = columnObj[colKeys[i]].map(e => ('percent' in amountObj)? (e + e * amountObj.value/100) : e + amountObj.value);
        
    }
    
    return resultObj;
    
}

function splitDbs(){
    
    kanyeDb = finalArr;
rockDb = finalArr.slice(0);
    
}

function mergeSubsetIntoDb(candidateFlag, columnObj){
    
    var colKeys = Object.keys(columnObj).map(e=> parseInt(e));
  //  console.log(colKeys);
   
   if (candidateFlag == 1){
        
    for (var k = 0; k < colKeys.length; k++){
        var colArr = columnObj[colKeys[k]];
       //console.log(colArr);
       
        for (var i = 0; i < kanyeDb.length; i++) {
       // console.log('changing value ' +  kanyeDb[i][colKeys[k]] + ' on line ' + i + ' to ' + colArr[i])  ; 
        kanyeDb[i][colKeys[k]] = colArr[i];
        
        kanyeDb[i][92] = kanyeEq.hypothesize({x: kanyeDb[i].slice(0,92)})[0];
        
    }
    
    }
    
    } else {
        
      for (var k = 0; k < colKeys.length; k++){
        var colArr = columnObj[colKeys[k]];
       
        for (var i = 0; i < rockDb.length; i++) {
            
        rockDb[i][colKeys[k]] = colArr[i];
         rockDb[i][93] = rockEq.hypothesize({x: rockDb[i].slice(0,92)})[0];

    }
    
    }
        
    }
    
 
    
}
  
  
  /* TODO manipulate function 
  var col = selectColumns(kanyeDb, [2])

kanyeDb2 = kanyeDb;

var newcol = updateDbSubset(col, {}, {'percent': true, 'value': 60}); setTimeout(function(){mergeSubsetIntoDb(1, newcol);}, 100); 
  
  */
  
  

function getVotesPercentages(criteriaObj){
    
    var fun, value;
    
    var colIndex = criteriaObj['col'];
    
    if ('value' in criteriaObj) {fun = compareAgainstEqual;}
    else if ('filter' in criteriaObj) {fun = compareAgainstGreater;}
    
    value = criteriaObj.value;
    
    var votesKanye = selectColumns(kanyeDb, [92])[92].filter(function(e, i){return (typeof fun == 'function')? fun(kanyeDb[i][colIndex], value) : true});
    var votesRock = selectColumns(rockDb, [93])[93].filter(function(e, i){return (typeof fun == 'function')? fun(rockDb[i][colIndex], value) : true});
    
    console.log(votesKanye);
     console.log(votesRock);
    var totalVoters = votesKanye.length;
    
    var finalArr = Array(votesKanye.length).fill(0).map(function(e,i){return ((Math.max(votesKanye[i], votesRock[i]) == votesKanye[i])? 1:  2 )});
    
    
    var finalMap = new Map([...new Set(finalArr)].map(
    x => [x, finalArr.filter(y => y === x).length]
    ));

//return percentages for each candidate
    return [finalMap.get(1) / totalVoters * 100, finalMap.get(2) / totalVoters * 100, criteriaObj];
    
} 

//use :  poll by criteria : getVotesPercentages({'col' : 40, value: 1})
// national getVotesPercentages({})


function addToInbox(candidateFlag, email){


candidates[candidateFlag].inbox.push(email);


}

function withdrawSum(candidateFlag, sum) {

candidates[candidateFlag].funds = candidates[candidateFlag].funds - sum;

if (candidates[candidateFlag].funds < 0) { candidates[candidateFlag].funds = 0; addToInbox(candidateFlag, constants['FUNDS_DEPLETED_EMAIL']);}

}


function addSum(candidateFlag, sum) {

candidates[candidateFlag].funds = candidates[candidateFlag].funds + sum;

}

function switchPlayer(){
    
      //  switchDay();
    playing = playing%2+1;
    
}

function switchDay(){
    
    day = day + 1;
    
}

