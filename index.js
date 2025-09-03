let word_list = ['consider', 'minute', 'accord', 'evident', 'practice', 'intend', 'concern','commit', 'issue', 'approach', 'establish', 'utter', 'conduct', 'engage', 
    'obtain', 'scarce','policy', 'straight', 'stock', 'apparent', 'property', 'fancy', 'concept', 'court', 'appoint', 'passage', 'vain', 'instance', 'coast', 'project', 
    'commission', 'constant', 'circumstances', 'constitute', 'level', 'affect', 'institute', 'render', 'appeal', 'generate', 'theory', 'range', 'campaign', 'league', 
    'labor', 'confer', 'grant', 'dwell', 'entertain', 'contract', 'earnest', 'yield', 'wander', 'insist', 'knight', 'convince', 'inspire', 'convention', 'skill', 
    'harry', 'financial', 'reflect', 'novel', 'furnish', 'compel', 'venture', 'territory', 'temper', 'bent', 'intimate', 'undertake', 'majority', 'assert', 'crew', 
    'chamber', 'humble', 'scheme', 'keen', 'liberal', 'despair', 'tide', 'attitude', 'justify', 'flag', 'merit', 'manifest', 'notion', 'scale', 'formal', 'resource', 
    'persist', 'contempt', 'tour', 'plead', 'weigh', 'mode', 'distinction', 'inclined', 'attribute', 'exert', 'oppress', 'contend', 'stake', 'toil', 'perish', 'disposition', 
    'rail', 'cardinal', 'boast', 'advocate', 'bestow', 'allege', 'notwithstanding', 'lofty', 'multitude', 'steep', 'heed', 'modest', 'partial', 'apt', 'esteem', 'credible', 
    'provoke', 'tread', 'ascertain', 'fare', 'cede', 'perpetual', 'decree', 'contrive', 'derived', 'elaborate', 'substantial', 'frontier', 'facile', 'cite', 'warrant', 'sob', 
    'rider', 'dense', 'afflict', 'flourish', 'ordain', 'pious', 'vex', 'gravity', 'suspended', 'conspicuous', 'retort', 'jet', 'bolt', 'assent', 'purse', 'plus', 'sanction', 
    'proceeding', 'exalt', 'siege', 'malice', 'extravagant', 'wax', 'throng', 'venerate', 'assail', 'sublime', 'exploit', 'exertion', 'kindle', 'endow', 'imposed', 
    'humiliate', 'suffrage', 'ensue', 'brook', 'gale', 'muse', 'satire', 'intrigue', 'indication', 'dispatch', 'cower', 'wont', 'tract', 'canon', 'impel', 'latitude', 
    'vacate', 'undertaking', 'slay', 'predecessor', 'delicacy', 'forsake', 'beseech', 'philosophical', 'grove', 'frustrate', 'illustrious', 'device', 'pomp', 'entreat', 
    'impart', 'propriety', 'consecrate', 'proceeds', 'fathom', 'objective', 'clad', 'partisan', 'faction', 'contrived', 'venerable', 'restrained', 'besiege', 'manifestation', 
    'rebuke', 'insurgent', 'rhetoric', 'scrupulous', 'ratify', 'stump', 'discreet', 'imposing', 'wistful', 'mortify', 'ripple', 'premise', 'subside', 'adverse', 'caprice', 
    'muster', 'comprehensive', 'accede', 'fervent', 'cohere', 'tribunal', 'austere', 'recovering', 'stratum', 'conscientious', 'arbitrary', 'exasperate', 'conjure', 'ominous', 
    'edifice', 'elude', 'pervade', 'foster', 'admonish', 'repeal', 'retiring', 'incidental', 'acquiesce', 'slew', 'usurp', 'sentinel', 'precision', 'depose', 'wanton', 'odium', 
    'precept', 'deference', 'fray', 'candid', 'enduring', 'impertinent', 'bland', 'insinuate', 'nominal', 'suppliant', 'languid', 'rave', 'monetary', 'headlong', 'infallible', 
    'coax', 'explicate', 'gaunt', 'morbid', 'ranging', 'pacify', 'pastoral', 'dogged', 'ebb', 'aide', 'appease', 'stipulate', 'recourse', 'constrained', 'bate', 'aversion', 
    'conceit', 'loath', 'rampart', 'extort', 'tarry', 'perpetrate', 'decorum', 'luxuriant', 'cant', 'enjoin', 'avarice', 'edict', 'disconcert', 'symmetry', 'capitulate', 
    'arbitrate', 'cleave', 'append', 'visage', 'horde', 'parable', 'chastise', 'foil', 'veritable', 'grapple', 'gentry', 'pall', 'maxim', 'projection', 'prowess', 'dingy', 
    'semblance', 'tout', 'fortitude', 'asunder', 'rout', 'staid', 'beguile', 'purport', 'deprave', 'bequeath', 'enigma', 'assiduous', 'vassal', 'quail', 'outskirts', 
    'bulwark', 'swerve', 'gird', 'betrothed', 'prospective', 'advert', 'peremptory', 'rudiment', 'deduce', 'halting', 'ignominy', 'ideology', 'pallid', 'chagrin', 'obtrude', 
    'audacious', 'construe', 'ford', 'repast', 'stint', 'fresco', 'dutiful', 'hew', 'parity', 'affable', 'interminable', 'pillage', 'foreboding', 'rend', 'livelihood', 'deign', 
    'capricious', 'stupendous', 'chaff', 'innate', 'reverie', 'wrangle', 'crevice', 'ostensible', 'craven', 'vestige', 'plumb', 'reticent', 'propensity', 'chide', 'espouse', 
    'raiment', 'intrepid', 'seemly', 'allay', 'fitful', 'erode', 'unaffected', 'canto', 'docile', 'patronize', 'teem', 'estrange', 'spat', 'warble', 'mien', 'sate', 
    'constituency', 'patrician', 'parry', 'practitioner', 'ravel', 'infest', 'actuate', 'surly', 'convalesce', 'demoralize', 'devolve', 'alacrity', 'waive', 'unwonted', 
    'seethe', 'scrutinize', 'diffident', 'execrate', 'implacable', 'pique', 'mite', 'encumber', 'uncouth', 'petulant', 'expiate', 'cavalier', 'banter', 'bluster', 'debase', 
    'retainer', 'subjugate', 'extol', 'fraught', 'august', 'fissure', 'knoll', 'callous', 'inculcate', 'nettle', 'blanch', 'inscrutable', 'tenacious', 'thrall', 'exigency', 
    'disconsolate', 'impetus', 'imposition', 'auspices', 'sonorous', 'exploitation', 'bane', 'dint', 'ignominious', 'amicable', 'onset', 'conservatory', 'zenith', 'voluble', 
    'yeoman', 'levity', 'rapt', 'sultry', 'pinion', 'axiom', 'descry', 'retinue', 'functionary', 'imbibe', 'diversified', 'maraud', 'grudging', 'partiality', 'philology', 
    'wry', 'caucus', 'permeate', 'propitious', 'salient', 'propitiate', 'excise', 'betoken', 'palatable', 'upbraid', 'renegade', 'hoary', 'pedantic', 'coy', 'troth', 
    'encroachment', 'belie', 'armada', 'succor', 'imperturbable', 'irresolute', 'knack', 'unseemly', 'accentuate', 'divulge', 'brawn', 'burnish', 'palpitate', 'promiscuous', 
    'dissemble', 'flotilla', 'invective', 'hermitage', 'despoil', 'sully', 'malevolent', 'irksome', 'prattle', 'subaltern', 'welt', 'wreak', 'tenable', 'inimitable', 
    'depredation', 'amalgamate', 'immutable', 'proxy', 'dote', 'reactionary', 'rationalism', 'endue', 'discriminating', 'brooch', 'pert', 'disembark', 'aria', 'trappings', 
    'abet', 'clandestine', 'distend', 'glib', 'pucker', 'rejoinder', 'spangle', 'blighted', 'nicety', 'aggrieve', 'vestment', 'urbane', 'defray', 'spectral', 'munificent', 
    'dictum', 'fad', 'scabbard', 'adulterate', 'beleaguer', 'gripe', 'remission', 'exorbitant', 'invocation', 'cajole', 'inclusive', 'interdict', 'abase', 'obviate', 
    'hurtle', 'unanimity', 'mettle', 'interpolate', 'surreptitious', 'dissimulate', 'ruse', 'specious', 'revulsion', 'hale', 'palliate', 'obtuse', 'querulous', 'vagary', 
    'incipient', 'obdurate', 'grovel', 'refractory', 'dregs', 'ascendancy', 'supercilious', 'pundit', 'commiserate', 'alcove', 'assay', 'parochial', 'conjugal', 'abjure', 
    'frieze', 'ornate', 'inflammatory', 'machination', 'mendicant', 'meander', 'bullion', 'diffidence', 'makeshift', 'husbandry', 'podium', 'dearth', 'granary', 'whet', 
    'imposture', 'diadem', 'fallow', 'hubbub', 'dispassionate', 'harrowing', 'askance', 'lancet', 'rankle', 'ramify', 'gainsay', 'polity', 'credence', 'indemnify', 
    'ingratiate', 'declivity', 'importunate', 'passe', 'whittle', 'repine', 'flay', 'larder', 'threadbare', 'grisly', 'untoward', 'idiosyncrasy', 'quip', 'blatant', 
    'stanch', 'incongruity', 'perfidious', 'platitude', 'revelry', 'delve', 'extenuate', 'polemic', 'enrapture', 'virtuoso', 'glower', 'mundane', 'fatuous', 'incorrigible', 
    'postulate', 'gist', 'vociferous', 'purvey', 'baleful', 'gibe', 'dyspeptic', 'prude', 'luminary', 'amenable', 'willful', 'overbearing', 'dais', 'automate', 'enervate', 
    'wheedle', 'gusto', 'bouillon', 'omniscient', 'apostate', 'carrion', 'emolument', 'ungainly', 'impiety', 'decadence', 'homily', 'avocation', 'circumvent', 'syllogism', 
    'collation', 'haggle', 'waylay', 'savant', 'cohort', 'unction', 'adjure', 'acrimony', 'clarion', 'turbid', 'cupidity', 'disaffected', 'preternatural', 'eschew', 'expatiate', 
    'didactic', 'sinuous', 'rancor', 'puissant', 'homespun', 'embroil', 'pathological', 'resonant', 'libretto', 'flail', 'bandy', 'gratis', 'upshot', 'aphorism', 'redoubtable', 
    'corpulent', 'benighted', 'sententious', 'cabal', 'paraphernalia', 'vitiate', 'adulation', 'quaff', 'unassuming', 'libertine', 'maul', 'adage', 'expostulation', 'tawdry', 
    'trite', 'hireling', 'ensconce', 'egregious', 'cogent', 'incisive', 'errant', 'sedulous', 'incandescent', 'derelict', 'entomology', 'execrable', 'sluice', 'moot', 
    'evanescent', 'vat', 'dapper', 'asperity', 'flair', 'mote', 'circumspect', 'inimical', 'apropos', 'gruel', 'gentility', 'disapprobation', 'cameo', 'gouge', 'oratorio', 
    'inclement', 'scintilla', 'confluence', 'squalor', 'stricture', 'emblazon', 'augury', 'abut', 'banal', 'congeal', 'pilfer', 'malcontent', 'sublimate', 'eugenic', 
    'lineament', 'firebrand', 'fiasco', 'foolhardy', 'retrench', 'ulterior', 'equable', 'inured', 'invidious', 'unmitigated', 'concomitant', 'cozen', 'phlegmatic', 'dormer', 
    'pontifical', 'disport', 'apologist', 'abeyance', 'enclave', 'improvident', 'disquisition', 'categorical', 'placate', 'redolent', 'felicitous', 'gusty', 'natty', 
    'pacifist', 'buxom', 'heyday', 'herculean', 'burgeon', 'crone', 'prognosticate', 'lout', 'simper', 'iniquitous', 'rile', 'sentient', 'garish', 'readjustment', 
    'erstwhile', 'aquiline', 'bilious', 'vilify', 'nuance', 'gawk', 'refectory', 'palatial', 'mincing', 'trenchant', 'emboss', 'proletarian', 'careen', 'debacle', 
    'sycophant', 'crabbed', 'archetype', 'cryptic', 'penchant', 'bauble', 'mountebank', 'fawning', 'hummock', 'apotheosis', 'discretionary', 'pithy', 'comport', 
    'checkered', 'ambrosia', 'factious', 'disgorge', 'filch', 'wraith', 'demonstrable', 'pertinacious', 'emend', 'laggard', 'waffle', 'loquacious', 'venial', 'peon', 
    'effulgence', 'lode', 'fanfare', 'dilettante', 'pusillanimous', 'ingrained', 'quagmire', 'reprobation', 'mannered', 'squeamish', 'proclivity', 'miserly', 'vapid', 
    'mercurial', 'perspicuous', 'nonplus', 'enamor', 'hackneyed', 'spate', 'pedagogue', 'acme', 'masticate', 'sinecure', 'indite', 'emetic', 'temporize', 'unimpeachable', 
    'genesis', 'mordant', 'smattering', 'suavity', 'stentorian', 'junket', 'appurtenance', 'nostrum', 'immure', 'astringent', 'unfaltering', 'tutelage', 'testator', 'elysian', 
    'fulminate', 'fractious', 'pummel', 'manumit', 'unexceptionable', 'triumvirate', 'sybarite', 'jibe', 'magisterial', 'roseate', 'obloquy', 'hoodwink', 'striate', 'arrogate', 
    'rarefied', 'chary', 'credo', 'superannuated', 'impolitic', 'aspersion', 'abysmal', 'poignancy', 'stilted', 'effete', 'provender', 'endemic', 'jocund', 'procedural', 
    'rakish', 'skittish', 'peroration', 'nonentity', 'abstemious', 'viscid', 'doggerel', 'sleight', 'rubric', 'plenitude', 'rebus', 'wizened', 'whorl', 'fracas', 'iconoclast', 
    'saturnine', 'madrigal', 'discursive', 'zealot', 'moribund', 'modicum', 'connotation', 'adventitious', 'recondite', 'zephyr', 'countermand', 'captious', 'cognate', 
    'forebear', 'cadaverous', 'foist', 'dotage', 'nexus', 'choleric', 'garble', 'bucolic', 'denouement', 'animus', 'overweening', 'tyro', 'preen', 'largesse', 'retentive', 
    'unconscionable', 'badinage', 'insensate', 'sherbet', 'beatific', 'bemuse', 'microcosm', 'factitious', 'gestate', 'traduce', 'sextant', 'coiffure', 'malleable', 'rococo', 
    'fructify', 'nihilist', 'ellipsis', 'accolade', 'codicil', 'roil', 'grandiloquent', 'inconsequential', 'effervescence', 'stultify', 'tureen', 'pellucid', 'euphony', 
    'apocryphal', 'veracious', 'pendulous', 'exegesis', 'effluvium', 'apposite', 'viscous', 'misanthrope', 'vintner', 'halcyon', 'anthropomorphic', 'turgid', 'malaise', 
    'polemical', 'gadfly', 'atavism', 'contusion', 'parsimonious', 'dulcet', 'reprise', 'anodyne', 'bemused']

