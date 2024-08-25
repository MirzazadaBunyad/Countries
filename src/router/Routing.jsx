import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Country from '../pages/Country'
import Country404 from '../pages/Country404'
import { DataProvider } from '../context/DataContext'

function Routing({children}) {
    return (
        <div>
            <DataProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/country/:id' element={<Country />} />
                    <Route path='/country404' element={<Country404 />} />
                </Routes>
            </DataProvider>
        </div>
    )
}

export default Routing
