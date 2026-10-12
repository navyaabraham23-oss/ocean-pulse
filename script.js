// ==========================================
// OCEAN PULSE - INTERACTIVE JAVASCRIPT
// ==========================================

const KB = [
  {
    id: "protect",
    keys: ["protect ocean", "save ocean", "save the ocean", "protect sea", "help ocean", "conserve ocean", "protect marine", "how can i help", "what can we do", "what can i do"],
    answer:
      "Here are the most effective ways to protect the oceans:\n" +
      "1. Cut single-use plastic: carry a cloth bag, steel bottle and steel straw.\n" +
      "2. Join or organise beach and river cleanups, and log the waste you find.\n" +
      "3. Never dump oil, paint or chemicals down drains. They end up in rivers and the sea.\n" +
      "4. Choose sustainable seafood and avoid buying products made from endangered species.\n" +
      "5. Protect mangroves, coral reefs and wetlands. They shield coasts and trap carbon.\n" +
      "6. Use less electricity and fuel, because CO2 makes the sea warmer and more acidic.\n" +
      "7. Report pollution through the Take Action page on this site."
  },
{
  id: "voyage",
  keys: ["going on a voyage", "voyage", "on a ship", "on a boat", "on a cruise", "cruise", "sailing", "ferry", "boat trip", "sea trip", "travelling by sea"],
  answer:
    "Going on a voyage? Here is how to avoid polluting the ocean:\n" +
    "1. Keep all waste onboard and hand it over at the port. Never throw plastic overboard; MARPOL bans dumping plastic at sea.\n" +
    "2. Pack a refillable bottle, a food container and cloth bags, and skip single-use plastic.\n" +
    "3. Tie down loose items such as hats, bags and wrappers so the wind doesn't carry them away.\n" +
    "4. Avoid balloons, confetti and glitter on deck.\n" +
    "5. Don't flush wet wipes or plastics, and use phosphate-free soap and reef-safe sunscreen.\n" +
    "6. Never pour oil, fuel, paint or chemicals into the water, and report any leak to the crew immediately.\n" +
    "7. Keep your distance from marine animals, don't feed them, and don't anchor on coral.\n" +
    "8. If you see floating debris, a net or an oil sheen, tell the crew."
},
  {
    id: "reduce",
    keys: ["reduce pollution", "reduce water pollution", "ways to reduce", "stop water pollution", "prevent water pollution", "prevent pollution", "control water pollution", "stop pollution", "solutions", "how to reduce"],
    answer:
      "Ways to reduce water pollution:\n" +
      "- Sewage treatment: treat wastewater before it enters rivers and the sea. Many Indian cities still release large amounts of untreated sewage.\n" +
      "- Industrial rules: factories need effluent treatment plants and should not release toxic waste.\n" +
      "- Waste management: segregate wet and dry waste, and collect and recycle plastic so it never reaches drains.\n" +
      "- Less plastic: ban or limit single-use items, and use refill and reuse systems.\n" +
      "- Farming: use less chemical fertiliser and pesticide, and use organic methods and buffer strips, to reduce runoff.\n" +
      "- Ships: follow MARPOL rules, which ban dumping of oil and plastic at sea.\n" +
      "- Awareness and reporting: citizens can report polluters to the authorities."
  },
  {
    id: "case",
    keys: ["case study", "case studies", "example of pollution", "real example", "real life example", "examples", "past incident", "famous pollution"],
    answer:
      "Some well-known marine and water pollution case studies:\n" +
      "1. Versova Beach, Mumbai: a citizen-led cleanup, started in 2015 by Afroz Shah and volunteers, removed huge amounts of plastic and brought the beach back.\n" +
      "2. Ennore oil spill, Chennai (2017): two ships collided and oil spread along the coast, harming beaches and fishing.\n" +
      "3. X-Press Pearl, Sri Lanka (2021): a burning cargo ship released billions of plastic pellets (nurdles) that washed up on beaches.\n" +
      "4. Minamata Bay, Japan (1950s): a factory dumped mercury, which poisoned fish and the people who ate them.\n" +
      "5. Exxon Valdez, Alaska (1989): a tanker spilled about 11 million gallons of crude oil.\n" +
      "6. Namami Gange (India, 2014 onwards): a government programme to clean the Ganga with sewage plants and riverfront work.\n" +
      "Ask me about any one of these for more detail."
  },
  {
    id: "versova",
    keys: ["versova", "afroz shah"],
    answer:
      "Versova Beach cleanup (Mumbai): in October 2015 lawyer Afroz Shah and a neighbour began cleaning the beach, which was buried under plastic and garbage. Thousands of volunteers joined over time, and tonnes of waste were removed. Lesson: community action can restore a polluted coast, but it must be sustained, because waste keeps coming back from drains and the sea."
  },
  {
    id: "ennore",
    keys: ["ennore", "chennai oil", "oil spill chennai"],
    answer:
      "Ennore oil spill (January 2017): two ships collided off Chennai's Ennore port and spilled oil that spread along the shore. Volunteers, fishers and agencies cleaned beaches by hand. Lesson: oil spills hurt fishing communities and wildlife quickly, and cleanup is slow and labour-heavy."
  },
  {
    id: "xpress",
    keys: ["x-press pearl", "xpress pearl", "x press pearl", "sri lanka ship", "nurdle", "nurdles"],
    answer:
      "X-Press Pearl (Sri Lanka, 2021): a container ship carrying chemicals and plastic pellets caught fire and sank off Colombo. Billions of tiny plastic pellets called nurdles washed ashore, and fishing was restricted. It is considered one of the worst plastic spills at sea, because the pellets are almost impossible to fully remove."
  },
  {
    id: "minamata",
    keys: ["minamata", "mercury"],
    answer:
      "Minamata disease (Japan, 1950s onward): a chemical factory released mercury-laden wastewater into Minamata Bay. Fish and shellfish absorbed it, and people who ate them developed serious nerve damage. Lesson: toxins build up in the food chain (bioaccumulation), so poisoned water can harm people far from the source."
  },
  {
    id: "exxon",
    keys: ["exxon", "valdez", "alaska spill"],
    answer:
      "Exxon Valdez (Alaska, 1989): a tanker hit a reef and spilled about 11 million gallons of crude oil into Prince William Sound, killing huge numbers of seabirds, otters and fish. It led to stricter oil-tanker safety rules in the US."
  },
  {
    id: "ganga",
    keys: ["namami gange", "ganga", "ganges", "clean ganga"],
    answer:
      "Namami Gange (launched 2014): a programme to clean the Ganga by building sewage treatment plants, cleaning riverfronts and ghats, and controlling industrial discharge. Progress has been uneven, which shows that infrastructure alone is not enough. Enforcement and public cooperation also matter."
  },
  {
    id: "plastic",
    keys: ["plastic", "microplastic", "microplastics", "single use", "single-use"],
    answer:
      "Plastic is the biggest visible threat to the sea. It breaks into microplastics that fish and seabirds swallow, and those can move up the food chain to us. Best fixes: refuse single-use items, reuse and refill, segregate and recycle, and stop plastic at the source before it reaches drains and rivers. In India, a ban on many single-use plastic items took effect on 1 July 2022."
  },
  {
    id: "oil",
    keys: ["oil spill", "oil pollution", "crude oil"],
    answer:
      "Oil spills coat birds and marine animals, block sunlight, and poison fish. Cleanup methods include floating booms to contain oil, skimmers to scoop it, absorbent materials, and in some cases dispersants. Prevention is better: safer tankers, double-hulled ships, and strict rules on discharge."
  },
  {
    id: "sewage",
    keys: ["sewage", "wastewater", "untreated", "drain", "drains"],
    answer:
      "Untreated sewage adds bacteria and extra nutrients to water. The nutrients cause algal blooms that use up oxygen and create dead zones where fish cannot survive. Solutions: sewage treatment plants, separating stormwater from sewage, and reusing treated water."
  },
  {
    id: "coral",
    keys: ["coral", "reef", "bleaching"],
    answer:
      "Coral reefs are damaged by warming seas (bleaching), pollution, runoff, and destructive fishing. To protect them: cut carbon emissions, keep sewage and fertiliser out of coastal water, use reef-safe sunscreen, and do not touch or collect coral."
  },
  {
    id: "mangrove",
    keys: ["mangrove", "mangroves", "sundarbans"],
    answer:
      "Mangroves protect coasts from storms and erosion, filter pollutants, shelter young fish, and store a lot of carbon. Protecting them means stopping illegal cutting and land reclamation, and replanting native mangrove species."
  },
  {
    id: "acid",
    keys: ["acidification", "ocean acid", "climate change", "global warming", "warming"],
    answer:
      "The ocean absorbs about a quarter of the CO2 we emit. This makes seawater more acidic, which makes it harder for corals, oysters and shellfish to build shells. Warming also forces fish to move and causes coral bleaching. Cutting fossil-fuel use is the main solution."
  },
  {
    id: "fish",
    keys: ["overfishing", "sustainable seafood", "fishing", "ghost net", "ghost nets"],
    answer:
      "Overfishing removes fish faster than they can breed. Lost fishing nets (ghost nets) keep trapping animals for years. Ways to help: choose sustainably caught seafood, support seasonal fishing bans, and take part in net-recovery drives."
  },
  {
    id: "microplastics",
    keys: ["microplastics", "what are microplastics", "how do microplastics harm marine life"],
    answer: "Microplastics are tiny plastic particles, usually smaller than 5 millimetres. They form when larger plastic items break down or come from products and fibres. Marine organisms can swallow them, and the particles may move through food webs. Reducing single-use plastic, preventing litter, and improving wastewater treatment can help reduce microplastic pollution."
},
{
    id: "coral-bleaching",
    keys: ["coral bleaching", "why do corals turn white", "what causes coral bleaching"],
    answer: "Coral bleaching happens when corals under stress, often from unusually warm seawater, lose the tiny algae that provide much of their food and colour. Bleached corals are not necessarily dead, but prolonged stress can kill them. Reducing greenhouse-gas emissions, preventing pollution, and protecting reef habitats help corals survive."
  },
  {
    id: "oil-spills",
    keys: ["oil spills", "what happens during an oil spill", "effects of oil spills on the ocean"],
    answer: "Oil spills can coat seabirds and marine mammals, damage fish and shellfish habitats, contaminate shorelines, and affect fishing communities. Oil can be difficult to remove completely. If you see a spill, do not touch it or attempt a cleanup. Record its location from a safe distance and report it to the appropriate port, coast guard, or pollution-control authority."
  },
  {
    id: "eutrophication",
    keys: ["eutrophication", "algal blooms", "why do algal blooms happen", "dead zones in the ocean"],
    answer: "Eutrophication occurs when excess nutrients, often from sewage and fertilisers, enter water and encourage excessive algae growth. When the algae die and decompose, oxygen can be depleted, creating dead zones where many marine animals struggle to survive. Better wastewater treatment and reducing fertiliser runoff can help prevent it."
  },
  {
    id: "sewage",
    keys: ["sewage pollution", "how does sewage pollute the ocean", "untreated wastewater in the sea"],
    answer: "Untreated sewage can introduce harmful germs, excess nutrients, chemicals, and organic waste into coastal waters. It can threaten human health, harm marine ecosystems, and contribute to algal blooms. Proper sewage collection, wastewater treatment, and safe disposal are important ways to prevent this pollution."
  },
  {
    id: "ghost-nets",
    keys: ["ghost nets", "what is ghost fishing", "how do abandoned fishing nets harm animals"],
    answer: "Ghost nets are lost or abandoned fishing nets that continue trapping marine animals such as turtles, fish, dolphins, and seabirds. They can also damage coral reefs. Preventing fishing-gear loss, collecting old nets at ports, and arranging safe recovery by trained teams can reduce the problem."
  },
  {
    id: "turtles",
    keys: ["sea turtles", "how does plastic affect sea turtles", "why do turtles eat plastic"],
    answer: "Sea turtles may mistake plastic bags for jellyfish or other prey. Swallowed plastic can cause internal injury or block digestion, while discarded fishing gear can entangle them. Reduce plastic waste, keep beaches clean, and never disturb nesting turtles. Contact trained wildlife rescuers if you find an injured turtle."
  },
  {
    id: "dolphins",
    keys: ["dolphins", "how does pollution affect dolphins", "noise pollution and dolphins"],
    answer: "Dolphins can be harmed by plastic ingestion, entanglement, toxic chemicals, and underwater noise. Noise from vessels and industrial activities may interfere with communication and navigation. Reducing marine litter, preventing chemical pollution, and responsible boating can help protect dolphins."
  },
  {
    id: "mangroves",
    keys: ["mangroves", "why are mangroves important", "how do mangroves protect the coast"],
    answer: "Mangroves are coastal forests that provide shelter and nursery areas for marine animals, store carbon, reduce erosion, and help protect shorelines from waves and storms. They face threats from habitat destruction and pollution. Protecting existing mangrove forests and restoring suitable native habitats can support coastal ecosystems."
  },
  {
    id: "seagrass",
    keys: ["seagrass", "why are seagrass meadows important", "seagrass and marine animals"],
    answer: "Seagrass meadows are underwater habitats formed by flowering plants. They provide food and shelter for marine life, support young fish, store carbon, and help stabilise seabed sediments. Pollution, poor water quality, and coastal development can damage them."
  },
  {
    id: "plankton",
    keys: ["plankton", "phytoplankton", "zooplankton", "how do oceans produce oxygen"],
    answer: "Plankton are organisms that drift with water currents. Phytoplankton use sunlight to make food through photosynthesis and form the base of many ocean food webs. They also contribute substantially to Earth's oxygen production. Zooplankton feed on plankton and are an important food source for many marine animals."
  },
  {
    id: "food-web",
    keys: ["ocean food chain", "marine food web", "how does pollution affect the food chain"],
    answer: "A simplified ocean food chain is phytoplankton → zooplankton → small fish → larger fish. Real marine ecosystems contain complex food webs. Pollution can harm organisms directly, damage habitats, or allow certain toxins to accumulate in animals and move through the food web."
  },
  {
    id: "ocean-acidification",
    keys: ["ocean acidification", "why is the ocean becoming acidic", "how does carbon dioxide affect the ocean"],
    answer: "Ocean acidification occurs when seawater absorbs carbon dioxide from the atmosphere, changing its chemistry and lowering its pH. It can make it harder for corals and some shell-forming organisms to build and maintain their structures. Reducing carbon dioxide emissions is essential to limiting this problem."
  },
  {
    id: "ocean-warming",
    keys: ["ocean warming", "why are oceans getting warmer", "effects of rising sea temperatures"],
    answer: "Oceans absorb much of the excess heat trapped by greenhouse gases. Ocean warming can cause coral bleaching, change the distribution of marine species, affect food webs, and reduce oxygen levels in some waters. Cutting greenhouse-gas emissions and protecting marine habitats are important responses."
  },
  {
    id: "plastic-patch",
    keys: ["great pacific garbage patch", "is there an island of plastic", "garbage patch in the ocean"],
    answer: "The Great Pacific Garbage Patch is an area in the North Pacific where ocean currents concentrate floating debris. It is not a solid island of rubbish; much of the plastic is dispersed into small pieces across a wide area. Preventing plastic from entering rivers and oceans is essential because removing all the debris is extremely difficult."
  },
  {
    id: "ocean-currents",
    keys: ["ocean currents", "how do ocean currents spread pollution", "where does ocean plastic go"],
    answer: "Ocean currents, wind, and waves can carry floating waste far from where it entered the water. Debris may wash onto distant coastlines or accumulate in regions where currents converge. Because marine pollution can cross national borders, prevention and international cooperation are important."
  },
  {
    id: "marine-biodiversity",
    keys: ["marine biodiversity", "why is ocean biodiversity important", "what is marine biodiversity"],
    answer: "Marine biodiversity means the variety of life in the oceans, from tiny microbes and plankton to corals, fish, turtles, whales, and seabirds. It supports food webs, fisheries, tourism, and healthy ecosystems. Pollution, habitat loss, climate change, and overfishing all threaten marine biodiversity."
  },
  {
    id: "marine-protected-areas",
    keys: ["marine protected areas", "what is a marine protected area", "how do protected areas help the ocean"],
    answer: "Marine protected areas are parts of the sea where activities are managed or restricted to conserve habitats and wildlife. When effectively designed and enforced, they can help marine populations recover and protect biodiversity. They work best alongside pollution prevention and responsible fishing."
  },
  {
    id: "india-oceans",
    keys: ["oceans around india", "which seas surround india", "indian marine ecosystems", "marine pollution in india"],
    answer: "India borders the Arabian Sea to the west, the Bay of Bengal to the east, and the Indian Ocean to the south. Its marine ecosystems include mangroves, coral reefs, estuaries, beaches, and seagrass habitats. Plastic waste, untreated sewage, industrial discharge, and fishing-related litter can threaten these environments."
  },
  {
    id: "sdg14",
    keys: ["sdg 14", "life below water", "what is the goal of sdg 14", "how does ocean pulse support sdg 14"],
    answer: "Sustainable Development Goal 14, Life Below Water, aims to conserve and sustainably use oceans, seas, and marine resources. It includes reducing marine pollution, protecting ecosystems, addressing ocean acidification, and tackling overfishing. Ocean Pulse supports this goal through marine-pollution awareness, education, and guidance on reporting pollution."
  },
  {
    id: "beach-cleanup",
    keys: ["beach cleanup", "how to organise a beach cleanup", "how can i help clean the ocean"],
    answer: "You can help by joining a responsible beach or river cleanup, avoiding single-use plastics, disposing of waste correctly, and keeping litter out of drains. During a cleanup, wear suitable protection and never touch oil, chemicals, needles, or suspicious waste. Alert the relevant authorities about hazardous pollution."
  },
  {
    id: "oil-cleanup",
    keys: ["how are oil spills cleaned", "methods to clean oil spills", "can i clean an oil spill"],
    answer: "Trained responders may use containment booms, skimmers, absorbent materials, or carefully selected specialist methods to manage oil spills. The best approach depends on the oil, weather, location, and wildlife at risk. Never try to clean up an oil spill yourself; keep away and report it promptly."
  },
  {
    id: "marine-litter",
    keys: ["marine litter", "what is marine debris", "types of ocean litter"],
    answer: "Marine litter is human-made waste found in the sea and along coastlines, including plastic packaging, fishing gear, glass, metal, and other discarded materials. It can injure animals, damage habitats, and break into smaller particles. Better waste collection, reuse, and preventing litter from reaching waterways are key solutions."
  },
  {
    id: "coral-protection",
    keys: ["how can we protect coral reefs", "save coral reefs", "what damages coral reefs"],
    answer: "Protect coral reefs by reducing greenhouse-gas emissions, preventing sewage and chemical runoff, avoiding touching or standing on corals, and choosing responsible reef-tourism activities. Coral reefs are living ecosystems that provide habitat for many marine species."
  },
  {
    id: "plastic-recycling",
    keys: ["does recycling solve plastic pollution", "is recycling enough to stop ocean pollution"],
    answer: "Recycling helps reduce waste, but it cannot solve plastic pollution by itself. Some plastics are difficult to recycle, and waste can escape collection systems. Reducing unnecessary disposable items, reusing products, improving waste collection, and preventing litter from entering drains and rivers are also necessary."
  },
  {
    id: "protect-oceans-guide",
    keys: [
      "how to protect our oceans",
      "how can we protect our oceans",
      "how to save the ocean",
      "ways to protect the ocean",
      "how can i help the ocean",
      "how to prevent ocean pollution",
      "what can i do to protect marine life",
      "how can we reduce marine pollution"
    ],
    answer: "🌊 HOW TO PROTECT OUR OCEANS\n\n1. Reduce single-use plastics by carrying reusable bags and bottles.\n2. Dispose of waste properly and never throw rubbish into rivers, drains or beaches.\n3. Join responsible beach and river cleanups.\n4. Avoid pouring oil, paint, chemicals or medicines into drains.\n5. Choose sustainable seafood and avoid products made from threatened marine wildlife.\n6. Save electricity and reduce your carbon footprint to help limit ocean warming.\n7. Protect mangroves, coral reefs and other marine habitats.\n8. Spread awareness about marine pollution and encourage others to act.\n9. Report pollution through the Ocean Pulse Report page and the appropriate official authorities.\n\nRemember: small actions by many people can make a difference!"
  },
  {
    id: "how-to-use-Take Action-page",
    keys: [
      "how to use the Take Action page",
      "how do i use Take Action page to report pollution",
      "how to report pollution on ocean pulse",
      "how can i report marine pollution",
      "how do i report an oil spill",
      "how to report water pollution",
      "where can i report ocean pollution",
      "how does the Take Action portal work",
      "how to submit a pollution report",
      "steps to report pollution"
    ],
    answer: "📍 HOW TO USE THE OCEAN PULSE Take Action PAGE\n\n1. Open the Take Action Pollution section on the Ocean Pulse website.\n2. Select the state or union territory where the pollution is occurring.\n3. Enter the district, city, locality or affected area, if requested.\n4. Choose the relevant official reporting option provided on the page, such as a central, state or local authority.\n5. Open the official website and follow its instructions to submit your complaint or report.\n6. Provide accurate details about the incident, its location and the type of pollution. Include photographs only if it is safe to take them.\n7. Save any complaint or reference number provided by the authority.\n\nImportant: Ocean Pulse helps you find reporting resources. Unless the website explicitly provides a working submission feature, entering details on Ocean Pulse does not itself submit an official complaint. For an oil spill or hazardous substance, keep away and notify the appropriate authorities."
  }
];

