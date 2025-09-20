/**
 * This file imports all skill logos and includes them in the SkillsData object.
 */

import vanillaImg from '@/assets/img/logo/vanilla.webp'
import tailwindImg from '@/assets/img/logo/tailwind.svg'
import vueImg from '@/assets/img/logo/vue.webp'
import vscodeImg from '@/assets/img/logo/vscode.webp'
import typescriptImg from '@/assets/img/logo/typescript.svg'
import gitImg from '@/assets/img/logo/git.webp'
import cImg from '@/assets/img/logo/c.webp'
import bashImg from '@/assets/img/logo/bash.svg'
import nodeImg from '@/assets/img/logo/node.svg'
import javaImg from '@/assets/img/logo/java.webp'
import pythonImg from '@/assets/img/logo/python.webp'
import ocamlImg from '@/assets/img/logo/ocaml.webp'
import angularImg from '@/assets/img/logo/angular.webp'
import mongodbImg from '@/assets/img/logo/mongodb.webp'
import parcelImg from '@/assets/img/logo/parcel.svg'
import intellijImg from '@/assets/img/logo/intellijidea.webp'
import cppImg from '@/assets/img/logo/c++.svg'
import luaImg from '@/assets/img/logo/lua.webp'

export default {
  tier_1: [
    { src: vanillaImg, lang: 'Vanilla web languages', projects_number: 5, courses_number: 1 },
    { src: tailwindImg, lang: 'Tailwind', projects_number: 3, courses_number: 0 },
    { src: vueImg, lang: 'Vue.js', projects_number: 3, courses_number: 0 },
    { src: vscodeImg, lang: 'Visual Studio Code', projects_number: 11, courses_number: 0 }
  ],
  tier_2: [
    { src: typescriptImg, lang: 'Typescript', projects_number: 2, courses_number: 0 },
    { src: gitImg, lang: 'Git', projects_number: 11, courses_number: 0 },
    { src: cImg, lang: 'C', projects_number: 4, courses_number: 6 },
    { src: bashImg, lang: 'Bash', projects_number: 0, courses_number: 0 },
    { src: nodeImg, lang: 'Node JS', projects_number: 2, courses_number: 0 },
    { src: javaImg, lang: 'Java', projects_number: 3, courses_number: 2 },
    { src: pythonImg, lang: 'Python', projects_number: 3, courses_number: 4 },
    { src: ocamlImg, lang: 'OCaml', projects_number: 1, courses_number: 3 }
  ],
  tier_3: [
    { src: angularImg, lang: 'Angular', projects_number: 1, courses_number: 0 },
    { src: mongodbImg, lang: 'MongoDB', projects_number: 1, courses_number: 0 },
    { src: parcelImg, lang: 'Parceljs', projects_number: 1, courses_number: 0 },
    { src: intellijImg, lang: "IntelliJ'IDEA", projects_number: 1, courses_number: 0 },
    { src: cppImg, lang: 'C++', projects_number: 1, courses_number: 1 },
    { src: luaImg, lang: 'Lua', projects_number: 1, courses_number: 0 }
  ]
}
