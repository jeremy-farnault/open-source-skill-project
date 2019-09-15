/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null
  name?: string | null
}

export type UpdateCategoryInput = {
  id: string
  name?: string | null
}

export type DeleteCategoryInput = {
  id?: string | null
}

export type CreateLanguageFrameworkInput = {
  id?: string | null
  name?: string | null
}

export type UpdateLanguageFrameworkInput = {
  id: string
  name?: string | null
}

export type DeleteLanguageFrameworkInput = {
  id?: string | null
}

export type CreateProjectInput = {
  collaboratorsNeeded?: boolean | null
  description?: string | null
  githubLink?: string | null
  id?: string | null
  name?: string | null
  projectOwnerId?: string | null
}

export type UpdateProjectInput = {
  collaboratorsNeeded?: boolean | null
  description?: string | null
  githubLink?: string | null
  id: string
  name?: string | null
  projectOwnerId?: string | null
}

export type DeleteProjectInput = {
  id?: string | null
}

export type CreateProjectCategoryInput = {
  id?: string | null
  projectCategoryCategoryId: string
  projectCategoryProjectId: string
}

export type UpdateProjectCategoryInput = {
  id: string
  projectCategoryCategoryId?: string | null
  projectCategoryProjectId?: string | null
}

export type DeleteProjectCategoryInput = {
  id?: string | null
}

export type CreateProjectCollaboratorInput = {
  id?: string | null
  projectCollaboratorCollaboratorId: string
  projectCollaboratorProjectId: string
}

export type UpdateProjectCollaboratorInput = {
  id: string
  projectCollaboratorCollaboratorId?: string | null
  projectCollaboratorProjectId?: string | null
}

export type DeleteProjectCollaboratorInput = {
  id?: string | null
}

export type CreateProjectLanguageFrameworkInput = {
  id?: string | null
  projectLanguageFrameworkLanguageFrameworkId: string
  projectLanguageFrameworkProjectId: string
}

export type UpdateProjectLanguageFrameworkInput = {
  id: string
  projectLanguageFrameworkLanguageFrameworkId?: string | null
  projectLanguageFrameworkProjectId?: string | null
}

export type DeleteProjectLanguageFrameworkInput = {
  id?: string | null
}

export type CreateProjectSkillInput = {
  id?: string | null
  projectSkillProjectId: string
  projectSkillSkillId: string
}

export type UpdateProjectSkillInput = {
  id: string
  projectSkillProjectId?: string | null
  projectSkillSkillId?: string | null
}

export type DeleteProjectSkillInput = {
  id?: string | null
}

export type CreateSkillInput = {
  id?: string | null
  name?: string | null
}

export type UpdateSkillInput = {
  id: string
  name?: string | null
}

export type DeleteSkillInput = {
  id?: string | null
}

export type CreateUserInput = {
  emailAddress?: string | null
  id?: string | null
  languages?: Array<string | null> | null
  links?: PersonalLinksInput | null
  name?: string | null
  settings?: SettingsInput | null
}

export type PersonalLinksInput = {
  github?: string | null
  gitlab?: string | null
  linkedin?: string | null
  website?: string | null
}

export type SettingsInput = {
  newsletter?: boolean | null
}

export type UpdateUserInput = {
  emailAddress?: string | null
  id: string
  languages?: Array<string | null> | null
  links?: PersonalLinksInput | null
  name?: string | null
  settings?: SettingsInput | null
}

export type DeleteUserInput = {
  id?: string | null
}

export type CreateUserLanguageFrameworkInput = {
  id?: string | null
  userLanguageFrameworkLanguageFrameworkId: string
  userLanguageFrameworkUserId: string
}

export type UpdateUserLanguageFrameworkInput = {
  id: string
  userLanguageFrameworkLanguageFrameworkId?: string | null
  userLanguageFrameworkUserId?: string | null
}

export type DeleteUserLanguageFrameworkInput = {
  id?: string | null
}

