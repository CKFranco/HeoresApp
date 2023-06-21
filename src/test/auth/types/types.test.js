import { types } from "../../../auth/types";


describe('Pruebas en Types', () => { 

    test('Debe regresar estos types', () => { 

        expect(types).toEqual({
             login: "[Auth] login", 
            logout: "[Auth] logout"
        }
        )

     })
 })