var iconRoot = '../client/img/icons/';

var entities = {

'Field Operator' : {

'Actions' : {

'Spread the Word' : {'description' : 'Get the word out on the streets. Increase visibility of your candidate and raise the awareness of the general public. Be more invasive than a Jehova\'s witness, son!', type: 'active', src: iconRoot + 'spread_the_word.png', cost: 5000},
'Voter Suppresion' : {'description': 'Prohibit a certain demographic group of voters to express their preference. Similar to what they tried to pull on ol\' Obama.', type:'active', src:  iconRoot + 'voter_suppression.png', cost: 10000},
'Electoral Fraud' : {'description': 'Shhhhh. I can offer a much needed service around here. Want to secure some "additional" voters that might or might not be real? Choose this option. But don\'t brag about it too much. The NSA is watching!', type: 'super', src: iconRoot + 'electoral_fraud.png', cost: 15000},
'Word of Mouth Awareness': {'description': 'Increase your candidate\'s visibility. Easy win, easy life.', type: 'passive', src: iconRoot+ 'word_of_mouth.png'}
},

'description' : '',src: '',cost: 5000

}, 

'PR Specialist' : {

'Actions' : {
'News spin' : {'description': 'Twist around the objective reality and make it submit to your irresistable charms! Cancels out a move from the opposition.', type: 'active', src: iconRoot+'news_spin.png', cost: 5000},
'Attack Ad' :  {'description': 'Drop a PR-bomb on your opponent. Choose your poison.', type: 'active', src: iconRoot + 'ad_attack.png', cost: 15000},
'Smear Campaign': {'description': 'BEAST MODE! Let\'s tell the truth about the other party. Decrease the benefits of the opponent drawn from their political agenda.', type: 'super', src: iconRoot + 'smear_campaign.png', cost: 20000},
'Post-truth Politics Slogan' : {'description': 'Create a slogan for your campaign that is so hot that not even O.J. Simpson\'s lawyer could handle it. Improves your political agenda and opens up the possibility of slogan battles. They\'re like rap battles, but with slogans.', type: 'passive', src: iconRoot + 'post_truth_slogan.png'}
},

'description' : '',src: '',cost: 5000
},

'Social Media Engineer' : {

'Actions' : {

'Targeted Ad' : {'description': 'Want to create some ads targeted towards your opponent\'s flock of "beliebers"? Use this. Now.', type: 'active', 'toggle': true, src: iconRoot + 'targeted_ads.png', cost: 5000},
'Spread Fake News' : {'description': 'This is actually cool. You can spread some fake polls with this option providing some false information to your opponent. Fun times ahead!', type: 'active', src: iconRoot + 'fake_poll_post.png', cost:5000},
'Troll Army' : {'description': 'No, this doesn\'t mean you can hire an army of actual trolls to attack your opponent! It\'s online trolls. Use them to lower the impact of your opponents online impact.', type: 'passive', src: iconRoot + 'troll_army.png'},
'Candidate Posts' : {'description': 'Wanna be cool and hip? I\'m afraid it\'s too late for you, but you can use this option to improve your candidate\'s online presence (Twitter, Facebook etc.) and increase the impact of the political agenda.', type: 'passive', src: iconRoot + 'message_post.png'}
},

'description' : '',src: '',cost: 5000

},

'Financial Expert': {

'Actions' : {

'Tax Evasion': {'description': 'Don\'t act all high and mighty, I know you\'re considering it. Choose the amount you want to "gain", but beware, it involves "certain" "legal" "risks". Wink wink.', type: 'active', toggle: true, risk: 25, src: iconRoot + 'tax_evasion.png'},
'Fundraising Event' : {'description': 'It\'s like begging, but without wearing the smelly clothes. Generates a random amount of money each time it\'s used.', type: 'active', cooldown: 7, src: iconRoot + 'fundraising_event.png', cost:10000, generates: 100000},
'Corporate Sponsorship' : {'description': 'It\'s even worse than the fundraising. You have to beg for money from corporate fatcats. If you succeed, you receive a huge chunk of \'dem dolla bills.', type: 'super', src: iconRoot +  'corporate_sponsorship.png', cost: 50000, generates: 500000},
'Cost Reduction' :{'description': 'Cheap is the name of the game. Reduces the costs of all internal operations by 10%.', type: 'passive', src:iconRoot + 'cost_reduction.png'}
},

'description' : '',src: '',cost: 5000
},

'Political Analyst': {

'Actions' : {

'Add Political Angle' :{'description': 'Everybody has an angle. You can choose an additional item to your political agenda.', type: 'active', cooldown:7, src:iconRoot +  'political_angle.png', cost:10000},
'Campaign Leaks' : {'description': 'Reveal which factors are the most relevant in your opponents campaign. It might be nachos! I\'d love some nachos…', type: 'super', src: iconRoot + 'political_leak.png', cost:30000},
'Political Expertise': {'description': 'Gain some insight into all this mess called "politics". Provides some benefits on all politics-related fields.', type: 'passive', src: iconRoot + 'political_expertise.png'}
},

'description' : '',src: '',cost: 5000
},

'Data Analyst': {

'Actions' : {

'Create Poll' : {'description': 'Hmmm. I wonder what this option might do. Go ahead, solve this intricate puzzle!', type: 'active', src: iconRoot +  'create_poll.png', cost:10000},
'Create Fake Poll' : {'description': 'Did you always want to just drop random numbers and watch as other people go bananas over their interpretation? Me neither. But this is just what this option provides.', type: 'active' , src: iconRoot + 'create_fake_poll.png',cost:1000},
'Artificial Intelligence Takeover': {'description': 'Have you seen "The Terminator"? Well, let me introduce you to Skynet! Not only will you receive some predictions for the best decisions to make in the future, but you will also be able to make any beneficial decision last until the end of the campaign. Skynet!', type: 'super', toggle: true, src:iconRoot +  'ai_takeover.png', cost:150000},
'Social Expertise' : {'description': 'See what is tickling the opponents supporter\'s fancy.', type: 'passive', src:iconRoot +  'social_expertise.png'}
},

'description' :'', src: '', cost: 5000

},

'Hacker': {

'Actions' : {

'Dig for Dirt' : {'description': 'Figuratively. You\'ll be able to access 1 important piece of information on the opponent\'s naughty, naughty past.', type: 'active', src: iconRoot + 'dig_for_dirt.png', cost:1000},
'Fund Depletion' : {'description': 'Are you feeling lucky, punk? Use this option to "borrow" 10% of the opponents remaning fund on a weekly basis, but be careful! The risk of getting caught increase each week.', type: 'active', toggle: true, risk: 25, src: iconRoot + 'fund_depletion.png', cost:5000},
'DDoS Attack' : {'description': 'Do you want to send your opponent back to the stone age? Use this option to deny any technology-related or -based action your opponent might consider starting. Pure evil.', type: 'active', src: iconRoot + 'dos_attack.png', cost:20000},
'Network Security': {'description': 'Are you scared your opponent might use the same dirty, cheap, highly illegal tricks you\'re using? No worries, this option reduces the chances of him being succesful in any cyber-attack by 50%.', type: 'passive', src: iconRoot + 'network_security.png'},
'Singularity': {'description': 'Just making preparations for when machines will rise. Requirement for Artificial Intelligence Takeover', type: 'passive', src: iconRoot + 'singularity.png'}

},

'description' :'',src: '', cost: 5000

},

'Lobbyist': {

'Actions' : {

'Backhanded Deals' : {'description': 'This is all you need to know: more money.', type: 'active', src: iconRoot + 'backhanded_deals.png', cost:20000},
'Filler Position' : {'description': 'Have you just realised you urgently need a social media engineer? (Well, here\'s a sentence I\'d never thought I\'d say!) Don\'t worry, with this option you can hire somebody to fill in that position for a week. (Networking comes in handy, see?)', type: 'super', src: iconRoot + 'filler.png', cost:10000},
'Networking' : {'description': 'Make some connections. Find out who\'s dating and who\'s hatin\'. Helpful for other stuff as well.', type: 'passive', src: iconRoot + 'networking.png'}


},

'description' :'', src: '', cost: 5000

},

'Fixer': {

'Actions' : {

'Jack Of All Trades' : {'description': 'Don\'t waste precious time on doing detective work figuring out what this option does, I will explain.You can emulate any ability from one of the other campaign staff. You have a 50% chance of succeeding, though.', type: 'active', src: iconRoot + 'jack_of_all_trades.png', cost:2500},
'Accidents Happen' : {'description': 'Oh, man. I really hoped you wouldn\'t be curious what this option does. Well…you can \"take care\" of any staff membe\d by \"taking care\" I mean \"making him swim with the fishes\". Still too subtle?', type: 'super', src:iconRoot +  'accidents_happen.png', cost:15000},
"You Don\'t Want to Know" : {'description': 'Stop asking so many questions! Fine, if you must know… you\'ll get a 15% chance to fix a random "issue" you are currently facing. And don\'t forget, this conversation never took place.', type: 'passive', src: iconRoot + 'you_dont_wanna_know.png'}
},

'description' :'',src: '', cost: 5000

},

'Legal Specialist': {

'Actions' : {

'Cease and Desist' : {'description': 'You have a 35% chance to halt any fresh or ongoing action done by your opponent. Pretty neat, don\'t you think?', type: 'active', src: iconRoot + 'cease_and_desist.png', cost:5000},
"Bury \'em in Paperwork" : {'description': 'You can bury your opponent in paperwork. Got it? It means he won\'t be able to combo any actions and will stop any ongoing actions he\'s having.', type: 'super', src: iconRoot + 'bury_them_paperwork.png',cost:10000},
"Devil\'s Advocate" : {'description': 'It\'s like in that Al Pacino movie where he plays and advocate, but turns out he is the devil. Well, eliminate the devil part and you\'ll get it. No? Okay, let me rephrase: this option reduces the chances of your opponent having successful legal actions against you.', type: 'passive', src: iconRoot + 'devils_advocate.png'}

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
'Smear Campaign' : [typeof actionsTaken['Campaign leaks'] != 'undefined'&&  'Dig dirt' in actionsTaken&& actionsTaken['Dig Dirt'].length > 2],   
'DDoS Attack' : ['Fund depletion' in actionsTaken&& actionsTaken['Fund depletion'].length >= 2],
"Bury \'em in Paperwork" : ['Lawsuit' in actionsTaken&&  'Cease and desist' in actionsTaken&& actionsTaken['Lawsuit'].length + actionsTaken['Cease and desist'].length >= 2],
'Campaign Leaks' : ['Political Angle' in actionsTaken&&  'Political intel' in actionsTaken&& actionsTaken['Political angle'].length + actionsTaken['Political intel']]
};

var candidates = {

1: {

'agenda' : [],
'funds' : 100000,
'penalties' : 0,

actions: {

'ongoing' : [],

}, 

team :[],
src : '',
inbox: []

},

2: {

'agenda' : [],
'funds' : 100000,
'penalties' : 0,

actions: {

'ongoing' : [],

},

team: [],
src : '',
inbox: []

}

};



var constants = {

'FUNDS_DEPLETED_EMAIL' : {text: '', read: false}

};



var actionsObj = {
    
   
    
}

