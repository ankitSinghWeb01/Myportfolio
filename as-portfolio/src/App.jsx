import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import UIProvider from './Pages/providers/UIProvider'
import ProtectedRoute from './router/protectedRoute'
import Layout from './Layout'
function App() {

  return (
    <>
      <BrowserRouter>
        <UIProvider>
          <Layout>
            <ProtectedRoute />
          </Layout>       
           </UIProvider>
      </BrowserRouter>

    </>
  )
}

export default App
