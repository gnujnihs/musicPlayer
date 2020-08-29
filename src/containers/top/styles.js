import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 25%;
  flex-direction: column;
  color: white;
`

export const HR = styled.hr`
  color: white;
  width: 100%;
`

export default Wrapper;

Wrapper.displayName = 'Top Section';