import { IProject, LanguagesFrameworksEnum, SkillsEnum } from '../Interfaces/projects'

export const fakeProjects: IProject[] = [
  {
    collaboratorsId: ['2', '3', '4'],
    collaboratorsNeeded: true,
    description: 'A PIN code component for react native',
    githubLink: 'https://github.com/jarden-digital/react-native-pincode',
    id: '1',
    languagesFrameworks: [LanguagesFrameworksEnum.reactNative],
    skillsNeeded: [SkillsEnum.designer],
    userId: '1'
  }
]
