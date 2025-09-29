const surveyConfig = {
  // title: "Welcome!",
  // subtitle: "Tell us a bit about you.",
  themeColor: "#076effff",
  defaultSheetName: "Sheet1",
  disclaimer: "[size=7.5px]This assessment is anonymous and secured. Data/response will not be shared or even stored right after your assessment results and diagnosis.[/size]",
  copyright: "© 2025 Affiliate [a=https://www.digistore24.com/page/terms/4/en][u]Terms[/u] & [u]Conditions[/u][/a]",
  completionHref: "https://homedoctorbook.com/book/#aff=twenty-five/",    // last-question CTA link

  fontSizes: {
    question: "1.15em",
    description: "0.95em",
    answers: "1em",
    input: "1em",
    inputLabel: "0.9em",
    comment: "0.95em",
    btnMain: "1.02em",
    btnSub: "0.6em",
    disclaimer: "10px",
    copyright: "11px"
  },
  transparentBackground: true,  // <-- set true to enable transparent card mode
};



const questions = [
  {
    question: "Every 3 Seconds, Someone Dies From a Treatable Condition at Home — Take This Quick Assessment to Discover If You and Your Family Could Be Next and Find Out How to Best Avoid It.",
    description: "Every year, millions die from sudden home accidents and illnesses that could have been prevented with basic knowledge — but [b]hospitals where either too far, too full, or an ambulance was too late.[/b]\n\nThe truth is, [b]your home may be just one small emergency away from tragedy.[/b]\n\nTake this quick assessment with complete honesty to discover if you and your family could be at risk — [b]and how to best avoid becoming victims before it’s too late.[/b]",
    mainButtonText: "OKAY. . . TAKE QUICK ASSESSMENT!"
  },
  {
    "question": "How confident are you that you could handle a sudden medical emergency in your home without immediate professional help?",
    "description": "Be honest with yourself. Confidence in this moment isn’t about wishful thinking — it’s about whether you truly have the knowledge and preparation to act when seconds matter. Most people overestimate themselves until it’s too late.",
    "type": "choice",
    "options": [
      {
        "text": "Very confident — I believe I could manage it.",
        "comment": "Believing you could manage it without proof is dangerous self-deception. Confidence without preparation is arrogance disguised as courage, and in a real crisis, arrogance kills. The harsh truth is that families suffer most when the person they depend on assumes they know more than they actually do."
      },
      {
        "text": "Somewhat confident — I think I could figure it out.",
        "comment": "Figuring it out in the middle of an emergency is how lives are lost. If you need to ‘think about it’ while a loved one is bleeding, choking, or in pain, hesitation becomes fatal. You cannot improvise survival — lack of preparation turns you into the reason tragedy happens under your roof."
      },
      {
        "text": "Not confident at all — I wouldn’t know what to do.",
        "comment": "At least you’re honest, but honesty won’t save a life when the clock is ticking. Knowing you’re unprepared and doing nothing is choosing to let helplessness destroy your family. Awareness without action is guilt waiting to happen."
      }
    ]
  },
  {
    "question": "How much do you rely on hospitals, doctors, or pharmacies being available when a health problem happens in your home?",
    "description": "Most people assume these systems will always be there — until they aren’t. But hospitals collapse under pressure, ambulances arrive too late, and pharmacies run empty when demand spikes. Your level of dependence reveals whether you survive or become another preventable statistic.",
    "type": "choice",
    "options": [
      {
        "text": "Completely — I always depend on them.",
        "comment": "Total dependence means total vulnerability. If the system fails — and history proves it always does under crisis — your next plan will be to simply hope and wait. Hope is not a survival strategy, and waiting is what kills."
      },
      {
        "text": "Mostly — but I try to keep some basics at home.",
        "comment": "A few basics will not protect you when real emergencies strike. Having painkillers in a drawer isn’t preparation, it’s a comfort illusion. You’ll still end up panicked, waiting for help that doesn’t come, while your family pays the price for your half-measures."
      },
      {
        "text": "Not much — I believe in being self-reliant.",
        "comment": "Belief alone doesn’t equal ability. Saying you’re self-reliant without proven skills and knowledge is dangerous pride. When the moment comes and you fail, that pride turns into the exact guilt that will haunt you for the rest of your life."
      }
    ]
  },
  {
    "question": "When was the last time you felt helpless in a medical situation — even a small one — because you didn’t know what to do?",
    "description": "Everyone has faced a moment of panic — a child’s sudden fever, a loved one choking, a wound that wouldn’t stop bleeding. These moments stay buried because they’re painful to remember, but they expose the truth: when knowledge is missing, helplessness takes over. And helplessness is deadly.",
    "type": "choice",
    "options": [
      {
        "text": "Recently — it still haunts me.",
        "comment": "If it still haunts you, that means the fear is real and unsolved. Doing nothing about it guarantees that next time, the haunting won’t just be a memory — it could be the moment you live in regret for the rest of your life."
      },
      {
        "text": "It happened a while ago — but I’ll never forget it.",
        "comment": "Time passing doesn’t erase failure. That memory lingers because deep down you know it could happen again. You can’t outrun guilt by ignoring it, and the next failure could be one you cannot come back from."
      },
      {
        "text": "I’ve been lucky — I haven’t faced anything serious yet.",
        "comment": "Luck is the weakest plan of all. Relying on it means you’ve chosen blindness until disaster strikes. When it finally does, your family won’t care that you were lucky before — they’ll only know you failed when it mattered most."
      }
    ]
  },
  {
    "question": "If a serious medical emergency struck your home tomorrow and professional help couldn’t arrive, how prepared would you honestly be to take control?",
    "description": "Emergencies don’t wait for convenience. They happen in the middle of the night, during blackouts, or when hospitals are overwhelmed. Tomorrow could be the day your loved ones look to you for answers — and the day you either rise as their protector or collapse as their failure.",
    "type": "choice",
    "options": [
      {
        "text": "Completely prepared — I could handle it.",
        "comment": "Overconfidence is a deadly illusion. Believing you could ‘handle it’ without expert knowledge means your family is betting their lives on your pride. In real emergencies, pride doesn’t save lives — it destroys them."
      },
      {
        "text": "Somewhat prepared — I’d try my best.",
        "comment": "‘Trying your best’ is another way of saying you’re willing to gamble with lives. Effort without preparation is useless when every second counts. The harsh truth: your best guess isn’t good enough when your family’s survival is at stake."
      },
      {
        "text": "Not prepared at all — I’d be lost.",
        "comment": "Admitting you’d be lost is honesty, but honesty alone won’t save anyone. If you stay this way, the day a crisis comes, you won’t just feel lost — you’ll feel responsible for the suffering or death of the people who trusted you to protect them."
      }
    ]
  },
  {
    "question": "When your family looks to you in a life-or-death emergency, what role will you play?",
    "description": "In every crisis, there are only two kinds of people: the helpless who freeze, and the protectors who act. Your family will not remember your intentions, only the outcome. Their survival — or their suffering — will trace back to the role you chose.",
    "type": "choice",
    "options": [
      {
        "text": "The protector — I’ll know what to do.",
        "comment": "If you only believe you’ll know what to do without real preparation, you’re setting yourself up to be exposed as the helpless one when it counts. False confidence is betrayal disguised as strength."
      },
      {
        "text": "The helper — I’ll try my best.",
        "comment": "Trying isn’t enough. In an emergency, ‘trying’ means fumbling while seconds slip away. Your family doesn’t need your best effort, they need certainty — and if you can’t give it, their pain becomes your blame."
      },
      {
        "text": "The bystander — I’d feel powerless.",
        "comment": "If you accept being powerless, you are already surrendering your family’s survival to chance. The truth is harsh: when you do nothing, you are not neutral — you are the reason tragedy unfolds unchecked."
      }
    ]
  },
  {
    description: "Your answers reveal that your household will be at risk if a medical emergency hit you. The gaps you admitted could mean the difference between protecting your family or watching them suffer helplessly.\n\nTo see your full personalized assessment results and diagnosis — including where you’re most vulnerable and the next best step to take to avoid becoming victim(s) — enter your details below and your full personal results will be shown and sent straight to your inbox so you always have them at hand in your inbox",
    type: "opt-in",
    inputs: [
      {type:"name", placeholder: "Enter your name here", comment: "Now please enter your email next" },
      {type:"email", placeholder: "Emain address here ", comment: "Please don't forget about entering your name" }
    ], 
    waitingbutton: "Show Me My Results Now!",
    mainButtonText: "Show Me My Results Now!"
  },
  {
    media: {
      type: "vimeo",          // 'vimeo' | 'image' | 'video' (video for mp4/webm)
      src: "https://vimeo.com/1122249808",
      // poster: "img/image1.jpg", // optional local poster
    },
    description: "[size=18px][b]Your Diagnosis: The Hidden Dangers Inside Your Home[/b][/size]\nWe are so sorry but your assessment results reveals critical gaps that put you and your family at risk. Your answers show that your household is dangerously underprepared for a sudden medical emergency.\n- You rely too heavily on hospitals or pharmacies that may not be available\n- You admitted uncertainty or hesitation about how to act in life-threatening moments\n- You recognized past experiences where you felt helpless, and those memories still haunt you\n\nThis isn’t just a quiz outcome — this is a diagnosis. Right now, your family is exposed, and the cost of that exposure is unthinkable: suffering, regret, and avoidable loss.\n\n[size=18px][b]Why This Puts Your Family at Risk[/b][/size]\nEvery emergency brings one of two roles: the helpless who freeze, or the protectors who act. Your results reveal you are closer to the first category. That doesn’t make you weak — it makes you human. But staying this way will ensure that in the moment of truth, you are remembered not for your love, but for your lack of preparation.\n\n[size=18px][b]The Treatment Plan for Your Readiness Gaps[/b][/size]\nHere’s the good news: problems like yours don’t require years of training to fix — they require a clear, proven plan.\n\nBased on your assessment, the treatment for your household’s vulnerability is:\n- Building confidence through practical, step-by-step medical knowledge\n- Equipping yourself with methods to handle common emergencies without professional help\n- Preparing with the same tools doctors use in crisis situations\n\nThis is not optional — it is the only path to ensuring you never again face the helplessness you described in your answers.\n\n[size=18px][b]Your Recommended Solution: The Home Doctor[/b][/size]\nThat’s why the best recommendation for your exact situation is [b]The Home Doctor[/b] — a field-tested manual (book) written by frontline doctors who have saved lives in the most desperate conditions.\n\nThis isn’t just a generic health book. It’s a treatment plan disguised as a manual, designed for families like yours who need to be ready when hospitals can’t help. Inside, you’ll learn how to:\n- Control bleeding, infections, and wounds before they turn fatal\n- Manage sudden illnesses like fever, choking, or food poisoning without waiting hours for help\n- Stock and use essential supplies that keep loved ones alive until professionals arrive\n\nIt is the most practical, exclusive solution to the risks your quiz exposed — and the only recommendation that fits your diagnosis. Click on the button below to learn more about [b]\"The Home Doctor.\"[/b]",
    mainButtonText: "Learn More!"
  },
  {
    media: {
      type: "vimeo",          // 'vimeo' | 'image' | 'video' (video for mp4/webm)
      src: "https://vimeo.com/1122252349",
      // poster: "img/image1.jpg", // optional local poster
    },
    description: "[size=18px][b]Meet the Doctors Behind The Home Doctor — and Discover Why Families Everywhere Trust This Life-Saving Manual[/b][/size]\n\n[size=18px][b]Who Wrote It?[/b][/size]\nThe Home Doctor wasn’t written by theorists or armchair experts. It was created by [b]doctors who have worked on the frontlines of crisis[/b], where hospitals were overwhelmed, supplies were scarce, and survival depended on action, not waiting.\n\nThese are professionals who know what it’s like when the system collapses, when the ambulance won’t arrive, and when families are left to fend for themselves. Their combined experience has been distilled into a practical guide — one that gives you the same tools and knowledge they relied on to save lives in desperate conditions.\n\n[size=18px][b]Who It’s For?[/b][/size]\nThis book is for every household that understands one truth: emergencies don’t wait for convenience. Whether you’re a parent, caregiver, or someone who simply wants to be prepared, The Home Doctor is written for you. It’s not about replacing medical professionals — it’s about protecting your loved ones when professional help is too far, too full, or too late.\n\n[size=18px][b]What’s In It?[/b][/size]\nInside The Home Doctor, you’ll find a complete survival playbook, including:\n- How to treat wounds and control bleeding before they turn fatal\n- How to manage infections when antibiotics or hospitals aren’t available\n- Step-by-step instructions for handling choking, fevers, food poisoning, and other sudden illnesses\n- The medical supplies every home should stock to prevent small problems from turning deadly\n- Proven methods used by doctors in crisis zones to keep patients alive when modern medicine is out of reach.\n\nIt’s not theory, it’s not fluff — it’s practical, life-saving guidance you can apply immediately.\n\n[size=18px][b]Pros and Cons[/b][/size]\n[b]Pros:[/b]\n- Written by real frontline doctors with first-hand experience\n- Covers both common and critical emergencies with clear steps\n- Easy to follow — no medical background required\n- Provides peace of mind that your family isn’t left vulnerable\n- A one-time resource that could save lives for years to come\n\n[b]Cons:[/b]\n- It won’t replace doctors or hospitals when they are available\n- Requires you to read and actually apply the knowledge\n- Some scenarios may feel uncomfortable to face, but ignoring them is far worse\n\n[size=18px][b]Exclusive Bonuses For You:[/b][/size]\n- Together with your order, you’ll also receive a digital copy of The Home Doctor\n- A free copy of Natural Healing Secrets\n- A digital copy of Wild Edibles You Can Forage For or Find Around Your House\n\nAll in all the Home Doctor is more than a book — it’s a survival lifeline. Your quiz results have already shown your risks. Now you’ve seen who wrote it, who it’s for, and what’s inside. The decision is simple: either stay exposed, or get prepared. Get The Home Doctor now from their official website now and give your family the protection they deserve when seconds matter with a click of the button below!",
    waitingbutton: "GET A COPY NOW!",
    mainButtonText: "GET A COPY NOW!"
  },
]