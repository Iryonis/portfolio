import { projectsImages } from '@/components/app/Projects/ProjectsImages'

export interface ProjectData {
  id: string
  image: string
  github: string
  site?: string
}

export const projectsData: ProjectData[] = [
  {
    id: 'swyt',
    image: projectsImages.swyt,
    github: 'https://github.com/Iryonis/stop-wasting-your-time',
    site: ''
  },
  {
    id: 'emh',
    image: projectsImages.emh,
    github: 'https://github.com/Iryonis/EarthenMasterHammerAddon',
    site: 'https://www.curseforge.com/wow/addons/emh'
  },
  {
    id: 'portfolio',
    image: projectsImages.portfolio,
    github: 'https://github.com/Iryonis/portfolio',
    site: 'https://iryonis.github.io/portfolio/'
  },
  {
    id: 'yatiuc',
    image: projectsImages.yatiuc,
    github: '',
    site: ''
  },
  {
    id: 'ghg_viewer',
    image: projectsImages.ghgViewer,
    github: '',
    site: ''
  },
  {
    id: 'takuzu_web',
    image: projectsImages.takuzuWeb,
    github: 'https://github.com/Iryonis/takuzu-06c',
    site: 'https://guilhem-bonnefous.emi.u-bordeaux.fr/refeartgui2306c/'
  },
  {
    id: 'takuzu_desktop',
    image: projectsImages.takuzuDesktop,
    github: 'https://github.com/Iryonis/takuzu-06c'
  },
  {
    id: 'ndi2023',
    image: projectsImages.ndi2023,
    github: 'https://github.com/Roirtur/NDI2023',
    site: 'https://roirtur.github.io/NDI2023/'
  },
  {
    id: 'ubgarden',
    image: projectsImages.ubgarden,
    github: 'https://github.com/Iryonis/poo-project',
    site: ''
  },
  {
    id: 'wiki_fh',
    image: projectsImages.wikiFH,
    github: 'https://github.com/Iryonis/wikiFH',
    site: 'https://guilhem-bonnefous.emi.u-bordeaux.fr/Reseau/index.html'
  },
  {
    id: 'videotracker',
    image: projectsImages.videotracker,
    github: 'https://github.com/Iryonis/videotracker',
    site: ''
  }
]
