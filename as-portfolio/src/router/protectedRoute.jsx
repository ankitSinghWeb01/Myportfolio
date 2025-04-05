import React from 'react'
import PortfolioMain from '../Pages/PortfolioMain'
import Header from '../Pages/Header'
import { Route, Routes } from 'react-router-dom'
const ProtectedRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />} />

            </Routes>
        </>
    )
}

export default ProtectedRoute
