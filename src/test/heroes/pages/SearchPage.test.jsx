const { render, screen, fireEvent } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { SearchPage } = require("../../../heroes/pages/SearchPage")

const mockUseNavigate = jest.fn()


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),

    useNavigate: () => mockUseNavigate
}))



describe('Pruebas en <SearchPage/>', () => { 

    beforeEach( () => jest.clearAllMocks)

    test('Debe mostrarsse correctamente con valores por defecto', () => { 

        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        expect( container ).toMatchSnapshot()
        
     })

     test('Debe mostrar a Batman y el input con el valor del queryStringq', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

        const alertDanger = screen.getByLabelText('alert-danger')
        expect(alertDanger.style.display).toBe('none')
     })

     test('debe mostrar un errror si no se encuentra el hero', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const alert = screen.getByLabelText('alert-danger')
        expect( alert.style.display).toBe('')
      })
     

     test('Debe llamar el navigate a la pantalla nueva', () => { 

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        fireEvent.change( input, { target: {name: 'searchText', value: 'superman'} })

        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect( mockUseNavigate ).toHaveBeenCalledWith('?q=superman')
        
      })
 })