const { screen, render, fireEvent } = require("@testing-library/react")
const { AuthContext } = require("../../../auth/context/AuthContext")
const { MemoryRouter, useNavigate } = require("react-router-dom")
const { Navbar } = require("../../../ui/components/Navbar")

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),

    useNavigate: () => mockUseNavigate
}))

describe('Pruebas en <Navbar/>', () => { 

    const contextValue = {
        logged: true,
        user: {
            id: 'ACB123',
            name: 'Juan Perez'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks())

    test('Debe mostrar el nombre del usuariio logeado', () => { 

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('Juan Perez')).toBeTruthy()

     })

    test('Debe llamar el logout y navigate cuando se hace click el boton', () => { 
        
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const logoutBtn = screen.getByRole('button')
        fireEvent.click(logoutBtn)

        expect( contextValue.logout).toHaveBeenCalled()
        expect( mockUseNavigate ).toHaveBeenCalledWith("/Login", {"replace": true})

    })
 })