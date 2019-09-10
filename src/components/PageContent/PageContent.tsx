import React, { memo } from 'react'
import simpleIcons from 'simple-icons'
import { fakeProjects } from '../../data/fakeProjects'
import {
  PageContentContainer,
  ProjectCard,
  ProjectCardDescription,
  ProjectCardName,
  ProjectCardsWrapper
} from './PageContentStyled'

export const PageContent = memo(() => {
  const projects = fakeProjects.data
  console.log(simpleIcons)

  return (
    <PageContentContainer>
      <ProjectCardsWrapper>
        {projects.map(p => (
          <ProjectCard key={p.id}>
            <ProjectCardName>{p.name}</ProjectCardName>
            <ProjectCardDescription>{p.description}</ProjectCardDescription>
          </ProjectCard>
        ))}
      </ProjectCardsWrapper>
    </PageContentContainer>
  )
})
