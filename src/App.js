import { useState, useEffect } from "react";

function Hello(){
  /*
  function byFn(){
    console.log("bye..");
  }
  function hiFn(){
    console.log("created");
    return byFn   // Cleanup function -> hiFn(컴포넌트)이 destroy 될 때 buFn 실행
  }
  useEffect(hiFn, []);
  */

  useEffect(()=> {
    console.log("hi");
    return () => console.log("bye");
  }, []);

  return <h1>hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) =>! prev);
  }

  return(
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing? "hide" : "show"}</button>
    </div>
  );
}

export default App;


/*
const [counter, setValue] = useState(0);
  const [keyword, setkeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => {
    setkeyword(e.target.value);
  }
  console.log("i run all the time");

  // useEffect : 코드 실행할 시기 선택 
  useEffect(() => {    // 딱 한 번만 실행
    console.log("Call the API...");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5){
      console.log("Search For", keyword);  
    }
  }, [keyword]);  //keyword 변할 때만 실행 

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here.." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
*/