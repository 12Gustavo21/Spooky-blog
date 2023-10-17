import React, { useContext } from 'react';

//Context
import Context from '../../services/store/context';

//Theme toggle
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

export default function Index() {
  const { state, dispatch } = useContext(Context);

  return (
    <Classic duration={750} style={{ fontSize: 40 }} onToggle={() => dispatch({ type: 'TOGGLE_DARK_MODE' })} isDark={state.isDark} />
  )
}