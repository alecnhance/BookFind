// ─── Shared / top-level questions ────────────────────────────────────────────

export const Q_FORMAT = {
  id: 'format',
  question: 'What kind of book are you in the mood for?',
  options: [
    { label: 'Fiction — I want a story to get lost in', value: 'fiction' },
    { label: 'Non-Fiction — I want to learn or hear a true story', value: 'nonfiction' },
  ],
}

// ─── Fiction: Q2 ─────────────────────────────────────────────────────────────

export const Q_F_GENRE = {
  id: 'genre',
  question: 'Which genre pulls you in most?',
  options: [
    { label: 'Fantasy — magic, other worlds, the impossible made real', value: 'fantasy' },
    { label: 'Science Fiction — the future, technology, and the unknown', value: 'scifi' },
    { label: 'Thriller — danger, tension, someone being hunted', value: 'thriller' },
    { label: 'Mystery — a puzzle, a crime, an answer to uncover', value: 'mystery' },
    { label: 'Historical Fiction — the past brought vividly to life', value: 'historical' },
    { label: 'Literary Fiction — character-driven, beautifully written', value: 'literary' },
  ],
}

// ─── Fiction: Q3 — sub-genre per genre ───────────────────────────────────────

export const F_SUBGENRE_Q = {
  fantasy: {
    id: 'subgenre',
    question: 'What flavor of fantasy speaks to you?',
    options: [
      { label: 'Epic Fantasy — vast worlds, ancient forces, world-altering stakes', value: 'epic' },
      { label: 'Grimdark — brutal, morally grey, no guarantees of survival', value: 'grimdark' },
      { label: 'Cozy Fantasy — low stakes, warmth, magic in everyday life', value: 'cozy' },
      { label: 'Portal Fantasy — an ordinary person pulled into another world', value: 'portal' },
      { label: 'Magical Realism — myth and magic woven into the real world', value: 'magicalrealism' },
    ],
  },
  scifi: {
    id: 'subgenre',
    question: 'What kind of science fiction draws you in?',
    options: [
      { label: 'Space Opera — galactic empires, wars among the stars', value: 'spaceopera' },
      { label: 'Hard Sci-Fi — technically rigorous, idea-driven, scientifically grounded', value: 'hardscifi' },
      { label: 'Cyberpunk — neon-lit tech dystopias, hackers, megacorporations', value: 'cyberpunk' },
      { label: 'Dystopian — broken societies and those who dare to resist', value: 'dystopian' },
      { label: 'First Contact — humanity meets something completely alien', value: 'firstcontact' },
    ],
  },
  thriller: {
    id: 'subgenre',
    question: 'What kind of thriller gets your pulse up?',
    options: [
      { label: 'Psychological — mind games, paranoia, unreliable narrators', value: 'psychological' },
      { label: 'Spy & Espionage — tradecraft, double agents, Cold War-style stakes', value: 'spy' },
      { label: 'Legal & Political — courtrooms, corruption, power at the highest levels', value: 'legal' },
      { label: 'Domestic — danger hiding inside ordinary life and relationships', value: 'domestic' },
      { label: 'Crime — heists, con artists, and elaborate plans', value: 'crime' },
    ],
  },
  mystery: {
    id: 'subgenre',
    question: 'What kind of mystery do you want to solve?',
    options: [
      { label: 'Cozy Mystery — charming amateur detectives, warm settings', value: 'cozymystery' },
      { label: 'Hardboiled / Noir — gritty detectives, cynical voice, dark streets', value: 'hardboiled' },
      { label: 'Police Procedural — inside the investigation, step by step', value: 'procedural' },
      { label: 'Historical Mystery — crime set in a richly drawn past', value: 'historicalmystery' },
      { label: 'Locked-Room / Puzzle — a mystery you can try to solve yourself', value: 'lockedroom' },
    ],
  },
  historical: {
    id: 'subgenre',
    question: 'Which era calls to you?',
    options: [
      { label: 'Ancient World — Rome, Greece, Egypt, Mesopotamia', value: 'ancient' },
      { label: 'Medieval — knights, kingdoms, the Church, the Middle Ages', value: 'medieval' },
      { label: 'Victorian Era — 19th century, industry, empire, shadow', value: 'victorian' },
      { label: 'World War II / 20th Century — the wars that shaped today', value: 'wwii' },
      { label: 'American History — frontier to civil rights', value: 'american' },
      { label: 'Asian History — feudal Japan, Chinese dynasties, and beyond', value: 'asian' },
    ],
  },
  literary: {
    id: 'subgenre',
    question: 'Which style of literary fiction speaks to you?',
    options: [
      { label: 'Family Saga — generations, secrets, the passage of time', value: 'familysaga' },
      { label: 'Immigration & Diaspora — identity across cultures and borders', value: 'immigration' },
      { label: 'Southern Gothic — dark, atmospheric, decay and the American South', value: 'southerngothic' },
      { label: 'Contemporary Literary — modern life rendered with emotional depth', value: 'contemporary' },
      { label: 'Experimental — unconventional structure, form as meaning', value: 'experimental' },
    ],
  },
}

// ─── Fiction: Q4 — theme per sub-genre ───────────────────────────────────────

