export const site = {
  name: "SmileQuest Dental",
  shortName: "SmileQuest",
  tagline: "Uncompromising excellence in dentistry",
  description:
    "At SmileQuest Dental, we don’t do quick fixes or one-size-fits-all solutions. We believe in a tailored and personalized approach for lasting results.",
  phone: "701-662-8191",
  phoneHref: "tel:+17016628191",
  address: {
    street: "206 5th Avenue SE",
    city: "Devils Lake",
    state: "ND",
    zip: "58301",
    full: "206 5th Avenue SE, Devils Lake, ND 58301",
  },
  mapsHref: "https://maps.app.goo.gl/G9JjY79GvNAT9bY36",
  mapEmbedHref:
    "https://www.google.com/maps?q=206+5th+Ave+SE,+Devils+Lake,+ND+58301&output=embed",
  facebook: "https://www.facebook.com/SmileQuest-237285993045489/",
  hours: [
    { day: "Monday", open: "8:00am", close: "4:00pm" },
    { day: "Tuesday", open: "8:00am", close: "4:00pm" },
    { day: "Wednesday", open: "8:00am", close: "4:00pm" },
    { day: "Thursday", open: "8:00am", close: "4:00pm" },
    { day: "Friday", open: "8:00am", close: "4:00pm" },
    { day: "Saturday", open: null, close: null },
    { day: "Sunday", open: null, close: null },
  ],
  hoursSummary: "Monday to Friday, 8:00am–4:00pm",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Plan Your Visit", href: "/plan-your-visit" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "General Dentistry",
        href: "/services/general-dentistry",
        description: "Everyday oral health and preventive care.",
      },
      {
        label: "Cosmetic Dentistry",
        href: "/services/cosmetic-dentistry",
        description: "Smile makeovers and Invisalign.",
      },
      {
        label: "Restorative Dentistry",
        href: "/services/restorative-dentistry",
        description: "Implants and full mouth rehabilitation.",
      },
      {
        label: "Children’s Dentistry",
        href: "/services/childrens-dentistry",
        description: "Gentle, reassuring care for kids.",
      },
      {
        label: "Endodontics",
        href: "/services/endodontics",
        description: "Root canals and in-house oral surgery.",
      },
    ],
  },
  { label: "Request Appointment", href: "/request-appointment" },
];

export const values = [
  {
    title: "Comprehensive Dental Care",
    description:
      "From preventive dental care to oral surgery and endodontics, the SmileQuest team is equipped to handle all your dentistry needs.",
    icon: "/images/care.svg",
    index: "01",
  },
  {
    title: "Personalized, Quality Care",
    description:
      "Our team listens first, provides tailored treatment plans, and ensures you receive high-quality dental care in our modern practice.",
    icon: "/images/personalized.svg",
    index: "02",
  },
  {
    title: "A Calming, Comfortable Space",
    description:
      "Enjoy a positive dental experience at every visit in our relaxing environment.",
    icon: "/images/calm.svg",
    index: "03",
  },
] as const;

export type Treatment = {
  name: string;
  description: string;
  href: string;
  icon: string;
  group: string;
};

export const treatments: Treatment[] = [
  {
    name: "Oral Surgery",
    description:
      "In-house surgical care delivered by an experienced team known for their gentle techniques and attention to detail.",
    href: "/services/endodontics#oral-surgery",
    icon: "/images/surgery.svg",
    group: "Surgical care",
  },
  {
    name: "Periodontics",
    description: "Gentle periodontal treatment restores gum health for your best smile.",
    href: "/services/general-dentistry#periodontics",
    icon: "/images/perio.svg",
    group: "Gum health",
  },
  {
    name: "Full Mouth Rehabilitation",
    description:
      "If you need multiple treatments, a tailored full mouth rehabilitation treatment plan can bring your smile back to full health and function.",
    href: "/services/restorative-dentistry#full-mouth-rehabilitation",
    icon: "/images/full-mouth.svg",
    group: "Restorative care",
  },
  {
    name: "Dental Implants",
    description: "Dental implants are the next best replacement option for natural teeth.",
    href: "/services/restorative-dentistry#dental-implants",
    icon: "/images/implants.svg",
    group: "Restorative care",
  },
  {
    name: "Smile Makeovers",
    description:
      "Thoughtfully planned enhancements refresh and transform your smile into one you will love.",
    href: "/services/cosmetic-dentistry#smile-makeovers",
    icon: "/images/makeover.svg",
    group: "Cosmetic care",
  },
  {
    name: "Invisalign",
    description:
      "Invisalign offers a clear, effective alternative to traditional braces if you have crooked teeth or other misalignment issues.",
    href: "/services/cosmetic-dentistry#invisalign",
    icon: "/images/invisalign.svg",
    group: "Cosmetic care",
  },
];

