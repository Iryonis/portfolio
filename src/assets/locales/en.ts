import { projectsImages } from '../ProjectsImages'

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
  skills: 'Skills',
  see_more: 'See more...',
  tools: 'Tools',

  // SKILLS

  tier_1: 'I have used these tools several times AND in an advanced way...',
  tier_2: 'I have used these tools several times in a basic way...',
  tier_3: 'I have used these tools once before...',
  title_text_skills: 'Using {lang}, I...',
  text_one_skills: 'did {count} project(s)',
  text_two_skills: 'followed {count} course(s)',

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

  // PROJECTS

  project_more: 'Learn more on Github',
  project_site: 'View the website',
  show_more: 'Show more',
  show_less: 'Show less',
  projects: [
    {
      title: 'SWYT: Stop Wasting Your Time',
      date: 'Summer 2025',
      image: projectsImages.swyt,
      description:
        'SWYT (Stop Wasting Your Time) is a Chrome extension developed in JavaScript. It allows users to limit the time spent each day watching YouTube Shorts. The user can choose a daily time limit, and the extension will track the time spent watching YouTube Shorts. If the limit is exceeded, the extension will redirect the user and prevent them from watching more Shorts until the next day. This personal project allows me to develop a useful tool while also exploring Chrome extension development (including manifests and the Chrome API).',
      github: 'https://github.com/Iryonis/stop-wasting-your-time',
      site: '',
      type: 'Browser extension',
      tool: 'HTML, CSS & JavaScript',
      lang: 'English & French',
      access: 'Accessibility? Yes'
    },
    {
      title: 'EMH: Earthen Master Hammer Addon',
      date: 'Spring 2025',
      image: projectsImages.emh,
      description:
        'Earthen Master Hammer Addon (EMH) is an addon for the video game World of Warcraft, developed in Lua. It simplifies the use of the blacksmithing item Earth Master Hammer. This was my first real personal project and the first time I programmed an addon for Wow (so I discovered both the Lua language and the Wow API). It was a bit challenging due to the lack of documentation and extensive tutorials, but it was very rewarding to manage to create a functional addon that I use daily in the game.',
      github: 'https://github.com/Iryonis/EarthenMasterHammerAddon',
      site: 'https://www.curseforge.com/wow/addons/emh',
      type: 'Video game addon',
      tool: 'Lua',
      lang: 'English, French & more',
      access: 'Accessibility? No'
    },
    {
      title: 'LaBRI GHG Viewer',
      date: 'June 2023 to June 2024',
      image: projectsImages.ghgViewer,
      description:
        'Website created for LaBRI (Bordeaux Laboratory of Computer Science Research) during a one-month internship in June 2023, then continued as a part-time student job during the 2023-2024 academic year. The goal was to create a website allowing laboratory members to view the CO2 emissions they generated from their professional travel. The project also involved organizing data from several .csv files into a local database using Python. Once this was done, I was able to code the website, utilizing technologies such as Tailwind, Parcel, and ChartJS. The site allows for visualizing emissions globally, by individual, department, and team, as well as making predictions for future years. I coded the site and the Python scripts entirely on my own, with the help and guidance of two mentors. It was a very enriching experience, both technically and personally, as I was able to work on every aspect of a project and use any technology I wished, and contribute to an ecological cause. Due to the sensitivity of the data, both the website and the Github are private, and the image is obfuscated.',
      github: '',
      site: '',
      type: 'Website & scripts',
      tool: 'HTML, Tailwind CSS, Javascript, Python & Parcel',
      lang: 'English',
      access: 'Accessibility? Yes'
    },
    {
      title: 'Takuzu, website version',
      date: 'March to June 2023',
      image: projectsImages.takuzuWeb,
      description:
        'Takuzu is a project realized by 4 students during their second year of computer science. The goal was to port the game Takuzu (also known as Unruly or Binairo)(previously coded in C) on a website. This was the third part of the year-long project (after the terminal and the graphical versions). I did most of the work on the website, and it was the first time I implemented an handmade (albeit working) night mode. ',
      github: 'https://github.com/Iryonis/takuzu-06c',
      site: 'https://guilhem-bonnefous.emi.u-bordeaux.fr/refeartgui2306c/',
      type: 'Website videogame',
      tool: 'HTML, CSS & JavaScript',
      lang: 'English',
      access: 'Accessibility? Yes'
    },
    {
      title: 'Takuzu, desktop version',
      date: 'September 2022 to March 2023',
      image: projectsImages.takuzuDesktop,
      description:
        "Takuzu is a project realized by four students during their second year of computer science. The goal was to create the game Takuzu (also known as Unruly or Binairo) using the C language, and to explore libraries and tools used in project development. This is the first and second part of the project, which are 'game in terminal' and 'game with graphical interface'. The graphical interface was made with a Lord of the Rings theme in mind, and every assets were handmade by one of my friend (except for the background image).",
      github: 'https://github.com/Iryonis/takuzu-06c',
      site: '',
      type: 'Desktop videogame',
      tool: 'C, Cmake & SDL2',
      lang: 'English',
      access: 'Accessibility? No'
    },
    {
      title: 'NDI 2023',
      date: '7 and 8 December 2023',
      image: projectsImages.ndi2023,
      description:
        'Website created for the "Nuit de l\'Info" 2023, by the team "Gragas 404 Not Found". "Nuit de l\'Info" is a yearly event organised in December across French universities that lasts a night and where the goal is to code a website with challenges, have fun and meet enterprises. This year topic was "Facing climate change: fact or fiction", and it was sponsored by the "Réseau Action Climat" association.',
      github: 'https://github.com/Roirtur/NDI2023',
      site: 'https://roirtur.github.io/NDI2023/',
      type: 'Website',
      tool: 'Angular',
      lang: 'French',
      access: 'Accessibility? No'
    },
    {
      title: 'UBGarden',
      date: 'March to june 2023',
      image: projectsImages.ubgarden,
      description:
        'UBGarden was a Java project carried out in the second year of computer science at the University of Bordeaux, during the Object-Oriented Programming (OOP) course. It involved creating a small 2D video game similar to "Zelda", based on provided starter code. It was preceded by several weeks of tutorials to learn how to develop in Java and use IntelliJ IDEA and Gradle, and lasted a few weeks. This project was our first approach to Java and Object-Oriented Programming.',
      github: 'https://github.com/Iryonis/poo-project',
      site: '',
      type: 'Desktop videogame',
      tool: 'Java, Gradle & IntelliJ IDEA',
      lang: 'French',
      access: 'Accessibility? No'
    },
    {
      title: 'Wiki For Honor',
      date: 'December 2022',
      image: projectsImages.wikiFH,
      description:
        "WikiFH (for 'Wiki For Honor') is a website created by a computer science student during his second year at the university. It was a small project aimed at teaching students how to create a website using vanilla technologies such as HTML, CSS, JavaScript, and PHP. I decided to create a website in honor of the game For Honor, by Ubisoft, a game I really enjoy. Its realization is very basic, but it was the first serious website I made.",
      github: 'https://github.com/Iryonis/wikiFH',
      site: 'https://guilhem-bonnefous.emi.u-bordeaux.fr/Reseau/index.html',
      type: 'Website',
      tool: 'HTML, CSS, JavaScript & PHP',
      lang: 'French',
      access: 'Accessibility? No'
    },
    {
      title: 'VideoTracker',
      date: 'April 2022',
      image: projectsImages.videotracker,
      description:
        'Videotracker is a Python project developed by two students in their first year of computer science studies. It adheres to a set of specifications that include requirements such as video display, pausing, frame-by-frame navigation, drawing points on the video, and creating a CSV file to show the evolution of these points. The project was executed following SCRUM methodologies, aiming to familiarize the students with agile project management principles.',
      github: 'https://github.com/Iryonis/videotracker',
      site: '',
      type: 'Desktop application',
      tool: 'Python',
      lang: 'French',
      access: 'Accessibility? No'
    }
  ]
}
