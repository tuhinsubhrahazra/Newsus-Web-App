import React, {useState} from 'react';
import Navbar from './components/Navbar'
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App =()=> {
  const apiKey = process.env.REACT_APP_NEWSUS_API;
  const [loadingProgress, setLoadingProgress] = useState(107);

  const setProgress = (progress)=>{
    setLoadingProgress(progress);
  }

    return (
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={loadingProgress}
          height={3}
        />
        <Routes>
          <Route exact path="/" element={<News changeProgress={setProgress} apiKey={apiKey} key={"general"} category="general" />} ></Route>
          <Route exact path="/business" element={<News changeProgress={setProgress} apiKey={apiKey} key={"business"} category="business" />} ></Route>
          <Route exact path="/entertainment" element={<News changeProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" />} ></Route>
          <Route exact path="/health" element={<News changeProgress={setProgress} apiKey={apiKey} key="health" category="health" />} ></Route>
          <Route exact path="/science" element={<News changeProgress={setProgress} apiKey={apiKey} key="science" category="science" />} ></Route>
          <Route exact path="/sports" element={<News changeProgress={setProgress} apiKey={apiKey} key="sports" category="sports" />} ></Route>
          <Route exact path="/technology" element={<News changeProgress={setProgress} apiKey={apiKey} key="technology" category="technology" />} ></Route>
          <Route exact path="/About" element={<About/>} ></Route>
        </Routes>
      </Router>
    );
}


export default App;

