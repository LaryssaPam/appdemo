import React, { useState, useEffect } from 'react';

function CompteAReboursHeures() {
  // 3600 secondes = 1 heure (Tu peux mettre 7200 pour 2 heures, etc.)
  const TEMPS_INITIAL = 3600; 
  
  const [tempsRestant, setTempsRestant] = useState<number>(TEMPS_INITIAL);
  const [estActif, setEstActif] = useState<boolean>(false);

  useEffect(() => {
    let intervalle: ReturnType<typeof setInterval> | null = null;

    if (estActif && tempsRestant > 0) {
      intervalle = setInterval(() => {
        setTempsRestant((prev) => prev - 1);
      }, 1000);
    } else if (tempsRestant === 0) {
      setEstActif(false);
      if (intervalle) clearInterval(intervalle);
    }

    return () => {
      if (intervalle) clearInterval(intervalle);
    };
  }, [estActif, tempsRestant]);

  // --- Fonction de calcul et de formatage ---
  const formaterTemps = (totalSecondes: number): string => {
    const heures = Math.floor(totalSecondes / 3600);
    const minutes = Math.floor((totalSecondes % 3600) / 60);
    const secondes = totalSecondes % 60;

    // padStart ajoute un '0' au début si le chiffre est inférieur à 10 (ex: "05" au lieu de "5")
    const hAffiche = String(heures).padStart(2, '0');
    const mAffiche = String(minutes).padStart(2, '0');
    const sAffiche = String(secondes).padStart(2, '0');

    return `${hAffiche}:${mAffiche}:${sAffiche}`;
  };

  // Fonctions des boutons
  const demarrerOuPause = (): void => setEstActif(!estActif);
  
  const reinitialiser = (): void => {
    setEstActif(false);
    setTempsRestant(TEMPS_INITIAL);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>Compte à rebours :</h2>
      
      {/* Utilisation d'une police 'monospace' pour éviter que les chiffres ne bougent à l'écran */}
      <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '20px 0', fontFamily: 'monospace' }}>
        {tempsRestant > 0 ? formaterTemps(tempsRestant) : "💥 Temps écoulé !"}
      </div>
      
      <div>
        <button 
          onClick={demarrerOuPause} 
          style={{ padding: '10px 20px', marginRight: '10px', fontSize: '1rem', cursor: 'pointer' }}
        >
          {estActif ? 'Pause' : 'Démarrer'}
        </button>
        <button 
          onClick={reinitialiser} 
          style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}
        >
          Réinitialiser
        </button>
      </div>
    </div>
  );
}

export default CompteAReboursHeures;