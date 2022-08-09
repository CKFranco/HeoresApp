import { AppRouter } from "./router/AppRouter"
import { AuthProvider } from "./auth"


export const HeroesApp = () => {

  return (
    <>
    
     <h1 className="display-4 text-center text-decoration-underline text-bg-primary mb-0">HeroesApp</h1>
     
    <AuthProvider>

      <AppRouter/>
      
    </AuthProvider>
     
     
    </>
   
  )
}
