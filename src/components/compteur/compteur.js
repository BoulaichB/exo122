import React from 'react'
import { useState } from 'react'

export const Compteur = () => {
    // Compteur de clics : Créez un composant qui affiche un bouton et un compteur. Lorsque vous cliquez sur le bouton, le compteur doit s'incrémenter. Utilisez les state pour gérer le compteur.
    let [count, setCount] = useState(0);

    const Incrementation = () => {
        count = count + 1;
        setCount(count);
    }
    return (
        <section>
            <h1>Compteur de clics</h1>
            <span className='border-red-700 border rounded-full p-1 m-1'>{count}</span>
            <button onClick={Incrementation}>Cliquez ici</button>
        </section>
    )
}