export const F_THEME_Q = {
  // Fantasy
  epic: {
    id: 'theme',
    question: 'What element has to be at the heart of it?',
    options: [
      { label: 'Political scheming — betrayal, alliances, and power', value: 'political' },
      { label: 'Grand military campaigns — war, strategy, brotherhood', value: 'military' },
      { label: 'A chosen hero — prophecy, destiny, and who they become', value: 'chosenone' },
      { label: 'Found family — unlikely allies bonded by circumstance', value: 'foundfamily' },
    ],
  },
  grimdark: {
    id: 'theme',
    question: 'What draws you to the dark?',
    options: [
      { label: 'A protagonist doing terrible things for necessary reasons', value: 'antihero' },
      { label: 'A world so broken the heroes might actually lose', value: 'hopeless' },
      { label: 'Magic or power that demands a terrible price', value: 'darkcost' },
      { label: 'Revenge as the engine driving everything forward', value: 'revenge' },
    ],
  },
  cozy: {
    id: 'theme',
    question: 'What kind of cozy magic are you after?',
    options: [
      { label: 'A magical shop, café, or bakery at the center of it', value: 'magicshop' },
      { label: 'A witch or magic-user living their best life', value: 'witchcottage' },
      { label: 'A charming magic school or guild — warm, not dark', value: 'academy' },
      { label: 'A cozy mystery with a magical twist', value: 'cozymysterytwist' },
    ],
  },
  portal: {
    id: 'theme',
    question: 'What pulls you about the portal story?',
    options: [
      { label: 'The "fish out of water" — watching someone adjust to the impossible', value: 'fishoutofwater' },
      { label: 'They were brought there for a reason — destiny or design', value: 'chosen' },
      { label: 'Just trying to survive and get home', value: 'survival' },
    ],
  },
  magicalrealism: {
    id: 'theme',
    question: 'What do you want the magic to illuminate?',
    options: [
      { label: 'Family and the inheritance of secrets', value: 'family' },
      { label: 'Grief, memory, and things that refuse to stay gone', value: 'grief' },
      { label: 'Latin American tradition — in the spirit of García Márquez', value: 'latin' },
      { label: 'History rewritten with impossible elements', value: 'historyrewritten' },
    ],
  },
  // Sci-Fi
  spaceopera: {
    id: 'theme',
    question: "What's the heart of your space epic?",
    options: [
      { label: 'Galactic empires, rebellion, and political intrigue', value: 'empire' },
      { label: 'Exploring the unknown — wonder and first contact', value: 'exploration' },
      { label: 'Space military — battles, tactics, and camaraderie', value: 'militaryspace' },
      { label: 'A ragtag crew surviving against impossible odds', value: 'fugitivecrew' },
    ],
  },
  hardscifi: {
    id: 'theme',
    question: 'Which big idea are you most drawn to?',
    options: [
      { label: 'Artificial intelligence and what consciousness really means', value: 'ai' },
      { label: 'Colonizing other worlds — the weight and cost of it', value: 'colonization' },
      { label: 'The near future — recognizable but radically transformed', value: 'nearfuture' },
      { label: 'Physics, time, or the fundamental nature of reality', value: 'physics' },
    ],
  },
  cyberpunk: {
    id: 'theme',
    question: "What's the cyberpunk hook for you?",
    options: [
      { label: 'Megacorporations controlling every corner of society', value: 'corporation' },
      { label: 'Hackers and digital rebellion against the system', value: 'hacker' },
      { label: 'What it means to be human when bodies are optional', value: 'posthuman' },
      { label: 'Cyberpunk noir — a detective in a neon dystopia', value: 'cybernoir' },
    ],
  },
  dystopian: {
    id: 'theme',
    question: 'What kind of broken world?',
    options: [
      { label: 'A surveillance state — every move watched, every thought monitored', value: 'surveillance' },
      { label: 'Post-apocalyptic — rebuilding after the collapse', value: 'postapocalyptic' },
      { label: 'A rebellion rising up from inside the system', value: 'rebellion' },
      { label: 'Dystopia as satire — the horror of recognizing our own world', value: 'satire' },
    ],
  },
  firstcontact: {
    id: 'theme',
    question: 'What kind of encounter with the alien?',
    options: [
      { label: 'Minds so different from ours they can barely be understood', value: 'alienminds' },
      { label: 'Invasion — the alien as existential threat', value: 'invasion' },
      { label: 'Peaceful contact — the challenge of communication and coexistence', value: 'peacefulcontact' },
    ],
  },
  // Thriller
  psychological: {
    id: 'theme',
    question: 'What kind of psychological tension?',
    options: [
      { label: 'An unreliable narrator — who is telling the truth?', value: 'unreliablenarrator' },
      { label: "Obsession — someone or something that won't let go", value: 'obsession' },
      { label: 'Identity — who are you really, and who wants you gone?', value: 'identity' },
      { label: 'Isolation — trapped somewhere with no way out', value: 'isolation' },
    ],
  },
  spy: {
    id: 'theme',
    question: "What's the espionage flavor?",
    options: [
      { label: 'Cold War era — Berlin, double agents, ideological stakes', value: 'coldwar' },
      { label: 'Modern intelligence — cyber warfare, surveillance, moral ambiguity', value: 'modernspy' },
      { label: 'A spy gone rogue, now hunted by their own side', value: 'rogueagent' },
      { label: 'An ordinary person pulled suddenly into the game', value: 'amateurspy' },
    ],
  },
  legal: {
    id: 'theme',
    question: "What's the legal or political angle?",
    options: [
      { label: 'The courtroom at the center — a trial that could change everything', value: 'courtroom' },
      { label: 'A conspiracy reaching the highest levels of power', value: 'conspiracy' },
      { label: 'Corruption rotting a system from the inside out', value: 'corruption' },
    ],
  },
  domestic: {
    id: 'theme',
    question: 'Where is the danger hiding?',
    options: [
      { label: 'Gaslighting — is she imagining it, or is someone making her think so?', value: 'gaslighting' },
      { label: 'Within the family — the people closest to you', value: 'family' },
      { label: 'In the neighborhood — the perfect suburb with a dark secret', value: 'neighborhood' },
    ],
  },
  crime: {
    id: 'theme',
    question: 'What kind of criminal plan?',
    options: [
      { label: 'The elaborate heist — months of planning, one shot at execution', value: 'heist' },
      { label: 'Con artists and long cons — identity, trust, and the long game', value: 'conartist' },
      { label: 'Organized crime — loyalty, hierarchy, and the cost of belonging', value: 'organizedcrime' },
    ],
  },
  // Mystery
  cozymystery: {
    id: 'theme',
    question: "What's the cozy setup?",
    options: [
      { label: 'An amateur sleuth — a baker, librarian, or village eccentric', value: 'amateurdetective' },
      { label: 'A charming setting — an English village, a bookshop, a vineyard', value: 'charmingsetting' },
      { label: 'A beloved animal sidekick who helps crack the case', value: 'petsidekick' },
    ],
  },
  hardboiled: {
    id: 'theme',
    question: 'What flavor of noir?',
    options: [
      { label: 'Classic — LA or New York, rain-slicked streets, a world-weary detective', value: 'classicnoir' },
      { label: 'Modern hardboiled — updated setting, diverse voice', value: 'modernnoir' },
      { label: 'A female detective subverting the classic genre', value: 'femaleled' },
    ],
  },
  procedural: {
    id: 'theme',
    question: 'What kind of investigation?',
    options: [
      { label: 'Forensic — the science of crime, evidence, and reconstruction', value: 'forensic' },
      { label: 'Hunting a serial killer — profiling and the long chase', value: 'serialkiller' },
      { label: 'A cold case reopened — old secrets, fresh eyes', value: 'coldcase' },
    ],
  },
  historicalmystery: {
    id: 'theme',
    question: 'Which historical setting?',
    options: [
      { label: 'Victorian London — gaslit streets, class, and fog', value: 'victorianlondon' },
      { label: 'Ancient world — a detective in Rome, Egypt, or Greece', value: 'ancientworld' },
      { label: 'Medieval — a monk, a knight, or a lord with a secret', value: 'medievalmystery' },
      { label: 'Wartime — mystery and murder in WWI or WWII', value: 'wartime' },
    ],
  },
  lockedroom: {
    id: 'theme',
    question: 'How do you like your puzzle?',
    options: [
      { label: 'Classic — a murder, a closed room, and a brilliant eccentric', value: 'classicpuzzle' },
      { label: 'Modern — the locked-room conceit in a contemporary setting', value: 'modernpuzzle' },
    ],
  },
  // Historical Fiction (eras as subgenre → specific setting as theme)
  ancient: {
    id: 'theme',
    question: 'Which ancient world?',
    options: [
      { label: 'The Roman Empire — legions, senators, ambition, and betrayal', value: 'rome' },
      { label: 'Ancient Egypt — pharaohs, priests, and the divine Nile', value: 'egypt' },
      { label: 'Ancient Greece — democracy, philosophy, and war', value: 'greece' },
      { label: 'Persia, Babylon, or Mesopotamia — the cradle of civilization', value: 'mesopotamia' },
    ],
  },
  medieval: {
    id: 'theme',
    question: 'What aspect of the medieval world?',
    options: [
      { label: 'Knights, crusades, and chivalric honor', value: 'knights' },
      { label: 'Royal courts — succession, marriages, and political survival', value: 'royalty' },
      { label: 'The Church — faith, inquisition, and the power of God on earth', value: 'church' },
      { label: 'Everyday life — the world outside the castle walls', value: 'commonfolk' },
    ],
  },
  victorian: {
    id: 'theme',
    question: 'Which side of the Victorian era?',
    options: [
      { label: 'The British Empire at its height — colonialism and consequence', value: 'empire' },
      { label: 'Class, poverty, and gender — Dickensian London', value: 'classgender' },
      { label: 'Science, invention, and the birth of modernity', value: 'scienceprogress' },
      { label: 'The dark Victorian underbelly — crime, vice, and the fog', value: 'darkunderbelly' },
    ],
  },
  wwii: {
    id: 'theme',
    question: 'Which angle on the war?',
    options: [
      { label: 'Resistance fighters and life in occupied countries', value: 'resistance' },
      { label: 'The front lines — soldiers, strategy, and survival', value: 'frontlines' },
      { label: 'The home front — women, families, and waiting', value: 'homefront' },
      { label: 'The aftermath — rebuilding, justice, and memory', value: 'aftermath' },
    ],
  },
  american: {
    id: 'theme',
    question: 'Which chapter of American history?',
    options: [
      { label: 'The frontier — westward expansion, conflict, and survival', value: 'frontier' },
      { label: 'The Civil War and Reconstruction — the country tearing itself apart', value: 'civilwar' },
      { label: 'The Great Migration and the Harlem Renaissance', value: 'greatmigration' },
      { label: 'The Civil Rights movement — courage against a broken system', value: 'civilrights' },
    ],
  },
  asian: {
    id: 'theme',
    question: 'Which Asian historical world?',
    options: [
      { label: 'Feudal Japan — samurai, shogunate, and clan warfare', value: 'feudaljapan' },
      { label: "China's dynasties — emperors, court intrigue, and war", value: 'china' },
      { label: 'The Silk Road — trade, conquest, and the meeting of worlds', value: 'silkroad' },
    ],
  },
  // Literary Fiction
  familysaga: {
    id: 'theme',
    question: "What's at the core of the family story?",
    options: [
      { label: 'Secrets passed down through generations', value: 'secrets' },
      { label: "A family's journey across countries and time", value: 'migration' },
      { label: 'The weight of inherited trauma', value: 'trauma' },
    ],
  },
  immigration: {
    id: 'theme',
    question: 'Which immigrant experience?',
    options: [
      { label: 'First-generation — building a life from nothing in a new country', value: 'firstgen' },
      { label: 'Second-generation — caught between two worlds', value: 'secondgen' },
      { label: "Returning to the homeland — what's still there, what's gone", value: 'return' },
    ],
  },
  southerngothic: {
    id: 'theme',
    question: "What's the Gothic element?",
    options: [
      { label: 'Decay and the crumbling of old Southern families', value: 'decay' },
      { label: 'The supernatural bleeding into the heat and the dark', value: 'supernatural' },
      { label: 'Race, history, and the sins of the past refusing to stay buried', value: 'race' },
    ],
  },
  contemporary: {
    id: 'theme',
    question: "What's the emotional core?",
    options: [
      { label: "Grief and loss — how we carry what's gone", value: 'grief' },
      { label: 'Love, marriage, friendship — the full texture of a life', value: 'relationships' },
      { label: 'Coming of age — who you are becoming', value: 'comingofage' },
      { label: 'Addiction and the body — the struggle to reclaim yourself', value: 'addiction' },
    ],
  },
  experimental: {
    id: 'theme',
    question: 'What kind of formal experiment?',
    options: [
      { label: 'Fragmented — footnotes, found documents, lists as narrative', value: 'fragmented' },
      { label: 'Non-linear time — memory, gaps, and reconstruction', value: 'nonlinear' },
      { label: 'Unusual narration — second person, collective voice, or deeply unreliable', value: 'unusualnarrator' },
    ],
  },
}

