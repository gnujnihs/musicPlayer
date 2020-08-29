import styled from 'styled-components';
import {
  SkipPrevious,
  SkipNext,
  PlayCircleFilledWhite,
  PauseCircleFilled,
} from '@material-ui/icons/';

export const StyledLeftIcon = styled(SkipPrevious)`
  color: white;

  &:hover {
    cursor: pointer;
  }
`

export const StyledRightIcon = styled(SkipNext)`
  color: white;

  &:hover {
    cursor: pointer;
  }
`

export const StyledPlay = styled(PlayCircleFilledWhite)`
  color: white;

  &:hover {
    cursor: pointer;
  }
`

export const StyledPause = styled(PauseCircleFilled)`
  color: white;
  
  &:hover {
    cursor: pointer;
  }
`

export const PlayerControlsContainer = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-between;
  margin-bottom: 5px;
`

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 30%;
`