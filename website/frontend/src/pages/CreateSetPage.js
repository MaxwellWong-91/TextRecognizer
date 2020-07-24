import React, {useState} from "react";
import Navbar from "../components/Navbar";
import CreateSetBody from "../components/CreateSetBody";

function CreateSetPage({history}) {
  return (
    <>
      <Navbar />
      <CreateSetBody history={history}/>
    </>
  )
}

export default CreateSetPage;