let text_area = document.querySelector('.content')
let start_bttn = document.querySelector('.start_bttn')
let wpm_area = document.querySelector('.w').children[0]
let accuracy_area = document.querySelector('.A').children[0]
let score_area = document.querySelector('.HS')
// console.log(word_list.length)
let st = 15
let ct,ft = 0,timer_id,letterarray,li,word_count=0,final_words = 0, correct_words = 0, wpm = 0, wrong_count = 0,final_letters = 0,accuracy = 0
const time_CD = document.querySelector('.T').children[0]
let size = 25
let placeholder_string
let word_index = []
let wrong_list = {}
let HS
let tvm=0,ptvm=1
let game_over
let mob_input = document.getElementById('hiMob')
let mf =0
let ipm
let bsflag = 0

HS = JSON.parse(localStorage.getItem('highscore'))
if(HS===null)
{
    HS=0
}

score_area.innerText = HS
console.log("hs:",HS)

function get_randstring(){
    let rn
    let rs = ''
    for(let i=0;i<size;i++){
        rn = Math.floor(Math.random()*word_list.length)
        rs+= (word_list[rn])+' '
    }
    console.log(rs)
    return rs
}

function refresh(){
    ct = st
    ft = 0
    game_over = 0
    time_CD.innerText = ct
    placeholder_string = get_randstring()
    letterarray = []
    text_area.innerText = ''
    li = 0
    word_index = []
    word_index.push(0)
    word_count = 0
    wrong_list = {}
    for(let i=0;i<placeholder_string.length;i++)
    {
        let lspan = document.createElement('span')
        letterarray.push(placeholder_string[i])
        lspan.innerText = placeholder_string[i]
        lspan.id = i
        text_area.appendChild(lspan)
        // console.log(lspan)
        if(placeholder_string[i]==' '){
            word_index.push(i)
        }
        console.log(lspan)
    }
    console.log(placeholder_string.length-1)
    word_index.push(placeholder_string.length-1)
    console.log(document.getElementById[String(placeholder_string.length-1)])
    console.log(word_index)
}
refresh()


