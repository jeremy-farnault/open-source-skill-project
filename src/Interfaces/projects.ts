export interface ICategory {
  id: string
  name: string
}

export interface ILanguageFramework {
  id: string
  name: string
}

export interface IPersonalLinks {
  github: string
  gitlab: string
  linkedin: string
  website: string
}

export interface IProject {
  categories: ICategory[]
  collaborators: IUser[]
  collaboratorsNeeded: boolean
  description: string
  githubLink: string
  id: string
  languagesFrameworks: ILanguageFramework[]
  name: string
  owner: IUser
  skillsNeeded: ISkill[]
}

export interface ISettings {
  newsletter: boolean
}

export interface ISkill {
  id: string
  name: string
}

export interface IUser {
  emailAddress: string
  id: string
  languages: string[]
  languagesFrameworks: ILanguageFramework[]
  links: IPersonalLinks
  name: string
  projects: string[]
  settings: ISettings
  skills: ISkill[]
}