// ─── Fiction: Q5 — length (shared across all fiction paths) ──────────────────

export const Q_F_LENGTH = {
  id: 'length',
  question: 'How long should the journey be?',
  options: [
    { label: 'Standalone — complete in one book, no commitment required', value: 'standalone' },
    { label: 'Duology or trilogy — enough to sink in, not endless', value: 'trilogy' },
    { label: 'A long series — I want to live there for a while', value: 'longseries' },
  ],
}

// ─── Fiction: Q6-Q15 — universal + lightly-branched follow-up questions ──────

export const Q_F_CAST = {
  id: 'cast',
  question: 'How many characters do you want to follow?',
  options: [
    { label: 'One protagonist — I want to live deep inside a single mind', value: 'solo' },
    { label: 'A small group — three to five people whose fates intertwine', value: 'smallgroup' },
    { label: 'A massive ensemble — I want many perspectives and storylines', value: 'ensemble' },
  ],
}

export const Q_F_TONE = {
  id: 'tone',
  question: 'What overall tone do you want to live in?',
  options: [
    { label: 'Dark and unforgiving — I want it to feel real and hard', value: 'dark' },
    { label: 'Balanced — light and shadow in equal measure', value: 'balanced' },
    { label: 'Hopeful and triumphant — I want something to root for', value: 'hopeful' },
    { label: 'Sharp and funny — I want wit and irreverence', value: 'comedic' },
  ],
}

