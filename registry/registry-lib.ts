import type { Registry } from "./schema";

export const lib: Registry = [
  {
    name:"utils",
    type:"registry:lib",
    dependencies:['clsx', 'tailwind-merge'],
    files:[
      {
        path:"utils/index.ts",
        type:'registry:lib',
      }
    ]
  }
]