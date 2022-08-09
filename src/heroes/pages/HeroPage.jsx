import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"



export const HeroPage = () => {

  //useMemo para memorizar valores // useCallback para memoizar Funciones

  const {id} = useParams()

  const hero = useMemo(() => getHeroById(id), [id]) 

  const navigate = useNavigate()

  const onNavigateBack = () => navigate(-1)
  
  
  if (!hero ) {
    return <Navigate to="/Marvel "/> 
    } 

  

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img 
            src={`/assets/heroes/${id}.jpg`} 
            alt={hero.superhero} 
            className="img-thumbnail border border-info rounded-5 border-5 animate__animated animate__fadeInLeft"/>
        </div>
        <div className="col-8">
          <h2>{hero.superhero}</h2>

          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter Ego: </b> {hero.alter_ego} </li>
            <li className="list-group-item"> <b>Publisher:  </b> {hero.publisher} </li>
            <li className="list-group-item"> <b>Firs Appeared: </b> {hero.first_appearance} </li>
          </ul>
          <hr />

          <h5>Caraters: </h5> <p>{hero.characters}</p>
          
          <button className="btn btn-outline-dark" onClick={onNavigateBack}>
          Back
          </button>

        </div>  
      </div>

     
       
    </>
  )
}
