import styled from 'styled-components';
import { PlayCircleFilledWhite } from '@material-ui/icons';

export const PlayButton = styled(PlayCircleFilledWhite)`
  color: white;
` 

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`