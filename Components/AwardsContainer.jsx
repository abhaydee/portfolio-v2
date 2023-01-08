import React, { useState } from "react";
import {
  ProjectsContainerTitle,
  ProjectsCustomContainer,
} from "../utils/CustomComponents";
import styled from "styled-components";
import Vimeo from "@u-wave/react-vimeo";

const VideoUtilityContainer = styled.div`
  width: 100%;
  background-color: #242424;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
  &.flex-image {
    padding-inline: 0;
  }

  @media (min-width: 1025px) {
    flex-direction: column;
    padding-inline: 1.5rem;
    align-items: ${(props) => props.alignItems};
    margin-top: ${(props) => props.marginTop};
  }

  @media (min-width: 125rem) {
    justify-content: center;
  }
`;

const VimeoVideoContainer = styled(Vimeo)`
  width: 100%;
  /* margin-top: 2rem; */
  @media (min-width: 1025px) {
    width: 30.875rem;
    height: 18.3125rem;
    /* margin-top: 4rem; */
    margin-left: 4rem;
  }
`;

const VideoTitle = styled.h3`
  font-size: 1.5rem;
  font-family: "Source-OpenSans";
  margin-left: 4rem;
  line-height: 1.75;
  max-width: 35rem;
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-left: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const VideoParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 36rem) {
    flex-direction: row;
  }
`;

function AwardsContainer() {
  const [paused, setPaused] = useState(false);

  const handlePlayerPause = () => {
    setPaused(true);
  };
  const handlePlayerPlay = () => {
    setPaused(false);
  };
  return (
    <ProjectsCustomContainer>
      <ProjectsContainerTitle maxWidth={"55rem"}>
        SPECIAL MENTIONS
      </ProjectsContainerTitle>
      <VideoParentContainer>
        <VideoUtilityContainer>
          <VimeoVideoContainer
            video={"787263935"}
            autoplay={false}
            volume={1}
            paused={paused}
            responsive={true}
            onPause={handlePlayerPause}
            onPlay={handlePlayerPlay}
          />
          <VideoTitle>Algopay Decipher Pitch</VideoTitle>
        </VideoUtilityContainer>
        <VideoUtilityContainer>
          <VimeoVideoContainer
            video={"787266149"}
            autoplay={false}
            volume={1}
            paused={paused}
            responsive={true}
            onPause={handlePlayerPause}
            onPlay={handlePlayerPlay}
          />
          <VideoTitle>
            First Place at HackBoston (Harvard University)
          </VideoTitle>
        </VideoUtilityContainer>
      </VideoParentContainer>
      <VideoUtilityContainer alignItems={"center"} marginTop={"2rem"}>
        <VimeoVideoContainer
          video={"787396901"}
          autoplay={false}
          volume={1}
          paused={paused}
          responsive={true}
          onPause={handlePlayerPause}
          onPlay={handlePlayerPlay}
        />
        <VideoTitle>RunnerUp at Tron Hackathon (Harvard University)</VideoTitle>
      </VideoUtilityContainer>
    </ProjectsCustomContainer>
  );
}

export default AwardsContainer;