export type CreateUserSkillInput = {
  id?: string | null
  userSkillSkillId: string
  userSkillUserId: string
}

export type UpdateUserSkillInput = {
  id: string
  userSkillSkillId?: string | null
  userSkillUserId?: string | null
}

export type DeleteUserSkillInput = {
  id?: string | null
}

export type ModelCategoryFilterInput = {
  id?: ModelIDFilterInput | null
  name?: ModelStringFilterInput | null
  and?: Array<ModelCategoryFilterInput | null> | null
  or?: Array<ModelCategoryFilterInput | null> | null
  not?: ModelCategoryFilterInput | null
}

export type ModelIDFilterInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export type ModelStringFilterInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
}

export type ModelLanguageFrameworkFilterInput = {
  id?: ModelIDFilterInput | null
  name?: ModelStringFilterInput | null
  and?: Array<ModelLanguageFrameworkFilterInput | null> | null
  or?: Array<ModelLanguageFrameworkFilterInput | null> | null
  not?: ModelLanguageFrameworkFilterInput | null
}

export type ModelProjectFilterInput = {
  collaboratorsNeeded?: ModelBooleanFilterInput | null
  description?: ModelStringFilterInput | null
  githubLink?: ModelStringFilterInput | null
  id?: ModelIDFilterInput | null
  name?: ModelStringFilterInput | null
  and?: Array<ModelProjectFilterInput | null> | null
  or?: Array<ModelProjectFilterInput | null> | null
  not?: ModelProjectFilterInput | null
}

export type ModelBooleanFilterInput = {
  ne?: boolean | null
  eq?: boolean | null
}

export type ModelSkillFilterInput = {
  id?: ModelIDFilterInput | null
  name?: ModelStringFilterInput | null
  and?: Array<ModelSkillFilterInput | null> | null
  or?: Array<ModelSkillFilterInput | null> | null
  not?: ModelSkillFilterInput | null
}

export type ModelUserFilterInput = {
  emailAddress?: ModelStringFilterInput | null
  id?: ModelIDFilterInput | null
  languages?: ModelStringFilterInput | null
  name?: ModelStringFilterInput | null
  and?: Array<ModelUserFilterInput | null> | null
  or?: Array<ModelUserFilterInput | null> | null
  not?: ModelUserFilterInput | null
}

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput
}

