// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateCategory = `subscription OnCreateCategory {
  onCreateCategory {
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
export const onUpdateCategory = `subscription OnUpdateCategory {
  onUpdateCategory {
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
export const onDeleteCategory = `subscription OnDeleteCategory {
  onDeleteCategory {
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
export const onCreateLanguageFramework = `subscription OnCreateLanguageFramework {
  onCreateLanguageFramework {
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
export const onUpdateLanguageFramework = `subscription OnUpdateLanguageFramework {
  onUpdateLanguageFramework {
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
export const onDeleteLanguageFramework = `subscription OnDeleteLanguageFramework {
  onDeleteLanguageFramework {
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
export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
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
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
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
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
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
export const onCreateProjectCategory = `subscription OnCreateProjectCategory {
  onCreateProjectCategory {
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
export const onUpdateProjectCategory = `subscription OnUpdateProjectCategory {
  onUpdateProjectCategory {
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
export const onDeleteProjectCategory = `subscription OnDeleteProjectCategory {
  onDeleteProjectCategory {
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
export const onCreateProjectCollaborator = `subscription OnCreateProjectCollaborator {
  onCreateProjectCollaborator {
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
export const onUpdateProjectCollaborator = `subscription OnUpdateProjectCollaborator {
  onUpdateProjectCollaborator {
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
export const onDeleteProjectCollaborator = `subscription OnDeleteProjectCollaborator {
  onDeleteProjectCollaborator {
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
export const onCreateProjectLanguageFramework = `subscription OnCreateProjectLanguageFramework {
  onCreateProjectLanguageFramework {
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
export const onUpdateProjectLanguageFramework = `subscription OnUpdateProjectLanguageFramework {
  onUpdateProjectLanguageFramework {
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
export const onDeleteProjectLanguageFramework = `subscription OnDeleteProjectLanguageFramework {
  onDeleteProjectLanguageFramework {
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
export const onCreateProjectSkill = `subscription OnCreateProjectSkill {
  onCreateProjectSkill {
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
export const onUpdateProjectSkill = `subscription OnUpdateProjectSkill {
  onUpdateProjectSkill {
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
export const onDeleteProjectSkill = `subscription OnDeleteProjectSkill {
  onDeleteProjectSkill {
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
export const onCreateSkill = `subscription OnCreateSkill {
  onCreateSkill {
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
export const onUpdateSkill = `subscription OnUpdateSkill {
  onUpdateSkill {
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
export const onDeleteSkill = `subscription OnDeleteSkill {
  onDeleteSkill {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateUserLanguageFramework = `subscription OnCreateUserLanguageFramework {
  onCreateUserLanguageFramework {
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
export const onUpdateUserLanguageFramework = `subscription OnUpdateUserLanguageFramework {
  onUpdateUserLanguageFramework {
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
export const onDeleteUserLanguageFramework = `subscription OnDeleteUserLanguageFramework {
  onDeleteUserLanguageFramework {
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
export const onCreateUserSkill = `subscription OnCreateUserSkill {
  onCreateUserSkill {
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
export const onUpdateUserSkill = `subscription OnUpdateUserSkill {
  onUpdateUserSkill {
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
export const onDeleteUserSkill = `subscription OnDeleteUserSkill {
  onDeleteUserSkill {
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