function grade()
{
    let wwc = 0
    for(let i=li;i>=0;i--)
    {
        cl = document.getElementById(i)
        if(cl.classList.contains('xxx'))
        {
            console.log('xxx a wrong word found xxx at',i)
            wwc++
            while(i!=word_index[word_count])
            {
                i--
            }
            console.log("if - jump at",i)
            word_count--
            console.log("current letter",placeholder_string[i])
        }
        else if(i==word_index[word_count])
        {
            word_count--
            console.log("else - jump at",i)
        }
    }
    correct_words = final_words-wwc
    console.log(`correct words${correct_words}`)
}

function markaserror()
{

    console.log('mark_error')
    // console.log("li=",li,"wordindex[wordcount]=",word_index[word_count],"wordindex[wordcount]=",word_count)
    if(word_index[word_count]===0)
    {
        for(let i=li;i>=word_index[word_count];i--)
        {
            // console.log("li=",li,"wordi=",word_index[word_count]+1,"i=",i)
            let cl = document.getElementById(i);
            cl.style.textDecoration='underline';
            cl.style.textDecorationColor='red'
            // console.log('0-error')
        }
    }
    else
    {
        for(let i=li;i>=word_index[word_count]+1;i--)
        {
            // console.log("li=",li,"wordi=",word_index[word_count]+1,"i=",i)
            let cl = document.getElementById(i);
            cl.style.textDecoration='underline';
            cl.style.textDecorationColor='red'
            // console.log('n0-error')
        }
    }
}