export const Q_F_PACING = {
  id: 'pacing',
  question: 'How do you want the pace to feel?',
  options: [
    { label: 'Breakneck — I never want it to slow down', value: 'fast' },
    { label: 'Methodical — let it breathe, I want to feel immersed', value: 'methodical' },
    { label: 'Slow burn — patient setup that earns its payoff', value: 'slowburn' },
  ],
}

export const Q_F_PROTAGONIST_TYPE = {
  id: 'protagonisttype',
  question: 'What kind of protagonist do you want at the center?',
  options: [
    { label: 'The reluctant hero — an ordinary person thrust into extraordinary circumstances', value: 'reluctant' },
    { label: 'The skilled expert — a professional at the absolute top of their craft', value: 'expert' },
    { label: 'The morally grey antihero — someone I should want to root against', value: 'antihero' },
    { label: "The outsider — an outcast who doesn't belong in the world they inhabit", value: 'outsider' },
  ],
}

export const Q_F_WORLD_BUILDING = {
  id: 'worldbuilding',
  question: 'How deep do you want the world-building to go?',
  options: [
    { label: 'Minimal — character and story first, lore is secondary', value: 'minimal' },
    { label: 'Moderate — enough to feel fully realized without overwhelming me', value: 'moderate' },
    { label: 'Deep and immersive — I want maps, histories, languages, and systems', value: 'deep' },
  ],
}

export const Q_F_PROSE_STYLE = {
  id: 'prosestyle',
  question: 'What kind of prose do you want to listen to?',
  options: [
    { label: 'Propulsive and accessible — story first, style second', value: 'propulsive' },
    { label: 'Literary and beautiful — the writing itself is part of the pleasure', value: 'literary' },
    { label: 'Gritty and visceral — raw, unvarnished, real', value: 'gritty' },
    { label: 'Witty and sharp — I want intelligence and humor in the voice', value: 'witty' },
  ],
}

export const Q_F_DISCOVERY = {
  id: 'fdiscovery',
  question: 'What kind of pick are you after?',
  options: [
    { label: 'A hidden gem — something most people have never heard of', value: 'hiddengem' },
    { label: 'Award-winning or critically acclaimed', value: 'acclaimed' },
    { label: 'A recent bestseller from the last few years', value: 'recent' },
    { label: 'A timeless classic', value: 'classic' },
  ],
}

export const Q_F_PUB_ERA = {
  id: 'pubera',
  question: 'How recently should it have been published?',
  options: [
    { label: 'Very recent — published in the last 5 years', value: 'veryrecent' },
    { label: 'Established — great books from the last decade or two', value: 'established' },
    { label: "Doesn't matter — could be from any era", value: 'anyera' },
  ],
}

export const Q_F_READER_EXP = {
  id: 'freaderexp',
  question: 'Where do you stand with this kind of book?',
  options: [
    { label: "I'm fairly new to this — point me toward the best entry points", value: 'newcomer' },
    { label: "I've read all the obvious classics — I want something I've never heard of", value: 'experienced' },
  ],
}

// Emotional impact — branches by genre
export const F_EMOTIONAL_Q = {
  fantasy: {
    id: 'emotional',
    question: 'What do you want to feel when you finish it?',
    options: [
      { label: 'Swept away and amazed — like the world got bigger', value: 'amazed' },
      { label: 'Devastated — like I just lost something real', value: 'devastated' },
      { label: 'Triumphant — like I fought through it alongside the characters', value: 'triumphant' },
      { label: 'Disturbed — like something shifted in how I see the world', value: 'disturbed' },
    ],
  },
  scifi: {
    id: 'emotional',
    question: 'What do you want to feel when you finish it?',
    options: [
      { label: 'Swept away and amazed — like the universe got bigger', value: 'amazed' },
      { label: 'Intellectually stimulated — a great idea fully explored', value: 'intellectual' },
      { label: 'Disturbed — like something shifted in how I see the future', value: 'disturbed' },
      { label: 'Unsettled — like the future is closer than I thought', value: 'unsettled' },
    ],
  },
  thriller: {
    id: 'emotional',
    question: 'What do you want to feel when you finish it?',
    options: [
      { label: 'Terrified — the fear should feel very real', value: 'terrified' },
      { label: 'Surprised — I want a twist that genuinely shocks me', value: 'surprised' },
      { label: 'Unsettled — I should feel unsafe for a little while after', value: 'unsettled' },
      { label: 'Intellectually satisfied — a puzzle perfectly resolved', value: 'intellectual' },
    ],
  },
  mystery: {
    id: 'emotional',
    question: 'What do you want to feel when you finish it?',
    options: [
      { label: 'Satisfied — everything clicks into place perfectly', value: 'intellectual' },
      { label: 'Surprised — a twist I never saw coming', value: 'surprised' },
      { label: 'Unsettled — the resolution leaves something dark behind', value: 'unsettled' },
      { label: 'Delighted — the whole thing was a pleasure from start to finish', value: 'amazed' },
    ],
  },
  historical: {
    id: 'emotional',
    question: 'What do you want to feel when you finish it?',
    options: [
      { label: 'Moved — something truly human was captured', value: 'moved' },
      { label: 'Educated — I want to know more about the world or a period', value: 'educated' },
      { label: 'Immersed — I want to forget I am living in my own time', value: 'immersed' },
      { label: 'Disturbed — history should make me uncomfortable', value: 'disturbed' },
    ],
  },
  literary: {
    id: 'emotional',
    question: 'What do you want to feel when you finish it?',
    options: [
      { label: 'Moved — like something truly human was put into words', value: 'moved' },
      { label: 'Challenged — I want something that makes me question things', value: 'challenged' },
      { label: 'Devastated — I want it to cost me something', value: 'devastated' },
      { label: 'Transformed — I should see the world differently after', value: 'disturbed' },
    ],
  },
}

