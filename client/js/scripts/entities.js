var entities = {

'Operations' : {

'Actions' : {

'Spread the word' : {'description' : '', type: 'active'},
'Voter suppresion' : {'description': '', type:'active'},
'Electoral fraud' : {'description': '', type: 'super'},
'Word of mouth awareness': {'description': '', type: 'passive'}
},

'description' : ''

}, 

'Advertising/PR' : {

'Actions' : {
'News spin' : {'description': '', type: 'active'},
'Post-truth politicsSlogan' : {'description': '', type: 'passive'},
'Attack ad' :  {'description': '', type: 'passive'},
'Smear campaign': {'description': '', type: 'super'}
},

'description' : ''
},

'Social media engineer' : {

'Actions' : {

'Targeted ad' : {'description': '', type: 'active', 'toggle': true},
'Troll army' : {'description': '', type: 'passive'},
'Candidate posts' : {'description': '', type: 'passive'},
'Spread fake news' : {'description': '', type: 'active'}

},

'description' : ''

},

'Financial expert': {

'Actions' : {

'Cost reduction' :{'description': '', type: 'passive'},
'Fundraising event' : {'description': '', type: 'active', cooldown: 7},
'Corporate sponsorships' : {'description': '', type: 'super'},
'Tax evasion': {'description': '', type: 'passive', toggle: true, risk: 25}
},

'description' : ''
},

'Political analyst': {

'Actions' : {

'Add political angle' :{'description': '', type: 'active', cooldown:7},
'Campaign leaks' : {'description': '', type: 'super'},
'Political intel' : {'description': '', type: 'active'},
'POlitical expertise': {'description': '', type: 'passive'}
},

'description' : ''
},

'Data analyst': {

'Actions' : {

'Create poll' : {'description': '', type: 'active'},
'Create fake poll' : {'description': '', type: 'active'},
'Social expertise' : {'description': '', type: 'passive'},
'Artificial intelligence takeover': {'description': '', type: 'super', toggle: true}
},

'description' :''

},

'Hacker': {

'Actions' : {

'Dig for dirt' : {'description': '', type: 'active'},
'Fund depletion' : {'description': '', type: 'active', toggle: true, risk: 25},
'DDos of service attack' : {'description': '', type: 'active'},
'Network security': {'description': '', type: 'super'}

},

'description' :''

},

'Lobbyist': {

'Actions' : {

'Backhanded deals' : {'description': '', type: 'active'},
'Networking' : {'description': '', type: 'passive'},
'Filler position' : {'description': '', type: 'super'},


},

'description' :''

},

'Fixer': {

'Actions' : {

'Emulate ability' : {'description': '', type: 'active'},
"You don't want to know" : {'description': '', type: 'passive'},
'Accidents happen' : {'description': '', type: 'super'},
'Legal liability' : {description: '', type: 'passive'}
},

'description' :''

},

'Legal': {

'Actions' : {

"Devil's advocate" : {'description': '', type: 'passive'},
'Cease and desist' : {'description': '', type: 'active'},
"Bury 'em in paperwork" : {'description': '', type: 'super'},

},

'description' :''

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
}
