export type Dentist = {
  slug: string;
  name: string;
  paragraphs: string[];
  education: string[];
  organizations: string[];
};

export type TeamGroup = "Administration" | "Hygienists" | "Dental assistants" | "Support";

export type TeamMember = {
  name: string;
  role: string;
  group: TeamGroup;
  bio: string[];
};

export const dentists: Dentist[] = [
  {
    slug: "benjamin-mack-dds",
    name: "Benjamin Mack, DDS",
    paragraphs: [
      "Dr. Benjamin Mack grew up in Devils Lake, North Dakota and has been practicing at SmileQuest since 2007. He studied Chemistry at the University of North Dakota and went on to earn his Doctor of Dental Surgery degree from the University of Minnesota in 2007.",
      "Dr. Mack is committed to providing the latest technology, modern facilities, and a highly educated team- to handle 99% of what patients require, all in one place. He enjoys the unique combination of art, expression, and science that dentistry offers and is dedicated to providing the highest quality of care. His practice is founded on the same values and morals that we’re all accustomed to in North Dakota – trust, integrity, and an unwavering commitment to excellence. He has completed extensive continuing education including advanced training in endodontics, lasers, implantology, and orthodontics.",
      "Dr. Mack and his wife, Jessica, and have three kids: Henrik, Niklas, and Brooklyn. He has a passion for the outdoors and enjoys big game hunting, fishing, chasing his kids around to their activities, and cooking.",
    ],
    education: [
      "University of North Dakota, Chemistry",
      "University of Minnesota, Doctor of Dental Surgery",
    ],
    organizations: [
      "Heartland Study Club",
      "American Dental Association",
      "North Dakota Dental Association",
      "North East District Dental Society",
      "The Academy of General Dentistry",
    ],
  },
  {
    slug: "eric-herman-dds",
    name: "Eric Herman, DDS",
    paragraphs: [
      "Dr. Eric Herman was born and raised in Devils Lake, North Dakota. He has been practicing at SmileQuest since 2016. He earned his Bachelor of Science in Zoology from North Dakota State University in 2011. He went on to earn his Doctor of Dental Surgery degree from Creighton University in 2016.",
      "Dr. Herman chose a career in dentistry after recognizing his passion for crafting things, his precise attention to fine details, and how much he enjoys getting to know people. He strives to lead with compassion, wisdom, and humility. He works hard to be a good steward of the gifts and talents that God has given him. To accomplish this, he has completed continuing education in numerous areas to provide as many high-quality services as possible in Devils Lake.",
      "Dr. Herman and his wife, Logan, have four children. Together, they spend most of their time outside of work raising their kids, spending time outdoors, and volunteering with their local church, including being a youth group leader. Dr. Herman also enjoys mountain biking, dirt biking, snowmobiling, landscaping, and water activities. He loves inventing solutions to problems with 3D design and 3D printing.",
    ],
    education: [
      "North Dakota State University, Bachelor of Science in Zoology",
      "Creighton University, Doctor of Dental Surgery",
    ],
    organizations: [
      "Heartland Study Club",
      "American Dental Association",
      "North Dakota Dental Association",
      "North East District Dental Society",
      "The Academy of General Dentistry",
    ],
  },
  {
    slug: "peyton-halverson-granger-dds",
    name: "Peyton Halverson Granger, DDS",
    paragraphs: [
      "Dr. Peyton Halverson Granger is originally from Cando, North Dakota. She has been practicing at SmileQuest since 2025. Dr. Granger earned her Bachelor of Science in Chemistry and Health Science from Valley City State University in 2021. She went on to earn her Doctor of Dental Surgery degree from the University of Nebraska Medical Center, graduating in 2025 with high distinction.",
      "Dr. Granger saw the challenges people face in accessing dental care while growing up in Cando. She chose a career in dentistry to give back to the community. She enjoys hands-on work, attention to detail, and the opportunity to build meaningful relationships with patients. She is devoted to providing comprehensive dental services to patients of all ages, ensuring each individual receives the highest standard of care. Dr. Granger takes pride in being part of a collaborative team that delivers high-quality treatments while staying up to date on the latest innovations in dentistry.",
      "Outside of her career, Dr. Granger enjoys spending time with her husband Payton and their daughter. She likes sports, hiking, and running in her free time.",
    ],
    education: [
      "Valley City State University, Bachelor of Science in Chemistry and Health Science",
      "University of Nebraska Medical Center College of Dentistry, Doctor of Dental Surgery",
    ],
    organizations: [
      "Heartland Study Club",
      "American Dental Association",
      "North Dakota Dental Association",
      "North East District Dental Society",
    ],
  },
];

