import React, {useEffect} from 'react';
import Portfolio from "./Components/Portfolio";
import ReactGa from 'react-ga';

function App() {

  // useEffect(() => {
  //   ReactGa.initialize('G-FQX7E4ZREH')

  //   //Report a pageview
  //   ReactGa.pageview('/')
  // }, [])

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
