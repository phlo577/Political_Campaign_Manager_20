var iconRoot = '../client/img/icons/';

var entities = {

'Field Operator' : {

'Actions' : {

'Spread the Word' : {'description' : '', type: 'active', src: iconRoot + 'spread_the_word.png', cost: 5000},
'Voter Suppresion' : {'description': '', type:'active', src:  iconRoot + 'voter_suppression.png', cost: 10000},
'Electoral Fraud' : {'description': '', type: 'super', src: iconRoot + 'electoral_fraud.png', cost: 15000},
'Word of Mouth Awareness': {'description': '', type: 'passive', src: iconRoot+ 'word_of_mouth.png'}
},

'description' : '',src: '',cost: 5000

}, 

'PR Specialist' : {

'Actions' : {
'News spin' : {'description': '', type: 'active', src: iconRoot+'news_spin.png', cost: 5000},
'Attack Ad' :  {'description': '', type: 'active', src: iconRoot + 'ad_attack.png', cost: 15000},
'Smear Campaign': {'description': '', type: 'super', src: iconRoot + 'smear_campaign.png', cost: 20000},
'Post-truth Politics Slogan' : {'description': '', type: 'passive', src: iconRoot + 'post_truth_slogan.png', cost: 10000}
},

'description' : '',src: '',cost: 5000
},

'Social Media Engineer' : {

'Actions' : {

'Targeted Ad' : {'description': '', type: 'active', 'toggle': true, src: iconRoot + 'targeted_ads.png', cost: 5000},
'Spread Fake News' : {'description': '', type: 'active', src: iconRoot + 'fake_poll_post.png', cost:5000},
'Troll Army' : {'description': '', type: 'passive', src: iconRoot + 'troll_army.png', cost: 2000},
'Candidate Posts' : {'description': '', type: 'passive', src: iconRoot + 'message_post.png'}
},

'description' : '',src: '',cost: 5000

},

'Financial Expert': {

'Actions' : {

'Tax Evasion': {'description': '', type: 'active', toggle: true, risk: 25, src: iconRoot + 'tax_evasion.png'},
'Fundraising Event' : {'description': '', type: 'active', cooldown: 7, src: iconRoot + 'fundraising_event.png', cost:10000, generates: 100000},
'Corporate Sponsorship' : {'description': '', type: 'super', src: iconRoot +  'corporate_sponsorship.png', cost: 50000, generates: 500000},
'Cost Reduction' :{'description': '', type: 'passive', src:iconRoot + 'cost_reduction.png'}
},

'description' : '',src: '',cost: 5000
},

'Political Analyst': {

'Actions' : {

'Add Political Angle' :{'description': '', type: 'active', cooldown:7, src:iconRoot +  'political_angle.png', cost:10000},
'Campaign Leaks' : {'description': '', type: 'super', src: iconRoot + 'political_leak.png', cost:30000},
'Political Expertise': {'description': '', type: 'passive', src: iconRoot + 'political_expertise.png'}
},

'description' : '',src: '',cost: 5000
},

'Data Analyst': {

'Actions' : {

'Create Poll' : {'description': '', type: 'active', src: iconRoot +  'create_poll.png', cost:10000},
'Create Fake Poll' : {'description': '', type: 'active' , src: iconRoot + 'create_fake_poll.png',cost:1000},
'Artificial Intelligence Takeover': {'description': '', type: 'super', toggle: true, src:iconRoot +  'ai_takeover.png', cost:150000},
'Social Expertise' : {'description': '', type: 'passive', src:iconRoot +  'social_expertise.png'}
},

'description' :'', src: '', cost: 5000

},

'Hacker': {

'Actions' : {

'Dig for Dirt' : {'description': '', type: 'active', src: iconRoot + 'dig_for_dirt.png', cost:1000},
'Fund Depletion' : {'description': '', type: 'active', toggle: true, risk: 25, src: iconRoot + 'fund_depletion.png', cost:5000},
'DDoS Attack' : {'description': '', type: 'active', src: iconRoot + 'dos_attack.png', cost:20000},
'Network Security': {'description': '', type: 'passive', src: iconRoot + 'network_security.png'},
'Singularity': {'description': '', type: 'passive', src: iconRoot + 'singularity.png'}

},

'description' :'',src: '', cost: 5000

},

'Lobbyist': {

'Actions' : {

'Backhanded Deals' : {'description': '', type: 'active', src: iconRoot + 'backhanded_deals.png', cost:20000},
'Filler Position' : {'description': '', type: 'super', src: iconRoot + 'filler.png', cost:0},
'Networking' : {'description': '', type: 'passive', src: iconRoot + 'networking.png',cost:0}


},

'description' :'', src: '', cost: 5000

},

'Fixer': {

'Actions' : {

'Jack Of All Trades' : {'description': '', type: 'active', src: iconRoot + 'jack_of_all_trades.png', cost:2500},
'Accidents Happen' : {'description': '', type: 'super', src:iconRoot +  'accidents_happen.png', cost:15000},
"You Don\'t Want to Know" : {'description': '', type: 'passive', src: iconRoot + 'you_dont_wanna_know.png',cost:5000}
},

'description' :'',src: '', cost: 5000

},

'Legal Specialist': {

'Actions' : {

'Cease and Desist' : {'description': '', type: 'active', src: iconRoot + 'cease_and_desist.png', cost:5000},
"Bury \'em in Paperwork" : {'description': '', type: 'super', src: iconRoot + 'bury_them_paperwork.png',cost:10000},
"Devil\'s Advocate" : {'description': '', type: 'passive', src: iconRoot + 'devils_advocate.png',cost:5000}

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