export const team: TeamMember[] = [
  {
    name: "Michelle",
    role: "Administration Assistant",
    group: "Administration",
    bio: [
      "Michelle joined SmileQuest Dental in 1994 after graduating from Leeds High School and V-tech East Grand Forks. She is very proud to have celebrated her 30th anniversary with the practice and feels honored to be part of such a wonderful team.",
      "Michelle lives in Esmond with her husband, Raymond. They have three grown daughters, two sons-in-law, and four grandchildren. When she’s not working, Michelle is busy going between her kids' homes to spend time with them and enjoy the grandkids. She also loves gardening, being outdoors, cooking, and baking.",
    ],
  },
  {
    name: "Danielle (Dani)",
    role: "Administrative Assistant",
    group: "Administration",
    bio: [
      "Dani joined the practice in 2015. She has more than 20 years of customer service experience. Dani was born and raised here in Devils Lake and truly enjoys helping the people in the community.",
      "Dani and her husband, Chris, have been together for 18 years. They have two amazing kids, Olivia (6) and Gannon (4) and a big, lovable Dane, Millie. In her spare time, Dani enjoys cooking, gardening, reading, and following her kids’ activities.",
    ],
  },
  {
    name: "Hilary",
    role: "Administrative Assistant",
    group: "Administration",
    bio: [
      "Hilary grew up in a small town in Minnesota before moving to Sioux Falls, where she met her husband. They first lived in Garrison, North Dakota, and moved to Devils Lake in 2011. Hilary joined the SmileQuest Dental team that same year. She enjoys working with the public and getting to know our patients. She also brings fun and humor to the office to lighten the mood and is known as the one who always has snacks and colorful pens!",
      "Hilary finds great joy living at Grahams Island State Park as her husband is a park ranger. Their family is lucky to see all nature has to offer. They have three beautiful children, Blake (13), Aubrey (11), and Carter (9), as well as a Goldendoodle, Mila.",
      "When Hilary isn’t busy working at the practice, she enjoys crafting and watching her kids’ activities, doing what they love. She also loves anything outdoors and is a big fan of Christmas—she loves the smell of pine!",
    ],
  },
  {
    name: "Deanna",
    role: "Finance Manager",
    group: "Administration",
    bio: [
      "Deanna has worked for the doctors at SmileQuest for four years. In her role as finance manager, she is responsible for managing all financial transactions, payroll, employee benefits, and everything attached to these areas. In addition to working at SmileQuest, Deanna and her husband own and operate two businesses in town, H&R Block and Devils Lake Greenhouse.",
      "Deanna and her husband, Kevin, live outside of Devils Lake. They have two children. Their oldest son is married with one child, and their daughter is currently at college studying engineering. They have one granddaughter.",
      "In her spare time, Deanna enjoys reading, camping, and, of course, spending time with her granddaughter. She also enjoys teaching classes on gardening, floral design, and woodworking. She says it’s so much fun to help people discover their creative side.",
      "Deanna is also very passionate about helping families with deaf and hard-of-hearing kids find resources and services in North Dakota. She struggled for years to get help for her daughter. This passion led her to help bring a chapter of Hands & Voices to North Dakota in 2011 to help local families.",
    ],
  },
  {
    name: "Jenn",
    role: "Administrative Assistant and Certified Dental Assistant",
    group: "Administration",
    bio: [
      "Jenn grew up in Maddock, North Dakota, and joined SmileQuest in 2002. Her first position was as a dental assistant, but she moved to the front office as a business team member, where she uses her hidden talents as a computer fixer. Jenn enjoys the opportunity to assist when needed.",
      "Jenn and her husband and two sons now reside in the Starkweather area. When she’s not working, she enjoys her teenage sons’ band (Auto Drive) and spending quality time with friends and family. As a family, they attend many concerts throughout the year.",
    ],
  },
  {
    name: "Ashley",
    role: "Dental Hygienist",
    group: "Hygienists",
    bio: [
      "Ashley grew up in Wahpeton, where she started her education in dental hygiene. She completed her associate degree in dental hygiene at North Dakota State College of Science and obtained a Bachelor of Dental Hygiene from Minnesota State University, Mankato. Ashley joined the practice in 2016. She has completed CPR certification and local anesthesia and nitrous oxide administration training. Ashley also loves keeping up with the dental field. She says there is always more to learn.",
      "Ashley and her husband have lived in Devils Lake since 2016. They keep busy with their son, Fischer, and cat, Sonny. Ashley loves watching sporting activities around the area and spending time with family and friends.",
    ],
  },
  {
    name: "Cassi",
    role: "Dental Hygienist",
    group: "Hygienists",
    bio: [
      "Cassi has an associate degree in dental hygiene from Northwest Technical College in Moorhead, Minnesota. Cassi isn’t originally from Devils Lake but does now consider this area home since living here since 1998. She started with SmileQuest Dental the same year. Her main role in the office is as a dental hygienist, but she also helps out at the front desk with the business team. Cassi enjoys getting to know all her patients and believes that dental visits can be fun. There will always be humor and laughter when Cassi is around.",
      "When Cassi is not at the office working, she is usually following and watching her daughter in all of her sports events and extracurricular activities.",
    ],
  },
  {
    name: "Karla",
    role: "Dental Hygienist",
    group: "Hygienists",
    bio: [
      "Karla completed her dental assisting studies at North Dakota State College of Science. Following that, she chose to go to Northwest Technical College in Moorhead, Minnesota, to get her dental hygiene degree. Karla has also completed additional training in CPR, local anesthesia, and nitrous oxide.",
      "Karla is married and has three very busy kids.",
    ],
  },
  {
    name: "Kylie",
    role: "Dental Hygienist",
    group: "Hygienists",
    bio: [
      "Kylie started her dental journey 23 years ago. She obtained her dental assisting qualifications at Minnesota State Technical College in Moorhead. She then studied dental hygiene at St. Cloud Technical College and earned her Bachelor of Science in dental hygiene at Mankato State University. Kylie joined the team at SmileQuest Dental in 2008. After all these years, she still loves how she gets a chance to change lives every day with dentistry.",
      "Kylie has lived in Devils Lake with her husband for 17 years and loves being on the lake every chance she gets.",
    ],
  },
  {
    name: "Roxanne",
    role: "Dental Hygienist",
    group: "Hygienists",
    bio: [
      "Roxanne grew up in Tolna, North Dakota. She went to college in Wahpeton to study dental hygiene and now, 39 years later, she continues to love the career she chose for herself. She joined the team at SmileQuest Dental in 2016.",
      "Roxanne has been happily married to Bryan for almost 40 years. They have two boys and two grandchildren. Family is very important to Roxanne, and she says it’s her greatest achievement. She also has two younger sisters who are very special to her.",
      "Roxanne loves to travel and has a goal to one day visit every state. She is more than halfway there! She also enjoys camping, spending time outdoors in the summer, and baking.",
    ],
  },
  {
    name: "Brooke",
    role: "Dental Hygienist",
    group: "Hygienists",
    bio: [
      "At the young age of 5, Brooke fell in love with dental hygiene. She has an Associate of Science in dental hygiene from North Dakota State College of Science and a Bachelor of Science in dental hygiene from Minnesota State University, Mankato. Brooke began her career at SmileQuest Dental in 2014.",
      "In her free time, Brooke enjoys four-wheeling, camping, hiking, and crafting.",
    ],
  },
  {
    name: "Breanne (Bree)",
    role: "Dental Hygienist",
    group: "Hygienists",
    bio: [
      "Bree attended the University of North Dakota for a year before transferring to North Dakota State College of Science. She graduated with an Associate of Applied Science in dental assisting. Bree joined the team at SmileQuest Dental in 2022. She has also completed many continuing education courses over the years and is certified in local anesthesia and nitrous oxide administration.",
      "When not working, you’ll find Bree on the farm, outside of Lakota, where she lives with her husband, Randy, and their dog, Ralph. They are expecting their first child in May 2025. In her free time, Bree also enjoys spending time with her family and friends, being outdoors, shopping, and traveling.",
    ],
  },
  {
    name: "DeAnne",
    role: "Dental Hygienist",
    group: "Hygienists",
    bio: [
      "DeAnne has been with SmileQuest Dental since 1989. She was born and raised in Devils Lake and is the seventh of seven children. DeAnne grew up on a farm eight miles out of town. Her family had cattle, chickens, and Shetland ponies.",
      "DeAnne had her first experience working in a dental office while still in high school. She sterilized instruments after school and set up trays with sterilized instruments before school. DeAnne also had the opportunity to assist the dentist during the summer months.",
      "After graduating from high school, DeAnne attended North Dakota State University for a year before being accepted into the dental hygiene program at North Dakota State College of Science in Wahpeton. In addition to her dental hygiene qualifications, DeAnne is also certified in local anesthesia administration and has a permit for the administration of nitrous oxide inhalation analgesia.",
      "DeAnne is married to Donovan, and they have two grown children, Taylor, married to Shelby, and Trisha, married to Alex, along with two granddaughters, Nora and Ruby.",
    ],
  },
  {
    name: "Breanna",
    role: "Dental Assistant",
    group: "Dental assistants",
    bio: [
      "Breanna joined the practice in February 2024. She graduated from Minnesota State Community and Technical College in Moorhead, Minnesota, in 2019 with an Associate of Applied Science in Dental Assisting. Breanna lives in Rugby, and she has a baby boy who keeps her busy!",
    ],
  },
  {
    name: "Tina",
    role: "Dental Assistant",
    group: "Dental assistants",
    bio: [
      "Tina is a certified and registered dental assistant with 32 years of experience in assisting and lab duties with SmileQuest. She enjoys meeting new people and helping them overcome their dental fears. She also enjoys helping people with ill-fitting removable prostheses, such as dentures and partials, by doing in-office relines, making in-office retainers, and creating bleaching trays.",
      "Outside the office, Tina enjoys spending time with her husband, Bill, and their three boys, Noah, Connor, and Jace. They also have two dogs, Daisy and Molly. They are farmers and ranchers, so they stay very busy with all the seasons that North Dakota has to offer.",
      "Tina also loves crafting, making T-shirts and coffee mugs, and sewing. Canning fruits and vegetables and making juice are other favorite hobbies of hers, as well as old family traditions.",
    ],
  },
  {
    name: "Lisa",
    role: "Treatment Coordinator",
    group: "Administration",
    bio: [
      "Lisa has been in the dental field for 35 years. She graduated from Lake Region State College and is a certified and registered dental assistant. Lisa has been with SmileQuest Dental since 2000 and works as our treatment coordinator, where she combines her dental assisting experience and customer service skills.",
      "Lisa is married and has three grown sons who are all married, one daughter, and eight grandkids. Most of them live out of the area, so her free time is mainly spent traveling and visiting family.",
    ],
  },
  {
    name: "Ashley P.",
    role: "",
    group: "Support",
    bio: [
      "Bio coming soon!",
    ],
  },
  {
    name: "Isabelle",
    role: "",
    group: "Support",
    bio: [
      "Bio coming soon!",
    ],
  },
  {
    name: "Nora",
    role: "",
    group: "Support",
    bio: [
      "Bio coming soon!",
    ],
  },
];