// ─── Non-fiction: Q2 ─────────────────────────────────────────────────────────

export const Q_NF_SUBJECT = {
  id: 'subject',
  question: 'What subject are you drawn to?',
  options: [
    { label: 'History — real events, real people, what actually happened', value: 'history' },
    { label: 'Science & Nature — how the world actually works', value: 'science' },
    { label: 'Business, psychology, or self-improvement', value: 'business' },
    { label: 'True Crime & investigative journalism', value: 'truecrime' },
  ],
}

// ─── Non-fiction: Q3 — subtopic per subject ──────────────────────────────────

export const NF_SUBTOPIC_Q = {
  history: {
    id: 'subtopic',
    question: 'What slice of history?',
    options: [
      { label: 'Military history — wars, strategy, and the men who fought them', value: 'military' },
      { label: 'Ancient civilizations — the world before the modern age', value: 'ancient' },
      { label: 'Biography — one extraordinary life, told in full', value: 'biography' },
      { label: 'American history — from founding to now', value: 'american' },
      { label: 'European history — empire, revolution, and war', value: 'european' },
      { label: 'World / global history — civilizations beyond the West', value: 'worldhistory' },
    ],
  },
  science: {
    id: 'subtopic',
    question: 'Which branch of science?',
    options: [
      { label: 'Physics, cosmology & space — the universe at the largest scale', value: 'cosmology' },
      { label: 'Biology, evolution & genetics — the story of life', value: 'biology' },
      { label: 'Neuroscience & psychology — the mind and why we do what we do', value: 'neuroscience' },
      { label: 'Ecology, climate & the natural world', value: 'environment' },
      { label: 'Technology, AI & the future being built now', value: 'technology' },
    ],
  },
  business: {
    id: 'subtopic',
    question: 'What area of business or self-improvement?',
    options: [
      { label: 'Startups & entrepreneurship — building something from nothing', value: 'startup' },
      { label: 'Leadership & management — how to run things and lead people', value: 'leadership' },
      { label: 'Economics & finance — how money and markets work', value: 'economics' },
      { label: 'Productivity & habits — how to do more of what matters', value: 'productivity' },
      { label: 'Psychology of influence & behavior — why people do what they do', value: 'psychologyofpersuasion' },
    ],
  },
  truecrime: {
    id: 'subtopic',
    question: 'What kind of true crime?',
    options: [
      { label: 'Serial killers and criminal profiling', value: 'serialkiller' },
      { label: 'Investigative journalism — exposing institutional corruption', value: 'investigative' },
      { label: 'Cold cases and unsolved mysteries', value: 'coldcase' },
      { label: 'Corporate crime, fraud, and financial scandal', value: 'corporatefraud' },
    ],
  },
}

// ─── Non-fiction: Q4 — style (shared) ────────────────────────────────────────

export const Q_NF_STYLE = {
  id: 'nfstyle',
  question: 'How do you like the information presented?',
  options: [
    { label: 'Narrative — tell me a story built around the facts', value: 'narrative' },
    { label: 'Deep dive — systematic, comprehensive, rigorously researched', value: 'analytical' },
    { label: 'Personal — memoir voice, first-hand experience', value: 'memoir' },
  ],
}

// ─── Non-fiction: Q5-Q10 — follow-up questions ───────────────────────────────

export const Q_NF_DEPTH = {
  id: 'nfdepth',
  question: 'How challenging do you want the material?',
  options: [
    { label: 'Accessible — clear, engaging, written for a curious general reader', value: 'popular' },
    { label: 'Demanding — I want to work for it and come out genuinely knowing more', value: 'deep' },
  ],
}

export const Q_NF_AUTHOR_TYPE = {
  id: 'nfauthortype',
  question: 'Who do you want to hear from?',
  options: [
    { label: 'A journalist or investigator who dug deep and found the truth', value: 'journalist' },
    { label: 'An academic or recognized expert in their field', value: 'academic' },
    { label: 'A practitioner or insider — someone who lived it', value: 'practitioner' },
    { label: 'A public intellectual or cultural commentator with a big argument', value: 'intellectual' },
  ],
}

export const Q_NF_ERA = {
  id: 'nfera',
  question: 'When should it have been published?',
  options: [
    { label: 'Very recent — last 5 years, covers the world as it is now', value: 'veryrecent' },
    { label: 'Established — great books from the last decade or two', value: 'established' },
    { label: 'A classic — foundational or canonical in its field', value: 'classic' },
  ],
}

export const Q_NF_SCOPE = {
  id: 'nfscope',
  question: 'What geographic or cultural scope do you want?',
  options: [
    { label: 'American or Western-centric', value: 'western' },
    { label: 'Global — a world perspective beyond the West', value: 'global' },
    { label: 'A specific non-Western culture or region', value: 'nonwestern' },
    { label: "Doesn't matter — scope follows the subject", value: 'any' },
  ],
}

