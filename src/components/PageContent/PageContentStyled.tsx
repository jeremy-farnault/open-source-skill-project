import styled from 'styled-components'
import { box, colors, LBoldText, sizes, SLightText } from '../../utils'

const PageContentContainer = styled.div`
  background-color: ${colors.white100};
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: ${sizes.size16};
  width: 100%;
`
PageContentContainer.displayName = 'PageContentContainer'

const ProjectCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
ProjectCardsWrapper.displayName = 'ProjectCardsWrapper'

const ProjectCard = styled.div`
  box-shadow: ${box.boxShadow};
  display: flex;
  flex-direction: column;
  margin-bottom: ${sizes.size32};
  margin-left: ${sizes.size64};
  margin-right: ${sizes.size64};
  margin-top: ${sizes.size32};
`
ProjectCard.displayName = 'ProjectCard'

const ProjectCardName = styled.div`
  ${LBoldText};
`
ProjectCardName.displayName = 'ProjectCardName'

const ProjectCardDescription = styled.div`
  ${SLightText};
`
ProjectCardDescription.displayName = 'ProjectCardDescription'

export { PageContentContainer, ProjectCard, ProjectCardDescription, ProjectCardName, ProjectCardsWrapper }