/* ---- matching ---- */
function kbNormalize(s) {
  return (s || "").toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();
}

// tiny edit-distance check so small typos still match single words
function kbClose(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1 || a.length < 5) return false;
  let i = 0, j = 0, diff = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++diff > 1) return false;
    if (a.length > b.length) i++;
    else if (a.length < b.length) j++;
    else { i++; j++; }
  }
  return diff + (a.length - i) + (b.length - j) <= 1;
}

function knowledgeReply(text) {
  const q = kbNormalize(text);
  if (!q) return null;
  const words = q.split(" ");
  let best = null, bestScore = 0;

  for (const item of KB) {
    let score = 0;
    for (const key of item.keys) {
      const k = kbNormalize(key);
      if (q.includes(k)) {
        score += k.split(" ").length * 3;           // phrase match, multi-word counts more
      } else if (k.split(" ").length === 1 && words.some(w => kbClose(w, k))) {
        score += 2;                                  // single keyword with a small typo
      }
    }
    if (score > bestScore) { bestScore = score; best = item; }
  }
  return bestScore >= 2 ? best.answer : null;
}
document.addEventListener('DOMContentLoaded', () => {
    initFish();
    initCoralReef();
    initNavigation();
    initCarousel();
    initMap();
    initReportForm();
    initChatbot();
    initQuiz();
    initFeedback();
    initScrollAnimations();
});

