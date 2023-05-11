import React, {useEffect, useState} from 'react';
import Portfolio from "./Components/Portfolio";
import Loader from "./Components/Loader";

function App() {

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {setLoader(false)}, 1500)
  }, [])

  if(loader) return <Loader />

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
