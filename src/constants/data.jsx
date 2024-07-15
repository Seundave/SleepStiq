import { profile } from "../assets/Home";

const navData = [
  {
    id: 1,
    page: "Home",
    link: "/",
  },
  {
    id: 2,
    page: "About",
    link: "/about",
  },
  {
    id: 3,
    page: "Shop",
    link: "/shop",
  },
  {
    id: 4,
    page: "FAQs",
    link: "/faqs",
  },
];

const Testimonial = [
  {
    id: 1,
    image: profile,
    name: "James Miller",
    role: "CEO, Techbias",
    testimony:
      "I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq. ",
  },
  {
    id: 2,
    image: profile,
    name: "Mrs. Adedusi Omolabake Victoria",
    role: "Auditor",
    testimony:
      "I first learned about GOMAL Baptist College through a family friend. He spoke highly of how the school has transformed the lives of many children, including those who were once considered stubborn. This convinced me that GOMAL was the right choice for my child. I am pleased to say that GOMAL has exceeded my expectations. The school employs highly qualified teachers who are dedicated to their students' success. Their teaching methods are exceptional, and they place a strong emphasis on discipline, which has been invaluable in shaping my child's character. I wholeheartedly recommend GOMAL Baptist College to any parent seeking a high-quality education and a nurturing, disciplined environment for their child. GOMAL has made a significant positive impact on my child's life, and I am confident it will do the same for others.",
  },
];

export { navData, Testimonial };