// ==========================================
// ANIMATED UNDERWATER ECOSYSTEM
// ==========================================
function initFish() {
    const layers = {
        bg: document.getElementById('fishLayerBg'),
        mid: document.getElementById('fishLayerMid'),
        fg: document.getElementById('fishLayerFg')
    };

    // All SVGs face RIGHT: head/eye on right, tail on left
    // When swimming left, CSS scaleX(-1) flips them to face left correctly
    const species = [
        // === REEF FISH (mid layer) ===
        {
            name: 'clownfish',
            svg: `<svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 25 L2 15 L2 35 Z" fill="#ff8c42"/>
                <ellipse cx="42" cy="25" rx="30" ry="16" fill="#ff6b2b"/>
                <ellipse cx="42" cy="25" rx="28" ry="14" fill="#ff8c42"/>
                <rect x="28" y="12" width="4" height="26" rx="2" fill="#fff" opacity="0.9"/>
                <rect x="44" y="14" width="4" height="22" rx="2" fill="#fff" opacity="0.9"/>
                <path d="M60 25 Q70 18 72 25 Q70 32 60 25" fill="#ff6b2b"/>
                <circle cx="60" cy="21" r="3.5" fill="#fff"/>
                <circle cx="61" cy="21" r="2" fill="#111"/>
                <path d="M42 11 Q48 6 52 11" fill="#ff6b2b" opacity="0.7"/>
                <path d="M42 39 Q48 44 52 39" fill="#ff6b2b" opacity="0.7"/>
            </svg>`,
            layer: 'mid', sizeRange: [70, 100], speed: [35, 50], majestic: false
        },
        {
            name: 'blue-tang',
            svg: `<svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 25 L0 18 L0 32 Z" fill="#ffd60a"/>
                <ellipse cx="42" cy="25" rx="32" ry="17" fill="#0077b6"/>
                <ellipse cx="42" cy="25" rx="30" ry="15" fill="#0096c7"/>
                <path d="M20 20 Q35 15 50 22 Q35 28 20 20" fill="#023e8a" opacity="0.5"/>
                <path d="M55 25 Q65 18 68 25 Q65 32 55 25" fill="#ffd60a"/>
                <circle cx="58" cy="21" r="3.5" fill="#fff"/>
                <circle cx="59" cy="21" r="2" fill="#111"/>
                <path d="M42 10 Q48 5 54 10" fill="#0077b6" opacity="0.6"/>
                <path d="M42 40 Q48 45 54 40" fill="#0077b6" opacity="0.6"/>
            </svg>`,
            layer: 'mid', sizeRange: [75, 105], speed: [32, 48], majestic: false
        },
        {
            name: 'butterflyfish',
            svg: `<svg viewBox="0 0 70 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30 L2 22 L2 38 Z" fill="#ffd60a"/>
                <ellipse cx="38" cy="30" rx="26" ry="22" fill="#ffd60a"/>
                <ellipse cx="38" cy="30" rx="24" ry="20" fill="#ffe066"/>
                <circle cx="28" cy="22" r="4" fill="#111" opacity="0.3"/>
                <circle cx="42" cy="35" r="3" fill="#111" opacity="0.2"/>
                <path d="M52 30 Q62 22 64 30 Q62 38 52 30" fill="#ffb703"/>
                <path d="M58 28 L64 30 L58 32" fill="#111" opacity="0.6"/>
                <circle cx="52" cy="25" r="3" fill="#fff"/>
                <circle cx="53" cy="25" r="1.8" fill="#111"/>
                <path d="M38 10 Q44 4 50 10" fill="#ffd60a" opacity="0.7"/>
                <path d="M38 50 Q44 56 50 50" fill="#ffd60a" opacity="0.7"/>
            </svg>`,
            layer: 'mid', sizeRange: [65, 95], speed: [38, 55], majestic: false
        },
        {
            name: 'angelfish',
            svg: `<svg viewBox="0 0 70 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 40 L2 32 L2 48 Z" fill="#c77dff"/>
                <ellipse cx="38" cy="40" rx="24" ry="30" fill="#9d4edd"/>
                <ellipse cx="38" cy="40" rx="22" ry="28" fill="#c77dff"/>
                <rect x="24" y="15" width="3" height="50" rx="1" fill="#7b2cbf" opacity="0.4"/>
                <rect x="34" y="14" width="3" height="52" rx="1" fill="#7b2cbf" opacity="0.4"/>
                <rect x="44" y="18" width="3" height="44" rx="1" fill="#7b2cbf" opacity="0.4"/>
                <path d="M52 40 Q62 32 64 40 Q62 48 52 40" fill="#9d4edd"/>
                <circle cx="52" cy="34" r="3.5" fill="#fff"/>
                <circle cx="53" cy="34" r="2" fill="#111"/>
                <path d="M38 12 Q44 2 50 12" fill="#9d4edd" opacity="0.6"/>
                <path d="M38 68 Q44 78 50 68" fill="#9d4edd" opacity="0.6"/>
            </svg>`,
            layer: 'mid', sizeRange: [70, 100], speed: [40, 58], majestic: false
        },
        {
            name: 'surgeonfish',
            svg: `<svg viewBox="0 0 85 45" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 22 L0 16 L0 28 Z" fill="#240046"/>
                <ellipse cx="44" cy="22" rx="34" ry="14" fill="#3c096c"/>
                <ellipse cx="44" cy="22" rx="32" ry="12" fill="#5a189a"/>
                <ellipse cx="44" cy="22" rx="28" ry="9" fill="#7b2cbf" opacity="0.5"/>
                <path d="M62 22 Q72 16 76 22 Q72 28 62 22" fill="#240046"/>
                <circle cx="64" cy="18" r="3" fill="#fff"/>
                <circle cx="65" cy="18" r="1.8" fill="#111"/>
                <ellipse cx="30" cy="22" rx="4" ry="3" fill="#ffd60a" opacity="0.7"/>
            </svg>`,
            layer: 'mid', sizeRange: [75, 100], speed: [34, 50], majestic: false
        },
        {
            name: 'parrotfish',
            svg: `<svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 25 L0 18 L0 32 Z" fill="#06d6a0"/>
                <ellipse cx="42" cy="25" rx="32" ry="16" fill="#00b4d8"/>
                <ellipse cx="42" cy="25" rx="30" ry="14" fill="#48cae4"/>
                <path d="M18 18 Q30 14 42 18 Q30 22 18 18" fill="#0077b6" opacity="0.4"/>
                <path d="M18 32 Q30 28 42 32 Q30 36 18 32" fill="#0077b6" opacity="0.4"/>
                <path d="M58 25 Q68 18 72 25 Q68 32 58 25" fill="#06d6a0"/>
                <path d="M65 22 Q72 25 65 28" fill="#048a6e"/>
                <circle cx="58" cy="20" r="3.5" fill="#fff"/>
                <circle cx="59" cy="20" r="2" fill="#111"/>
                <path d="M66 24 Q70 24 68 26" fill="#ffd60a" opacity="0.6"/>
            </svg>`,
            layer: 'mid', sizeRange: [80, 110], speed: [36, 52], majestic: false
        },
        {
            name: 'moorish-idol',
            svg: `<svg viewBox="0 0 65 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40 L2 34 L2 46 Z" fill="#111"/>
                <ellipse cx="34" cy="40" rx="22" ry="28" fill="#fff"/>
                <rect x="18" y="14" width="8" height="52" rx="2" fill="#111" opacity="0.85"/>
                <rect x="34" y="16" width="8" height="48" rx="2" fill="#ffd60a" opacity="0.8"/>
                <rect x="46" y="20" width="6" height="40" rx="2" fill="#111" opacity="0.7"/>
                <path d="M48 40 Q56 34 58 40 Q56 46 48 40" fill="#fff"/>
                <circle cx="50" cy="35" r="3" fill="#111"/>
                <circle cx="50.5" cy="35" r="1.5" fill="#fff"/>
                <path d="M34 14 L38 2 L40 14" fill="#fff" opacity="0.9"/>
            </svg>`,
            layer: 'mid', sizeRange: [65, 90], speed: [42, 60], majestic: false
        },
        {
            name: 'damselfish',
            svg: `<svg viewBox="0 0 55 35" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 17 L0 12 L0 22 Z" fill="#0077b6"/>
                <ellipse cx="28" cy="17" rx="20" ry="11" fill="#0096c7"/>
                <ellipse cx="28" cy="17" rx="18" ry="9" fill="#00b4d8"/>
                <path d="M38 17 Q46 12 48 17 Q46 22 38 17" fill="#0077b6"/>
                <circle cx="40" cy="14" r="2.5" fill="#fff"/>
                <circle cx="40.5" cy="14" r="1.5" fill="#111"/>
            </svg>`,
            layer: 'mid', sizeRange: [50, 70], speed: [28, 42], majestic: false
        },
        {
            name: 'yellow-tang',
            svg: `<svg viewBox="0 0 70 65" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 32 L0 25 L0 39 Z" fill="#e6b800"/>
                <ellipse cx="36" cy="32" rx="26" ry="24" fill="#ffd60a"/>
                <ellipse cx="36" cy="32" rx="24" ry="22" fill="#ffe066"/>
                <path d="M48 32 Q58 24 62 32 Q58 40 48 32" fill="#e6b800"/>
                <path d="M55 30 L62 32 L55 34" fill="#fff" opacity="0.5"/>
                <circle cx="50" cy="26" r="3.5" fill="#fff"/>
                <circle cx="51" cy="26" r="2" fill="#111"/>
                <path d="M36 10 Q42 4 48 10" fill="#ffd60a" opacity="0.6"/>
                <path d="M36 54 Q42 60 48 54" fill="#ffd60a" opacity="0.6"/>
            </svg>`,
            layer: 'mid', sizeRange: [65, 90], speed: [35, 50], majestic: false
        },
        {
            name: 'bannerfish',
            svg: `<svg viewBox="0 0 65 75" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 38 L2 30 L2 46 Z" fill="#111"/>
                <ellipse cx="34" cy="38" rx="22" ry="26" fill="#f8f9fa"/>
                <rect x="16" y="14" width="36" height="8" rx="2" fill="#111" opacity="0.8"/>
                <rect x="16" y="54" width="36" height="8" rx="2" fill="#111" opacity="0.8"/>
                <path d="M46 38 Q56 30 60 38 Q56 46 46 38" fill="#ffd60a"/>
                <circle cx="48" cy="32" r="3" fill="#111"/>
                <circle cx="48.5" cy="32" r="1.5" fill="#fff"/>
                <path d="M34 14 L38 2 L42 14" fill="#ffd60a"/>
            </svg>`,
            layer: 'mid', sizeRange: [60, 85], speed: [40, 56], majestic: false
        },

        // === SMALL SCHOOL FISH (bg layer) ===
        {
            name: 'school-silver',
            svg: `<svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10 L0 6 L0 14 Z" fill="#adb5bd"/>
                <ellipse cx="22" cy="10" rx="16" ry="7" fill="#ced4da"/>
                <ellipse cx="22" cy="10" rx="14" ry="5" fill="#e9ecef" opacity="0.6"/>
                <path d="M32 10 Q38 6 38 10 Q38 14 32 10" fill="#adb5bd"/>
                <circle cx="32" cy="8" r="1.5" fill="#111"/>
            </svg>`,
            layer: 'bg', sizeRange: [30, 45], speed: [30, 45], majestic: false, school: true
        },
        {
            name: 'school-blue',
            svg: `<svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10 L0 6 L0 14 Z" fill="#0077b6"/>
                <ellipse cx="22" cy="10" rx="16" ry="7" fill="#0096c7"/>
                <ellipse cx="22" cy="10" rx="14" ry="5" fill="#48cae4" opacity="0.5"/>
                <path d="M32 10 Q38 6 38 10 Q38 14 32 10" fill="#0077b6"/>
                <circle cx="32" cy="8" r="1.5" fill="#111"/>
            </svg>`,
            layer: 'bg', sizeRange: [28, 42], speed: [32, 48], majestic: false, school: true
        },

        // === LARGE CREATURES (fg layer, occasional) ===
        {
            name: 'reef-shark',
            svg: `<svg viewBox="0 0 140 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 25 L0 20 L0 30 Z" fill="#495057"/>
                <ellipse cx="72" cy="25" rx="60" ry="16" fill="#6c757d"/>
                <ellipse cx="72" cy="25" rx="58" ry="14" fill="#868e96"/>
                <ellipse cx="72" cy="28" rx="50" ry="8" fill="#adb5bd" opacity="0.4"/>
                <path d="M72 10 L80 0 L85 12" fill="#6c757d"/>
                <path d="M110 25 Q128 18 135 25 Q128 32 110 25" fill="#495057"/>
                <path d="M50 25 Q55 20 60 25" fill="#495057" opacity="0.5"/>
                <circle cx="115" cy="20" r="3" fill="#fff"/>
                <circle cx="116" cy="20" r="2" fill="#111"/>
                <path d="M120 28 L128 26 L120 30 L128 28" fill="#fff" opacity="0.3"/>
            </svg>`,
            layer: 'fg', sizeRange: [140, 200], speed: [55, 80], majestic: true
        },
        {
            name: 'sea-turtle',
            svg: `<svg viewBox="0 0 130 80" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="65" cy="42" rx="38" ry="28" fill="#2d6a4f"/>
                <ellipse cx="65" cy="42" rx="35" ry="25" fill="#40916c"/>
                <path d="M45 25 Q55 20 65 25 Q75 20 85 25 Q75 30 65 25 Q55 30 45 25" fill="#2d6a4f" opacity="0.6"/>
                <path d="M45 42 Q55 37 65 42 Q75 37 85 42 Q75 47 65 42 Q55 47 45 42" fill="#2d6a4f" opacity="0.6"/>
                <path d="M45 58 Q55 53 65 58 Q75 53 85 58 Q75 63 65 58 Q55 63 45 58" fill="#2d6a4f" opacity="0.6"/>
                <path d="M25 35 Q15 25 20 20 Q28 28 30 38" fill="#52b788"/>
                <path d="M25 50 Q15 60 20 65 Q28 57 30 47" fill="#52b788"/>
                <path d="M100 35 Q110 28 108 22 Q102 30 98 38" fill="#52b788"/>
                <path d="M100 50 Q110 57 108 63 Q102 55 98 47" fill="#52b788"/>
                <ellipse cx="108" cy="40" rx="14" ry="10" fill="#52b788"/>
                <circle cx="114" cy="36" r="3" fill="#111"/>
                <circle cx="114.5" cy="36" r="1.5" fill="#fff" opacity="0.5"/>
                <path d="M118 42 Q122 42 120 44" fill="#2d6a4f"/>
            </svg>`,
            layer: 'fg', sizeRange: [120, 170], speed: [60, 90], majestic: true
        },
        {
            name: 'ray',
            svg: `<svg viewBox="0 0 140 70" xmlns="http://www.w3.org/2000/svg">
                <path d="M70 35 Q40 10 10 25 Q30 35 10 45 Q40 60 70 35" fill="#343a40"/>
                <path d="M70 35 Q100 10 130 25 Q110 35 130 45 Q100 60 70 35" fill="#495057"/>
                <ellipse cx="70" cy="35" rx="30" ry="15" fill="#6c757d" opacity="0.5"/>
                <path d="M100 35 Q120 33 140 35 Q120 37 100 35" fill="#343a40"/>
                <circle cx="85" cy="30" r="2.5" fill="#111"/>
                <circle cx="85" cy="40" r="2.5" fill="#111"/>
                <ellipse cx="55" cy="35" rx="12" ry="8" fill="#adb5bd" opacity="0.3"/>
            </svg>`,
            layer: 'fg', sizeRange: [130, 180], speed: [65, 95], majestic: true
        }
    ];

    const colors = {
        bg: ['#adb5bd', '#ced4da', '#90e0ef', '#48cae4'],
        mid: ['#ff6b2b', '#0096c7', '#ffd60a', '#c77dff', '#5a189a', '#48cae4', '#06d6a0', '#f8f9fa', '#ff8c42', '#00b4d8'],
        fg: ['#6c757d', '#40916c', '#495057']
    };

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function createFish(opts = {}) {
        const layerName = opts.layer || pick(['bg', 'mid', 'mid', 'mid', 'fg']);
        const layerSpecies = species.filter(s => s.layer === layerName);
        const sp = opts.species ? species.find(s => s.name === opts.species) || pick(layerSpecies) : pick(layerSpecies);
        const direction = Math.random() > 0.5 ? 'right' : 'left';
        const size = rand(sp.sizeRange[0], sp.sizeRange[1]);
        const duration = rand(sp.speed[0], sp.speed[1]);
        const delay = opts.delay || rand(0, 5);
        const top = rand(8, 88);

        const wrapper = document.createElement('div');
        wrapper.className = `fish fish-swim-${direction}${sp.majestic ? ' majestic' : ''}`;
        wrapper.style.width = `${size}px`;
        wrapper.style.height = `${size * (size > 100 ? 0.55 : 0.65)}px`;
        wrapper.style.top = `${top}%`;
        wrapper.style.animationDuration = `${duration}s`;
        wrapper.style.animationDelay = `${delay}s`;
        wrapper.style.color = pick(colors[sp.layer]);

        const body = document.createElement('div');
        body.className = 'fish-body';
        body.style.animationDuration = `${rand(1.5, 3)}s`;
        body.innerHTML = sp.svg;

        wrapper.appendChild(body);
        layers[sp.layer].appendChild(wrapper);

        const cleanup = setTimeout(() => wrapper.remove(), (duration + delay + 2) * 1000);
        return wrapper;
    }

    function createSchool() {
        const schoolSpecies = species.filter(s => s.school);
        const sp = pick(schoolSpecies);
        const count = Math.floor(rand(5, 10));
        const direction = Math.random() > 0.5 ? 'right' : 'left';
        const baseTop = rand(15, 75);
        const duration = rand(sp.speed[0], sp.speed[1]);
        const baseDelay = rand(0, 8);

        for (let i = 0; i < count; i++) {
            createFish({
                species: sp.name,
                layer: sp.layer,
                delay: baseDelay + rand(0, 3),
            });
        }
    }

    function createMajesticCreature() {
        const majestic = species.filter(s => s.majestic);
        const sp = pick(majestic);
        createFish({ species: sp.name, layer: 'fg' });
    }

    // === PARTICLES ===
    function initParticles() {
        const container = document.getElementById('particleContainer');
        const count = 25;
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = rand(2, 5);
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${rand(0, 100)}%`;
            p.style.bottom = `${rand(-10, 0)}%`;
            p.style.animationDuration = `${rand(15, 30)}s`;
            p.style.animationDelay = `${rand(0, 15)}s`;
            p.style.opacity = rand(0.2, 0.5);
            container.appendChild(p);
        }
    }

    // === SEAWEED ===
    function initSeafloor() {
        const seafloor = document.getElementById('seafloor');
        const seaweedCount = 12;
        const seaweedColors = ['#0b3d2e', '#0d4f3c', '#0a2e22', '#145a40'];

        for (let i = 0; i < seaweedCount; i++) {
            const sw = document.createElement('div');
            sw.className = 'seaweed';
            const height = rand(60, 160);
            const width = rand(15, 35);
            const left = rand(0, 100);
            const color = pick(seaweedColors);
            const dur = rand(4, 8);

            sw.style.left = `${left}%`;
            sw.style.width = `${width}px`;
            sw.style.height = `${height}px`;
            sw.style.animationDuration = `${dur}s`;
            sw.style.animationDelay = `${rand(0, 3)}s`;

            // Create seaweed SVG
            const segments = Math.floor(rand(3, 6));
            let path = `M${width / 2} ${height}`;
            for (let j = 0; j < segments; j++) {
                const y = height - (height / segments) * (j + 1);
                const cx1 = width / 2 + (j % 2 === 0 ? width * 0.4 : -width * 0.4);
                const cx2 = width / 2 + (j % 2 === 0 ? -width * 0.3 : width * 0.3);
                path += ` Q${cx1} ${y + height / segments / 2} ${width / 2} ${y}`;
            }

            sw.innerHTML = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
                <path d="${path}" stroke="${color}" stroke-width="${rand(3, 6)}" fill="none" opacity="0.6" stroke-linecap="round"/>
                <path d="${path}" stroke="${color}" stroke-width="${rand(1, 3)}" fill="none" opacity="0.3" stroke-linecap="round" transform="translate(${rand(-3, 3)}, 0)"/>
            </svg>`;

            seafloor.appendChild(sw);
        }

        // Add coral silhouettes
        for (let i = 0; i < 5; i++) {
            const coral = document.createElement('div');
            coral.style.position = 'absolute';
            coral.style.bottom = '0';
            coral.style.left = `${rand(5, 95)}%`;
            const cw = rand(30, 70);
            const ch = rand(25, 55);
            coral.style.width = `${cw}px`;
            coral.style.height = `${ch}px`;
            coral.style.opacity = '0.3';

            coral.innerHTML = `<svg viewBox="0 0 ${cw} ${ch}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
                <path d="M${cw * 0.5} ${ch} Q${cw * 0.3} ${ch * 0.5} ${cw * 0.2} ${ch * 0.2} Q${cw * 0.15} 0 ${cw * 0.25} ${ch * 0.1}
                         M${cw * 0.5} ${ch} Q${cw * 0.5} ${ch * 0.4} ${cw * 0.5} ${ch * 0.1}
                         M${cw * 0.5} ${ch} Q${cw * 0.7} ${ch * 0.5} ${cw * 0.8} ${ch * 0.15} Q${cw * 0.85} 0 ${cw * 0.75} ${ch * 0.1}"
                      stroke="#1a4a3a" stroke-width="3" fill="none" stroke-linecap="round"/>
            </svg>`;

            seafloor.appendChild(coral);
        }
    }

    // === INITIALIZATION ===
    initParticles();
    initSeafloor();

    // Staggered initial spawn
    // Background schools first
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createSchool(), i * 2000);
    }

    // Mid-layer reef fish
    for (let i = 0; i < 6; i++) {
        setTimeout(() => createFish({ layer: 'mid' }), 1000 + i * 1500);
    }

    // First majestic creature after a delay
    setTimeout(() => createMajesticCreature(), 8000);

    // Continuous spawning
    // Individual reef fish
    setInterval(() => {
        createFish({ layer: 'mid' });
    }, 5000);

    // Schools
    setInterval(() => {
        if (Math.random() > 0.3) createSchool();
    }, 10000);

    // Majestic creatures (turtle, shark, ray) - occasionally
    setInterval(() => {
        if (Math.random() > 0.5) createMajesticCreature();
    }, 25000);

    // Background fish
    setInterval(() => {
        createFish({ layer: 'bg' });
    }, 7000);
}