export const Q_NF_READER_EXP = {
  id: 'nfreaderexp',
  question: 'How much do you already know about this subject?',
  options: [
    { label: "Not much — I want a great introduction", value: 'newcomer' },
    { label: 'A fair amount — I want something deeper than the basics', value: 'intermediate' },
    { label: "I know the canonical texts — I want something obscure", value: 'expert' },
  ],
}

export const Q_NF_DISCOVERY = {
  id: 'nfdiscovery',
  question: 'What kind of pick are you after?',
  options: [
    { label: 'Award-winning or critically acclaimed', value: 'acclaimed' },
    { label: 'A cult classic or underappreciated gem', value: 'cultclassic' },
    { label: 'A current bestseller', value: 'bestseller' },
    { label: 'An obscure deep cut most people have never heard of', value: 'obscure' },
  ],
}

// ─── getQuestions — drip-feed gating ─────────────────────────────────────────

export function getQuestions(answers) {
  const qs = [Q_FORMAT]
  if (!answers.format) return qs

  if (answers.format === 'nonfiction') {
    qs.push(Q_NF_SUBJECT)
    if (!answers.subject) return qs
    qs.push(NF_SUBTOPIC_Q[answers.subject])
    if (!answers.subtopic) return qs
    qs.push(Q_NF_STYLE)
    if (!answers.nfstyle) return qs
    qs.push(Q_NF_DEPTH)
    if (!answers.nfdepth) return qs
    qs.push(Q_NF_AUTHOR_TYPE)
    if (!answers.nfauthortype) return qs
    qs.push(Q_NF_ERA)
    if (!answers.nfera) return qs
    qs.push(Q_NF_SCOPE)
    if (!answers.nfscope) return qs
    qs.push(Q_NF_READER_EXP)
    if (!answers.nfreaderexp) return qs
    qs.push(Q_NF_DISCOVERY)
    return qs  // 10 total
  }

  // Fiction
  qs.push(Q_F_GENRE)
  if (!answers.genre) return qs
  qs.push(F_SUBGENRE_Q[answers.genre])
  if (!answers.subgenre) return qs
  qs.push(F_THEME_Q[answers.subgenre])
  if (!answers.theme) return qs
  qs.push(Q_F_CAST)
  if (!answers.cast) return qs
  qs.push(Q_F_TONE)
  if (!answers.tone) return qs
  qs.push(Q_F_PACING)
  if (!answers.pacing) return qs
  qs.push(Q_F_PROTAGONIST_TYPE)
  if (!answers.protagonisttype) return qs
  if (['fantasy', 'scifi'].includes(answers.genre)) {
    qs.push(Q_F_WORLD_BUILDING)
    if (!answers.worldbuilding) return qs
  }
  qs.push(Q_F_PROSE_STYLE)
  if (!answers.prosestyle) return qs
  qs.push(Q_F_DISCOVERY)
  if (!answers.fdiscovery) return qs
  qs.push(Q_F_PUB_ERA)
  if (!answers.pubera) return qs
  qs.push(Q_F_READER_EXP)
  if (!answers.freaderexp) return qs
  qs.push(F_EMOTIONAL_Q[answers.genre])
  if (!answers.emotional) return qs
  qs.push(Q_F_LENGTH)
  return qs  // 15 (fantasy/scifi) or 14 (others)
}

// ─── buildQuery — maps answers to a Google Books search string ────────────────

const SUBGENRE_TERM = {
  // Fantasy
  epic: 'epic fantasy',
  grimdark: 'grimdark fantasy',
  cozy: 'cozy fantasy',
  portal: 'portal fantasy isekai',
  magicalrealism: 'magical realism',
  // Sci-Fi
  spaceopera: 'space opera',
  hardscifi: 'hard science fiction',
  cyberpunk: 'cyberpunk',
  dystopian: 'dystopian',
  firstcontact: 'first contact alien',
  // Thriller
  psychological: 'psychological thriller',
  spy: 'spy espionage thriller',
  legal: 'legal thriller political',
  domestic: 'domestic thriller suspense',
  crime: 'crime thriller heist',
  // Mystery
  cozymystery: 'cozy mystery',
  hardboiled: 'noir hardboiled detective',
  procedural: 'crime procedural police',
  historicalmystery: 'historical mystery',
  lockedroom: 'locked room mystery',
  // Historical Fiction
  ancient: 'ancient world historical fiction',
  medieval: 'medieval historical fiction',
  victorian: 'victorian era historical fiction',
  wwii: 'world war ii historical fiction',
  american: 'american historical fiction',
  asian: 'asian historical fiction',
  // Literary
  familysaga: 'family saga multigenerational',
  immigration: 'immigration diaspora literary',
  southerngothic: 'southern gothic',
  contemporary: 'contemporary literary fiction',
  experimental: 'experimental literary fiction',
}

