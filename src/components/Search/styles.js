import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 20px;
  
  input {
    width: 100%;
    border-radius: 24px;
    margin-bottom: 15px;
    padding: 6px;
  }

  button {    
    border-radius: 24px;
  }
`

export default StyledForm;

StyledForm.displayName = 'Form';