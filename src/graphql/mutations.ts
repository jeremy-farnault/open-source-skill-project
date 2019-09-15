// tslint:disable
// this is an auto generated file. This will be overwritten

export const createCategory = `mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    id
    name
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const updateCategory = `mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
    id
    name
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const deleteCategory = `mutation DeleteCategory($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
    id
    name
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const createLanguageFramework = `mutation CreateLanguageFramework($input: CreateLanguageFrameworkInput!) {
  createLanguageFramework(input: $input) {
    id
    name
    projects {
      items {
        id
      }
      nextToken
    }
    users {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const updateLanguageFramework = `mutation UpdateLanguageFramework($input: UpdateLanguageFrameworkInput!) {
  updateLanguageFramework(input: $input) {
    id
    name
    projects {
      items {
        id
      }
      nextToken
    }
    users {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const deleteLanguageFramework = `mutation DeleteLanguageFramework($input: DeleteLanguageFrameworkInput!) {
  deleteLanguageFramework(input: $input) {
    id
    name
    projects {
      items {
        id
      }
      nextToken
    }
    users {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    categories {
      items {
        id
      }
      nextToken
    }
    collaborators {
      items {
        id
      }
      nextToken
    }
    collaboratorsNeeded
    description
    githubLink
    id
    languagesFrameworks {
      items {
        id
      }
      nextToken
    }
    name
    owner {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
    skillsNeeded {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    categories {
      items {
        id
      }
      nextToken
    }
    collaborators {
      items {
        id
      }
      nextToken
    }
    collaboratorsNeeded
    description
    githubLink
    id
    languagesFrameworks {
      items {
        id
      }
      nextToken
    }
    name
    owner {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
    skillsNeeded {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
    categories {
      items {
        id
      }
      nextToken
    }
    collaborators {
      items {
        id
      }
      nextToken
    }
    collaboratorsNeeded
    description
    githubLink
    id
    languagesFrameworks {
      items {
        id
      }
      nextToken
    }
    name
    owner {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
    skillsNeeded {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const createProjectCategory = `mutation CreateProjectCategory($input: CreateProjectCategoryInput!) {
  createProjectCategory(input: $input) {
    id
    category {
      id
      name
      projects {
        nextToken
      }
    }
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
  }
}
`
export const updateProjectCategory = `mutation UpdateProjectCategory($input: UpdateProjectCategoryInput!) {
  updateProjectCategory(input: $input) {
    id
    category {
      id
      name
      projects {
        nextToken
      }
    }
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
  }
}
`
export const deleteProjectCategory = `mutation DeleteProjectCategory($input: DeleteProjectCategoryInput!) {
  deleteProjectCategory(input: $input) {
    id
    category {
      id
      name
      projects {
        nextToken
      }
    }
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
  }
}
`
export const createProjectCollaborator = `mutation CreateProjectCollaborator($input: CreateProjectCollaboratorInput!) {
  createProjectCollaborator(input: $input) {
    id
    collaborator {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
  }
}
`
export const updateProjectCollaborator = `mutation UpdateProjectCollaborator($input: UpdateProjectCollaboratorInput!) {
  updateProjectCollaborator(input: $input) {
    id
    collaborator {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
  }
}
`
export const deleteProjectCollaborator = `mutation DeleteProjectCollaborator($input: DeleteProjectCollaboratorInput!) {
  deleteProjectCollaborator(input: $input) {
    id
    collaborator {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
  }
}
`
export const createProjectLanguageFramework = `mutation CreateProjectLanguageFramework(
  $input: CreateProjectLanguageFrameworkInput!
) {
  createProjectLanguageFramework(input: $input) {
    id
    languageFramework {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
  }
}
`
export const updateProjectLanguageFramework = `mutation UpdateProjectLanguageFramework(
  $input: UpdateProjectLanguageFrameworkInput!
) {
  updateProjectLanguageFramework(input: $input) {
    id
    languageFramework {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
  }
}
`
export const deleteProjectLanguageFramework = `mutation DeleteProjectLanguageFramework(
  $input: DeleteProjectLanguageFrameworkInput!
) {
  deleteProjectLanguageFramework(input: $input) {
    id
    languageFramework {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
  }
}
`
export const createProjectSkill = `mutation CreateProjectSkill($input: CreateProjectSkillInput!) {
  createProjectSkill(input: $input) {
    id
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
    skill {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
  }
}
`
export const updateProjectSkill = `mutation UpdateProjectSkill($input: UpdateProjectSkillInput!) {
  updateProjectSkill(input: $input) {
    id
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
    skill {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
  }
}
`
export const deleteProjectSkill = `mutation DeleteProjectSkill($input: DeleteProjectSkillInput!) {
  deleteProjectSkill(input: $input) {
    id
    project {
      categories {
        nextToken
      }
      collaborators {
        nextToken
      }
      collaboratorsNeeded
      description
      githubLink
      id
      languagesFrameworks {
        nextToken
      }
      name
      owner {
        emailAddress
        id
        languages
        name
      }
      skillsNeeded {
        nextToken
      }
    }
    skill {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
  }
}
`
export const createSkill = `mutation CreateSkill($input: CreateSkillInput!) {
  createSkill(input: $input) {
    id
    name
    projects {
      items {
        id
      }
      nextToken
    }
    users {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const updateSkill = `mutation UpdateSkill($input: UpdateSkillInput!) {
  updateSkill(input: $input) {
    id
    name
    projects {
      items {
        id
      }
      nextToken
    }
    users {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const deleteSkill = `mutation DeleteSkill($input: DeleteSkillInput!) {
  deleteSkill(input: $input) {
    id
    name
    projects {
      items {
        id
      }
      nextToken
    }
    users {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    emailAddress
    id
    languages
    languagesFrameworks {
      items {
        id
      }
      nextToken
    }
    links {
      github
      gitlab
      linkedin
      website
    }
    name
    projectsCollab {
      items {
        id
      }
      nextToken
    }
    projectOwned {
      items {
        collaboratorsNeeded
        description
        githubLink
        id
        name
      }
      nextToken
    }
    settings {
      newsletter
    }
    skills {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    emailAddress
    id
    languages
    languagesFrameworks {
      items {
        id
      }
      nextToken
    }
    links {
      github
      gitlab
      linkedin
      website
    }
    name
    projectsCollab {
      items {
        id
      }
      nextToken
    }
    projectOwned {
      items {
        collaboratorsNeeded
        description
        githubLink
        id
        name
      }
      nextToken
    }
    settings {
      newsletter
    }
    skills {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    emailAddress
    id
    languages
    languagesFrameworks {
      items {
        id
      }
      nextToken
    }
    links {
      github
      gitlab
      linkedin
      website
    }
    name
    projectsCollab {
      items {
        id
      }
      nextToken
    }
    projectOwned {
      items {
        collaboratorsNeeded
        description
        githubLink
        id
        name
      }
      nextToken
    }
    settings {
      newsletter
    }
    skills {
      items {
        id
      }
      nextToken
    }
  }
}
`
export const createUserLanguageFramework = `mutation CreateUserLanguageFramework(
  $input: CreateUserLanguageFrameworkInput!
) {
  createUserLanguageFramework(input: $input) {
    id
    languageFramework {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    user {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
  }
}
`
export const updateUserLanguageFramework = `mutation UpdateUserLanguageFramework(
  $input: UpdateUserLanguageFrameworkInput!
) {
  updateUserLanguageFramework(input: $input) {
    id
    languageFramework {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    user {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
  }
}
`
export const deleteUserLanguageFramework = `mutation DeleteUserLanguageFramework(
  $input: DeleteUserLanguageFrameworkInput!
) {
  deleteUserLanguageFramework(input: $input) {
    id
    languageFramework {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    user {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
  }
}
`
export const createUserSkill = `mutation CreateUserSkill($input: CreateUserSkillInput!) {
  createUserSkill(input: $input) {
    id
    skill {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    user {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
  }
}
`
export const updateUserSkill = `mutation UpdateUserSkill($input: UpdateUserSkillInput!) {
  updateUserSkill(input: $input) {
    id
    skill {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    user {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
  }
}
`
export const deleteUserSkill = `mutation DeleteUserSkill($input: DeleteUserSkillInput!) {
  deleteUserSkill(input: $input) {
    id
    skill {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    user {
      emailAddress
      id
      languages
      languagesFrameworks {
        nextToken
      }
      links {
        github
        gitlab
        linkedin
        website
      }
      name
      projectsCollab {
        nextToken
      }
      projectOwned {
        nextToken
      }
      settings {
        newsletter
      }
      skills {
        nextToken
      }
    }
  }
}
`
