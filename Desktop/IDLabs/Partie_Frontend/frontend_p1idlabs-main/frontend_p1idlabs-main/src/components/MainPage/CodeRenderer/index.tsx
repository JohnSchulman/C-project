import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './style.module.scss'

const CodeRenderer = () => {

  function handleClick() {
    console.log('Le lien a été cliqué.');
  }
  
  return (
    <div className={styles.wrapper} 
    // Détecte une click de souris
    onClick={()=> console.log("cliquer")}
    // Détecte une double click du souris
    onDoubleClick={()=> console.log("double cliquer")}
    // Détecte une appui du souris pour moment indéfinis
    onMouseDown ={()=> console.log("Mouse down")}
    // detecte quand le curser quitte le composant pour aller sur un autre(aucun component enfant)
    onMouseLeave ={()=> console.log("Mouse leave")}
    // lance l'événement des qu'on va sur un component children (enfant)
    onMouseOut ={()=> console.log("Mouse out")}
    // Détecte le bouton appuyé
    onKeyDown={(event)=> console.log("on key down " + event.key)}
    // Détecte lorsqu'on enlève un bouton
    onKeyUp={(event)=> console.log("on key up " + event.key)} tabIndex={0}
    // Détecte l'évenement des qu'on bouge la souris 
    onMouseMove={(event)=> console.log("on key move ")}
    // faut souligner du text et puis on le drag
    onDrag={(event)=> console.log("on key drag ")}
    >
      <FontAwesomeIcon icon={faCode} size="6x" />
      <h1>Start Coding</h1>
      <button onClick={handleClick}>Click moi</button>
    </div>
    
  )
}

//event.persist();
//console.log(event.key);

export default CodeRenderer