const THEME_TERM = {
  // Epic fantasy
  political: 'political intrigue',
  military: 'military war battle',
  chosenone: 'chosen one prophecy',
  foundfamily: 'found family',
  // Grimdark
  antihero: 'anti-hero morally grey',
  hopeless: 'bleak dark hopeless',
  darkcost: 'dark magic price cost',
  revenge: 'revenge vengeance',
  // Cozy fantasy
  magicshop: 'magic shop bakery',
  witchcottage: 'witch cottage charm',
  academy: 'magic academy school',
  cozymysterytwist: 'cozy mystery magic',
  // Portal
  fishoutofwater: 'fish out of water',
  chosen: 'summoned destined',
  survival: 'survival escape',
  // Magical realism
  family: 'family secrets generations',
  grief: 'grief memory loss',
  latin: 'latin american magical realism',
  historyrewritten: 'historical magical',
  // Space opera
  empire: 'galactic empire rebellion',
  exploration: 'exploration discovery wonder',
  militaryspace: 'military space fleet',
  fugitivecrew: 'found family crew fugitive',
  // Hard sci-fi
  ai: 'artificial intelligence consciousness',
  colonization: 'colonization terraforming',
  nearfuture: 'near future',
  physics: 'physics time reality',
  // Cyberpunk
  corporation: 'megacorporation dystopia',
  hacker: 'hacker resistance underground',
  posthuman: 'transhumanism posthuman cyborg',
  cybernoir: 'noir detective cyberpunk',
  // Dystopian
  surveillance: 'surveillance totalitarian',
  postapocalyptic: 'post-apocalyptic survival',
  rebellion: 'uprising rebellion resistance',
  satire: 'satire social commentary',
  // First contact
  alienminds: 'alien intelligence incomprehensible',
  invasion: 'alien invasion war',
  peacefulcontact: 'first contact communication peaceful',
  // Psychological thriller
  unreliablenarrator: 'unreliable narrator twist',
  obsession: 'obsession stalker',
  identity: 'identity theft impersonation',
  isolation: 'isolation trapped remote',
  // Spy
  coldwar: 'cold war berlin spy',
  modernspy: 'modern spy cyber surveillance',
  rogueagent: 'rogue agent hunted',
  amateurspy: 'amateur ordinary spy',
  // Legal / political
  courtroom: 'courtroom trial lawyer',
  conspiracy: 'political conspiracy cover-up',
  corruption: 'corruption whistleblower',
  // Domestic
  gaslighting: 'gaslighting manipulation psychological',
  neighborhood: 'suburb dark secret thriller',
  // Crime
  heist: 'heist robbery elaborate plan',
  conartist: 'con artist grifter',
  organizedcrime: 'organized crime mafia gang',
  // Cozy mystery
  amateurdetective: 'amateur detective sleuth',
  charmingsetting: 'english village cozy setting',
  petsidekick: 'animal sidekick cat dog mystery',
  // Hardboiled
  classicnoir: 'classic noir detective',
  modernnoir: 'modern hardboiled detective',
  femaleled: 'female detective noir',
  // Procedural
  forensic: 'forensic crime scene detective',
  serialkiller: 'serial killer hunt profile',
  coldcase: 'cold case reopened unsolved',
  // Historical mystery
  victorianlondon: 'victorian london detective mystery',
  ancientworld: 'ancient rome egypt detective mystery',
  medievalmystery: 'medieval mystery monk detective',
  wartime: 'wartime mystery world war detective',
  // Locked room
  classicpuzzle: 'locked room classic mystery',
  modernpuzzle: 'locked room modern thriller',
  // Ancient world historical
  rome: 'ancient rome',
  egypt: 'ancient egypt',
  greece: 'ancient greece',
  mesopotamia: 'mesopotamia persia ancient',
  // Medieval
  knights: 'knights crusades medieval',
  royalty: 'royal court succession medieval',
  church: 'church inquisition medieval faith',
  commonfolk: 'medieval peasant ordinary life',
  // Victorian
  darkunderbelly: 'victorian crime underworld',
  classgender: 'victorian class poverty gender',
  scienceprogress: 'victorian science invention',
  // WWII
  resistance: 'resistance occupied france nazi',
  frontlines: 'wwii soldier frontlines battle',
  homefront: 'wwii home front women sacrifice',
  aftermath: 'wwii aftermath liberation justice',
  // American history
  frontier: 'american frontier west settlement',
  civilwar: 'civil war slavery reconstruction',
  greatmigration: 'harlem renaissance great migration',
  civilrights: 'civil rights movement martin luther king',
  // Asian
  feudaljapan: 'samurai feudal japan shogun',
  china: 'china dynasty emperor',
  silkroad: 'silk road trade ancient asia',
  // Family saga
  secrets: 'family secrets revelation',
  migration: 'family journey migration',
  trauma: 'generational trauma healing',
  // Immigration
  firstgen: 'first generation immigrant',
  secondgen: 'second generation between two cultures',
  return: 'return homeland identity',
  // Southern gothic
  decay: 'southern gothic decay faulkner',
  supernatural: 'southern gothic supernatural haunting',
  race: 'southern gothic race history america',
  // Contemporary
  relationships: 'love marriage friendship literary',
  comingofage: 'coming of age identity',
  addiction: 'addiction recovery literary',
  // Experimental
  fragmented: 'fragmented structure experimental form',
  nonlinear: 'non-linear narrative memory',
  unusualnarrator: 'second person unusual narration',
}

const LENGTH_TERM = {
  standalone: 'standalone novel',
  trilogy: 'trilogy series',
  longseries: 'series saga',
}

const NF_SUBTOPIC_TERM = {
  military: 'military history war strategy',
  ancient: 'ancient civilizations history',
  biography: 'biography memoir history',
  american: 'american history',
  european: 'european history',
  worldhistory: 'world history global',
  cosmology: 'cosmology physics universe space',
  biology: 'biology evolution genetics',
  neuroscience: 'neuroscience psychology brain behavior',
  environment: 'ecology nature climate environment',
  technology: 'technology silicon valley future innovation',
  startup: 'startup entrepreneurship venture capital',
  leadership: 'leadership management organizational',
  economics: 'economics finance markets',
  productivity: 'productivity habits routines',
  psychologyofpersuasion: 'psychology persuasion influence behavior',
  serialkiller: 'serial killer criminal profiling',
  investigative: 'investigative journalism corruption',
  coldcase: 'cold case unsolved murder',
  corporatefraud: 'corporate fraud financial crime scandal',
}

const NF_STYLE_TERM = {
  narrative: 'narrative storytelling compelling',
  analytical: 'comprehensive analysis research',
  memoir: 'memoir personal voice',
}

// ── Fiction follow-up term maps ───────────────────────────────────────────────

const CAST_TERM = {
  solo: 'single protagonist',
  smallgroup: '',
  ensemble: 'ensemble cast multiple pov',
}

const TONE_TERM = {
  dark: 'dark gritty',
  balanced: '',
  hopeful: 'uplifting hopeful',
  comedic: 'funny humorous witty',
}

const PACING_TERM = {
  fast: 'fast-paced action',
  methodical: '',
  slowburn: 'slow burn immersive',
}

