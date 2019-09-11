import { IUser } from '../Interfaces/projects'

export const fakeUsers: { data: IUser[] } = {
  data: [
    {
      emailAddress: 'test@test.com',
      id: '1',
      languages: ['en'],
      languagesFrameworks: [
        {
          id: '1',
          name: 'react'
        }
      ],
      links: {
        github: 'test.github.io',
        gitlab: 'test.gitlab.io',
        linkedin: 'test.linkedin.io',
        website: 'test.io'
      },
      name: 'TestUser',
      projects: ['1', '2'],
      settings: {
        newsletter: true
      },
      skills: [
        {
          id: '1',
          name: 'designer'
        },
        {
          id: '2',
          name: 'developer'
        }
      ]
    },
    {
      emailAddress: 'test@test.com',
      id: '2',
      languages: ['en'],
      languagesFrameworks: [
        {
          id: '1',
          name: 'react'
        }
      ],
      links: {
        github: 'test.github.io',
        gitlab: 'test.gitlab.io',
        linkedin: 'test.linkedin.io',
        website: 'test.io'
      },
      name: 'TestUser',
      projects: ['1', '2'],
      settings: {
        newsletter: true
      },
      skills: [
        {
          id: '1',
          name: 'designer'
        },
        {
          id: '2',
          name: 'developer'
        }
      ]
    },
    {
      emailAddress: 'test@test.com',
      id: '3',
      languages: ['en'],
      languagesFrameworks: [
        {
          id: '1',
          name: 'react'
        }
      ],
      links: {
        github: 'test.github.io',
        gitlab: 'test.gitlab.io',
        linkedin: 'test.linkedin.io',
        website: 'test.io'
      },
      name: 'TestUser',
      projects: ['1', '2'],
      settings: {
        newsletter: true
      },
      skills: [
        {
          id: '1',
          name: 'designer'
        },
        {
          id: '2',
          name: 'developer'
        }
      ]
    }
  ]
}
