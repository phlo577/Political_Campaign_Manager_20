var entities = {

'Field Operator' : {

'Actions' : {

'Spread the word' : {'description' : '', type: 'active', src: '', cost: 5000},
'Voter suppresion' : {'description': '', type:'active', src: '', cost: 10000},
'Electoral fraud' : {'description': '', type: 'super', src: '', cost: 15000},
'Word of mouth awareness': {'description': '', type: 'passive', src: ''}
},

'description' : '',src: '',cost: 5000

}, 

'PR Specialist' : {

'Actions' : {
'News spin' : {'description': '', type: 'active', src: '', cost: 5000},
'Post-truth politics slogan' : {'description': '', type: 'passive', src: '', cost: 10000},
'Attack ad' :  {'description': '', type: 'active', src: '', cost: 15000},
'Smear campaign': {'description': '', type: 'super', src: '', cost: 20000}
},

'description' : '',src: '',cost: 5000
},

'Social Media Engineer' : {

'Actions' : {

'Targeted ad' : {'description': '', type: 'active', 'toggle': true, src: '', cost: 5000},
'Troll army' : {'description': '', type: 'passive', src: '', cost: 2000},
'Candidate posts' : {'description': '', type: 'passive', src: ''},
'Spread fake news' : {'description': '', type: 'active', src: '', cost:5000}

},

'description' : '',src: '',cost: 5000

},

'Financial Expert': {

'Actions' : {

'Cost reduction' :{'description': '', type: 'passive', src: ''},
'Fundraising event' : {'description': '', type: 'active', cooldown: 7, src: '', cost:10000, generates: 100000},
'Corporate sponsorships' : {'description': '', type: 'super', src: '', cost: 50000, generates: 500000},
'Tax evasion': {'description': '', type: 'passive', toggle: true, risk: 25, src: ''}
},

'description' : '',src: '',cost: 5000
},

'Political Analyst': {

'Actions' : {

'Add political angle' :{'description': '', type: 'active', cooldown:7, src: '', cost:10000},
'Campaign leaks' : {'description': '', type: 'super', src: '', cost:30000},
'Political intel' : {'description': '', type: 'active', src: '', cost:5000},
'Political expertise': {'description': '', type: 'passive', src: ''}
},

'description' : '',src: '',cost: 5000
},

'Data Analyst': {

'Actions' : {

'Create poll' : {'description': '', type: 'active', src: '', cost:10000},
'Create fake poll' : {'description': '', type: 'active' , src: '',cost:1000},
'Social expertise' : {'description': '', type: 'passive', src: ''},
'Artificial intelligence takeover': {'description': '', type: 'super', toggle: true, src: '', cost:150000}
},

'description' :'', src: '', cost: 5000

},

'Hacker': {

'Actions' : {

'Dig for dirt' : {'description': '', type: 'active', src: '', cost:1000},
'Fund depletion' : {'description': '', type: 'active', toggle: true, risk: 25, src: '', cost:5000},
'DDos of service attack' : {'description': '', type: 'active', src: '', cost:20000},
'Network security': {'description': '', type: 'super', src: ''}

},

'description' :'',src: '', cost: 5000

},

'Lobbyist': {

'Actions' : {

'Backhanded deals' : {'description': '', type: 'active', src: '', cost:20000},
'Networking' : {'description': '', type: 'passive', src: '',cost:0},
'Filler position' : {'description': '', type: 'super', src: '', cost:0},


},

'description' :'', src: '', cost: 5000

},

'Fixer': {

'Actions' : {

'Emulate ability' : {'description': '', type: 'active', src: '', cost:2500},
"You don\'t want to know" : {'description': '', type: 'passive', src: '',cost:5000},
'Accidents happen' : {'description': '', type: 'super', src: '', cost:15000},
'Legal liability' : {description: '', type: 'passive', src: ''}
},

'description' :'',src: '', cost: 5000

},

'Legal Specialist': {

'Actions' : {

"Devil\'s advocate" : {'description': '', type: 'passive', src: '',cost:5000},
'Cease and desist' : {'description': '', type: 'active', src: '', cost:5000},
"Bury \'em in paperwork" : {'description': '', type: 'super', src: '',cost:10000},

},

'description' :'',
src: '',
cost: 5000

},

}

var team = {};
var externalResources = {};
var actionsTaken = {};

var combos = {
    
'Artificial Intelligence Takeover' : ['hacker' in team&& 'data analyst' in team&& 'data warehouse' in externalResources&& 'Create polls' in actionsTaken&& actionsTaken['Create polls'].length >= 2&& typeof actionsTaken['Corporate sponsorship'] != 'undefined'],    
'Smear campaign' : [typeof actionsTaken['Campaign leaks'] != 'undefined'&&  'Dig dirt' in actionsTaken&& actionsTaken['Dig Dirt'].length > 2],   
'DDos attack' : ['Fund depletion' in actionsTaken&& actionsTaken['Fund depletion'].length >= 2],
'Bury them in paperwork': ['Lawsuit' in actionsTaken&&  'Cease and desist' in actionsTaken&& actionsTaken['Lawsuit'].length + actionsTaken['Cease and desist'].length >= 2],
'Campaign leaks' : ['Political Angle' in actionsTaken&&  'Political intel' in actionsTaken&& actionsTaken['Political angle'].length + actionsTaken['Political intel']]
};

var candidates = {

1: {

'agenda' : [],
'funds' : 100000,
'penalties' : [],

actions: {

'ongoing' : [],

}, 

team :[],
src : ''

},

2: {

'agenda' : [],
'funds' : 100000,
'penalties' : [],

actions: {

'ongoing' : [],

},

team: [],
src : ''

}

};



var constants = {

'FUNDS_DEPLETED_EMAIL' : {text: '', read: false}

};