// ==========================================
// CORAL REEF SCENE
// ==========================================
function initCoralReef() {
    const reefContainer = document.querySelector('.reef-container');
    if (!reefContainer) return;

    const background = reefContainer.querySelector('.reef-background');
    const midground = reefContainer.querySelector('.reef-midground');
    const foreground = reefContainer.querySelector('.reef-foreground');
    const fishContainer = document.getElementById('reefFishContainer');
    const particlesContainer = document.getElementById('reefParticles');

    // Coral types with vibrant colors
    const coralTypes = [
        {
            name: 'branching-coral',
            svg: (color) => `<svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 120 L40 80 L25 60 L20 40 L15 20" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M40 80 L55 60 L60 40 L65 25" stroke="${color}" stroke-width="5" fill="none" stroke-linecap="round"/>
                <path d="M40 90 L30 75 L25 55" stroke="${color}" stroke-width="4" fill="none" stroke-linecap="round"/>
                <path d="M40 85 L50 70 L55 50" stroke="${color}" stroke-width="4" fill="none" stroke-linecap="round"/>
                <circle cx="15" cy="20" r="4" fill="${color}" opacity="0.8"/>
                <circle cx="65" cy="25" r="3.5" fill="${color}" opacity="0.8"/>
                <circle cx="25" cy="55" r="3" fill="${color}" opacity="0.7"/>
                <circle cx="55" cy="50" r="3" fill="${color}" opacity="0.7"/>
            </svg>`
        },
        {
            name: 'brain-coral',
            svg: (color) => `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="45" ry="30" fill="${color}" opacity="0.9"/>
                <path d="M20 45 Q30 40 40 45 Q50 50 60 45 Q70 40 80 45" stroke="${color}" stroke-width="3" fill="none" opacity="0.6"/>
                <path d="M15 55 Q25 50 35 55 Q45 60 55 55 Q65 50 75 55 Q85 50 90 55" stroke="${color}" stroke-width="3" fill="none" opacity="0.6"/>
                <path d="M25 35 Q35 30 45 35 Q55 40 65 35 Q75 30 85 35" stroke="${color}" stroke-width="2.5" fill="none" opacity="0.5"/>
                <ellipse cx="50" cy="50" rx="40" ry="25" fill="${color}" opacity="0.3"/>
            </svg>`
        },
        {
            name: 'soft-coral',
            svg: (color) => `<svg viewBox="0 0 90 110" xmlns="http://www.w3.org/2000/svg">
                <path d="M45 110 L45 70 Q30 60 25 45 Q20 30 30 20 Q35 15 40 20" fill="${color}" opacity="0.8"/>
                <path d="M45 70 Q60 60 65 45 Q70 30 60 20 Q55 15 50 20" fill="${color}" opacity="0.8"/>
                <path d="M45 80 Q35 70 30 55 Q25 40 35 30" fill="${color}" opacity="0.6"/>
                <path d="M45 80 Q55 70 60 55 Q65 40 55 30" fill="${color}" opacity="0.6"/>
                <ellipse cx="45" cy="75" rx="15" ry="20" fill="${color}" opacity="0.4"/>
            </svg>`
        },
        {
            name: 'sea-fan',
            svg: (color) => `<svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 130 L50 90" stroke="${color}" stroke-width="4" fill="none"/>
                <ellipse cx="50" cy="60" rx="40" ry="50" fill="none" stroke="${color}" stroke-width="2" opacity="0.7"/>
                <ellipse cx="50" cy="60" rx="30" ry="40" fill="none" stroke="${color}" stroke-width="2" opacity="0.6"/>
                <ellipse cx="50" cy="60" rx="20" ry="30" fill="none" stroke="${color}" stroke-width="2" opacity="0.5"/>
                <path d="M50 90 Q30 70 20 50" stroke="${color}" stroke-width="2" fill="none" opacity="0.6"/>
                <path d="M50 90 Q70 70 80 50" stroke="${color}" stroke-width="2" fill="none" opacity="0.6"/>
                <path d="M50 85 Q35 65 25 45" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.5"/>
                <path d="M50 85 Q65 65 75 45" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.5"/>
            </svg>`
        },
        {
            name: 'anemone',
            svg: (color) => `<svg viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="40" cy="75" rx="30" ry="15" fill="${color}" opacity="0.8"/>
                <path d="M20 70 Q15 50 10 30 Q8 20 15 15" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M30 70 Q28 45 25 25 Q23 15 30 10" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M40 70 Q40 40 40 20 Q40 10 45 8" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M50 70 Q52 45 55 25 Q57 15 50 10" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M60 70 Q65 50 70 30 Q72 20 65 15" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
                <circle cx="15" cy="15" r="3" fill="${color}" opacity="0.9"/>
                <circle cx="30" cy="10" r="3" fill="${color}" opacity="0.9"/>
                <circle cx="45" cy="8" r="3" fill="${color}" opacity="0.9"/>
                <circle cx="50" cy="10" r="3" fill="${color}" opacity="0.9"/>
                <circle cx="65" cy="15" r="3" fill="${color}" opacity="0.9"/>
            </svg>`
        }
    ];

    const coralColors = [
        '#ff6b6b', // Coral red
        '#ff8c42', // Orange
        '#ffa07a', // Light salmon
        '#dda0dd', // Plum
        '#c77dff', // Purple
        '#48cae4', // Teal
        '#00b4d8', // Aqua
        '#ff69b4', // Hot pink
        '#ff1493', // Deep pink
        '#ffb3ba'  // Light pink
    ];

    // Marine creatures for the reef
    const reefCreatures = [
        {
            name: 'clownfish',
            svg: `<svg viewBox="0 0 60 35" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="30" cy="17.5" rx="20" ry="12" fill="#ff6b2b"/>
                <rect x="18" y="8" width="3" height="19" rx="1" fill="#fff" opacity="0.9"/>
                <rect x="30" y="9" width="3" height="17" rx="1" fill="#fff" opacity="0.9"/>
                <path d="M45 17.5 Q52 12 55 17.5 Q52 23 45 17.5" fill="#ff6b2b"/>
                <circle cx="42" cy="14" r="2.5" fill="#fff"/>
                <circle cx="42.5" cy="14" r="1.5" fill="#111"/>
            </svg>`,
            size: [40, 55]
        },
        {
            name: 'blue-tang',
            svg: `<svg viewBox="0 0 65 40" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="32" cy="20" rx="25" ry="15" fill="#0096c7"/>
                <path d="M48 20 Q56 14 60 20 Q56 26 48 20" fill="#ffd60a"/>
                <circle cx="45" cy="16" r="2.5" fill="#fff"/>
                <circle cx="45.5" cy="16" r="1.5" fill="#111"/>
            </svg>`,
            size: [45, 60]
        },
        {
            name: 'butterflyfish',
            svg: `<svg viewBox="0 0 55 50" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="28" cy="25" rx="20" ry="18" fill="#ffd60a"/>
                <circle cx="20" cy="18" r="3" fill="#111" opacity="0.3"/>
                <circle cx="32" cy="28" r="2.5" fill="#111" opacity="0.2"/>
                <path d="M42 25 Q48 20 50 25 Q48 30 42 25" fill="#ffb703"/>
                <circle cx="40" cy="21" r="2.5" fill="#fff"/>
                <circle cx="40.5" cy="21" r="1.5" fill="#111"/>
            </svg>`,
            size: [40, 55]
        },
        {
            name: 'angelfish',
            svg: `<svg viewBox="0 0 50 65" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="25" cy="32" rx="18" ry="25" fill="#c77dff"/>
                <rect x="15" y="10" width="2.5" height="44" rx="1" fill="#7b2cbf" opacity="0.4"/>
                <rect x="25" y="9" width="2.5" height="46" rx="1" fill="#7b2cbf" opacity="0.4"/>
                <path d="M38 32 Q45 26 48 32 Q45 38 38 32" fill="#9d4edd"/>
                <circle cx="38" cy="27" r="2.5" fill="#fff"/>
                <circle cx="38.5" cy="27" r="1.5" fill="#111"/>
            </svg>`,
            size: [45, 60]
        },
        {
            name: 'seahorse',
            svg: `<svg viewBox="0 0 35 70" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 70 Q15 55 18 45 Q20 35 17 25 Q15 15 20 8 Q22 5 25 8 Q28 12 25 18 Q22 25 25 35 Q28 45 25 55 Q22 65 17 70" fill="#ffa07a"/>
                <circle cx="23" cy="10" r="2" fill="#111"/>
                <path d="M20 8 Q18 5 15 6" stroke="#ffa07a" stroke-width="2" fill="none"/>
            </svg>`,
            size: [35, 50]
        }
    ];

    // Create corals
    function createCoral(layer, position) {
        const coralType = coralTypes[Math.floor(Math.random() * coralTypes.length)];
        const color = coralColors[Math.floor(Math.random() * coralColors.length)];
        const coral = document.createElement('div');
        coral.className = 'coral';
        
        const height = 80 + Math.random() * 100;
        const width = height * 0.7;
        
        coral.style.width = `${width}px`;
        coral.style.height = `${height}px`;
        coral.style.left = `${position}%`;
        coral.style.animationDuration = `${4 + Math.random() * 4}s`;
        coral.style.animationDelay = `${Math.random() * 2}s`;
        
        coral.innerHTML = coralType.svg(color);
        layer.appendChild(coral);
    }

    // Create sea plants
    function createSeaPlant(layer, position) {
        const plant = document.createElement('div');
        plant.className = 'sea-plant';
        
        const height = 60 + Math.random() * 80;
        const width = 20 + Math.random() * 15;
        const color = coralColors[Math.floor(Math.random() * coralColors.length)];
        
        plant.style.width = `${width}px`;
        plant.style.height = `${height}px`;
        plant.style.left = `${position}%`;
        plant.style.animationDuration = `${3 + Math.random() * 3}s`;
        plant.style.animationDelay = `${Math.random() * 2}s`;
        
        // Create wavy plant SVG
        const segments = 4 + Math.floor(Math.random() * 3);
        let path = `M${width / 2} ${height}`;
        for (let i = 0; i < segments; i++) {
            const y = height - (height / segments) * (i + 1);
            const cx = width / 2 + (i % 2 === 0 ? width * 0.3 : -width * 0.3);
            path += ` Q${cx} ${y + height / segments / 2} ${width / 2} ${y}`;
        }
        
        plant.innerHTML = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
            <path d="${path}" stroke="${color}" stroke-width="${3 + Math.random() * 2}" fill="none" opacity="0.7" stroke-linecap="round"/>
        </svg>`;
        
        layer.appendChild(plant);
    }

    // Create reef fish
    function createReefFish() {
        const creature = reefCreatures[Math.floor(Math.random() * reefCreatures.length)];
        const fish = document.createElement('div');
        const direction = Math.random() > 0.5 ? '' : 'reverse';
        fish.className = `reef-fish ${direction}`;
        
        const size = creature.size[0] + Math.random() * (creature.size[1] - creature.size[0]);
        const left = 10 + Math.random() * 80;
        const top = 20 + Math.random() * 60;
        
        fish.style.width = `${size}px`;
        fish.style.height = `${size * 0.7}px`;
        fish.style.left = `${left}%`;
        fish.style.top = `${top}%`;
        fish.style.animationDuration = `${6 + Math.random() * 6}s`;
        fish.style.animationDelay = `${Math.random() * 3}s`;
        
        fish.innerHTML = creature.svg;
        fishContainer.appendChild(fish);
    }

    // Create starfish
    function createStarfish() {
        const starfish = document.createElement('div');
        starfish.className = 'starfish';
        
        const size = 30 + Math.random() * 25;
        const color = coralColors[Math.floor(Math.random() * coralColors.length)];
        
        starfish.style.width = `${size}px`;
        starfish.style.height = `${size}px`;
        starfish.style.left = `${10 + Math.random() * 80}%`;
        starfish.style.bottom = `${10 + Math.random() * 30}px`;
        starfish.style.animationDuration = `${15 + Math.random() * 10}s`;
        
        starfish.innerHTML = `<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 5 L28 18 L42 18 L31 26 L35 40 L25 32 L15 40 L19 26 L8 18 L22 18 Z" fill="${color}" opacity="0.8"/>
            <circle cx="25" cy="25" r="5" fill="${color}" opacity="0.6"/>
        </svg>`;
        
        foreground.appendChild(starfish);
    }

    // Create seahorse
    function createSeahorse() {
        const seahorse = document.createElement('div');
        seahorse.className = 'seahorse';
        
        const size = 40 + Math.random() * 20;
        
        seahorse.style.width = `${size}px`;
        seahorse.style.height = `${size * 2}px`;
        seahorse.style.left = `${15 + Math.random() * 70}%`;
        seahorse.style.top = `${30 + Math.random() * 40}%`;
        seahorse.style.animationDuration = `${3 + Math.random() * 2}s`;
        seahorse.style.animationDelay = `${Math.random() * 2}s`;
        
        seahorse.innerHTML = reefCreatures.find(c => c.name === 'seahorse').svg;
        midground.appendChild(seahorse);
    }

    // Create crab
    function createCrab() {
        const crab = document.createElement('div');
        crab.className = 'crab';
        
        const size = 25 + Math.random() * 15;
        const color = coralColors[Math.floor(Math.random() * coralColors.length)];
        
        crab.style.width = `${size}px`;
        crab.style.height = `${size * 0.7}px`;
        crab.style.left = `${10 + Math.random() * 80}%`;
        crab.style.animationDuration = `${6 + Math.random() * 4}s`;
        crab.style.animationDelay = `${Math.random() * 3}s`;
        
        crab.innerHTML = `<svg viewBox="0 0 40 28" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="20" cy="16" rx="12" ry="8" fill="${color}"/>
            <circle cx="14" cy="12" r="2" fill="#111"/>
            <circle cx="26" cy="12" r="2" fill="#111"/>
            <path d="M8 14 L2 10 L4 8" stroke="${color}" stroke-width="2" fill="none"/>
            <path d="M32 14 L38 10 L36 8" stroke="${color}" stroke-width="2" fill="none"/>
            <path d="M10 20 L6 24" stroke="${color}" stroke-width="1.5" fill="none"/>
            <path d="M14 22 L12 26" stroke="${color}" stroke-width="1.5" fill="none"/>
            <path d="M26 22 L28 26" stroke="${color}" stroke-width="1.5" fill="none"/>
            <path d="M30 20 L34 24" stroke="${color}" stroke-width="1.5" fill="none"/>
        </svg>`;
        
        foreground.appendChild(crab);
    }

    // Create particles
    function createReefParticles() {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'reef-particle';
            
            const size = 2 + Math.random() * 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.bottom = `${Math.random() * 20}%`;
            particle.style.animationDuration = `${10 + Math.random() * 10}s`;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            
            particlesContainer.appendChild(particle);
        }
    }

    // Build the reef scene
    // Background layer - distant corals
    for (let i = 0; i < 8; i++) {
        createCoral(background, i * 12 + Math.random() * 8);
    }
    for (let i = 0; i < 6; i++) {
        createSeaPlant(background, i * 16 + Math.random() * 10);
    }

    // Midground layer - medium corals and plants
    for (let i = 0; i < 10; i++) {
        createCoral(midground, i * 10 + Math.random() * 6);
    }
    for (let i = 0; i < 8; i++) {
        createSeaPlant(midground, i * 12 + Math.random() * 8);
    }

    // Foreground layer - close corals
    for (let i = 0; i < 12; i++) {
        createCoral(foreground, i * 8 + Math.random() * 5);
    }
    for (let i = 0; i < 10; i++) {
        createSeaPlant(foreground, i * 10 + Math.random() * 6);
    }

    // Add marine creatures
    for (let i = 0; i < 8; i++) {
        createReefFish();
    }
    for (let i = 0; i < 3; i++) {
        createStarfish();
    }
    for (let i = 0; i < 2; i++) {
        createSeahorse();
    }
    for (let i = 0; i < 3; i++) {
        createCrab();
    }

    // Add particles
    createReefParticles();

    // Continuously add more fish
    setInterval(() => {
        if (Math.random() > 0.3) {
            createReefFish();
        }
    }, 5000);
}

// ==========================================
// NAVIGATION
// ==========================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    const sections = document.querySelectorAll('.page-section');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show target section
            sections.forEach(section => {
                section.classList.remove('active-section');
                if (section.id === targetId) {
                    section.classList.add('active-section');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
            
                        // Close mobile menu
            mobileMenu.classList.remove('active');

            // Initialize map if map section is shown
            if (targetId === 'map' && window.pollutionMap) {
                setTimeout(() => {
                    if (typeof window.pollutionMap.invalidateSize === 'function') {
                        window.pollutionMap.invalidateSize();
                    }
                }, 100);
            }
        });
    });
}

// ==========================================
// TEAM CAROUSEL
// ==========================================
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    
    let currentIndex = 0;
    let autoSlideInterval;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(index));
           if (dotsContainer) dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        if (currentIndex >= slides.length) currentIndex = 0;
        updateCarousel();
    }
    
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    startAutoSlide();
}

// ==========================================
// INTERACTIVE POLLUTION MAP
// ==========================================
function initMap() {
    // Initialize Leaflet map centered on India
    const map = L.map('pollutionMap').setView([10.0, 78.0], 5);
    setTimeout(function () { map.invalidateSize(); }, 500);
    window.pollutionMap = map;
    
    // Add dark ocean tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    className: 'dark-tiles'
}).addTo(map);
    
    // Hotspot data
    const hotspots = [
        { name: "Mumbai Coast", lat: 19.0760, lng: 72.8777, state: "Maharashtra", region: "West Coast", type: "Plastic & Sewage", severity: "High", color: "orange", sources: "Urban runoff, industrial discharge", impact: "Threat to marine mammals, beach pollution", actions: "Support coastal cleanup drives, report illegal dumping" },
        { name: "Alang Coast", lat: 21.1683, lng: 71.9417, state: "Gujarat", region: "West Coast", type: "Ship Breaking Waste", severity: "Critical", color: "red", sources: "Heavy metals, asbestos, oil residue", impact: "Severe sediment contamination, worker health risks", actions: "Advocate for stricter environmental regulations" },
        { name: "Gulf of Kutch", lat: 22.4707, lng: 69.8597, state: "Gujarat", region: "West Coast", type: "Industrial & Oil", severity: "High", color: "orange", sources: "Refineries, port activities", impact: "Coral reef degradation, mangrove loss", actions: "Promote sustainable port practices" },
        { name: "Chennai Coast", lat: 13.0827, lng: 80.2707, state: "Tamil Nadu", region: "East Coast", type: "Sewage & Plastic", severity: "High", color: "orange", sources: "Untreated sewage, urban litter", impact: "Beach contamination, marine life ingestion", actions: "Use designated waste disposal, join beach cleanups" },
        { name: "Ennore Creek", lat: 13.2134, lng: 80.3208, state: "Tamil Nadu", region: "East Coast", type: "Coal & Industrial", severity: "Critical", color: "red", sources: "Thermal power plants, fly ash", impact: "Fishing community livelihood loss, toxic water", actions: "Support affected communities, report violations" },
        { name: "Kochi Coast", lat: 9.9312, lng: 76.2673, state: "Kerala", region: "South West", type: "Sewage & Oil", severity: "Moderate", color: "yellow", sources: "Port operations, domestic sewage", impact: "Backwater ecosystem disruption", actions: "Support eco-tourism, reduce plastic use" },
        { name: "Vembanad Lake Outflow", lat: 9.6385, lng: 76.4385, state: "Kerala", region: "South West", type: "Agricultural Runoff", severity: "High", color: "orange", sources: "Pesticides, fertilizers", impact: "Algal blooms, fish kills", actions: "Promote organic farming practices" },
        { name: "Mangalore Coast", lat: 12.9141, lng: 74.8560, state: "Karnataka", region: "West Coast", type: "Industrial & Port", severity: "Moderate", color: "yellow", sources: "Petrochemical plants, shipping", impact: "Coastal erosion, water quality decline", actions: "Monitor industrial discharge, support conservation" },
        { name: "Visakhapatnam Coast", lat: 17.6868, lng: 83.2185, state: "Andhra Pradesh", region: "East Coast", type: "Industrial & Oil", severity: "High", color: "orange", sources: "Steel plants, port activities", impact: "Heavy metal contamination", actions: "Advocate for green port initiatives" },
        { name: "Paradeep Port", lat: 20.2689, lng: 86.7189, state: "Odisha", region: "East Coast", type: "Coal & Industrial", severity: "High", color: "orange", sources: "Coal handling, industrial discharge", impact: "Dolphin habitat disruption", actions: "Demand environmental impact assessments" },
        { name: "Chilika Lagoon Region", lat: 19.8135, lng: 85.4235, state: "Odisha", region: "East Coast", type: "Siltation & Waste", severity: "Moderate", color: "yellow", sources: "Agricultural runoff, plastic", impact: "Threat to Irrawaddy dolphins", actions: "Participate in lagoon conservation efforts" },
        { name: "Sundarbans Delta", lat: 21.9497, lng: 88.9235, state: "West Bengal", region: "East Coast", type: "Plastic & Chemical", severity: "High", color: "orange", sources: "Upstream industrial waste, local litter", impact: "Threat to Royal Bengal Tiger habitat", actions: "Support mangrove restoration projects" },
        { name: "Digha Coast", lat: 21.6247, lng: 87.5035, state: "West Bengal", region: "East Coast", type: "Tourism Waste", severity: "Moderate", color: "yellow", sources: "Plastic bottles, food waste", impact: "Beach degradation, marine ingestion", actions: "Practice responsible tourism" },
        { name: "Lakshadweep Islands", lat: 10.5667, lng: 72.6333, state: "Lakshadweep", region: "Islands", type: "Marine Debris", severity: "Low", color: "green", sources: "Ocean currents bringing external waste", impact: "Coral reef smothering", actions: "Support island cleanup initiatives" },
        { name: "Andaman & Nicobar Islands", lat: 11.7401, lng: 92.6586, state: "Andaman & Nicobar", region: "Islands", type: "Tourism & Plastic", severity: "Low", color: "green", sources: "Tourist activities, shipping", impact: "Localized reef damage", actions: "Follow eco-guidelines when visiting" }
    ];
    
    // Custom marker icons
    const createCustomIcon = (color) => {
        return L.divIcon({
            className: 'custom-marker',
            html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px ${color};"></div>`,
            iconSize: [26, 26],
            iconAnchor: [13, 13]
        });
    };
    
    const colorMap = {
        'green': '#4ade80',
        'yellow': '#facc15',
        'orange': '#fb923c',
        'red': '#ef4444'
    };
    
    // Add markers
    hotspots.forEach(spot => {
        const marker = L.marker([spot.lat, spot.lng], {
            icon: createCustomIcon(colorMap[spot.color])
        }).addTo(map);
        
        const popupContent = `
            <div style="font-family: 'Outfit', sans-serif; min-width: 250px;">
                <h3 style="color: #00b4d8; margin-bottom: 10px; font-family: 'Cinzel', serif;">${spot.name}</h3>
                <p><strong>State:</strong> ${spot.state}</p>
                <p><strong>Region:</strong> ${spot.region}</p>
                <hr style="border-color: #48cae4; margin: 10px 0;">
                <p><strong>Pollution Type:</strong> ${spot.type}</p>
                <p><strong>Severity:</strong> <span style="color: ${colorMap[spot.color]}; font-weight: bold;">${spot.severity}</span></p>
                <p><strong>Sources:</strong> ${spot.sources}</p>
                <p><strong>Impact:</strong> ${spot.impact}</p>
                <p><strong>Actions:</strong> ${spot.actions}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            className: 'custom-popup'
        });
    });
    
    // Fit bounds to show all of India coastline roughly
    map.fitBounds([[6.0, 68.0], [22.0, 92.0]]);
}

// ==========================================
// REPORT FORM
// ==========================================
function initReportForm() {
    const form = document.getElementById('reportForm');
    const locationSelect = document.getElementById('location');
    const otherLocationGroup = document.getElementById('otherLocationGroup');
    const postReport = document.getElementById('postReport');
    const redirectBtn = document.getElementById('redirectBtn');
    const rotatingTip = document.getElementById('rotatingTip');
    
    const tips = [
        "Reduce single-use plastics by carrying reusable bags and bottles.",
        "Join local beach cleanup drives to prevent waste from reaching the ocean.",
        "Dispose of hazardous waste like batteries and chemicals at designated facilities.",
        "Support eco-friendly products and sustainable seafood choices.",
        "Spread awareness about marine pollution in your community and schools.",
        "Report future incidents promptly to help authorities take action.",
        "Conserve water at home to reduce the volume of wastewater entering oceans."
    ];
    
    locationSelect.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
            otherLocationGroup.style.display = 'block';
            document.getElementById('otherLocation').required = true;
        } else {
            otherLocationGroup.style.display = 'none';
            document.getElementById('otherLocation').required = false;
        }
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.display = 'none';
        postReport.style.display = 'block';
        
        // Set random tip
        rotatingTip.textContent = tips[Math.floor(Math.random() * tips.length)];
        
        // Auto-redirect after 3 seconds
        setTimeout(() => {
            window.open('https://pgportal.gov.in/', '_blank');
        }, 3000);
    });
}

// ==========================================
// OCEANBUDDY CHATBOT
// ==========================================
/* =========================================================
   OceanBuddy - reply engine
   Drop-in replacement for your getBotReply(message).
   Returns a plain string. No libraries, no API key needed.
   ========================================================= */

/* ---------- 1. Text helpers ---------- */

function obNormalize(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s+\-*/.%]/g, " ")   // keep characters needed for maths
    .replace(/\s+/g, " ")
    .trim();
}

// Edit distance between two words (used to forgive typos)
function obDistance(a, b) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 3;
  const dp = [];
  for (let i = 0; i <= a.length; i++) dp[i] = [i];
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[a.length][b.length];
}

// Do two single words count as "the same" despite a typo?
function obWordMatch(word, keyword) {
  if (word === keyword) return true;
  if (keyword.length <= 3) return false;               // short words must match exactly
  const allowed = keyword.length <= 6 ? 1 : 2;        // longer words allow more typos
  return obDistance(word, keyword) <= allowed;
}

// Score how well a message matches a list of keywords/phrases
function obScore(normalized, tokens, keywords) {
  let score = 0;
  for (const kw of keywords) {
    if (kw.includes(" ")) {
      if (normalized.includes(kw)) {
        score += 2.5;                                   // exact phrase = strongest signal
      } else {
        const parts = kw.split(" ");
        // every word of the phrase is present, allowing typos
        if (parts.every(w => tokens.some(t => obWordMatch(t, w)))) score += 2;
      }
    } else if (tokens.includes(kw)) {
      score += 1;                                       // exact word
    } else if (tokens.some(t => obWordMatch(t, kw))) {
      score += 0.8;                                     // word with a typo
    }
  }
  return score;
}

/* ---------- 2. Knowledge base ---------- */
/* To add a topic: copy one block, change the keywords and the reply. */

const OB_TOPICS = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "hii", "hola", "namaste", "good morning", "good evening", "good afternoon", "sup"],
    replies: [
      "Hi there! 🌊 I'm OceanBuddy. Ask me about marine pollution, how to help the ocean, or how to use this site.",
      "Hello! 👋 I can chat about ocean pollution, marine life, or what you can do to help. What would you like to know?"
    ]
  },
  {
    id: "howareyou",
    keywords: ["how are you", "how r u", "how do you do", "whats up", "what's up", "how is it going"],
    replies: ["I'm doing great, thanks for asking! 🐬 Want to learn something about the ocean today?"]
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "thankyou", "thx", "ty", "appreciate"],
    replies: ["You're welcome! 🌊 Ask me anything else about the ocean any time."]
  },
  {
    id: "bye",
    keywords: ["bye", "goodbye", "see you", "later", "cya"],
    replies: ["Goodbye! Remember: every small action helps the ocean. 🐢"]
  },
  {
    id: "whoareyou",
    keywords: ["who are you", "your name", "what are you", "are you a bot", "are you real", "are you human"],
    replies: ["I'm OceanBuddy, the Ocean Pulse chatbot. I'm a program, not a person, and I answer questions about marine pollution and this website."]
  },
  {
    id: "help",
    keywords: ["help", "what can you do", "what can i ask", "commands", "options", "topics"],
    replies: [
      "You can ask me about:\n• What marine pollution is\n• Plastic, microplastics, oil spills and sewage\n• Coral reefs and marine animals\n• Pollution in India's coastal waters\n• How you can help\n• How to use the Map, Report and Feedback pages\n\nJust type your question!"
    ]
  },
  {
    id: "about-site",
    keywords: ["ocean pulse", "this website", "this site", "about you", "about this", "what is this", "purpose", "mission", "student"],
    replies: ["Ocean Pulse is a student-led project that raises awareness about marine pollution in India. Use the Learn page to understand the problem, the Pollution Map to see affected areas, and the Report page to share what you see."]
  },
  {
    id: "marine-pollution",
    keywords: ["marine pollution", "ocean pollution", "sea pollution", "water pollution", "what is pollution", "pollution", "polluted", "contamination", "pollutants"],
    replies: ["Marine pollution is when harmful materials enter the ocean. This includes plastic waste, oil, chemicals, sewage, and fertiliser runoff. Most of it starts on land and reaches the sea through rivers, drains, and coastlines."]
  },
  {
    id: "plastic",
    keywords: ["plastic", "plastics", "bottle", "bags", "polythene", "garbage", "trash", "waste", "litter", "rubbish"],
    replies: ["Plastic is the most common type of marine litter. Millions of tonnes enter the oceans every year. It doesn't truly biodegrade. It breaks into smaller and smaller pieces that last for hundreds of years and harm animals that swallow it or get tangled in it."]
  },
  {
    id: "microplastics",
    keywords: ["microplastic", "microplastics", "tiny plastic", "microbeads", "nanoplastic"],
    replies: ["Microplastics are plastic pieces smaller than 5 mm. They come from broken-down larger plastic, synthetic clothing fibres, and some cosmetics. They are eaten by plankton and fish, so they can move up the food chain."]
  },
  {
    id: "oil",
    keywords: ["oil", "oil spill", "petroleum", "crude", "tanker", "fuel spill"],
    replies: ["Oil spills coat birds' feathers and animals' fur, poison fish, and damage coastal habitats. Oil can linger for years. Spills come from tanker accidents, offshore drilling, and also from routine leaks and runoff from land."]
  },
  {
    id: "sewage",
    keywords: ["sewage", "wastewater", "chemicals", "fertilizer", "fertiliser", "runoff", "industrial", "effluent", "eutrophication", "algal bloom", "algae"],
    replies: ["Untreated sewage, industrial waste, and fertiliser runoff add nutrients and toxins to the sea. Extra nutrients can cause algal blooms that use up the oxygen in the water, creating 'dead zones' where marine life can't survive."]
  },
  {
    id: "ghostnets",
    keywords: ["fishing net", "fishing nets", "ghost net", "ghost nets", "ghost gear", "fishing gear", "nets", "overfishing"],
    replies: ["'Ghost gear' is fishing equipment that is lost or abandoned at sea. It keeps trapping fish, turtles, dolphins and other animals for years. Overfishing is a separate problem that reduces fish populations."]
  },
  {
    id: "coral",
    keywords: ["coral", "corals", "reef", "reefs", "bleaching"],
    replies: ["Coral reefs cover a tiny fraction of the seafloor but support roughly a quarter of marine species. Warming water, pollution and runoff stress corals and can cause bleaching, when they lose the algae that feed them."]
  },
  {
    id: "animals",
    keywords: ["turtle", "turtles", "whale", "whales", "dolphin", "dolphins", "fish", "seabird", "seabirds", "marine life", "marine animals", "sea animals", "wildlife", "animals", "species", "biodiversity"],
    replies: ["Marine animals suffer from pollution in many ways: they swallow plastic by mistake, get tangled in nets and rope, and lose habitat to chemical and oil damage. Sea turtles, dolphins, whales, seabirds and fish are all affected."]
  },
  {
    id: "india",
    keywords: ["india", "indian", "coast", "coastal", "coastline", "mumbai", "chennai", "kerala", "gujarat", "goa", "arabian sea", "bay of bengal", "indian ocean"],
    replies: ["India has a coastline of roughly 7,500 km, and millions of people depend on it for fishing, tourism and trade. Rivers, busy ports, cities and fishing activity all add pollution to India's coastal waters. The Pollution Map page shows affected areas."]
  },
  {
    id: "climate",
    keywords: ["climate", "climate change", "global warming", "acidification", "sea level", "warming", "carbon", "co2"],
    replies: ["Climate change and ocean pollution make each other worse. The ocean absorbs heat and carbon dioxide, which warms the water, raises sea levels, and makes it more acidic. Stressed ecosystems like coral reefs then have a harder time handling pollution."]
  },
  {
    id: "oceanfacts",
    keywords: ["ocean facts", "fun fact", "fact", "facts", "interesting", "did you know", "oxygen", "how big", "how much of earth", "deepest"],
    replies: [
      "Fun fact: the ocean covers about 71% of Earth's surface, and it produces roughly half of the oxygen we breathe. 🌍",
      "Fun fact: more than 80% of the ocean is unexplored. We know less about our seafloor than about the surface of Mars. 🔭"
    ]
  },
  {
    id: "health",
    keywords: ["humans", "human health", "seafood", "affect us", "affect people", "livelihood", "fishermen", "tourism", "economy", "why does it matter", "why it matters", "why care", "important"],
    replies: ["It matters to people too. Pollution can contaminate seafood, hurt fishing and tourism jobs, and damage coastal protection like mangroves and reefs. A healthy ocean also gives us food, oxygen and a stable climate."]
  },
  {
    id: "solutions",
    keywords: ["what can i do", "how do i stop", "how can we stop", "how to prevent", "how can i help", "how to help", "how to stop", "solution", "solutions", "reduce", "prevent", "save the ocean", "save ocean", "cleanup", "clean up", "recycle", "recycling", "reuse", "eco friendly", "eco-friendly", "volunteer", "act"],
    replies: ["You can help in lots of ways:\n• Cut down on single-use plastic (bags, bottles, straws)\n• Recycle and dispose of waste properly\n• Join or organise a beach clean-up\n• Choose eco-friendly products\n• Share what you learn with friends and family\n• Report pollution on the Report page"]
  },
  {
    id: "report",
    keywords: ["report", "submit", "complain", "complaint", "spotted", "found pollution", "report pollution"],
    replies: ["You can report pollution you've spotted on the Report page. Share the location and what you saw, and it helps us build a picture of the problem."]
  },
  {
    id: "map",
    keywords: ["map", "location", "locations", "hotspot", "hotspots", "where is the pollution", "pollution map", "affected areas"],
    replies: ["The Pollution Map page shows affected coastal areas across India. You can zoom and click the markers to read details."]
  },
  {
    id: "feedback",
    keywords: ["feedback", "suggestion", "suggestions", "opinion", "review", "contact", "contact us", "email"],
    replies: ["We'd love your thoughts! Use the Feedback page to send us suggestions or comments about the site."]
  },
  {
    id: "team",
    keywords: ["who made", "who built", "who created", "team", "developers", "creators", "group", "founders", "authors"],
    replies: ["Ocean Pulse was created by a team of students. You can see the group on the Home page."]
  },
  {
    id: "joke",
    keywords: ["joke", "funny", "make me laugh", "humor", "humour", "laugh"],
    replies: [
      "Why did the fish blush? Because it saw the ocean's bottom! 🐟",
      "What do you call a fish wearing a bowtie? Sofishticated! 🎩",
      "Why are fish so smart? They live in schools! 🏫"
    ]
  }
];

/* ---------- 3. Special handlers (time, date, maths) ---------- */

function obSpecial(normalized, original) {
  if (/\b(what time|whats the time|the time|current time|time now|time is it)\b/.test(normalized) && !/(take|takes|long|years|decompose)/.test(normalized)) {
    return "It's " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " on your device. ⏰";
  }
  if (/\b(todays date|the date|what date|what day|day is it|date today|date is it)\b/.test(normalized)) {
    return "Today is " + new Date().toLocaleDateString([], { weekday: "long", year: "numeric", month: "long", day: "numeric" }) + ". 📅";
  }
  // Simple maths, e.g. "what is 12 * 4" (no eval, only safe parsing)
  const m = original.replace(/x/gi, "*").replace(/÷/g, "/").match(/(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)/);
  if (m) {
    const a = parseFloat(m[1]), b = parseFloat(m[3]);
    let r;
    if (m[2] === "+") r = a + b;
    else if (m[2] === "-") r = a - b;
    else if (m[2] === "*") r = a * b;
    else r = b === 0 ? null : a / b;
    if (r === null) return "I can't divide by zero! 😄";
    return a + " " + m[2] + " " + b + " = " + Math.round(r * 1e6) / 1e6;
  }
  return null;
}

/* ---------- 4. Main function ---------- */

let obLastTopic = null;

function getBotReply(message) {
  const original = String(message || "").trim();
  if (!original) return "Type a question and I'll do my best to answer! 🌊";
    const kb = knowledgeReply(original);
  if (kb) return kb;

  const normalized = obNormalize(original);
  const tokens = normalized.split(" ").filter(Boolean);

  // 1) time / date / maths
  const special = obSpecial(normalized, original);
  if (special) return special;

  // 2) "tell me more" follow-ups
  if (obLastTopic && /\b(more|explain|elaborate|continue|details)\b/.test(normalized) && tokens.length <= 5) {
    return "Here's a good next step: open the Learn page for a deeper look at " + obLastTopic.label +
           ", or ask me a more specific question about it. 📖";
  }

  // 3) find the best-matching topic
  let best = null, bestScore = 0;
  for (const topic of OB_TOPICS) {
    const score = obScore(normalized, tokens, topic.keywords);
    if (score > bestScore) { best = topic; bestScore = score; }
  }

  // very short messages like "hi" need an exact-ish match, which obScore already handles
  if (best && bestScore >= 0.8) {
    obLastTopic = { id: best.id, label: best.id.replace(/-/g, " ") };
    const list = best.replies;
    return list[Math.floor(Math.random() * list.length)];
  }

  // 4) friendly fallback with suggestions
  return "I'm not sure about that one yet. 🤔 I know most about ocean and marine pollution. Try asking:\n" +
         "• What is marine pollution?\n• How does plastic harm marine life?\n• How can I help the ocean?\n• Tell me an ocean fact";
}


function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const window = document.getElementById('chatbotWindow');
    const close = document.getElementById('chatbotClose');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');
    const messages = document.getElementById('chatbotMessages');
    
    function addMessage(text, isUser = false) {
        const msg = document.createElement('div');
        msg.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        msg.textContent = text;
        msg.style.whiteSpace = 'pre-line';
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
    }
    
    function handleSend() {
        const text = input.value.trim();
        if (!text) return;
        
        addMessage(text, true);
        input.value = '';
        
        // Simulate typing delay
        setTimeout(() => {
            addMessage(getBotReply(text));
        }, 800);
    }
    
    toggle.addEventListener('click', () => {
        window.classList.toggle('open');
    });
    
    close.addEventListener('click', () => {
        window.classList.remove('open');
    });

    // Esc closes the chat too
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') window.classList.remove('open');
    });
    
    send.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
}

// ==========================================
// INTERACTIVE QUIZ
// ==========================================
function initQuiz() {
    // Quiz data
    const allQuestions = [
        { q: "What percentage of Earth's oxygen is produced by the ocean?", options: ["10%", "30%", "50-80%", "90%"], correct: 2, explanation: "The ocean produces 50-80% of the oxygen we breathe, primarily through phytoplankton." },
        { q: "Which marine animal is most likely to mistake a plastic bag for food?", options: ["Sharks", "Sea Turtles", "Dolphins", "Whales"], correct: 1, explanation: "Sea turtles often mistake floating plastic bags for jellyfish, their natural prey." },
        { q: "What is the primary cause of coral bleaching?", options: ["Overfishing", "Warming waters & pollution", "Plastic waste", "Noise pollution"], correct: 1, explanation: "Rising ocean temperatures and chemical pollution cause corals to expel their symbiotic algae, leading to bleaching." },
        { q: "How long does it take for a plastic bottle to decompose in the ocean?", options: ["10 years", "50 years", "100 years", "450+ years"], correct: 3, explanation: "Plastic bottles can take 450 years or more to break down, and even then, they become harmful microplastics." },
        { q: "What are 'ghost nets'?", options: ["Fishing nets made of ghost material", "Abandoned fishing gear that continues to trap marine life", "Nets used for catching ghost fish", "Decorative nets on boats"], correct: 1, explanation: "Ghost nets are abandoned, lost, or discarded fishing gear that continues to entangle and kill marine wildlife for decades." },
        { q: "Which of these is a major source of agricultural marine pollution?", options: ["Pesticide & fertilizer runoff", "Tractor exhaust", "Farm noise", "Crop shadows"], correct: 0, explanation: "Agricultural runoff carries excess nutrients and chemicals into waterways, causing algal blooms and dead zones." },
        { q: "What is biomagnification in the marine food chain?", options: ["Fish getting bigger", "Toxins increasing in concentration as they move up the food chain", "Plankton multiplying rapidly", "Whales eating more"], correct: 1, explanation: "Biomagnification is the process where toxin concentrations increase at each higher level of the food chain, eventually affecting humans." },
                { q: "Which gas does the ocean absorb from the air, making seawater more acidic?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], correct: 1, explanation: "The ocean absorbs carbon dioxide, which lowers the water's pH. This is called ocean acidification and it harms shellfish and corals." },
        { q: "What are microplastics?", options: ["Plastic pieces smaller than 5 mm", "Plastic used in microscopes", "Tiny sea creatures that eat plastic", "Plastic bags made of microfibre"], correct: 0, explanation: "Microplastics are tiny plastic fragments, smaller than 5 mm, that come from broken-down plastic, synthetic clothing fibres and some cosmetics." },
        { q: "Which is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], correct: 2, explanation: "The Pacific Ocean is the largest and deepest, covering about a third of Earth's surface." },
        { q: "What is a marine 'dead zone'?", options: ["A place with no sunlight", "An area with too little oxygen for most sea life", "A fishing ban area", "A very deep trench"], correct: 1, explanation: "Dead zones have very low oxygen, often caused by fertiliser and sewage runoff that trigger huge algal blooms." },
        { q: "Which coastal trees protect shorelines and shelter young fish?", options: ["Pine trees", "Palm trees", "Mangroves", "Banyan trees"], correct: 2, explanation: "Mangroves protect coasts from erosion and storms, and their roots are nurseries for many fish and crabs." },
        { q: "Roughly how much of Earth's surface does the ocean cover?", options: ["About 30%", "About 50%", "About 71%", "About 90%"], correct: 2, explanation: "The ocean covers about 71% of Earth's surface." },
        { q: "What is coral bleaching?", options: ["Corals being cleaned with chemicals", "Corals losing their colourful algae when stressed", "Corals turning white from salt", "Corals growing too fast"], correct: 1, explanation: "When water gets too warm or polluted, corals expel the algae that feed them and turn white. They can die if it lasts too long." },
        { q: "Which item is one of the most commonly collected in beach clean-ups worldwide?", options: ["Cigarette butts", "Glass bottles", "Wooden planks", "Car tyres"], correct: 0, explanation: "Cigarette butts contain plastic fibres and are among the most collected items in clean-ups around the world." },
        { q: "What does 'reef-safe' sunscreen try to avoid?", options: ["Sunlight", "Salt", "Chemicals like oxybenzone that can harm corals", "Fish oil"], correct: 2, explanation: "Some sunscreen chemicals, such as oxybenzone, can harm coral. Reef-safe products avoid them." },
        { q: "Which habit helps reduce ocean plastic the most?", options: ["Burning plastic waste", "Using reusable bottles and bags", "Flushing plastic down the toilet", "Burying plastic on the beach"], correct: 1, explanation: "Cutting down single-use plastic stops it from ever reaching drains, rivers and the sea." },
        { q: "Which sea turtle mainly eats jellyfish and can mistake plastic bags for them?", options: ["Leatherback turtle", "Blue whale", "Great white shark", "Seahorse"], correct: 0, explanation: "Leatherback turtles feed mostly on jellyfish, and floating plastic bags can look just like them." },
        { q: "What is phytoplankton?", options: ["A type of seaweed", "Tiny plant-like organisms that make oxygen and feed the food chain", "A small fish", "A kind of coral"], correct: 1, explanation: "Phytoplankton are microscopic organisms that produce much of the world's oxygen and sit at the base of the ocean food chain." },
        { q: "Roughly how long is India's coastline?", options: ["About 75 km", "About 750 km", "About 7,500 km", "About 75,000 km"], correct: 2, explanation: "India's coastline is roughly 7,500 km long, and millions of people depend on it for their livelihoods." },
        { q: "What happens during eutrophication?", options: ["Too many nutrients cause algae to overgrow and use up oxygen", "The water becomes very clear", "Fish grow larger", "Salt levels fall"], correct: 0, explanation: "Excess nutrients from fertiliser and sewage cause algae blooms. When they die and rot, they use up the oxygen in the water." },
        { q: "How does most ocean plastic reach the sea?", options: ["Rivers and drains carrying litter from land", "Falling from the sky", "Growing on coral", "Made by fish"], correct: 0, explanation: "Most marine plastic starts on land and is carried to the sea by rivers, drains, wind and careless littering." },
        { q: "Which ecosystem is called the 'rainforest of the sea'?", options: ["Coral reefs", "Open ocean", "Sandy beaches", "Polar ice"], correct: 0, explanation: "Coral reefs cover a tiny part of the seafloor yet support roughly a quarter of marine species." }
    ];
    
    let currentQuestions = [];
    let currentIndex = 0;
    let score = 0;
    
    const modal = document.getElementById('quizModal');
    const startScreen = document.getElementById('quizStart');
    const gameScreen = document.getElementById('quizGame');
    const resultScreen = document.getElementById('quizResult');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('quizOptions');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    // Add quiz trigger button to home page (dynamically)
    const heroButtons = document.querySelector('.hero-buttons');
    const quizBtn = document.createElement('button');
    quizBtn.className = 'btn btn-secondary';
    quizBtn.textContent = 'Take the Quiz';
    quizBtn.addEventListener('click', () => {
        modal.classList.add('open');
        resetQuiz();
    });
    heroButtons.appendChild(quizBtn);
    
    document.getElementById('startQuizBtn').addEventListener('click', () => {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        shuffleQuestions();
        showQuestion();
    });
    
    document.getElementById('quizClose').addEventListener('click', () => {
        modal.classList.remove('open');
    });
    
    document.getElementById('restartQuizBtn').addEventListener('click', () => {
        resetQuiz();
        startScreen.style.display = 'block';
        gameScreen.style.display = 'none';
        resultScreen.style.display = 'none';
    });
    
    function shuffleQuestions() {
        // Shuffle and pick 5 questions
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        currentQuestions = shuffled.slice(0, 5);
    }
    
    function resetQuiz() {
        currentIndex = 0;
        score = 0;
    }
    
    function showQuestion() {
        const q = currentQuestions[currentIndex];
        questionText.textContent = q.q;
        progressText.textContent = `Question ${currentIndex + 1}/${currentQuestions.length}`;
        progressBar.innerHTML = `<div class="progress-bar-fill" style="width: ${((currentIndex) / currentQuestions.length) * 100}%"></div>`;
        
        optionsContainer.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = opt;
            btn.addEventListener('click', () => handleAnswer(idx, btn));
            optionsContainer.appendChild(btn);
        });
    }
    
    function handleAnswer(selectedIdx, btnElement) {
        const q = currentQuestions[currentIndex];
        const options = optionsContainer.querySelectorAll('.quiz-option');
        
        // Disable all options
        options.forEach(opt => opt.style.pointerEvents = 'none');
        
        if (selectedIdx === q.correct) {
            score++;
            btnElement.classList.add('correct');
            showAnimation('correct', q.explanation);
        } else {
            btnElement.classList.add('wrong');
            options[q.correct].classList.add('correct');
            showAnimation('wrong', q.explanation);
        }
        
        setTimeout(() => {
            currentIndex++;
            if (currentIndex < currentQuestions.length) {
                showQuestion();
            } else {
                showResults();
            }
               }, selectedIdx === q.correct ? 2800 : 3500);
    }
    
    function showAnimation(type, explanation) {
        const overlay = document.getElementById('animationOverlay');
        const fish = document.getElementById('swimmingFish');
        
        if (type === 'correct') {
            fish.textContent = '🦈';
                        fish.className = 'swimming-fish';
            void fish.offsetWidth;                 // restarts the animation every time
            fish.className = 'swimming-fish animate';
            showCelebrationBubbles();
            // Show explanation briefly via a toast or modify the quiz option text
            const correctBtn = document.querySelector('.quiz-option.correct');
            correctBtn.innerHTML += `<br><small style="color: #4ade80; display: block; margin-top: 5px;">✅ Jaw-some! ${explanation}</small>`;
        } else {
            fish.textContent = '🐋';
            fish.className = 'swimming-fish reverse animate';
            const wrongBtn = document.querySelector('.quiz-option.wrong');
            wrongBtn.innerHTML += `<br><small style="color: #ef4444; display: block; margin-top: 5px;">❌ That's okay! ${explanation}</small>`;
        }
        
        setTimeout(() => {
            fish.className = 'swimming-fish';
        }, 3000);
    }
    
    function showCelebrationBubbles() {
        const container = document.getElementById('celebrationBubbles');
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble-pop';
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.top = `${Math.random() * 100}%`;
            bubble.style.width = `${Math.random() * 30 + 10}px`;
            bubble.style.height = bubble.style.width;
            container.appendChild(bubble);
            setTimeout(() => bubble.remove(), 1000);
        }
    }
    
    function showResults() {
        gameScreen.style.display = 'none';
        resultScreen.style.display = 'block';
        
        const percentage = (score / currentQuestions.length) * 100;
        let title = '';
        let message = '';
        let emoji = '';
        
        if (percentage >= 90) {
            title = 'Ocean Guardian 🦈';
            message = 'Jaw-some! You are a true protector of the seas!';
            emoji = '🦈';
        } else if (percentage >= 70) {
            title = 'Ocean Protector 🐬';
            message = 'Great job! You have a strong understanding of marine conservation.';
            emoji = '🐬';
        } else if (percentage >= 50) {
            title = 'Ocean Explorer 🐢';
            message = 'Good effort! Keep learning about our amazing oceans.';
            emoji = '🐢';
        } else {
            title = 'Future Ocean Hero 🐟';
            message = 'Every ocean expert starts somewhere! Keep exploring and learning.';
            emoji = '🐟';
        }
        
        document.getElementById('resultTitle').textContent = title;
        document.getElementById('resultMessage').textContent = message;
        document.getElementById('resultScore').textContent = `${score}/${currentQuestions.length}`;
        
        showCelebrationBubbles();
    }
}

