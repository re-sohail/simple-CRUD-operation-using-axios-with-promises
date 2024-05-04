import React from "react";
import Data from "./Component/Data";
function App() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-950 text-[#f5f5f5]">
        <div className="w-[80%] h-full mx-auto py-10">

        <h1 className="text-2xl font-semibold text-center">This is Axios Practice Project</h1>
        <Data />
        </div>
      </div>
    </>
  );
}

export default App;
