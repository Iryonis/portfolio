/**
 * This file imports all project images and exports them as a single object.
 * This allows us to use the images in a type-safe way, and to avoid using dynamic imports.
 * Dynamic imports are not supported by Vite when building for production, which causes issues with caching.
 * By importing the images statically, we ensure that they are included in the build and can be cached properly.
 */

import swytImg from '@/assets/img/projects/swyt.webp'
import emhImg from '@/assets/img/projects/emh.webp'
import ghgViewerImg from '@/assets/img/projects/ghg_viewer.webp'
import takuzuWebImg from '@/assets/img/projects/takuzu_web.webp'
import takuzuDesktopImg from '@/assets/img/projects/takuzu_desktop.webp'
import ndi2023Img from '@/assets/img/projects/NDI2023.webp'
import ubgardenImg from '@/assets/img/projects/UBGarden.webp'
import wikiFHImg from '@/assets/img/projects/WikiFH.webp'
import videotrackerImg from '@/assets/img/projects/Videotracker.webp'

export const projectsImages = {
  swyt: swytImg,
  emh: emhImg,
  ghgViewer: ghgViewerImg,
  takuzuWeb: takuzuWebImg,
  takuzuDesktop: takuzuDesktopImg,
  ndi2023: ndi2023Img,
  ubgarden: ubgardenImg,
  wikiFH: wikiFHImg,
  videotracker: videotrackerImg
} as const

export type ProjectImageKey = keyof typeof projectsImages
