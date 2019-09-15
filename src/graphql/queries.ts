// tslint:disable
// this is an auto generated file. This will be overwritten

export const getCategory = `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
export const listCategorys = `query ListCategorys(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      projects {
        nextToken
      }
    }
    nextToken
  }
}
`
export const getLanguageFramework = `query GetLanguageFramework($id: ID!) {
  getLanguageFramework(id: $id) {
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
export const listLanguageFrameworks = `query ListLanguageFrameworks(
  $filter: ModelLanguageFrameworkFilterInput
  $limit: Int
  $nextToken: String
) {
  listLanguageFrameworks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    nextToken
  }
}
`
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
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
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`
export const getSkill = `query GetSkill($id: ID!) {
  getSkill(id: $id) {
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
export const listSkills = `query ListSkills(
  $filter: ModelSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      projects {
        nextToken
      }
      users {
        nextToken
      }
    }
    nextToken
  }
}
`
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`
