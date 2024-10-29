//import carList from "./tableau"

function CarCard(props : {modele: string, imgSrc: string, price: string, description: string}) {


  return (
      <>

    <figure>
      {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}
      <figcaption>
        <p>{props.modele}</p>
      </figcaption>
    
    <p>à partir de {props.price}/mois, {props.description} </p>
    <button>  Voir  </button>
    </figure>

      </>
  )
};

export default CarCard

