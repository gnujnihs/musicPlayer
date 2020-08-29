import { useState } from 'react';

const useBoolToggler = (initialState = false) => {
  const [ state, setState ] = useState(initialState);

  const onToggle = () => setState(!state);

  return {
    state,
    onToggle,
  }
}

export default useBoolToggler;