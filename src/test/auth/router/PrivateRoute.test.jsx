import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../../auth"
import { PrivateRoute } from "../../../router/PrivateRoute"
import { MemoryRouter } from "react-router-dom"





describe('Pruebas en <PrivateRoute/>', () => { 

    test('debe mostrar el children si está autenticado', () => {

        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC123',
                name: 'Juan'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                    <h1>Ruta Privada</h1>
                </PrivateRoute>
                </MemoryRouter>
                
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta Privada')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/")

    })
 })