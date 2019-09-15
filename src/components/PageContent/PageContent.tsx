import { API, graphqlOperation } from 'aws-amplify'
import React, { memo, useEffect, useState } from 'react'
import simpleIcons from 'simple-icons'
import { listProjects } from '../../graphql/queries'
import {
  PageContentContainer,
  ProjectCard,
  ProjectCardDescription,
  ProjectCardName,
  ProjectCardsWrapper
} from './PageContentStyled'

export const PageContent = memo(() => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    try {
      const newProjects = await API.graphql(graphqlOperation(listProjects))
      console.log('data from API: ', newProjects)
      setProjects(newProjects.data.listCoins.items)
    } catch (err) {
      console.log('error fetching data..', err)
    }
  }

  console.log(simpleIcons)

  return (
    <PageContentContainer>
      <ProjectCardsWrapper>
        {projects.map((p: any) => (
          <ProjectCard key={p.id}>
            <ProjectCardName>{p.name}</ProjectCardName>
            <ProjectCardDescription>{p.description}</ProjectCardDescription>
          </ProjectCard>
        ))}
      </ProjectCardsWrapper>
    </PageContentContainer>
  )
})
