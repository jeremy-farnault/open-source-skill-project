import React, { memo } from 'react'
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

  return (
    <PageContentContainer>
      <ProjectCardsWrapper>
        {projects.map(p => (
          <ProjectCard>
            <ProjectCardName>{p.name}</ProjectCardName>
            <ProjectCardDescription>{p.description}</ProjectCardDescription>
          </ProjectCard>
        ))}
      </ProjectCardsWrapper>
    </PageContentContainer>
  )
})
