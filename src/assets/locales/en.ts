export default {
  en: 'English',
  fr: 'French',
  home_link: 'Home',
  about_link: 'About me',
  projects_link: 'Projects',
  links_link: 'Links',
  about_text:
    "I am Guilhem BONNEFOUS, currently a master's student in Computer Science at the University of Bordeaux, FRANCE, 21 years old. In my free time, I enjoy reading fantasy and science fiction, gaming online with friends, and progressing my programming projects. Concerning IT, I particularly like web development and the discovery of all technologies allowing to obtain a visual and concrete result.",
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
  project_site: 'View the site',
  projects: [
    {
      title: 'SWYT: Stop Wasting Your Time',
      date: 'Summer 2025',
      image: 'swyt.webp',
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
      image: 'emh.webp',
      description:
        'Earthen Master Hammer Addon (EMH) is an addon for the video game World of Warcraft, developed in Lua. It simplifies the use of the blacksmithing item Earth Master Hammer. This was my first real personal project and the first time I programmed an addon for Wow (so I discovered both the Lua language and the Wow API).',
      github: 'https://github.com/Iryonis/EarthenMasterHammerAddon',
      site: 'https://www.curseforge.com/wow/addons/emh',
      type: 'Video game addon',
      tool: 'Lua',
      lang: 'English, French & more',
      access: 'Accessibility? No'
    },
    {
      title: 'Takuzu, website version',
      date: 'March to June 2023',
      image: 'takuzu_web.webp',
      description:
        'Takuzu is a project realized by 4 students during their second year of computer science. The goal was to create a website enabling the user to play the game Takuzu (also known as Unruly or Binairo) coded in C. This is the fourth part of the year-long project. ',
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
      image: 'NDI2023.webp',
      description:
        "Takuzu is a project realized by four students during their second year of computer science. The goal was to create the game Takuzu (also known as Unruly or Binairo) using the C language, and to explore libraries and tools used in project development. This is the second and third part of the project, which are 'game in terminal' and 'game with graphical interface'. The graphical interface was made with a Lord of the Rings theme in mind, and every assets were handmade.",
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
      image: 'NDI2023.webp',
      description:
        'Website created for the "Nuit de l\'Info" 2023, by the team "Gragas 404 Not Found". The topic was "Facing climate change: fact or fiction", and it was sponsored by the "Réseau Action Climat" association.',
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
      image: 'UBGarden.webp',
      description:
        'UBGarden is a Java project carried out in the second year of computer science at the University of Bordeaux, during the Object-Oriented Programming (OOP) course. It involves creating a small 2D video game similar to "Zelda", based on provided starter code. It is preceded by several weeks of tutorials to learn how to develop in Java and use IntelliJ IDEA and Gradle, and lasts a few weeks.',
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
      image: 'WikiFH.webp',
      description:
        "WikiFH (for 'Wiki For Honor') is a website created by a computer science student during his second year at the university. It was a small project aimed at teaching students how to create a website using vanilla technologies such as HTML, CSS, JavaScript, and PHP. I decided to create a website in honor (just kidding) of the game For Honor, by Ubisoft, a game I really enjoy. Its realization is very basic, but it was the first serious website I made.",
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
      image: 'Videotracker.webp',
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