export const approach = [
  {
    title: "Understanding",
    description: "We know that every smile comes with a story, and we take the time to listen to yours. From the moment you arrive, you’ll be treated with respect and care.",
  },
  {
    title: "Support",
    description: "We don’t just treat your teeth—we provide you with valuable advice and support so you and your family can create healthy habits that support your long-term oral health.",
  },
  {
    title: "Dedication",
    description: "Our team is dedicated to continuing education, and we pursue advanced training so we can achieve the best possible outcomes for our patients.",
  },
] as const;

export const aboutContent = {
  eyebrow: "Welcome to SmileQuest Dental Care",
  title: "MORE THAN JUST A DENTAL OFFICE",
  paragraphs: [
    "At SmileQuest, we care for people who want to invest in their smiles. We are an experienced, dependable team that you can count on for the long haul. Whether you need a full mouth rehabilitation, dental implants, or preventive care for the whole family, our personalized approach will help you and your family maintain healthier smiles for life.",
  ],
  testimonial: {
    quote: "Wonderful staff. Very caring and gentle. I wouldn't go anywhere else. Highly recommend!!",
    author: "JACKIE C.",
  },
  closing: {
    title: "Thoughtful Care that Achieves the Results You Want",
    paragraph:
      "At SmileQuest, we believe that great dentistry can change more than just your smile’s appearance—it can enhance your quality of life.",
  },
} as const;
