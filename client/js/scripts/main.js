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
rockDb = finalArr;

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
    
    
    
}

function splitDbs(){
    
    kanyeDb = finalArr;
rockDb = finalArr;
    
}

  
