// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import ArrowRightIcon from "./components/SVG/ArrowRightIcon.astro";
import ChartIcon from "./components/SVG/ChartIcon.astro";
import ChipIcon from "./components/SVG/ChipIcon.astro";
import CubeIcon from "./components/SVG/CubeIcon.astro";
import EmojiHappyIcon from "./components/SVG/EmojiHappyIcon.astro";
import InstagramIcon from "./components/SVG/InstagramIcon.astro";
import LinkedInIcon from "./components/SVG/LinkedInIcon.astro";
import TwitterIcon from "./components/SVG/TwitterIcon.astro";

export const SITE_TITLE = "CR3ST Digital Agency";
export const SITE_DESCRIPTION =
  "CR3ST: Where Tech Meets Brilliance. We build the future of Business with Innovative ERP, Web Design & Mobile Apps.";
export const SITE_URL = "https://www.cr3st.com/";
export const KEYWORDS =
  "cr3st digital agency, cr3st agency, crest, crest digital agency, crest agency, cr3st web design, cr3st development services, cr3st marketing solutions, cr3st branding agency, cr3st seo services, cr3st mobile app development, cr3st erp solutions, cr3st creative agency, digital agency cr3st, web design by cr3st, cr3st creative solutions, cr3st online marketing, cr3st graphic design, digital agency, web design, mobile app development, branding services, erp solutions, online presence, custom website design, creative branding, digital marketing agency, seo services, social media management, e-commerce solutions, graphic design services, ux/ui design, software development, technology solutions, creative agency, website optimization, content marketing, responsive web design";

// STYLING
export const SECONDARY_BG = "dark:bg-[#171717] bg-light-300";
export const POTENTIAL_LIST = [
  "Discover how our tailored solutions can drive efficiency and growth for your business.",
  "Discuss your unique goals and explore how CR3ST can bring your vision to life.",
  "Start your journey towards success with CR3ST's expertise and dedication to excellence.",
];

export const ICONS = {
  chart: ChartIcon,
  cube: CubeIcon,
  chip: ChipIcon,
  "emoji-happy": EmojiHappyIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  "arrow-right": ArrowRightIcon,
};

export const SOCIAL_LINKS: {
  name: string;
  url: string;
  icon: keyof typeof ICONS;
}[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/cr3st-digital-agency/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Cr3st_Digital",
    icon: "twitter",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/cr3st.digital/",
    icon: "instagram",
  },
];

export const PROJECTS: Projects[] = [
  {
    title: "African Heritage Awards",
    thumbnail: "/images/projects/1.webp",
    description:
      "Discover CR3ST's impactful landing page for the AfriHeritage Awards. Celebrating African innovators and entrepreneurs, our design captures the essence of driving Africa towards greatness.",
    cta: {
      text: "View Project",
      link: "https://www.afriheritageawards.com/",
    },
  },
];

export const SERVICES: Service[] = [
  {
    microcopy: "Level up fast",
    title: "Software Development",
    thumbnail: "/images/services/1.webp",
    description:
      "From concept to deployment, our expert team crafts custom software solutions tailored to your unique requirements. Whether you need a scalable web application or a powerful mobile app, we have the expertise to bring your vision to life.",
    cta: {
      text: "Learn More",
      link: "mailto:info@cr3st.com",
    },
  },
  {
    microcopy: "Make an impression",
    title: "User Interface & Experience Design",
    description:
      "Unlock seamless user experiences and visually captivating interfaces tailored to your unique business needs and user preferences; our designs blend functionality with flair to elevate your digital presence.",
    thumbnail: "/images/services/2.webp",
  },
  {
    microcopy: "Get noticed",
    title: "Branding & Creative Designs",
    description:
      "Crafting your brand's voice and visual identity is crucial. From typography to logo design, we capture your essence, ensuring your brand resonates authentically and illustrating what your organization truly stands for.",
    thumbnail: "/images/services/3.webp",
  },
  {
    microcopy: "Get found",
    title: "Digital Marketing Solutions",
    thumbnail: "/images/services/4.webp",
    description:
      "Maximize your online presence and drive results with strategic digital marketing solutions. From search engine optimization (SEO) to social media management, helping you connect with your target audience and achieve measurable success.",
  },
  {
    microcopy: "Stay ahead",
    title: "ERP Solutions & Business Automation",
    description:
      "Experience cost savings, enhanced productivity, and seamless workflow with custom software solutions from CR3ST. Our tailored software development services are designed to make your work faster, easier, and more efficient.",
    thumbnail: "/images/services/6.webp",
  },
  {
    microcopy: "Get expert advice",
    title: "Consulting Services",
    description:
      "Gain valuable insights and strategic guidance from experienced consultants. Whether you're launching a new project or seeking to optimize existing processes, we're here to support your success every step of the way.",
    thumbnail: "/images/services/5.webp",
  },
];

// TYPES

export type Projects = {
  title: string;
  thumbnail: string;
  description: string;
  cta: {
    text: string;
    link: string;
    icon?: keyof typeof ICONS;
  };
};

export type Service = {
  title: string;
  description: string;
  thumbnail: string;
  id?: string;
  microcopy?: string;
  cta?: Projects["cta"];
};
