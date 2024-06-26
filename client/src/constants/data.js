// Data Storage File
const teamMembers = [
  {
    id: "lamex-ochieng",
    name: "Lamex Ochieng'",
    role: "Founder & Design Team Lead",
    profileImg:
      "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
    xProfile: "",
    linkedInProfile: "",
  },

  {
    id: "joachim-mwengi",
    name: "Joachim Mwengi",
    role: "Senior Software Engineer",
    profileImg:
      "https://res.cloudinary.com/dltjv8zbh/image/upload/v1698169254/me_plol5i.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
    xProfile: "",
    linkedInProfile: "",
  },

  {
    id: "quincy",
    name: "Quincy",
    role: "Graphics Designer",
    profileImg:
      "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
    xProfile: "",
    linkedInProfile: "",
  },
];
const topProjects = [
  {
    id: "siha",
    title: "Siha Wellness Studio",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1709102674/Top_projects_600_x_400-02_d4itiv.png",
    tag: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "mosota-abunga",
    title: "Mosota Abunga Associates & Advocates",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1709102667/Top_projects_600_x_400-03_azqxcn.png",
    tag: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "geddo",
    title: "Geddo Farm",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1709102674/Top_projects_600_x_400-02_d4itiv.png",
    tag: "Social Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "links-coffee",
    title: "Links Coffee Joint",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1709102667/Top_projects_600_x_400-03_azqxcn.png",
    tag: "Signages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "walter-milly",
    title: "Walter Milly",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1709102674/Top_projects_600_x_400-02_d4itiv.png",
    tag: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "cloud-atlas",
    title: "Cloud Atlas",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1709102667/Top_projects_600_x_400-03_azqxcn.png",
    tag: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "siha",
    title: "Siha Wellness Studio",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1709102674/Top_projects_600_x_400-02_d4itiv.png",
    tag: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "links-coffee",
    title: "Links Coffee Joint",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1709102667/Top_projects_600_x_400-03_azqxcn.png",
    tag: "Social Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const clientBrands = [
  {
    id: "fly-211",
    title: "Fly 211",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1710161072/Client_Logos-04_lqddas.png",
  },
  {
    id: "nairobi-archery-club",
    title: "Nairobi Archery Club",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1710161081/Client_Logos-07_llsj2q.png",
  },
  {
    id: "siha-wellness-studio",
    title: "Siha Wellness Studio",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1710161075/Client_Logos-02_b4jou5.png",
  },
  {
    id: "maa-advocates",
    title: "Mosota Abunga & Associates Advocates, LLP",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1710161077/Client_Logos-01_t5somg.png",
  },
  {
    id: "crispy-catch",
    title: "Crispy Catch",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1710161078/Client_Logos-05_fuimy9.png",
  },

  {
    id: "geddo",
    title: "Geddo",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1710161076/Client_Logos-09_ddyfgn.png",
  },
  {
    id: "afreen-international-school",
    title: "Afreen International School",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1710161074/Client_Logos-03_hb9dvo.png",
  },
  {
    id: "islamic-cultural-center",
    title: "Islamic Cultural Center",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1710161083/Client_Logos-08_kr15sd.png",
  },
  {
    id: "atis-suites",
    title: "Atis Suites",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1710161079/Client_Logos-06_pvhy6s.png",
  },
];

const services = [
  {
    id: "branding-and-signages",
    name: "Branding and Signages",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1708347206/output-onlinegiftools_2_vi56yg.gif",
    description: "",
  },

  {
    id: "graphic-design",
    name: "Graphic Design",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1708347209/output-onlinegiftools_3_alrrkt.gif",
    description: "",
  },

  {
    id: "printing",
    name: "Printing",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1708292797/output-onlinegiftools_ttlqko.gif",
    description: "",
  },

  {
    id: "web-development",
    name: "Web Development",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1708347204/output-onlinegiftools_1_r1aluo.gif",
    description: "",
  },

  {
    id: "digital-marketing",
    name: "Digital Marketing",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1708347210/output-onlinegiftools_4_j8vbpw.gif",
    description: "",
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    animatedLogo: "http://",
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1708347213/output-onlinegiftools_5_crirgp.gif",
    description: "",
  },
];

const projectImages = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711985021/top-01_z6qi6t.jpg",
  },

  {
    id: 2,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711985017/top-03_xcyw5u.jpg",
  },

  {
    id: 3,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984998/top-12_uumdn7.jpg",
  },

  {
    id: 4,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984996/top-09_bjrjlw.jpg",
  },

  {
    id: 5,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984994/top-11_t72ncj.jpg",
  },

  {
    id: 6,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984993/top-10_cuvgm1.jpg",
  },

  {
    id: 7,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984994/top-02_tvmfnd.jpg",
  },

  {
    id: 8,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984988/top-15_onn0jj.jpg",
  },

  {
    id: 9,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984988/top-08_lgkm7p.jpg",
  },

  {
    id: 10,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984984/top-07_lmlz7w.jpg",
  },

  {
    id: 11,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984983/top-06_kexbm2.jpg",
  },

  {
    id: 12,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984985/top-16_fbgaea.jpg",
  },

  {
    id: 13,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984981/top-14_gvwioi.jpg",
  },

  {
    id: 14,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984980/top-04_ayjnk5.jpg",
  },

  {
    id: 15,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984980/top-13_dany6w.jpg",
  },

  {
    id: 16,
    img: "https://res.cloudinary.com/dltjv8zbh/image/upload/v1711984979/top-05_abpvco.jpg",
  },
];

export { teamMembers, projectImages, topProjects, clientBrands, services };