function repaint()
{
    // console.log('working 3')
    // console.log(word_count)
    // console.log(word_index[word_count])
    // console.log("start letter-",placeholder_string[(word_index[word_count]+1)],"word_index[word_count]",word_index[word_count])
    // console.log("current string-",placeholder_string[li])
    if(word_index[word_count]===0)
    {
        for(let i=word_index[word_count+1];i>=word_index[word_count];i--)
        {
            let cl = document.getElementById(i);
            cl.style.textDecoration='';
        }
    }
    else
    {
        for(let i=word_index[word_count+1];i>=word_index[word_count]+1;i--)
        {
            let cl = document.getElementById(i);
            cl.style.textDecoration='';
        }
    }
}



function check_for_errors()
{
    let cf = 0
    console.log("li=",li,"wordi=",word_index[word_count],"wordi=",placeholder_string[word_count])
    if(word_index[word_count]==0)
    {
        for(let i=word_index[word_count+1];i>=word_index[word_count];i--)
        {
            // console.log("li=",li,"wordi=",word_index[word_count]+1,"i=",i)
            let cl = document.getElementById(i);
            console.log("cl",cl)
            if(cl.classList.contains('xxx'))
            {
                // console.log('there is no red underline')
                markaserror()
                cf=1
            }
        }
    }
    else
    {
        for(let i=word_index[word_count+1];i>=word_index[word_count]+1;i--)
        {
            // console.log("li=",li,"wordi=",word_index[word_count]+1,"i=",i)
            let cl = document.getElementById(i);
            console.log("cl",cl)
            if(cl.classList.contains('xxx'))
            {
                markaserror()
                cf=1
            }
        }
    }

    if(!cf)
    {
        // console.log('there is no red underline,repainting')
        repaint()
    }
}

