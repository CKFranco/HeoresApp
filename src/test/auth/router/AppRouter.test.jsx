import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../auth"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../../router/AppRouter"


describe('Pruebas en <AppRouter/>', () => { 

    test('Debe mostrar el login si no esta autenticado', () => { 

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
            
        )

        expect(screen.getByText('Login Page')).toBeTruthy()
     })

    test('Debe mostrar pagina de marvel si esta autenticado', () => {
        
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC123',
                name: 'Juan Perez'
            }
            
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        
        expect(screen.getByText('Marvel Page')).toBeTruthy()
    })
 }) 