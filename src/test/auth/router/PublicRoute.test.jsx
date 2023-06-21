import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../auth"
import { PublicRoute } from '../../../router/PublicRoute'
import { PrivateRoute } from "../../../router/PrivateRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom"



describe('Pruebas en <PublicRoute/>', () => {
    
    test('debe mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta Publica')).toBeTruthy()

    })

    test('Debe navegar si esta autenticado', () => { 

        const contextValue = {
            logged: true,
            user: {
                name: 'Juan',
                id: 'ABC123'
            }
        }

        render(
            
                <AuthContext.Provider value={contextValue}>
                    <MemoryRouter initialEntries={['/login']}>

                        <Routes>
                            <Route path="/">

                                <Route element={<PublicRoute/>}>
                                    <Route path="login"  element={<h1>Public Route</h1>}/>
                                </Route>
                        

                                <Route path='/' element={
                                    <PrivateRoute>
                                        <h1>Ruta Privada</h1>
                                    </PrivateRoute>
                                }/>

                            </Route>                           
                        </Routes>
                         
                    </MemoryRouter>            
                </AuthContext.Provider>
               

             
        )
        
        expect(screen.getByText('Ruta Privada')).toBeTruthy()
     })

     
 })