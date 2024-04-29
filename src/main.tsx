import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
// import UseState from "./ExampleUseState.tsx";
// import TestScss from "./TestScss.tsx";
// import ExampleUseReducer from "./ExampleUseReducer.tsx";
// import ExampleUseCallback from "./ExampleUseCallback.tsx";
// import ExampleUseMemo from "./ExampleUseMemo.tsx";
// import ExampleUseRef from "./ExampleUseRef.tsx";
import WebPage from "./WebPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WebPage />
  </React.StrictMode>,
)
