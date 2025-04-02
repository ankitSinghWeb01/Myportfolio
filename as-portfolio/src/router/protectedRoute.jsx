import React from 'react'
import PortfolioMain from '../Pages/PortfolioMain'
import { Route, Routes } from 'react-router-dom'
const ProtectedRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PortfolioMain/>} />
                {/* <Route path="/portfolio/:id" element={<PortfolioDetail />} />
                <Route path="/portfolio/:id/edit" element={<PortfolioEdit />} />
                <Route path="/portfolio/new" element={<PortfolioNew />} />
                <Route path="/portfolio/:id/delete" element={<PortfolioDelete />} />
                <Route path="/portfolio/:id/preview" element={<PortfolioPreview />} /> */}
            </Routes>
        </>
    )
}

export default ProtectedRoute
