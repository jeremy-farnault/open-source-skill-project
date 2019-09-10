export interface IProject {
  collaboratorsId: string[]
  collaboratorsNeeded: boolean
  description: string
  githubLink: string
  id: string
  languagesFrameworks: LanguagesFrameworksEnum[]
  name: string
  skillsNeeded: SkillsEnum[]
  userId: string
}

export enum LanguagesFrameworksEnum {
  react,
  reactNative,
  typescript
}

export enum SkillsEnum {
  designer,
  developer,
  tester
}