// console.log(letterarray)

function match_keys(key){
    console.log('match keys executed')
    let cl = document.getElementById(li);
    if(key==placeholder_string[li])
    {
        console.log(cl)
        cl.style.color='green';
    }
    else
    {
        console.log(cl)
        cl.style.color='red';
        cl.classList.add('xxx')
        wrong_count++
    }
}

function wordcounter(){
    word_count++
    console.log(word_count)
    if(word_count==1)
    {
        console.log("first word")
    }
    else if(word_count==size)
    {
        game_over=1
        clearInterval(timer_id)
        final_words = word_count
        final_letters = li
        console.log("last word")
        grade()
        console.log('(st-ct)',st-ct)
        wpm = Math.round(correct_words/((st-ct)/60))
        accuracy = Math.round(((final_letters-wrong_count)/final_letters)*100)
        wpm_area.innerText = wpm
        accuracy_area.innerText = accuracy+"%"
        if(wpm>parseInt(HS))
        {
            HS = localStorage.setItem('highscore',wpm)
        }
    }
    else
    {
        console.log(word_count)
    }
}

function remove_keys()
{
    let cl = document.getElementById(li);
    console.log('first check in remove keys',cl.classList.contains('xxx'))
    if(cl.classList.contains('xxx'))
    {
        cl.removeAttribute('class','xxx')
    }
    if(word_index[word_count]-1==li)
    {
     word_count--
    }
    console.log('second check in remove keys',cl.classList.contains('xxx'))
    // console.log(cl)
    cl.style.color='';
}

