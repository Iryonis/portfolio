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

/*
formation = 0 : Self-taught
formation = 1 : Studied at university
formation = 2 : Both
*/
export default {
  tier_1: [
    { src: vanillaImg, lang: 'Vanilla Web', formation: 2 },
    { src: tailwindImg, lang: 'Tailwind 3', formation: 0 },
    { src: vueImg, lang: 'Vue.js', formation: 2 },
    { src: vscodeImg, lang: 'VS Code', formation: 2 }
  ],
  tier_2: [
    { src: typescriptImg, lang: 'Typescript', formation: 2 },
    { src: gitImg, lang: 'Git', formation: 2 },
    { src: cImg, lang: 'C', formation: 1 },
    { src: bashImg, lang: 'Bash', formation: 1 },
    { src: nodeImg, lang: 'Node JS', formation: 2 },
    { src: javaImg, lang: 'Java', formation: 1 },
    { src: pythonImg, lang: 'Python', formation: 2 },
    { src: ocamlImg, lang: 'OCaml', formation: 1 }
  ],
  tier_3: [
    { src: angularImg, lang: 'Angular', formation: 2 },
    { src: mongodbImg, lang: 'MongoDB', formation: 2 },
    { src: parcelImg, lang: 'Parceljs', formation: 2 },
    { src: intellijImg, lang: "IntelliJ'IDEA", formation: 1 },
    { src: cppImg, lang: 'C++', formation: 1 },
    { src: luaImg, lang: 'Lua', formation: 2 }
  ]
}