export type CreateCategoryMutation = {
  createCategory: {
    __typename: 'Category'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput
}

export type UpdateCategoryMutation = {
  updateCategory: {
    __typename: 'Category'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput
}

export type DeleteCategoryMutation = {
  deleteCategory: {
    __typename: 'Category'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type CreateLanguageFrameworkMutationVariables = {
  input: CreateLanguageFrameworkInput
}

export type CreateLanguageFrameworkMutation = {
  createLanguageFramework: {
    __typename: 'LanguageFramework'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type UpdateLanguageFrameworkMutationVariables = {
  input: UpdateLanguageFrameworkInput
}

export type UpdateLanguageFrameworkMutation = {
  updateLanguageFramework: {
    __typename: 'LanguageFramework'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type DeleteLanguageFrameworkMutationVariables = {
  input: DeleteLanguageFrameworkInput
}

export type DeleteLanguageFrameworkMutation = {
  deleteLanguageFramework: {
    __typename: 'LanguageFramework'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type CreateProjectMutationVariables = {
  input: CreateProjectInput
}

export type CreateProjectMutation = {
  createProject: {
    __typename: 'Project'
    categories: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaborators: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaboratorsNeeded: boolean | null
    description: string | null
    githubLink: string | null
    id: string
    languagesFrameworks: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    name: string | null
    owner: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    } | null
    skillsNeeded: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput
}

export type UpdateProjectMutation = {
  updateProject: {
    __typename: 'Project'
    categories: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaborators: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaboratorsNeeded: boolean | null
    description: string | null
    githubLink: string | null
    id: string
    languagesFrameworks: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    name: string | null
    owner: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    } | null
    skillsNeeded: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput
}

export type DeleteProjectMutation = {
  deleteProject: {
    __typename: 'Project'
    categories: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaborators: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaboratorsNeeded: boolean | null
    description: string | null
    githubLink: string | null
    id: string
    languagesFrameworks: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    name: string | null
    owner: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    } | null
    skillsNeeded: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type CreateProjectCategoryMutationVariables = {
  input: CreateProjectCategoryInput
}

export type CreateProjectCategoryMutation = {
  createProjectCategory: {
    __typename: 'ProjectCategory'
    id: string
    category: {
      __typename: 'Category'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type UpdateProjectCategoryMutationVariables = {
  input: UpdateProjectCategoryInput
}

export type UpdateProjectCategoryMutation = {
  updateProjectCategory: {
    __typename: 'ProjectCategory'
    id: string
    category: {
      __typename: 'Category'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type DeleteProjectCategoryMutationVariables = {
  input: DeleteProjectCategoryInput
}

export type DeleteProjectCategoryMutation = {
  deleteProjectCategory: {
    __typename: 'ProjectCategory'
    id: string
    category: {
      __typename: 'Category'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type CreateProjectCollaboratorMutationVariables = {
  input: CreateProjectCollaboratorInput
}

export type CreateProjectCollaboratorMutation = {
  createProjectCollaborator: {
    __typename: 'ProjectCollaborator'
    id: string
    collaborator: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type UpdateProjectCollaboratorMutationVariables = {
  input: UpdateProjectCollaboratorInput
}

export type UpdateProjectCollaboratorMutation = {
  updateProjectCollaborator: {
    __typename: 'ProjectCollaborator'
    id: string
    collaborator: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type DeleteProjectCollaboratorMutationVariables = {
  input: DeleteProjectCollaboratorInput
}

export type DeleteProjectCollaboratorMutation = {
  deleteProjectCollaborator: {
    __typename: 'ProjectCollaborator'
    id: string
    collaborator: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type CreateProjectLanguageFrameworkMutationVariables = {
  input: CreateProjectLanguageFrameworkInput
}

export type CreateProjectLanguageFrameworkMutation = {
  createProjectLanguageFramework: {
    __typename: 'ProjectLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type UpdateProjectLanguageFrameworkMutationVariables = {
  input: UpdateProjectLanguageFrameworkInput
}

export type UpdateProjectLanguageFrameworkMutation = {
  updateProjectLanguageFramework: {
    __typename: 'ProjectLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type DeleteProjectLanguageFrameworkMutationVariables = {
  input: DeleteProjectLanguageFrameworkInput
}

export type DeleteProjectLanguageFrameworkMutation = {
  deleteProjectLanguageFramework: {
    __typename: 'ProjectLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type CreateProjectSkillMutationVariables = {
  input: CreateProjectSkillInput
}

export type CreateProjectSkillMutation = {
  createProjectSkill: {
    __typename: 'ProjectSkill'
    id: string
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type UpdateProjectSkillMutationVariables = {
  input: UpdateProjectSkillInput
}

export type UpdateProjectSkillMutation = {
  updateProjectSkill: {
    __typename: 'ProjectSkill'
    id: string
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type DeleteProjectSkillMutationVariables = {
  input: DeleteProjectSkillInput
}

export type DeleteProjectSkillMutation = {
  deleteProjectSkill: {
    __typename: 'ProjectSkill'
    id: string
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type CreateSkillMutationVariables = {
  input: CreateSkillInput
}

export type CreateSkillMutation = {
  createSkill: {
    __typename: 'Skill'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput
}

export type UpdateSkillMutation = {
  updateSkill: {
    __typename: 'Skill'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput
}

export type DeleteSkillMutation = {
  deleteSkill: {
    __typename: 'Skill'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type CreateUserMutationVariables = {
  input: CreateUserInput
}

export type CreateUserMutation = {
  createUser: {
    __typename: 'User'
    emailAddress: string | null
    id: string
    languages: Array<string | null> | null
    languagesFrameworks: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    links: {
      __typename: 'PersonalLinks'
      github: string | null
      gitlab: string | null
      linkedin: string | null
      website: string | null
    } | null
    name: string | null
    projectsCollab: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    projectOwned: {
      __typename: 'ModelProjectConnection'
      items: Array<{
        __typename: 'Project'
        collaboratorsNeeded: boolean | null
        description: string | null
        githubLink: string | null
        id: string
        name: string | null
      } | null> | null
      nextToken: string | null
    } | null
    settings: {
      __typename: 'Settings'
      newsletter: boolean | null
    } | null
    skills: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type UpdateUserMutationVariables = {
  input: UpdateUserInput
}

export type UpdateUserMutation = {
  updateUser: {
    __typename: 'User'
    emailAddress: string | null
    id: string
    languages: Array<string | null> | null
    languagesFrameworks: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    links: {
      __typename: 'PersonalLinks'
      github: string | null
      gitlab: string | null
      linkedin: string | null
      website: string | null
    } | null
    name: string | null
    projectsCollab: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    projectOwned: {
      __typename: 'ModelProjectConnection'
      items: Array<{
        __typename: 'Project'
        collaboratorsNeeded: boolean | null
        description: string | null
        githubLink: string | null
        id: string
        name: string | null
      } | null> | null
      nextToken: string | null
    } | null
    settings: {
      __typename: 'Settings'
      newsletter: boolean | null
    } | null
    skills: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type DeleteUserMutationVariables = {
  input: DeleteUserInput
}

export type DeleteUserMutation = {
  deleteUser: {
    __typename: 'User'
    emailAddress: string | null
    id: string
    languages: Array<string | null> | null
    languagesFrameworks: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    links: {
      __typename: 'PersonalLinks'
      github: string | null
      gitlab: string | null
      linkedin: string | null
      website: string | null
    } | null
    name: string | null
    projectsCollab: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    projectOwned: {
      __typename: 'ModelProjectConnection'
      items: Array<{
        __typename: 'Project'
        collaboratorsNeeded: boolean | null
        description: string | null
        githubLink: string | null
        id: string
        name: string | null
      } | null> | null
      nextToken: string | null
    } | null
    settings: {
      __typename: 'Settings'
      newsletter: boolean | null
    } | null
    skills: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type CreateUserLanguageFrameworkMutationVariables = {
  input: CreateUserLanguageFrameworkInput
}

export type CreateUserLanguageFrameworkMutation = {
  createUserLanguageFramework: {
    __typename: 'UserLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type UpdateUserLanguageFrameworkMutationVariables = {
  input: UpdateUserLanguageFrameworkInput
}

export type UpdateUserLanguageFrameworkMutation = {
  updateUserLanguageFramework: {
    __typename: 'UserLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type DeleteUserLanguageFrameworkMutationVariables = {
  input: DeleteUserLanguageFrameworkInput
}

export type DeleteUserLanguageFrameworkMutation = {
  deleteUserLanguageFramework: {
    __typename: 'UserLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type CreateUserSkillMutationVariables = {
  input: CreateUserSkillInput
}

export type CreateUserSkillMutation = {
  createUserSkill: {
    __typename: 'UserSkill'
    id: string
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type UpdateUserSkillMutationVariables = {
  input: UpdateUserSkillInput
}

export type UpdateUserSkillMutation = {
  updateUserSkill: {
    __typename: 'UserSkill'
    id: string
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type DeleteUserSkillMutationVariables = {
  input: DeleteUserSkillInput
}

export type DeleteUserSkillMutation = {
  deleteUserSkill: {
    __typename: 'UserSkill'
    id: string
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type GetCategoryQueryVariables = {
  id: string
}

export type GetCategoryQuery = {
  getCategory: {
    __typename: 'Category'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListCategorysQuery = {
  listCategorys: {
    __typename: 'ModelCategoryConnection'
    items: Array<{
      __typename: 'Category'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type GetLanguageFrameworkQueryVariables = {
  id: string
}

export type GetLanguageFrameworkQuery = {
  getLanguageFramework: {
    __typename: 'LanguageFramework'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type ListLanguageFrameworksQueryVariables = {
  filter?: ModelLanguageFrameworkFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListLanguageFrameworksQuery = {
  listLanguageFrameworks: {
    __typename: 'ModelLanguageFrameworkConnection'
    items: Array<{
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type GetProjectQueryVariables = {
  id: string
}

export type GetProjectQuery = {
  getProject: {
    __typename: 'Project'
    categories: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaborators: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaboratorsNeeded: boolean | null
    description: string | null
    githubLink: string | null
    id: string
    languagesFrameworks: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    name: string | null
    owner: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    } | null
    skillsNeeded: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListProjectsQuery = {
  listProjects: {
    __typename: 'ModelProjectConnection'
    items: Array<{
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type GetSkillQueryVariables = {
  id: string
}

export type GetSkillQuery = {
  getSkill: {
    __typename: 'Skill'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListSkillsQuery = {
  listSkills: {
    __typename: 'ModelSkillConnection'
    items: Array<{
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type GetUserQueryVariables = {
  id: string
}

export type GetUserQuery = {
  getUser: {
    __typename: 'User'
    emailAddress: string | null
    id: string
    languages: Array<string | null> | null
    languagesFrameworks: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    links: {
      __typename: 'PersonalLinks'
      github: string | null
      gitlab: string | null
      linkedin: string | null
      website: string | null
    } | null
    name: string | null
    projectsCollab: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    projectOwned: {
      __typename: 'ModelProjectConnection'
      items: Array<{
        __typename: 'Project'
        collaboratorsNeeded: boolean | null
        description: string | null
        githubLink: string | null
        id: string
        name: string | null
      } | null> | null
      nextToken: string | null
    } | null
    settings: {
      __typename: 'Settings'
      newsletter: boolean | null
    } | null
    skills: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListUsersQuery = {
  listUsers: {
    __typename: 'ModelUserConnection'
    items: Array<{
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    } | null> | null
    nextToken: string | null
  } | null
}

export type OnCreateCategorySubscription = {
  onCreateCategory: {
    __typename: 'Category'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnUpdateCategorySubscription = {
  onUpdateCategory: {
    __typename: 'Category'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnDeleteCategorySubscription = {
  onDeleteCategory: {
    __typename: 'Category'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnCreateLanguageFrameworkSubscription = {
  onCreateLanguageFramework: {
    __typename: 'LanguageFramework'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnUpdateLanguageFrameworkSubscription = {
  onUpdateLanguageFramework: {
    __typename: 'LanguageFramework'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnDeleteLanguageFrameworkSubscription = {
  onDeleteLanguageFramework: {
    __typename: 'LanguageFramework'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnCreateProjectSubscription = {
  onCreateProject: {
    __typename: 'Project'
    categories: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaborators: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaboratorsNeeded: boolean | null
    description: string | null
    githubLink: string | null
    id: string
    languagesFrameworks: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    name: string | null
    owner: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    } | null
    skillsNeeded: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnUpdateProjectSubscription = {
  onUpdateProject: {
    __typename: 'Project'
    categories: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaborators: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaboratorsNeeded: boolean | null
    description: string | null
    githubLink: string | null
    id: string
    languagesFrameworks: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    name: string | null
    owner: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    } | null
    skillsNeeded: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnDeleteProjectSubscription = {
  onDeleteProject: {
    __typename: 'Project'
    categories: {
      __typename: 'ModelProjectCategoryConnection'
      items: Array<{
        __typename: 'ProjectCategory'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaborators: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    collaboratorsNeeded: boolean | null
    description: string | null
    githubLink: string | null
    id: string
    languagesFrameworks: {
      __typename: 'ModelProjectLanguageFrameworkConnection'
      items: Array<{
        __typename: 'ProjectLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    name: string | null
    owner: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    } | null
    skillsNeeded: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnCreateProjectCategorySubscription = {
  onCreateProjectCategory: {
    __typename: 'ProjectCategory'
    id: string
    category: {
      __typename: 'Category'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnUpdateProjectCategorySubscription = {
  onUpdateProjectCategory: {
    __typename: 'ProjectCategory'
    id: string
    category: {
      __typename: 'Category'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnDeleteProjectCategorySubscription = {
  onDeleteProjectCategory: {
    __typename: 'ProjectCategory'
    id: string
    category: {
      __typename: 'Category'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnCreateProjectCollaboratorSubscription = {
  onCreateProjectCollaborator: {
    __typename: 'ProjectCollaborator'
    id: string
    collaborator: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnUpdateProjectCollaboratorSubscription = {
  onUpdateProjectCollaborator: {
    __typename: 'ProjectCollaborator'
    id: string
    collaborator: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnDeleteProjectCollaboratorSubscription = {
  onDeleteProjectCollaborator: {
    __typename: 'ProjectCollaborator'
    id: string
    collaborator: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnCreateProjectLanguageFrameworkSubscription = {
  onCreateProjectLanguageFramework: {
    __typename: 'ProjectLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnUpdateProjectLanguageFrameworkSubscription = {
  onUpdateProjectLanguageFramework: {
    __typename: 'ProjectLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnDeleteProjectLanguageFrameworkSubscription = {
  onDeleteProjectLanguageFramework: {
    __typename: 'ProjectLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnCreateProjectSkillSubscription = {
  onCreateProjectSkill: {
    __typename: 'ProjectSkill'
    id: string
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnUpdateProjectSkillSubscription = {
  onUpdateProjectSkill: {
    __typename: 'ProjectSkill'
    id: string
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnDeleteProjectSkillSubscription = {
  onDeleteProjectSkill: {
    __typename: 'ProjectSkill'
    id: string
    project: {
      __typename: 'Project'
      categories: {
        __typename: 'ModelProjectCategoryConnection'
        nextToken: string | null
      } | null
      collaborators: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      collaboratorsNeeded: boolean | null
      description: string | null
      githubLink: string | null
      id: string
      languagesFrameworks: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      name: string | null
      owner: {
        __typename: 'User'
        emailAddress: string | null
        id: string
        languages: Array<string | null> | null
        name: string | null
      } | null
      skillsNeeded: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
    }
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnCreateSkillSubscription = {
  onCreateSkill: {
    __typename: 'Skill'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnUpdateSkillSubscription = {
  onUpdateSkill: {
    __typename: 'Skill'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnDeleteSkillSubscription = {
  onDeleteSkill: {
    __typename: 'Skill'
    id: string
    name: string | null
    projects: {
      __typename: 'ModelProjectSkillConnection'
      items: Array<{
        __typename: 'ProjectSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    users: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnCreateUserSubscription = {
  onCreateUser: {
    __typename: 'User'
    emailAddress: string | null
    id: string
    languages: Array<string | null> | null
    languagesFrameworks: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    links: {
      __typename: 'PersonalLinks'
      github: string | null
      gitlab: string | null
      linkedin: string | null
      website: string | null
    } | null
    name: string | null
    projectsCollab: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    projectOwned: {
      __typename: 'ModelProjectConnection'
      items: Array<{
        __typename: 'Project'
        collaboratorsNeeded: boolean | null
        description: string | null
        githubLink: string | null
        id: string
        name: string | null
      } | null> | null
      nextToken: string | null
    } | null
    settings: {
      __typename: 'Settings'
      newsletter: boolean | null
    } | null
    skills: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnUpdateUserSubscription = {
  onUpdateUser: {
    __typename: 'User'
    emailAddress: string | null
    id: string
    languages: Array<string | null> | null
    languagesFrameworks: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    links: {
      __typename: 'PersonalLinks'
      github: string | null
      gitlab: string | null
      linkedin: string | null
      website: string | null
    } | null
    name: string | null
    projectsCollab: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    projectOwned: {
      __typename: 'ModelProjectConnection'
      items: Array<{
        __typename: 'Project'
        collaboratorsNeeded: boolean | null
        description: string | null
        githubLink: string | null
        id: string
        name: string | null
      } | null> | null
      nextToken: string | null
    } | null
    settings: {
      __typename: 'Settings'
      newsletter: boolean | null
    } | null
    skills: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnDeleteUserSubscription = {
  onDeleteUser: {
    __typename: 'User'
    emailAddress: string | null
    id: string
    languages: Array<string | null> | null
    languagesFrameworks: {
      __typename: 'ModelUserLanguageFrameworkConnection'
      items: Array<{
        __typename: 'UserLanguageFramework'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    links: {
      __typename: 'PersonalLinks'
      github: string | null
      gitlab: string | null
      linkedin: string | null
      website: string | null
    } | null
    name: string | null
    projectsCollab: {
      __typename: 'ModelProjectCollaboratorConnection'
      items: Array<{
        __typename: 'ProjectCollaborator'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
    projectOwned: {
      __typename: 'ModelProjectConnection'
      items: Array<{
        __typename: 'Project'
        collaboratorsNeeded: boolean | null
        description: string | null
        githubLink: string | null
        id: string
        name: string | null
      } | null> | null
      nextToken: string | null
    } | null
    settings: {
      __typename: 'Settings'
      newsletter: boolean | null
    } | null
    skills: {
      __typename: 'ModelUserSkillConnection'
      items: Array<{
        __typename: 'UserSkill'
        id: string
      } | null> | null
      nextToken: string | null
    } | null
  } | null
}

export type OnCreateUserLanguageFrameworkSubscription = {
  onCreateUserLanguageFramework: {
    __typename: 'UserLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnUpdateUserLanguageFrameworkSubscription = {
  onUpdateUserLanguageFramework: {
    __typename: 'UserLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnDeleteUserLanguageFrameworkSubscription = {
  onDeleteUserLanguageFramework: {
    __typename: 'UserLanguageFramework'
    id: string
    languageFramework: {
      __typename: 'LanguageFramework'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnCreateUserSkillSubscription = {
  onCreateUserSkill: {
    __typename: 'UserSkill'
    id: string
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnUpdateUserSkillSubscription = {
  onUpdateUserSkill: {
    __typename: 'UserSkill'
    id: string
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}

export type OnDeleteUserSkillSubscription = {
  onDeleteUserSkill: {
    __typename: 'UserSkill'
    id: string
    skill: {
      __typename: 'Skill'
      id: string
      name: string | null
      projects: {
        __typename: 'ModelProjectSkillConnection'
        nextToken: string | null
      } | null
      users: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
    user: {
      __typename: 'User'
      emailAddress: string | null
      id: string
      languages: Array<string | null> | null
      languagesFrameworks: {
        __typename: 'ModelUserLanguageFrameworkConnection'
        nextToken: string | null
      } | null
      links: {
        __typename: 'PersonalLinks'
        github: string | null
        gitlab: string | null
        linkedin: string | null
        website: string | null
      } | null
      name: string | null
      projectsCollab: {
        __typename: 'ModelProjectCollaboratorConnection'
        nextToken: string | null
      } | null
      projectOwned: {
        __typename: 'ModelProjectConnection'
        nextToken: string | null
      } | null
      settings: {
        __typename: 'Settings'
        newsletter: boolean | null
      } | null
      skills: {
        __typename: 'ModelUserSkillConnection'
        nextToken: string | null
      } | null
    }
  } | null
}