function update_time(){
    ct--
    time_CD.innerText = ct

    if(ct==0)
    {
        clearInterval(timer_id)
        final_words = word_count
        final_letters = li
        if(li==word_index[word_count])
        {
            console.log("final letter position-",li)
        }
        else
        {
            console.log("final letter position-",li)
            while(li!=word_index[word_count])
            {
                li--
            }
            word_count --
            console.log("decremented final letter position-",li)
            console.log(li)
        }

        grade()
        wpm = correct_words/(st/60)
        accuracy = Math.round(((final_letters-wrong_count)/final_letters)*100)
        wpm_area.innerText = wpm
        accuracy_area.innerText = accuracy+"%"
        if(wpm>parseInt(HS))
        {
            HS = localStorage.setItem('highscore',wpm)
        }
    }
}

function blink(){
    document.querySelectorAll('.crnt').forEach(element => {
        element.classList.remove('crnt');
    });
    let cl = document.getElementById(li)
    cl.classList.add('crnt')
}

screen_check()
function word_check()
{
    if(li===word_index[word_count]&&li!=0)
    {
        console.log('space check')
        if(ipm===' ')
        {
            console.log('c1')
            match_keys(ipm)
            console.log('c2')
            // console.log('f1')
            check_for_errors()
            li++
        }
    }
    else
    {
        console.log('word check')
        match_keys(ipm)
        console.log('f1')
        check_for_errors()
        li++
    }
}

function word_check_else()
{
    li--
    remove_keys()
    check_for_errors()
    // console.log(li)
}


function necessary_updates()
{
    if(!ft)
    {
        timer_id = setInterval(update_time,1000)
        ft=1;
    }
    
    if(word_index[word_count+1]==li || li==size)
    {
        wordcounter()
    }
    blink()
}

  if(mf!=1)
  {
    console.log('desktop mode')
        window.addEventListener('keydown',(e)=>{
        ipm = e.key
        if(ct>0&&game_over==0)
        {
            if(ipm!='Backspace')
            { 
                word_check()
            }
            else if(li>0){
                word_check_else() 
            }
            necessary_updates()
        }
    })
 } 

    function reset_timer(time_bt){
        st = time_bt
        ft = 0
        refresh()
        if(timer_id){
            clearInterval(timer_id)
        }
    }

    function reset_WC(wc){
        size = wc
        refresh()
        if(timer_id){
            clearInterval(timer_id)
        }
    }
 
    function mob_handle()
    {
     if(ct>0&&game_over==0)
     {
        if(bsflag!=1)
        { 
           word_check()
        }
        else if(li>0){
         console.log(bsflag,li)
         word_check_else()
         bsflag = 0
         console.log(bsflag,li)
        }

        necessary_updates()
     }
    }

    mob_input.addEventListener('keydown',(e)=>
    {
        if(e.key=='Backspace')
        {
            bsflag = 1 
            mob_handle()
        } 
    })
    mob_input.addEventListener('input',(e)=>{
        console.log('typed')
        ipm = e.target.value.slice(-1)
        mob_handle()
        e.target.value = ''
        console.log(e.target.value)
        // document.querySelector('.tester').innerText = ipm
    })

    function screen_check()
    {
        if(window.matchMedia('(max-width: 480px)').matches && mf==0)
        {
                text_area.addEventListener('click',()=>{
                mob_input.focus()
                console.log('keybord applied')    
        })
        mf = 1
    }
    }
// word goes here haha