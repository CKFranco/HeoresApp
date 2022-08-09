import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        
        <div className='container'>

          <Routes>
            <Route path="Marvel" element={<MarvelPage />} />
            <Route path="DC" element={<DcPage/>}/>
            <Route path="/" element={<Navigate to="/Marvel"/>}/>

            <Route path="search" element={<SearchPage/>}/>
            <Route path="hero/:id" element={<HeroPage/>}/>
          </Routes>

        </div>
        
        
    </>
  )
}
