export default {
  en: 'English',
  fr: 'French',
  home_link: 'Home',
  about_link: 'About me',
  projects_link: 'Projects',
  links_link: 'Links',
  about_text:
    "I am Guilhem BONNEFOUS, 22 years old, currently a second year student in a Software Engineering Master's degree at the University of Bordeaux, FRANCE. In my free time, I enjoy reading fantasy and science fiction, gaming alone or with friends, progressing my programming projects and dreaming of knights and dragons. Concerning IT, I particularly like web development and any technology with a visual and concrete result (you will have understood, I don't really like theory!).",
  about_text2:
    'On this page, you will be able to discover my background in IT, my skills as well as links to my networks. You can also see my personal projects, carried out as part of my studies or in my free time, on the next page.',
  about_copy: 'Click to copy',
  about_copied: 'Copied!',
  skills: 'Skills',
  see_more: 'See more...',
  tools: 'Tools',

  // SKILLS

  tier_1: 'I have used these tools several times AND in an advanced way...',
  tier_2: 'I have used these tools several times in a basic way...',
  tier_3: 'I have used these tools once before...',
  skills_auto: 'Self-taught',
  skills_academic: 'Studied at university',

  career: 'Career',
  colon: ':',

  // CAREER

  2021: {
    1: "First year of bachelor's degree in computer science at ",
    2: 'Interviews with developers from Asobo Studio and Ubisoft Bordeaux',
    3: 'Summer work at the Regional Pay Office of Nouvelle-Aquitaine'
  },
  2022: {
    1: "Second year of bachelor's degree in computer science",
    2: 'One-month internship in summer for the creation of a website allowing you to view the CO2 emitted by members of ',
    3: 'Participation in '
  },
  2023: {
    1: "Third year of bachelor's degree in computer science",
    2: 'Part-time student job throughout the year to continue the site started during the 2022 internship at LaBRI',
    3: 'Participation in '
  },
  2024: {
    1: "First year of master's degree in computer science",
    2: 'Participation in ',
    3: 'Development of an addon for the video game World of Warcraft in Lua',
    4: 'Development of a Chrome extension'
  },
  2025: {
    1: "Second year of master's degree in computer science... (in progress)"
  },

  // PROJECTS TEXT

  project_title: 'Projects',
  project_more: 'Learn more on Github',
  project_site: 'View the website',
  show_more: 'Show more',
  show_less: 'Show less',

  // PROJECTS

  swyt: {
    title: 'SWYT: Stop Wasting Your Time',
    date: 'Summer 2025',
    description:
      'SWYT (Stop Wasting Your Time) is a Chrome extension developed in JavaScript. It allows users to limit the time spent each day watching YouTube Shorts. The user can choose a daily time not to exceed, and the extension will time the time spent watching YouTube Shorts, and if this time is exceeded, it will redirect the user and prevent them from watching more Shorts until the next day. This is a personal project allowing me both to develop a useful tool for myself, and to discover Chrome extension development (and thus manifests and the Chrome API).',
    type: 'Browser extension',
    tool: 'HTML, CSS & JavaScript',
    lang: 'English & French',
    access: 'Accessibility? Yes'
  },
  emh: {
    title: 'EMH: Earthen Master Hammer Addon',
    date: 'Spring 2025',
    description:
      'Earthen Master Hammer Addon (EMH) is an addon for the video game World of Warcraft, developed in Lua. It allows simplifying the use of the blacksmith object Earthen Master Hammer. It was my first real personal project and the first time I programmed an addon for Wow (so I discovered both the Lua language and the Wow API). It was a bit complicated at first due to the lack of documentation and advanced tutorials, but it was very rewarding to manage to create an addon that is useful to me in daily gameplay.',
    type: 'Video game addon',
    tool: 'Lua',
    lang: 'English, French & more',
    access: 'Accessibility? No'
  },
  portfolio: {
    title: 'Portfolio',
    date: '2024 to 2025+',
    description:
      'My personal portfolio, which you are currently visiting! It was developed in Vue with TypeScript, and uses Tailwind CSS (v3) for styling. I decided to create a portfolio to present my projects and my journey, and to practice using Vue and TypeScript. The site is fully responsive and accessible, in English and French, and everything was coded by myself, including the SVG illustrations (although I received help from Copilot).',
    type: 'Website',
    tool: 'Vue, TypeScript & Tailwind CSS',
    lang: 'English & French',
    access: 'Accessibility? Yes'
  },
  yatiuc: {
    title: 'Is there a duck?',
    date: 'February to April 2024',
    description:
      'The "Is there a duck?" project is a project for the "Software Development Project" course at the end of the third year of computer science, carried out by 3 people. It is a website with a Java backend, allowing users to post images and modify them using various image management algorithms. The project uses a PostgreSQL database to store images, and the frontend is developed in Vue.js with Tailwind CSS. The goal of the project is to put into practice the skills acquired in programming, project management and teamwork during the degree. Apart from the basic required content, the rest was free. My group therefore decided to create a website about ducks, with touches of humor. Due to the use of a PostgreSQL database from the University of Bordeaux, the site is not hosted online.',
    type: 'Website with Java backend',
    tool: 'Vue, Tailwind v3, Typescript, Java, Maven & PostgreSQL',
    lang: 'French',
    access: 'Accessibility? No'
  },
  ghg_viewer: {
    title: 'LaBRI GHG Viewer',
    date: 'June 2023 to June 2024',
    description:
      'Website created for LaBRI (Bordeaux Computer Science Research Laboratory) during a one-month internship in June 2023, then continued as a part-time student job during the 2023-2024 academic year. The goal was to create a website allowing laboratory members to view the CO2 emissions they generated through their professional travel. The goal was also to organize data from several .csv files into a sort of local database, using the Python language. Once this was done, I was able to code the website and I notably used technologies like Tailwind, Parcel or ChartJS. The site therefore allows visualizing emissions globally, by person, by department and by team, as well as allowing predictions for future years. I coded the site and Python scripts entirely alone, with the help and advice of two tutors. This project was very enriching, as it allowed me to improve my web development skills and create a project from A to Z, following specifications and feedback from my tutors each week. In order not to reveal sensitive data, the site and Github are private, and the image is censored.',
    type: 'Website & scripts',
    tool: 'HTML, Tailwind CSS, Javascript, Python & Parcel',
    lang: 'English',
    access: 'Accessibility? Yes'
  },
  takuzu_web: {
    title: 'Takuzu, website version',
    date: 'March to June 2023',
    description:
      'Takuzu is a project carried out by me and three friends during our second year in computer science. The objective was to create a website allowing the user to play the Takuzu game (also known as Unruly or Binairo), previously coded in C. This is the third part of the project (after the terminal and graphical interface versions). I coded most of the website, and it was the first time I implemented a homemade night mode.',
    type: 'Website videogame',
    tool: 'HTML, CSS & JavaScript',
    lang: 'English',
    access: 'Accessibility? Yes'
  },
  takuzu_desktop: {
    title: 'Takuzu, desktop version',
    date: 'September 2022 to March 2023',
    description:
      'Takuzu is a project carried out by me and three friends during our second year in computer science. The objective was to create the Takuzu game (also known as Unruly or Binairo) using the C language, and to explore the libraries and tools used in project development. These are the first and second parts of the project, which can be summarized as "terminal game" and "game with graphical interface". The graphical interface was made with a Lord of the Rings theme in mind, and all the graphic assets were handmade by a friend (except the background).',
    type: 'Desktop videogame',
    tool: 'C, Cmake & SDL2',
    lang: 'English',
    access: 'Accessibility? No'
  },
  ndi2023: {
    title: 'NDI2023',
    date: '7 and 8 December 2023',
    description:
      'Website created for the "Nuit de l\'Info" 2023, by the team "Gragas 404 Not Found" (4 members). The "Nuit de l\'Info" is an annual event organized in December in French universities that lasts one night and where the goal is to code a website with challenges, have fun and meet companies. This year\'s topic was "Facing climate change: true or false", and was sponsored by the Climate Action Network association. We took the opportunity to discover the Angular framework that none of us knew, and to try to distribute tasks efficiently. Wanting to develop everything ourselves, we didn\'t have time to finish everything and we didn\'t win anything.',
    type: 'Website',
    tool: 'Angular',
    lang: 'French',
    access: 'Accessibility? No'
  },
  ubgarden: {
    title: 'UBGarden',
    date: 'May to June 2023',
    description:
      'UBGarden is a Java project carried out in the second year of computer science at the University of Bordeaux, during the Object-Oriented Programming (OOP) course unit. It consisted of creating a small "Zelda"-type 2D video game, from a base code provided by the professor. It was preceded by several weeks of tutorials to learn how to develop in Java and use IntelliJ Idea and Gradle, and lasted a few weeks. This project was our first approach to Java and Object-Oriented Programming.',
    type: 'Desktop videogame',
    tool: 'Java, Gradle & IntelliJ IDEA',
    lang: 'French',
    access: 'Accessibility? No'
  },
  wiki_fh: {
    title: 'Wiki For Honor',
    date: 'December 2022',
    description:
      'WikiFH (for "Wiki For Honor") is a website I created at the beginning of my second year at university. It was a small project aimed at teaching students how to create a website with basic technologies such as HTML, CSS, Javascript and PHP. I had therefore decided to create a website in honor of For Honor, a game created by Ubisoft, which I really liked. Its realization is very basic, but it was the first serious website I created, and which made me discover my love for the web.',
    type: 'Website',
    tool: 'HTML, CSS, JavaScript & PHP',
    lang: 'French',
    access: 'Accessibility? No'
  },
  videotracker: {
    title: 'VideoTracker',
    date: 'April 2022',
    description:
      'Videotracker is a Python project developed by a friend and me during our first year of computer science studies. It meets a set of specifications including requirements such as video display, pause, frame-by-frame navigation, drawing points on the video and creating a CSV file to show the evolution of these points. The project was carried out following the agile project management methodology SCRUM, with "regular meetings" with our TD supervisor to discuss project progress and obstacles encountered. It was a very enriching project, as it allowed me to discover project management and the Python language very early.',
    type: 'Desktop application',
    tool: 'Python',
    lang: 'French',
    access: 'Accessibility? No'
  }
}