// ==========================================
// FEEDBACK FORM
// ==========================================
function initFeedback() {
    const form = document.getElementById('feedbackForm');
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('ratingValue');
    const thankYou = document.getElementById('feedbackThankYou');
    const avgDisplay = document.getElementById('avgRatingDisplay');
    
    let currentRating = 0;
    
    // Load existing average
    const existingFeedback = JSON.parse(localStorage.getItem('oceanPulseFeedback') || '[]');
    if (existingFeedback.length > 0) {
        const avg = existingFeedback.reduce((sum, f) => sum + f.rating, 0) / existingFeedback.length;
        avgDisplay.textContent = avg.toFixed(1);
    }
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            currentRating = parseInt(star.dataset.value);
            ratingInput.value = currentRating;
            updateStars();
        });
        
        star.addEventListener('mouseenter', () => {
            const hoverValue = parseInt(star.dataset.value);
            stars.forEach((s, idx) => {
                if (idx < hoverValue) s.classList.add('active');
                else s.classList.remove('active');
            });
        });
    });
    
    document.getElementById('starRating').addEventListener('mouseleave', updateStars);
    
    function updateStars() {
        stars.forEach((s, idx) => {
            if (idx < currentRating) s.classList.add('active');
            else s.classList.remove('active');
        });
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (currentRating === 0) {
            alert('Please select a star rating!');
            return;
        }
        
        const feedback = {
            name: document.getElementById('feedbackName').value || 'Anonymous',
            rating: currentRating,
            message: document.getElementById('feedbackMessage').value,
            date: new Date().toISOString()
        };
        
        const existing = JSON.parse(localStorage.getItem('oceanPulseFeedback') || '[]');
        existing.push(feedback);
        localStorage.setItem('oceanPulseFeedback', JSON.stringify(existing));
        
        const newAvg = existing.reduce((sum, f) => sum + f.rating, 0) / existing.length;
        avgDisplay.textContent = newAvg.toFixed(1);
        
        form.style.display = 'none';
        thankYou.style.display = 'block';
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}
document.addEventListener("click", function (e) {
  const link = e.target.closest("a[href^='#']");
  if (!link || link.classList.contains("nav-link") || link.classList.contains("mobile-link")) return;
  const target = link.getAttribute("href");
  if (!target || target === "#") return;
  const navLink = document.querySelector('.nav-link[href="' + target + '"]');
  if (navLink) { e.preventDefault(); navLink.click(); }
});