export {
  services,
  getService,
  type Service,
  type ServiceSection,
} from "./services";

export const paymentInfo = {
  title: "Paying for your dental treatment at SmileQuest Dental Care",
  paragraphs: [
    "SmileQuest offers a range of payment options including cash, credit card, and most major dental insurance plans.",
    "Not sure if we’re in your network? Contact our team, and we’ll help you understand your options so you can start treatment without delay.",
  ],
} as const;

export type Review = {
  name: string;
  meta: string;
  quote: string;
  href: string;
};

const reviewHref =
  "https://www.google.com/maps/contrib/105443996185155259222/place/ChIJuRPwrNtL21IRMnNnM5FMn1k";

export const reviews: Review[] = [
  {
    name: "Curt Kukert",
    meta: "5 months ago via Google",
    quote:
      "The dental hygienist, Karla, was very informative and pleasant. She explained everything she was doing and was very knowledgeable about my past dental history…",
    href: reviewHref,
  },
  {
    name: "Jolene Wee",
    meta: "6 months ago via Google",
    quote:
      "Very happy with today’s appointment. My normal dentist was away for the day and a newer dentist to the practice exams me. Both her and…",
    href: reviewHref,
  },
  {
    name: "robert",
    meta: "a month ago via Google",
    quote:
      "Been going to dentists for 6 decades, around the country and overseas. SmileQuest is the best of the best. The Devils Lake region is blessed…",
    href: reviewHref,
  },
  {
    name: "Shelby Campbell",
    meta: "a month ago via Google",
    quote:
      "This was my daughter’s first ever dentist appointment and it went really well! My daughter is terrified of needles, tweezers, blood, etc so I was…",
    href: reviewHref,
  },
  {
    name: "Chanda Arneson",
    meta: "2 months ago via Google",
    quote:
      "We had a mild emergency tooth issue with my 6yr old son who hasn't been to Smile Quest until today. We had fantastic interactions. Everyone…",
    href: reviewHref,
  },
];

export const appointmentTypes = [
  "Existing Patient Check Up & Cleaning",
  "Invisalign Consultation",
  "New Patient Appointment",
  "Second Opinion Consultation",
  "Toothache",
] as const;

export const faqs = [
  {
    question: "Do you treat children?",
    answer:
      "Yes. The team at SmileQuest Dental provides gentle, reassuring care for kids of all ages so they can start healthy habits early.",
  },
  {
    question: "Can you handle complex dental needs?",
    answer:
      "Our advanced training in oral surgery, endodontics, and periodontics means we can handle complex cases—while never losing sight of the personal care and comfort that matter most.",
  },
  {
    question: "Do you offer Invisalign?",
    answer:
      "Yes. Invisalign offers a clear, effective alternative to traditional braces if you have crooked teeth or other misalignment issues.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our dental office is easily accessible and conveniently located at 206 5th Avenue SE, Devils Lake, ND 58301.",
  },
  {
    question: "How do I request an appointment?",
    answer:
      "Give us a call at 701-662-8191 or request an appointment online—we’ll help you take the first step toward care that lasts.",
  },
] as const;

export type LegalPage = {
  slug: string;
  title: string;
  summary: string;
};

export const legalPages: LegalPage[] = [
  {
    slug: "hipaa-notice-of-privacy-practices",
    title: "HIPAA Notice of Privacy Practices",
    summary:
      "Our HIPAA Notice of Privacy Practices describes how health information about you may be used and disclosed, and how you can get access to this information.",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    summary:
      "Our Privacy Policy explains how information is handled when you visit this website or contact our practice.",
  },
  {
    slug: "accessibility-statement",
    title: "Accessibility Statement",
    summary:
      "SmileQuest Dental is committed to making our website and our practice accessible to all patients.",
  },
  {
    slug: "non-discrimination-notice",
    title: "Non-Discrimination Notice",
    summary:
      "SmileQuest Dental does not discriminate on the basis of race, color, national origin, age, disability, or sex.",
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    summary:
      "These terms govern the use of the SmileQuest Dental website and its content.",
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return legalPages.find((page) => page.slug === slug);
}
