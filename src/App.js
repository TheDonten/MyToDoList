import React from "react"

import App_css from './App.module.css'
import Create_do from "./Component/Do_List/Do_List";
import TextInput from "./TextInput/TextInput"

function App() {
  return (
    <div className={App_css.App}>
        <div className={App_css.Do_List}>
            <Create_do/>

        </div>

        <TextInput/>

    </div>
  );
}

export default App;
