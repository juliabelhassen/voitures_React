interface 


function CarCard(props : {nom: string, imgSrc: string, prix: string, description: string}) {


  return (
      <>
    <figure>
      {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}
      <figcaption>
        <p>{props.nom}</p>
      </figcaption>
    </figure>
    <p>à partir de {props.prix}/mois, {props.description} </p>
    <button />
      </>
  )
};


export default CarCard