const PROTAGONIST_TERM = {
  reluctant: 'reluctant hero',
  expert: '',
  antihero: 'antihero morally complex',
  outsider: 'outsider underdog',
}

const WORLDBUILDING_TERM = {
  minimal: '',
  moderate: '',
  deep: 'world-building detailed immersive',
}

const PROSE_TERM = {
  propulsive: 'fast-paced readable',
  literary: 'literary beautiful prose',
  gritty: 'gritty raw visceral',
  witty: 'witty sharp humorous',
}

const F_DISCOVERY_TERM = {
  hiddengem: 'underrated obscure',
  acclaimed: 'award winning acclaimed',
  recent: 'bestseller',
  classic: 'classic',
}

const PUB_ERA_TERM = {
  veryrecent: '2020 2021 2022 2023 2024',
  established: '',
  anyera: '',
}

const F_READER_EXP_TERM = {
  newcomer: 'best introduction',
  experienced: 'obscure underrated hidden',
}

const EMOTIONAL_TERM = {
  amazed: 'wonder imagination',
  devastated: 'emotional heartbreaking',
  triumphant: 'epic triumphant',
  disturbed: 'dark disturbing unsettling',
  intellectual: 'clever intelligent puzzle',
  unsettled: 'unsettling psychological',
  terrified: 'terrifying scary',
  surprised: 'plot twist',
  moved: 'emotional moving',
  educated: 'educational',
  immersed: 'immersive historical detail',
  challenged: 'thought-provoking',
}

// ── Non-fiction follow-up term maps ──────────────────────────────────────────

const NF_DEPTH_TERM = {
  popular: 'accessible popular',
  deep: 'comprehensive scholarly',
}

const NF_AUTHOR_TERM = {
  journalist: 'journalism',
  academic: '',
  practitioner: 'insider memoir',
  intellectual: '',
}

const NF_ERA_TERM = {
  veryrecent: '2020 2021 2022 2023',
  established: '',
  classic: 'classic foundational',
}

const NF_SCOPE_TERM = {
  western: '',
  global: 'global international',
  nonwestern: 'international',
  any: '',
}

const NF_READER_EXP_TERM = {
  newcomer: 'introduction guide',
  intermediate: '',
  expert: 'advanced obscure',
}

const NF_DISCOVERY_TERM = {
  acclaimed: 'award winning',
  cultclassic: 'underrated overlooked',
  bestseller: 'bestseller',
  obscure: 'obscure rare',
}

export function buildQuery(answers) {
  if (answers.format === 'nonfiction') {
    return [
      NF_SUBTOPIC_TERM[answers.subtopic],
      NF_STYLE_TERM[answers.nfstyle],
      NF_DEPTH_TERM[answers.nfdepth],
      NF_AUTHOR_TERM[answers.nfauthortype],
      NF_ERA_TERM[answers.nfera],
      NF_SCOPE_TERM[answers.nfscope],
      NF_READER_EXP_TERM[answers.nfreaderexp],
      NF_DISCOVERY_TERM[answers.nfdiscovery],
    ].filter(Boolean).join(' ')
  }
  return [
    SUBGENRE_TERM[answers.subgenre],
    THEME_TERM[answers.theme],
    CAST_TERM[answers.cast],
    TONE_TERM[answers.tone],
    PACING_TERM[answers.pacing],
    PROTAGONIST_TERM[answers.protagonisttype],
    WORLDBUILDING_TERM[answers.worldbuilding],
    PROSE_TERM[answers.prosestyle],
    F_DISCOVERY_TERM[answers.fdiscovery],
    PUB_ERA_TERM[answers.pubera],
    F_READER_EXP_TERM[answers.freaderexp],
    EMOTIONAL_TERM[answers.emotional],
    LENGTH_TERM[answers.length],
  ].filter(Boolean).join(' ')
}

// Open Library subject terms — keyed by quiz answer values
const OL_SUBJECT = {
  // Fiction subgenres
  epic:              'epic fantasy',
  grimdark:          'dark fantasy',
  cozy:              'cozy fantasy',
  portal:            'portal fantasy',
  magicalrealism:    'magical realism',
  spaceopera:        'space opera',
  hardscifi:         'science fiction',
  cyberpunk:         'cyberpunk',
  dystopian:         'dystopian',
  firstcontact:      'science fiction',
  psychological:     'psychological thriller',
  spy:               'espionage',
  legal:             'legal thriller',
  domestic:          'thriller',
  crime:             'crime fiction',
  cozymystery:       'cozy mystery',
  hardboiled:        'detective fiction',
  procedural:        'detective fiction',
  historicalmystery: 'historical mystery',
  lockedroom:        'mystery fiction',
  ancient:           'historical fiction',
  medieval:          'historical fiction',
  victorian:         'historical fiction',
  wwii:              'historical fiction',
  american:          'historical fiction',
  asian:             'historical fiction',
  familysaga:        'family fiction',
  immigration:       'literary fiction',
  southerngothic:    'southern gothic',
  contemporary:      'literary fiction',
  experimental:      'literary fiction',
  // Non-fiction subtopics
  military:              'military history',
  biography:             'biography',
  worldhistory:          'world history',
  cosmology:             'cosmology',
  biology:               'biology',
  neuroscience:          'psychology',
  environment:           'ecology',
  technology:            'technology',
  startup:               'entrepreneurship',
  leadership:            'leadership',
  economics:             'economics',
  productivity:          'self-help',
  psychologyofpersuasion:'psychology',
  serialkiller:          'true crime',
  investigative:         'journalism',
  coldcase:              'true crime',
  corporatefraud:        'true crime',
}

// Returns an Open Library `subject:` query — more reliable than keyword search
export function buildOpenLibraryQuery(answers) {
  const subgenreKey = answers.format === 'nonfiction' ? answers.subtopic : answers.subgenre
  const subject = OL_SUBJECT[subgenreKey]
  if (subject) return `subject:"${subject}"`

  // Fallback: use genre name
  const fallback = answers.format === 'nonfiction' ? 'nonfiction' : (answers.genre ?? 'fiction')
  return `subject:"${fallback}"`
}
