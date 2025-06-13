const questionsByRole = {
  student_above18: [
  {
    en: "Do you feel anxious about career choices?",
    ta: "தேர்ந்தெடுக்க வேண்டிய தொழில் குறித்த கவலை உள்ளதா?",
    strategies: {
      en: "Research options and discuss with a career counselor.",
      ta: "விருப்பங்களை ஆராய்ந்து, தொழில் வழிகாட்டியிடம் ஆலோசிக்கவும்."
    }
  },
  {
    en: "Do you struggle to manage time between study and personal life?",
    ta: "படிப்பு மற்றும் தனிப்பட்ட வாழ்க்கையை சமநிலைப்படுத்த முடியவில்லையா?",
    strategies: {
      en: "Use a planner to allocate fixed hours for study and rest.",
      ta: "படிப்பும் ஓய்வும் நேர ஒதுக்கீடு செய்ய திட்டமிடும் கருவியைப் பயன்படுத்தவும்."
    }
  },
  {
    en: "Do you feel isolated or lonely?",
    ta: "தனிமைப்படுகிறீர்களா அல்லது தனிமையாக உணருகிறீர்களா?",
    strategies: {
      en: "Engage in campus clubs or social groups for support.",
      ta: "கல்லூரி குழுக்கள் அல்லது சமூகக் குழுக்களில் பங்கேற்று ஆதரவைப் பெறுங்கள்."
    }
  },
  {
    en: "Do financial issues add to your stress?",
    ta: "நிதி பிரச்சனைகள் உங்கள் மன அழுத்தத்தை அதிகரிக்கிறதா?",
    strategies: {
      en: "Create a simple budget and seek part-time opportunities if needed.",
      ta: "எளிய செலவுக் கட்டுப்பாடுகளை அமைத்து, தேவைப்பட்டால் பாகம் நேர வேலை பாருங்கள்."
    }
  },
  {
    en: "Are you anxious about academic performance?",
    ta: "கல்லூரி முடிவுகள் குறித்து கவலையா?",
    strategies: {
      en: "Focus on progress, not perfection, and seek peer help.",
      ta: "சரிவுக்கு மாறாது முன்னேற்றத்தில் கவனம் செலுத்துங்கள், தோழர்களிடம் உதவி கேளுங்கள்."
    }
  },
  {
    en: "Do you find it difficult to talk about stress?",
    ta: "மன அழுத்தம் பற்றி பேச வேண்டுமென்பது கடினமாக உள்ளதா?",
    strategies: {
      en: "Write your feelings in a journal or talk to a mentor.",
      ta: "உங்கள் உணர்வுகளை ஒரு குறிப்பேட்டில் எழுதுங்கள் அல்லது வழிகாட்டியிடம் பேசுங்கள்."
    }
  }
],

  parent_father: [
  {
    en: "Do you feel pressure to provide financially for the family?",
    ta: "குடும்பத்திற்காக நிதியளிக்க வேண்டிய அழுத்தமா இருக்கிறதா?",
    strategies: {
      en: "Create a monthly budget and prioritize essential expenses.",
      ta: "மாதாந்திர செலவுக்கட்டுப்பாடுகள் மற்றும் முக்கிய செலவுகளை முன்னிலைப்படுத்துங்கள்."
    }
  },
  {
    en: "Do you get enough rest or personal time?",
    ta: "போதுமான ஓய்வும் தனிப்பட்ட நேரமும் கிடைக்கிறதா?",
    strategies: {
      en: "Reserve at least 30 minutes a day just for yourself.",
      ta: "தினமும் குறைந்தது 30 நிமிடங்கள் தனிப்பட்ட நேரமாக ஒதுக்குங்கள்."
    }
  },
  {
    en: "Do you feel disconnected from your children?",
    ta: "உங்கள் குழந்தைகளிடமிருந்து விலகி இருக்கிறீர்களா?",
    strategies: {
      en: "Plan weekly family time to engage with your children.",
      ta: "வாரத்திற்கு ஒரு முறையாவது குடும்ப நேரம் அமைத்து கலந்துகொள்ளுங்கள்."
    }
  },
  {
    en: "Are work pressures affecting your mood at home?",
    ta: "வேலை அழுத்தங்கள் வீட்டில் உங்கள் மனநிலையை பாதிக்கிறதா?",
    strategies: {
      en: "Practice deep breathing before entering your home from work.",
      ta: "வேலையில் இருந்து வீட்டுக்கு வரும்போது ஆழமான மூச்சுப் பயிற்சிகளைப் பின்பற்றுங்கள்."
    }
  },
  {
    en: "Do you worry about your child’s future?",
    ta: "உங்கள் குழந்தையின் எதிர்காலம் குறித்து கவலையா?",
    strategies: {
      en: "Support them without comparison and help them set small goals.",
      ta: "ஒப்பீட்டில்லாமல் ஆதரிக்கவும், சிறு இலக்குகளை அமைக்க உதவவும்."
    }
  },
  {
    en: "Do you find it hard to express emotions?",
    ta: "உணர்வுகளை வெளிப்படுத்த கடினமா?",
    strategies: {
      en: "Talk to a friend or join a support group for fathers.",
      ta: "நண்பனிடம் பேசுங்கள் அல்லது தந்தைகளுக்கான ஆதரவுக் குழுவில் சேருங்கள்."
    }
  }
],

  student_below18: [
  {
    en: "Do you feel pressure to perform well in exams?",
    ta: "தேர்வுகளில் சிறப்பாக எழுத வேண்டுமென்பது மன அழுத்தமா?",
    strategies: {
      en: "Break your study into small, manageable chunks and take short breaks.",
      ta: "படிப்பை சிறு பகுதிகளாகப் பிரித்து, இடையே ஓய்வெடுக்கவும்."
    }
  },
  {
    en: "Do you get enough sleep on school days?",
    ta: "பள்ளி நாட்களில் போதுமான தூக்கம் கிடைக்கிறதா?",
    strategies: {
      en: "Maintain a consistent bedtime routine without electronic devices.",
      ta: "மின்சாதனங்களை தவிர்த்து ஒற்றைப்படை தூக்க முறையை கடைபிடிக்கவும்."
    }
  },
  {
    en: "Do you feel overburdened with homework or tuition?",
    ta: "வீட்டுப்பாடம் மற்றும் துணை வகுப்புகள் மன அழுத்தத்தை தருகிறதா?",
    strategies: {
      en: "Talk to your teacher about your workload and prioritize important tasks.",
      ta: "வேலைப்பளுவைப் பற்றி ஆசிரியரிடம் பேசுங்கள், முக்கியமானவற்றை முன்னிலைப்படுத்துங்கள்."
    }
  },
  {
    en: "Do you find time for play or relaxation?",
    ta: "விளையாட்டு மற்றும் ஓய்வுக்காக நேரம் கிடைக்கிறதா?",
    strategies: {
      en: "Schedule at least 30 minutes daily for play or a hobby you enjoy.",
      ta: "நாள்தோறும் குறைந்தது 30 நிமிடம் விளையாட்டு அல்லது விருப்பம் உள்ள வேலைக்கு ஒதுக்கவும்."
    }
  },
  {
    en: "Are you worried about your future studies?",
    ta: "உங்கள் எதிர்காலக் கல்வி குறித்து கவலையா?",
    strategies: {
      en: "Set small goals and talk to a mentor or teacher for guidance.",
      ta: "சிறு இலக்குகளை அமைத்து, வழிகாட்டலுக்கு ஒரு ஆசிரியரிடம் பேசுங்கள்."
    }
  },
  {
    en: "Do you feel supported by teachers and parents?",
    ta: "ஆசிரியர்கள் மற்றும் பெற்றோரிடம் ஆதரவு இருக்கிறதா?",
    strategies: {
      en: "Share your feelings honestly with someone you trust.",
      ta: "நம்பிக்கையுள்ள ஒருவருடன் உங்கள் உணர்வுகளை வெளிப்படையாக பகிருங்கள்."
    }
  }
],

  parent_mother: [ 
  {
    en: "Do you feel overwhelmed managing home and children?",
    ta: "வீட்டும், குழந்தைகளும் கவனிப்பதில் மன அழுத்தமா?",
    strategies: {
      en: "Delegate small tasks and take short breaks for self-care.",
      ta: "சிறிய வேலைகளை பகிர்ந்து, உங்கள் நலனுக்காக ஓய்வு எடுங்கள்."
    }
  },
  {
    en: "Do you get time for yourself?",
    ta: "உங்களுக்காக தனி நேரம் கிடைக்கிறதா?",
    strategies: {
      en: "Wake up 15 minutes early to enjoy some quiet time.",
      ta: "தினமும் 15 நிமிடங்கள் முந்தையெழுந்து அமைதியான நேரம் எடுத்துக்கொள்ளுங்கள்."
    }
  },
  {
    en: "Are you anxious about your child’s health or studies?",
    ta: "உங்கள் குழந்தையின் உடல்நலம் அல்லது கல்வி குறித்த கவலையா?",
    strategies: {
      en: "Observe and support them calmly without overreacting.",
      ta: "அதிகமாக பதற்றமின்றி அமைதியாக கவனித்து ஆதரிக்கவும்."
    }
  },
  {
    en: "Do you feel emotionally unsupported by family?",
    ta: "குடும்பத்தால் உணர்ச்சி ஆதரவு இல்லாமையா?",
    strategies: {
      en: "Express your feelings calmly and ask for help when needed.",
      ta: "உங்கள் உணர்வுகளை அமைதியாக சொல்லுங்கள், தேவைப்படும்போது உதவிக்கேளுங்கள்."
    }
  },
  {
    en: "Do you struggle with household time management?",
    ta: "வீட்டு வேலைகளுக்கான நேர மேலாண்மை கடினமா?",
    strategies: {
      en: "Use a simple to-do list to manage daily chores.",
      ta: "தினசரி வேலைகளை நிர்வகிக்க ஒரு எளிய பட்டியலை பயன்படுத்தவும்."
    }
  },
  {
    en: "Do you worry about being a good mother?",
    ta: "நல்ல தாய் ஆக வேண்டுமென்பதில் கவலையா?",
    strategies: {
      en: "Remember, doing your best with love is enough.",
      ta: "நீங்கள் அன்புடன் சிறந்தது செய்ய வேண்டும் என்பது போதுமானது என்பதை நினைவில் கொள்ளுங்கள்."
    }
  }
],

  professional_private1: [
  {
    en: "Do you feel pressure to meet academic targets?",
    ta: "கல்வி குறிக்கோள்களை அடைய வேண்டிய அழுத்தமா?",
    strategies: {
      en: "Break down your tasks and celebrate small wins.",
      ta: "வேலையைப் பகுதிகளாக பிரித்து, சிறு வெற்றிகளை கொண்டாடுங்கள்."
    }
  },
  {
    en: "Do you struggle balancing teaching and admin duties?",
    ta: "பாடமேற்கல் மற்றும் நிர்வாக வேலைகளை சமநிலைப் படுத்த முடியவில்லையா?",
    strategies: {
      en: "Allocate fixed hours for each task using a schedule.",
      ta: "ஒவ்வொரு வேலைக்கும் நேரத்தை ஒதுக்கி ஒரு அட்டவணை உருவாக்கவும்."
    }
  },
  {
    en: "Are you anxious about student results or feedback?",
    ta: "மாணவர்கள் மதிப்பெண்கள் அல்லது பின்னூட்டம் குறித்த கவலையா?",
    strategies: {
      en: "Focus on giving your best and encourage continuous learning.",
      ta: "நீங்கள் சிறந்ததை தர முயலுங்கள், மாணவர்களை தொடர்ந்து கற்றுக்கொள்ள ஊக்குவிக்கவும்."
    }
  },
  {
    en: "Do you face lack of recognition at work?",
    ta: "வேலையில் பாராட்டு இல்லாமையா?",
    strategies: {
      en: "Keep a record of your contributions and share them periodically.",
      ta: "உங்கள் பங்களிப்புகளை பதிவு செய்து, அவற்றை அவ்வப்போது பகிருங்கள்."
    }
  },
  {
    en: "Do you find it hard to handle student behavior?",
    ta: "மாணவர் நடத்தை குறித்த சிக்கலா?",
    strategies: {
      en: "Seek peer strategies and handle situations with empathy.",
      ta: "பணி அனுபவங்களை பகிர்ந்து, மாணவர்களுக்கு அரவணையுடன் அணுகுங்கள்."
    }
  },
  {
    en: "Do you miss work-life balance?",
    ta: "வேலை-வாழ்க்கை சமநிலையை இழக்கிறீர்களா?",
    strategies: {
      en: "Dedicate weekends for rest and hobbies.",
      ta: "வார இறுதி நாட்களை ஓய்வுக்கும் விருப்ப செயல்களுக்கும் ஒதுக்குங்கள்."
    }
  }
],

  professional_private2: [
  {
    en: "Do you face long working hours and screen fatigue?",
    ta: "நீண்ட வேலை நேரமும் திரை பார்வை சோர்வும் உள்ளதா?",
    strategies: {
      en: "Follow the 20-20-20 rule: every 20 mins, look 20 feet away for 20 seconds.",
      ta: "20-20-20 விதியை பின்பற்றுங்கள்: ஒவ்வொரு 20 நிமிடமும், 20 அடி தூரத்தில் 20 விநாடிகள் பாருங்கள்."
    }
  },
  {
    en: "Are project deadlines causing anxiety?",
    ta: "திட்ட முடிவுக்காலங்கள் மன அழுத்தத்தை உருவாக்குகிறதா?",
    strategies: {
      en: "Break tasks into achievable goals and communicate progress regularly.",
      ta: "வேலையை சாதிக்கக்கூடிய இலக்குகளாக பிரித்து, முன்னேற்றத்தை பகிருங்கள்."
    }
  },
  {
    en: "Do you struggle with work-life balance?",
    ta: "வேலை மற்றும் வாழ்க்கையை சமநிலைப்படுத்த முடியவில்லையா?",
    strategies: {
      en: "Set boundaries by defining work hours clearly.",
      ta: "வேலை நேரங்களை தெளிவாக வரையறுத்து எல்லைகளை நிர்ணயிக்கவும்."
    }
  },
  {
    en: "Do you feel disconnected from coworkers or team?",
    ta: "தொழிலாளர்களிடம் அல்லது குழுவுடன் விலகியிருக்கிறீர்களா?",
    strategies: {
      en: "Engage in virtual team bonding or casual meetings.",
      ta: "ஆன்லைன் குழு சந்திப்புகள் அல்லது பொதுவான கலந்துரையாடல்களில் பங்கேற்கவும்."
    }
  },
  {
    en: "Is the pressure to upskill constantly stressing you?",
    ta: "மீண்டும் மீண்டும் புதிய திறன்களை கற்றுக்கொள்ளும் அழுத்தமா?",
    strategies: {
      en: "Set a monthly learning goal rather than trying everything at once.",
      ta: "ஒரே நேரத்தில் எல்லாவற்றையும் முயல்வதைவிட மாதாந்திர இலக்கை அமைக்கவும்."
    }
  },
  {
    en: "Do you find it hard to unplug from work after office hours?",
    ta: "அலுவலக நேரத்திற்குப் பிறகு வேலை மனத்தில் இருந்து விலக முடியவில்லையா?",
    strategies: {
      en: "Use 'do not disturb' mode and pursue a relaxing evening habit.",
      ta: "'தடுப்புவை' முறைப் பயன்படுத்தி ஓய்வான மாலை பழக்கங்களை மேற்கொள்ளுங்கள்."
    }
  }
],

  professional_government1: [
  {
    en: "Are policy changes and protocols causing confusion?",
    ta: "கல்வி கொள்கை மாற்றங்கள் குழப்பத்தை ஏற்படுத்துகிறதா?",
    strategies: {
      en: "Stay updated through official channels and seek peer clarification.",
      ta: "அதிகாரப்பூர்வ செய்திகளைக் கவனிக்கவும், சக ஊழியர்களிடம் விளக்கம் கேளுங்கள்."
    }
  },
  {
    en: "Do you feel your work is underappreciated?",
    ta: "உங்கள் பணி மதிப்பளிக்கப்படவில்லை என்ற உணர்வா?",
    strategies: {
      en: "Maintain a log of your achievements and share during reviews.",
      ta: "உங்கள் சாதனைகளை பதிவு செய்து, மதிப்பீட்டு சந்திப்புகளில் பகிருங்கள்."
    }
  },
  {
    en: "Do you face a lack of resources to complete your duties?",
    ta: "வேலை செய்ய தேவையான ஆதாரங்கள் இல்லாமையா?",
    strategies: {
      en: "List your needs clearly and raise them through formal requests.",
      ta: "தேவைகளை தெளிவாக குறிப்பிட்டு அதிகாரப்பூர்வ முறையில் மேலிடவும்."
    }
  },
  {
    en: "Do you struggle to manage classroom and admin work together?",
    ta: "வகுப்புப்பாடமும் நிர்வாகப்பணியும் ஒரே நேரத்தில் கையாள முடியவில்லையா?",
    strategies: {
      en: "Designate fixed time blocks and seek help from coworkers.",
      ta: "நேர இடைவெளிகளை நிர்ணயித்து, சக ஊழியர்களிடம் உதவி பெறுங்கள்."
    }
  },
  {
    en: "Are long commutes tiring you?",
    ta: "நீண்ட பயணம் சோர்வை ஏற்படுத்துகிறதா?",
    strategies: {
      en: "Utilize commute time for relaxing audio or podcasts.",
      ta: "பயண நேரத்தில் ஒலி புத்தகங்கள் அல்லது பாட்காஸ்ட்கள் மூலம் தளருங்கள்."
    }
  },
  {
    en: "Do you feel communication gaps with higher authorities?",
    ta: "மூத்த அதிகாரிகளுடன் தொடர்பு பிணைப்பு இல்லையா?",
    strategies: {
      en: "Prepare well and present issues through written formats.",
      ta: "தயாராக இருந்து எழுதப்பட்ட வடிவத்தில் உங்கள் பிரச்சனைகளை முன்வைக்கவும்."
    }
  }
],

  professional_government2: [
  {
    en: "Do irregular shifts disturb your sleep and health?",
    ta: "மாற்றப்படும் வேலை நேரங்கள் தூக்கத்தையும் உடல்நலத்தையும் பாதிக்கிறதா?",
    strategies: {
      en: "Maintain a routine even on off-days for better sleep.",
      ta: "வெறும் நாட்களிலும் ஒரு ஒழுங்கான தூக்க முறையை பின்பற்றுங்கள்."
    }
  },
  {
    en: "Do you feel unsafe or under high pressure during peak hours?",
    ta: "பிக் ஹவர்களில் அதிக அழுத்தம் மற்றும் பாதுகாப்பில்லாமையா?",
    strategies: {
      en: "Use stress relief techniques like controlled breathing and short breaks.",
      ta: "மனஅழுத்தக் கட்டுப்பாட்டு பயிற்சிகள் மற்றும் சிறு ஓய்வுகள் மேற்கொள்ளுங்கள்."
    }
  },
  {
    en: "Do public complaints affect your morale?",
    ta: "பொது மக்கள் புகார்கள் உங்கள் உற்சாகத்தை பாதிக்கிறதா?",
    strategies: {
      en: "Focus on constructive feedback and speak with a senior if needed.",
      ta: "நல்ல பின்னூட்டத்தை மட்டும் கவனித்து, தேவைப்பட்டால் மூத்த அதிகாரியிடம் பேசுங்கள்."
    }
  },
  {
    en: "Are equipment or infrastructure issues slowing your work?",
    ta: "கருவிகள் அல்லது கட்டமைப்பு சிக்கல்கள் உங்கள் வேலையை தாமதப்படுத்துகிறதா?",
    strategies: {
      en: "Report issues formally and track follow-ups regularly.",
      ta: "பிரச்சனைகளை முறையாக தெரிவித்து, தொடர்ந்து கவனத்தில் கொள்ளுங்கள்."
    }
  },
  {
    en: "Do you miss time with family due to irregular schedules?",
    ta: "அமைதி இல்லாத வேலை நேரங்கள் குடும்ப நேரத்தை பறிக்கிறதா?",
    strategies: {
      en: "Plan at least one weekly meal or outing together.",
      ta: "வாரத்தில் ஒரு முறையாவது குடும்ப உணவு நேரம் அல்லது வெளிநடத்தை திட்டமிடுங்கள்."
    }
  },
  {
    en: "Do you find it hard to focus after long duty hours?",
    ta: "நீண்ட வேலை நேரத்திற்கு பிறகு கவனம் செலுத்த முடியவில்லையா?",
    strategies: {
      en: "Wind down with light activities like music or a walk before rest.",
      ta: "ஓய்வுக்குப் முன் இசை கேட்கும் பழக்கம் அல்லது நடக்க வெளியே செல்லவும்."
    }
  }
]


};
