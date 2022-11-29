import React from 'react'
import Layout from '../layout/Layout'
import { Route, Routes } from "react-router-dom";
import Header from '../header/Header';
const MyRouters = () => {
  return (
   <>
   <Layout>
    <Routes>
<Route path='/' element={<Header/>}/>
    </Routes>
   </Layout>
   </>
  )
}

export default MyRouters