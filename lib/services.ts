export type ServiceSection = {
  id: string;
  title: string;
  tagline?: string;
  paragraphs: string[];
  bullets?: string[];
  testimonial?: { quote: string; author: string };
};

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  icon: string;
  benefits: string[];
  lead: { title: string; paragraphs: string[] };
  sections: ServiceSection[];
  closing: { title: string; paragraphs: string[] };
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    eyebrow: "Everyday oral health",
    description: "Access a complete range of general dentistry services so you can maintain your everyday oral health and prevent major dental problems.",
    image: "/images/general-home.jpg",
    icon: "/images/general.svg",
    benefits: [
      "MAINTAIN STRONG, HEALTHY TEETH & GUMS",
      "CATCH DENTAL CONCERNS EARLY",
      "AVOID COMPLEX TREATMENTS LATER",
    ],
    lead: {
      title: "YOUR DENTAL HOME FOR LIFELONG HEALTHY SMILES",
      paragraphs: [
        "At SmileQuest, we believe general dentistry is much more than just stopping by for professional cleanings and checkups. It’s about finding a dental home you can trust. Our team welcomes patients of all ages and backgrounds. We provide comprehensive dental care for adults and families with children of all ages.",
        "Our approach involves taking the time to get to know you and your goals and offering thoughtful, evidence-based care that supports your long-term oral health. Our team takes twice the required continuing education courses each year to keep up with the latest innovations in dentistry so that we can provide the best possible general dentistry services to you and your family.",
      ],
    },
    sections: [
      {
        id: "professional-dental-cleaning",
        title: "Professional Dental Cleaning",
        tagline: "KEEP YOUR SMILE HEALTHY & BRIGHT",
        paragraphs: [
          "Routine cleanings are essential for your long-term oral health. Our hygienists gently remove plaque and tartar buildup in areas that can’t be reached through brushing or flossing alone. We tailor every visit to your needs, whether it’s a straightforward cleaning or extra support, to prevent cavities and decay.",
          "Professional dental cleanings at your regular checkups with us also give our team the chance to catch any concerns before they become major problems for you. We’re here to help you maintain a fresh, healthy smile.",
        ],
        testimonial: {
          quote: "Great service. They make you feel so comfortable. Very gentle when cleaning teeth and really listen to your concerns.",
          author: "HEIDI L.",
        },
      },
      {
        id: "oral-cancer-screening",
        title: "Oral Cancer Screening",
        tagline: "BECAUSE EARLY DETECTION IS KEY",
        paragraphs: [
          "Oral cancer can develop without pain or obvious signs, which is why regular oral cancer screenings are important. At SmileQuest, our team checks for signs of abnormal tissue using visual and physical evaluation techniques. These include gently feeling the tissues of the mouth, neck, and jaw and closely evaluating the tongue, cheeks, lips, and roof of the mouth.",
          "These screenings are quick, noninvasive, and part of every routine evaluation.",
        ],
      },
      {
        id: "fluoride-varnish",
        title: "Fluoride Varnish",
        tagline: "EXTRA STRENGTH FOR ENAMEL PROTECTION",
        paragraphs: [
          "Fluoride varnish is a safe, effective way to strengthen tooth enamel and reduce the risk of cavities. It’s especially helpful for children, adults with sensitive teeth, and anyone prone to enamel erosion. Applied once we complete your dental cleaning, fluoride varnish will protect your teeth against future decay by encouraging natural remineralization.",
        ],
      },
      {
        id: "dental-sealants",
        title: "Dental Sealants",
        tagline: "AVOID CAVITIES IN THOSE HARD-TO-REACH AREAS",
        paragraphs: [
          "Molars and premolars have deep grooves that can trap food and bacteria, making them vulnerable to cavities, especially for children. Dental sealants are protective coatings we quickly apply to these grooves to keep them clean and decay-free. Sealants are often recommended for children and teens, but adults can benefit from dental sealants as well.",
        ],
      },
      {
        id: "soft-spot-and-pre-cavity-treatments",
        title: "Soft Spot & Pre-Cavity Treatments",
        tagline: "NONINVASIVE OPTIONS TO PROTECT YOUR TOOTH STRUCTURE",
        paragraphs: [
          "Before a cavity forms, weakened areas in the enamel, known as soft spots, may begin to form. Left untreated, they will progress into full cavities. We offer noninvasive treatment options to remineralize the enamel and help preserve the natural tooth structure. Treatments such as Curodont and silver diamine fluoride are used to stop decay in its tracks. These painless options support healthy enamel and are excellent preventive options for both children and adults.",
        ],
      },
      {
        id: "tooth-colored-fillings",
        title: "Tooth-Colored Fillings",
        tagline: "NATURAL-LOOKING RESTORATIONS FOR CAVITIES",
        paragraphs: [
          "When decay has progressed beyond a soft spot, a filling is needed to restore the tooth’s structure. At SmileQuest, we use tooth-colored, composite material that matches the natural shade of your teeth. This will ensure your restoration blends in beautifully while restoring strength and function.",
        ],
      },
      {
        id: "dental-crowns",
        title: "Dental Crowns",
        tagline: "RESTORE STRUCTURE & STRENGTH TO DAMAGED TEETH",
        paragraphs: [
          "Crowns are full-coverage restorations used to protect teeth that are cracked, worn down, or severely decayed. At SmileQuest, we use a variety of materials based on your unique needs. These include zirconia, lithium disilicate, gold, and porcelain fused to metal (PFM). Stainless steel crowns are available for children and are occasionally recommended for adults when appropriate.",
        ],
      },
      {
        id: "tooth-extraction",
        title: "Tooth Extraction",
        tagline: "SAFE, COMFORTABLE TOOTH REMOVAL",
        paragraphs: [
          "When a tooth is too damaged to repair, or if it’s affecting your overall oral health, your dentist may recommend an extraction. Our team at SmileQuest provides gentle, comfortable tooth removal in a calm environment, always taking time to explain the process. We will also provide you with detailed aftercare instructions to help you with the healing process.",
        ],
      },
      {
        id: "wisdom-tooth-removal",
        title: "Wisdom Tooth Removal",
        tagline: "IN-HOUSE SURGICAL SERVICES FOR WISDOM TEETH",
        paragraphs: [
          "Impacted or partially erupted wisdom teeth can cause discomfort, infection, or damage to nearby teeth. At SmileQuest, we can remove many wisdom teeth right here in our office while keeping patients comfortable and at ease. Sometimes with more complex cases, a referral is needed. We have trusted referral partners who have excellent patient outcomes. Our team will evaluate your case with digital imaging and walk you through the process to ensure you’re informed and comfortable throughout your treatment, even if a referral is required.",
        ],
      },
      {
        id: "periodontics",
        title: "Periodontal Therapy",
        tagline: "SUPPORTING HEALTHY GUMS AND A HEALTHY SMILE",
        paragraphs: [
          "Gum disease is one of the leading causes of tooth loss, and it often begins without obvious symptoms. We offer comprehensive periodontal care, including deep cleanings (scaling and root planing), follow-up therapy, and long-term periodontal maintenance plans. Healthy gums are the foundation of every healthy smile. Our experienced team at SmileQuest is here to help you keep yours in great shape.",
        ],
      },
      {
        id: "nightguards-and-mouth-guards",
        title: "Nightguards and Mouth Guards",
        tagline: "CUSTOM-MADE FOR TEETH AND JAW PROTECTION",
        paragraphs: [
          "Whether you grind your teeth at night or need protection for sports, our custom nightguards and mouth guards are fabricated to fit your mouth precisely. Unlike store-bought versions, custom guards offer greater comfort, better durability, and more effective protection so you can avoid damage.",
        ],
        testimonial: {
          quote: "Had a great cleaning... super sweet, attentive hygienist! My whole experience was phenomenal!",
          author: "elona o.",
        },
      },
      {
        id: "sedation",
        title: "Sedation",
        tagline: "FOR COMFORTABLE, STRESS-FREE EXPERIENCES",
        paragraphs: [
          "Dental anxiety shouldn’t get in the way of your care. We offer two forms of safe, in-office sedation to help make your visit more comfortable:",
          "Note: These methods are never combined for safety reasons, and we will help you choose the option best suited to your needs.",
        ],
        bullets: [
          "Nitrous oxide (laughing gas) - A fast-acting option that wears off quickly, so you can resume normal activity right away.",
          "Oral sedation - A prescribed medication that is taken before your treatment to help you feel calm and relaxed.",
        ],
      },
    ],
    closing: {
      title: "Ready for a Dental Home that Puts Your Long-Term Health First?",
      paragraphs: [
        "Schedule your visit with SmileQuest and experience care that goes well beyond the basics.",
      ],
    },
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    eyebrow: "A smile you will love",
    description: "Improve your smile and fix imperfections, or totally transform it into a new smile you’ll love. We offer a range of cosmetic dentistry solutions.",
    image: "/images/cosmetic-home.jpg",
    icon: "/images/cosmetic.svg",
    benefits: [
      "FIX CHIPS, STAINS, OR GAPS",
      "TRANSFORM YOUR SMILE",
      "FEEL CONFIDENT",
    ],
    lead: {
      title: "CONFIDENCE STARTS WITH A SMILE YOU LOVE",
      paragraphs: [
        "At SmileQuest, cosmetic dentistry isn’t just about how your smile looks—it’s about how you feel. Our experienced team will discuss your goals and work collaboratively with you to create a smile that feels just right for you. We can whiten and brighten your teeth, fix unwanted gaps or chips, or completely make over your smile, whatever you need. Our personalized treatment plans will help you achieve the results you’re looking for.",
      ],
    },
    sections: [
      {
        id: "teeth-whitening",
        title: "Teeth Whitening",
        tagline: "BRIGHTEN YOUR SMILE, IN-OFFICE OR AT HOME",
        paragraphs: [
          "Stained or discolored teeth are some of the most common cosmetic concerns. Fortunately, they are also the simplest to fix. At SmileQuest, we offer two effective whitening options:",
        ],
        bullets: [
          "In-office whitening - A powerful professional treatment that lightens your smile in just one visit. This is an excellent option if you’re looking for quick results for a special occasion, or you simply don’t want to wait.",
          "Custom take-home trays - We create personalized whitening trays that fit your teeth perfectly. You’ll use them at home with a professional-grade gel that will gradually whiten your teeth.",
        ],
        testimonial: {
          quote: "Love SmileQuest. I'm always treated with respect and have my questions and concerns addressed. Explanations are always given in easily understood language. And oh by the way, the workmanship is excellent.",
          author: "michael t.",
        },
      },
      {
        id: "dental-bonding",
        title: "Dental Bonding",
        tagline: "A SIMPLE FIX FOR CHIPS, GAPS AND DISCOLORATION",
        paragraphs: [
          "Dental bonding is a fast, minimally invasive way to correct minor teeth imperfections. Using a tooth-colored composite resin, we can reshape chipped or uneven teeth, close small gaps, and fix discoloration. Bonding only takes a single visit and doesn’t require much removal (if any) of your natural tooth structure, making it an ideal choice for patients looking for a cost-effective cosmetic upgrade.",
        ],
      },
      {
        id: "porcelain-veneers",
        title: "Porcelain Veneers",
        tagline: "CREATE A STRAIGHTER, BRIGHTER, MORE BALANCED SMILE",
        paragraphs: [
          "Veneers are thin layers of custom-made porcelain that cover the front surface of your tooth. They’re one of the most versatile cosmetic options available and can correct issues, like discoloration, uneven spacing, worn edges, minor misalignment, or irregular shape. Each veneer is handcrafted to suit your smile and natural tooth shade. So you can be confident you won’t just get a perfect smile, but a smile that still looks like yours. Veneers are bonded permanently in place and can last for many years with proper care and maintenance.",
        ],
      },
      {
        id: "crowns",
        title: "Crowns",
        tagline: "NATURAL-LOOKING COSMETIC RESTORATIONS",
        paragraphs: [
          "Dental crowns are often thought of as a restorative treatment, but they also offer cosmetic advantages. If you have a tooth that’s severely worn, cracked, misshapen, or discolored, a crown can restore both appearance and function. At SmileQuest, we offer high-quality crowns made from materials like zirconia, lithium disilicate, porcelain fused to metal (PFM), and gold. Each crown is carefully crafted in partnership with trusted local labs, and our experienced team takes the time to get everything right, from fit to finish.",
        ],
      },
      {
        id: "invisalign",
        title: "Invisalign",
        tagline: "STRAIGHTEN YOUR TEETH WITHOUT METAL BRACES",
        paragraphs: [
          "Crooked or crowded teeth can affect the appearance of your smile, but did you know they can also make cleaning more difficult and contribute to uneven tooth wear and jaw pain? Invisalign is a contemporary alternative to traditional braces that uses custom-made sets of clear aligners to gently move your teeth into position.",
          "Invisalign is almost invisible, certainly less noticeable than traditional braces. You’ll wear each set of aligners for a set period of time, then switch to the next as your teeth gradually shift into place. And because Invisalign aligners are removable, you’ll still be able to enjoy all your favorite foods, and it will be easy to maintain your normal brushing and flossing routine.",
          "Many patients prefer Invisalign over traditional braces because they use a smooth plastic that is more comfortable than wires and brackets.",
          "The SmileQuest team will guide you through the Invisalign process from start to finish, tracking your progress and making adjustments as needed. The result? A straighter smile that looks and feels just right.",
        ],
      },
      {
        id: "smile-makeovers",
        title: "Smile Makeovers",
        tagline: "CUSTOM TREATMENT PLANS FOR LIFE-CHANGING RESULTS",
        paragraphs: [
          "A smile makeover combines two or more cosmetic treatments to completely transform your smile. Whether you’ve been living with chips, unevenness, discoloration, or wear, SmileQuest can create a personalized plan to address your concerns and bring out the best in your smile.",
          "Depending on your goals, a smile makeover may include teeth whitening, veneers, bonding, crowns, Invisalign, or a combination of these treatments tailored specifically to your needs.",
          "We’ll start with a detailed consultation to understand what you’re hoping to achieve. It’s definitely not a one-size-fits-all approach when it comes to smile makeovers.",
        ],
      },
    ],
    closing: {
      title: "Let’s Talk About Your Smile Goals",
      paragraphs: [
        "Whether you want a small change or a full transformation, SmileQuest is here to help. Our calm, caring environment makes it easy to explore your options without pressure. We’ll listen, answer your questions, and guide you toward the treatments that align best with your lifestyle and vision.",
      ],
    },
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    eyebrow: "Bring your smile back",
    description: "From simple fillings to full mouth rehabilitations, the team at SmileQuest is highly experienced in restoring damaged smiles.",
    image: "/images/restorative-home.jpg",
    icon: "/images/restorative.svg",
    benefits: [
      "REGAIN FULL FUNCTION",
      "REPLACE MISSING OR DAMAGED TEETH",
      "CREATE NATURAL-LOOKING RESULTS",
    ],
    lead: {
      title: "BRING BACK STRENGTH, FUNCTION & COMFORT",
      paragraphs: [
        "At SmileQuest, we take a comprehensive approach to restoring dental health. Whether you need a single filling or full-mouth rehabilitation, our team will ensure your comfort and long-term oral health throughout your treatment journey. We use high-quality materials, the latest technology, and decades of combined clinical experience to professionally restore your smile to full function.",
      ],
    },
    sections: [
      {
        id: "our-approach",
        title: "Our Approach",
        tagline: "REBUILDING FUNCTION FOR LONG-TERM HEALTH",
        paragraphs: [
          "SmileQuest’s restorative dentistry services restore your smile and your quality of life. We take the time to understand how your teeth are functioning now and where issues might arise down the line. That means making sure your bite is well aligned and stable, your teeth are working as they should, and your restorations last.",
        ],
        testimonial: {
          quote: "As always, my experience was as wonderful as a dentist visit can be! 😉 They are all very friendly, helpful, gentle and kind.",
          author: "patty c.",
        },
      },
      {
        id: "dental-crowns",
        title: "Dental Crowns",
        tagline: "RESTORE DAMAGED TEETH WITH CUSTOM CROWNS",
        paragraphs: [
          "When a tooth is cracked, decayed, or structurally weakened, a dental crown restores both strength and appearance. Using digital imaging, the SmileQuest team will custom-create your crown from high-quality materials best suited to your situation. Options include zirconia, lithium disilicate, and PFM (porcelain fused to metal). Stainless steel dental crowns are also available for children and adults when necessary.",
        ],
      },
      {
        id: "dental-bridges",
        title: "Dental Bridges",
        tagline: "FILL THE GAPS WITH A PERMANENT SOLUTION",
        paragraphs: [
          "A dental bridge offers an effective solution for missing teeth. Bridges are anchored to the teeth on either side of the gap and will restore your chewing function. Another positive aspect of dental bridges is that they stop your surrounding teeth from moving out of place.",
          "At SmileQuest, we craft each dental bridge to blend naturally with your existing teeth. The materials we use are durable and support both aesthetics and longevity. Our team will walk you through your options to ensure a comfortable, functional fit that supports your bite and smile.",
        ],
      },
      {
        id: "dentures",
        title: "Dentures",
        tagline: "CUSTOM PARTIALS AND FULL DENTURES",
        paragraphs: [
          "If you are missing a few or all of your teeth, dentures are a time-tested and affordable solution. At SmileQuest, we offer both full and partial dentures, which means more control over the fit, timeline, and final result.",
          "Today’s dentures are lighter, more lifelike, and more comfortable than ever before. Whether you’re receiving your first set or replacing an older one, our team will take the time to make sure your dentures feel as good as they look.",
        ],
      },
      {
        id: "implant-supported-dentures",
        title: "Implant-Supported Dentures",
        tagline: "A SECURE, STABLE UPGRADE TO TRADITIONAL DENTURES",
        paragraphs: [
          "Looking for more stability than traditional dentures can offer? Implant-supported dentures offer premium stability and support. These dentures attach to dental implants placed in the jaw for the most secure fit and improved function. We offer several types of implant-supported dentures, including hybrid dentures, implant-retained dentures, and leave-in dentures.",
          "Implant-supported dentures offer better chewing ability, greater comfort, and no slipping or clicking, which can happen with traditional dentures. They also help preserve your jawbone structure, making them a long-term investment in your health and confidence.",
        ],
      },
      {
        id: "dental-implants",
        title: "Dental Implants",
        tagline: "PERMANENT TOOTH REPLACEMENT",
        paragraphs: [
          "Dental implants are the most durable and natural-feeling option to replace missing teeth. Each implant acts as a replacement root and is topped with a custom crown, bridge, or denture, depending on your needs.",
          "At SmileQuest, we carefully plan and place your implants with a tailored treatment plan. We use 3D imaging, advanced surgical techniques, and high-quality materials to ensure a stable, comfortable outcome. Whether you need to replace one tooth or several, dental implants are a popular and effective restorative solution.",
        ],
      },
      {
        id: "full-mouth-rehabilitation",
        title: "Full Mouth Rehabilitation",
        tagline: "A COMPREHENSIVE PLAN TO REBUILD YOUR SMILE",
        paragraphs: [
          "If you’re suffering from widespread dental damage, multiple missing teeth, or severe wear, a full mouth rehabilitation can give you a fresh start. This isn’t a one-size-fits-all treatment. Rather, it’s a personalized combination of restorative services planned to rebuild your smile from the ground up. Depending on your needs, a full mouth rehabilitation may include:",
          "At SmileQuest, we use a phased approach to your care. This starts with thorough diagnostics and a plan tailored to your health, timeline, and goals. The result? A functional, comfortable, healthy smile that looks great and lasts the distance.",
        ],
        bullets: [
          "Crowns and bridges",
          "Implants or implant-supported dentures",
          "Periodontal therapy",
          "Bite adjustment",
          "Cosmetic enhancements",
        ],
      },
    ],
    closing: {
      title: "Let’s Restore Your Smile",
      paragraphs: [
        "You don’t have to live with discomfort, missing teeth, or worn-down restorations. Whether you need a minor repair or a comprehensive solution, at SmileQuest, you will find a team known for their honesty, skill, and compassion.",
        "Let’s talk about what’s possible and help you find your best smile again.",
      ],
    },
  },
  {
    slug: "childrens-dentistry",
    name: "Children’s Dentistry",
    eyebrow: "Healthy habits start early",
    description: "The team at SmileQuest Dental provides gentle, reassuring care for kids of all ages so they can start healthy habits early.",
    image: "/images/childrens-home.jpg",
    icon: "/images/childrens.svg",
    benefits: [
      "GIVE YOUR CHILD A POSITIVE START TO DENTAL CARE",
      "PREVENT DECAY & CAVITIES",
      "BUILD HEALTHY DENTAL HABITS FROM AN EARLY AGE",
    ],
    lead: {
      title: "A DENTAL HOME FOR YOUR WHOLE FAMILY",
      paragraphs: [
        "At SmileQuest, we care for smiles at every age—and that includes your little ones. Our team is here to create a calm, welcoming space where kids feel safe, supported, and excited to visit the dentist. We believe the best way to build lifelong oral health is by creating positive dental experiences early on.",
        "We already care for many parents and grandparents in our community, and we’re honored when families trust us to care for their children too. With gentle techniques, age-appropriate education, and a focus on comfort, we make dental visits feel easy for kids and reassuring for parents.",
      ],
    },
    sections: [
      {
        id: "the-importance-of-a-dental-home-for-children",
        title: "The Importance of A Dental Home for Children",
        tagline: "BUILDING TRUST, COMFORT AND HEALTHY HABITS FROM THE START",
        paragraphs: [
          "Having a dental home means your child sees the same trusted team at every visit, building familiarity and confidence over time. At SmileQuest, we want to be that home—not just for you, but for your entire family.",
          "Our dentists and support team are experienced in working with children of all ages. We take the time to explain what’s happening, use kid-friendly language that is easy to understand, and check in often to make sure your child feels relaxed. We also offer digital X-rays, which expose your child to far less radiation than traditional radiographs while providing clear images that enable us to accurately diagnose any oral health concerns.",
        ],
        testimonial: {
          quote: "Awesome experience, my daughter was scared but they were so kind they explained everything and she was so at ease!! I got to go back with her, and she was so happy!! Overall the best experience you could ask for!!",
          author: "roxane",
        },
      },
      {
        id: "preventive-care",
        title: "Preventive Care",
        tagline: "CREATING HEALTHY ROUTINES THAT LAST A LIFETIME",
        paragraphs: [
          "Good oral habits start early. Regular dental cleanings help us remove plaque and tartar that brushing can miss, while also giving us the chance to spot issues before they become problems. During each visit, our team will provide kids and parents with advice about effective at-home hygiene routines, covering everything from brushing techniques to healthy snacking tips. We also emphasize the importance of caring for baby teeth. Even though these teeth will eventually fall out, they play a vital role in chewing, speaking, and guiding adult teeth into place.",
        ],
      },
      {
        id: "fluoride-varnish",
        title: "Fluoride Varnish",
        tagline: "EXTRA CAVITY PROTECTION FOR DEVELOPING TEETH",
        paragraphs: [
          "Fluoride varnish is a simple, fast treatment that strengthens the tooth enamel and helps prevent decay. Applied after we finish professionally cleaning your child’s teeth, it’s especially effective for children with early signs of enamel weakness or a higher risk of cavities.",
        ],
      },
      {
        id: "dental-sealants",
        title: "Dental Sealants",
        tagline: "PROTECTING HARD-TO-REACH MOLARS",
        paragraphs: [
          "Molars have deep grooves that can be tough to keep clean, especially for kids who are still mastering their brushing skills. Dental sealants create a smooth, protective barrier over those grooves, making it easier to keep plaque and bacteria away. Sealants are quick to apply, long-lasting, and completely painless.",
        ],
      },
      {
        id: "silver-diamine-fluoride",
        title: "Silver Diamine Fluoride",
        tagline: "A GENTLE OPTION TO STOP EARLY DECAY",
        paragraphs: [
          "Silver diamine fluoride (SDF) is a noninvasive treatment used to stop the progression of small cavities. It’s ideal for very young children or those who aren’t yet ready for traditional fillings. SDF halts decay and strengthens the tooth surface, giving your child a healthier smile with no drilling or discomfort.",
        ],
      },
      {
        id: "tooth-colored-fillings",
        title: "Tooth-Colored Fillings",
        tagline: "NATURAL-LOOKING REPAIRS FOR CAVITIES",
        paragraphs: [
          "When a cavity does need to be filled, we use tooth-colored composite material to restore the tooth’s strength and appearance. These fillings are durable, effective, and blend in with the natural shade of your child’s teeth.",
        ],
      },
      {
        id: "dental-bonding",
        title: "Dental Bonding",
        tagline: "EASY FIX FOR SMALL CHIPS OR GAPS",
        paragraphs: [
          "Bonding can quickly correct minor cosmetic issues like small chips, uneven edges, or gaps between teeth. It’s a simple treatment that improves appearance and function with minimal time in the chair, perfect for little ones with minor damage or wear.",
        ],
      },
      {
        id: "stainless-steel-crowns",
        title: "Stainless Steel Crowns",
        tagline: "STRONG, LONG-LASTING SOLUTIONS FOR BABY TEETH",
        paragraphs: [
          "When a baby tooth is too damaged for a filling, a stainless steel crown may be the best option. These crowns are incredibly strong and protect the tooth until it’s ready to fall out naturally. They’re most commonly used on molars and are a reliable way to maintain chewing function and space for adult teeth.",
        ],
      },
      {
        id: "sedation-dentistry",
        title: "Sedation Dentistry",
        tagline: "SAFE, EFFECTIVE OPTIONS TO REDUCE ANXIETY",
        paragraphs: [
          "If your child is especially anxious, has special healthcare needs, or requires extensive treatment, sedation can make the experience much easier. At SmileQuest, we offer two types of sedation for children:",
          "We’ll always discuss options with you and help determine the safest and most appropriate approach for your child.",
        ],
        bullets: [
          "Nitrous oxide - Also known as laughing gas, this is a mild sedation option that helps your child stay calm and relaxed during treatment. It wears off quickly and has no lingering effects.",
          "General anesthesia - In some cases, we may recommend treatment under general anesthesia, performed in a hospital or surgical setting with a pediatric anesthesiologist present. This is typically reserved for very young children or those with complex needs.",
        ],
      },
      {
        id: "sports-mouth-guards",
        title: "Sports Mouth Guards",
        tagline: "CUSTOM PROTECTION FOR ACTIVE KIDS",
        paragraphs: [
          "If your child plays contact sports, a custom-fitted mouth guard can protect their teeth and reduce the risk of injury. Our sports mouth guards are comfortable, durable, and fit far better than store-bought versions, making them more likely to stay in place when it matters most.",
        ],
        testimonial: {
          quote: "We love Smile Quest! Dr. Mack and all the hygienists are great with my kids.",
          author: "cassandra s.",
        },
      },
      {
        id: "tips-for-baby-s-first-visit",
        title: "Tips for Baby’s First Visit",
        tagline: "STARTING STRONG FROM THE VERY FIRST TOOTH",
        paragraphs: [
          "We recommend scheduling your baby’s first dental visit by their first birthday or when their first tooth appears, whichever comes first. The goal of this first visit is to introduce your child to the dental office in a fun, low-pressure way.",
          "We’ll do a quick evaluation while your child stays on your lap, answer any questions you have about teething or brushing, and offer guidance on how to care for your child’s teeth as they grow. Early visits help normalize the dental experience and set the stage for a lifetime of healthy habits.",
          "To prepare your child for their first visit, try talking to them about it, read a book with their favorite characters visiting the dentist, look up relevant video clips on YouTube, or role-play at home. It’s also important for parents to set a great example for their children. Let your child see you brushing your teeth and caring for your smile, and they will be excited to follow in your footsteps.",
        ],
      },
    ],
    closing: {
      title: "Book Your Child’s Next Visit at Smile Quest Dental Care",
      paragraphs: [
        "From toddlers to teens, we’re here to support your child’s smile every step of the way. If you’re looking for a team that truly cares and a dental home you can grow with, we’d love to meet your family.",
      ],
    },
  },
  {
    slug: "endodontics",
    name: "Endodontics",
    eyebrow: "Skill, experience, steady hands",
    description: "Our doctors perform root canal treatments with skill, experience, and steady hands so you can maintain a healthy smile.",
    image: "/images/endontics-home.jpg",
    icon: "/images/endodontics.svg",
    benefits: [
      "PINPOINT TOOTH PAIN WITH ADVANCED DIAGNOSTICS",
      "PRESERVE YOUR TEETH",
      "STOP THE SPREAD OF INFECTION",
    ],
    lead: {
      title: "ADVANCED ROOT CARE FROM A TEAM YOU CAN TRUST",
      paragraphs: [
        "Endodontics focuses on the inside of the tooth, specifically the pulp and root canals. When these areas become infected, inflamed, or damaged, timely treatment can save the tooth and relieve pain. At SmileQuest, we provide comprehensive endodontic care for both adults and children using advanced imaging and techniques that support optimal outcomes.",
        "We take a thoughtful, diagnostic-first approach to every case. Our team is highly trained and experienced in treating even the most complex root-related issues, and we’re committed to making the process as smooth and comfortable as possible. If you’re in pain or have been told you need a root canal, we’re here to help—with the goal of preserving your natural tooth whenever possible.",
      ],
    },
    sections: [
      {
        id: "oral-surgery",
        title: "Oral Surgery",
        tagline: "IN-HOUSE SURGICAL CARE",
        paragraphs: [
          "In-house surgical care delivered by an experienced team known for their gentle techniques and attention to detail.",
        ],
      },
      {
        id: "cbct-imaging",
        title: "CBCT Imaging",
        tagline: "3D DIAGNOSTICS FOR ACCURATE, TARGETED CARE",
        paragraphs: [
          "Every endodontic patient at SmileQuest receives CBCT imaging. This is a 3D scan that shows us the tooth roots, nerves, and surrounding structures in exceptional detail. It helps us identify infections, cracks, unusual root anatomy, and other hidden concerns that traditional X-rays may miss. CBCT is a critical part of our diagnostic process and ensures we can confidently plan your treatment with all the information we need.",
        ],
        testimonial: {
          quote: "I’ve been a patient at SmileQuest for a year now and my experience with them from day one has been great. The staff are very polite and professional and they are very accommodating and make you feel very comfortable from the moment you walk into their office. I would highly recommend them to all my friends and family.",
          author: "melissa s.",
        },
      },
      {
        id: "root-canal-therapy-and-pediatric-pulpotomy",
        title: "Root Canal Therapy & Pediatric Pulpotomy",
        tagline: "SAVING NATURAL TEETH AND RELIEVING PAIN",
        paragraphs: [
          "Root canal therapy removes infected or damaged pulp from inside the tooth while preserving the healthy outer structure. It’s a common treatment that stops the spread of infection, relieves pain, and helps prevent the need for a tooth extraction.",
          "We also offer pediatric pulpotomy, a treatment used when a child’s baby tooth has infected or irritated pulp. This treatment removes the damaged pulp while keeping the rest of the tooth intact, helping to maintain space for the adult tooth and protecting your child’s long-term oral health.",
          "Modern root canal therapy is a stress-free process. With local anesthesia, advanced diagnostics, and gentle techniques, we ensure a comfortable experience from start to finish.",
        ],
      },
      {
        id: "root-canal-re-treatment",
        title: "Root Canal Re-Treatment",
        tagline: "WHEN PREVIOUS TREATMENT NEEDS A SECOND LOOK",
        paragraphs: [
          "Sometimes, a tooth that’s already had a root canal may experience an issue due to a missed canal, new decay, or reinfection. In these cases, root canal re-treatment can help save the tooth. Our team will remove the existing root canal filling, re-clean the canals, and reseal it. With modern tools and updated imaging, re-treatment has a strong success rate and can often prevent the need for extraction.",
        ],
      },
      {
        id: "endodontic-surgery-apicoectomy",
        title: "Endodontic Surgery (Apicoectomy)",
        tagline: "TARGETED TREATMENT FOR STUBBORN INFECTIONS",
        paragraphs: [
          "In certain cases, root canal therapy alone may not resolve an infection. That’s when an apicoectomy, a minor surgical procedure, comes into play. This treatment involves removing the tip of the tooth’s root and sealing the canal from the bottom.",
          "We typically recommend this only after other treatments have been tried or ruled out. Our CBCT imaging helps us pinpoint exactly where the infection is, making the procedure as efficient and minimally invasive as possible.",
        ],
      },
      {
        id: "unexplained-tooth-pain",
        title: "Unexplained Tooth Pain",
        tagline: "IDENTIFYING THE SOURCE OF DISCOMFORT",
        paragraphs: [
          "Tooth pain doesn’t always have an obvious cause. At SmileQuest, we use advanced diagnostic tools to uncover the source of persistent or unexplained pain. Sometimes the issue lies within the tooth, such as a hairline crack or inflamed pulp. Other times, pain may stem from the gums or surrounding bone. Our thorough evaluations ensure we get to the bottom of it so you’re not left guessing or living with ongoing discomfort.",
        ],
      },
      {
        id: "internal-bleaching",
        title: "Internal Bleaching",
        tagline: "LIGHTEN DARKENED TEETH FROM THE INSIDE OUT",
        paragraphs: [
          "Teeth that have undergone trauma or root canal therapy may darken over time. Internal bleaching is a cosmetic solution that lightens a tooth from within, improving its appearance without needing a crown or veneer. This can be a great option if you’re happy with the shape of the tooth but want to restore a more uniform color to your smile. We perform this treatment in-office and complete it within one to two visits.",
        ],
      },
      {
        id: "pediatric-endodontics",
        title: "Pediatric Endodontics",
        tagline: "GENTLE, EFFECTIVE CARE FOR KIDS",
        paragraphs: [
          "We’re proud to offer pediatric endodontic care, including advanced treatment options to support developing teeth. Our approach is calm, clear, and designed with kids' comfort in mind. We offer:",
          "Our doctors are experienced in working with children and provide age-appropriate explanations, gentle treatments, and a supportive environment every step of the way.",
        ],
        bullets: [
          "Apexification and apexogenesis - When a young tooth has an open root tip, these help guide development and encourage healing.",
          "Vital pulp therapy and root regeneration - Treatments that preserve the living tissue inside a developing tooth to support continued growth and prevent extraction.",
        ],
      },
      {
        id: "sedation-options",
        title: "Sedation Options",
        tagline: "MAKING COMPLEX TREATMENT FEEL SIMPLE",
        paragraphs: [
          "Endodontic procedures can be anxiety-inducing, especially for younger patients or those with dental fears. We offer nitrous oxide (laughing gas) to help patients feel more calm during their treatment. It takes effect quickly and wears off shortly after treatment, allowing patients to return to normal activities with ease. We’ll always discuss sedation options so you feel safe and confident about your treatment.",
        ],
      },
    ],
    closing: {
      title: "Schedule an Endodontic Evaluation at Smile Quest Dental Care",
      paragraphs: [
        "Whether you’re in pain or simply want to explore your options, our team is here to help with compassionate, expert-led endodontic care. From root canal therapy to pediatric treatments, we bring advanced diagnostics and a gentle touch to every visit. Let’s find the source of the problem and a solution that’s right for you.",
      ],
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
