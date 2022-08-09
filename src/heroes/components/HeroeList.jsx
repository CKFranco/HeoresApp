import React, { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from "../helpers"




export const HeroeList = ({publisher}) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]) 

  return (
    
        <div className='row  row-cols-md-3 row-cols-1 g-5'>


            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero}/>
                ))
            }

        </div>
  )
}
