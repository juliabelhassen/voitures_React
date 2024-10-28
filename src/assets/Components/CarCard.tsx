//import carList from "./tableau"

function CarCard(props : {modele: string, imgSrc: string, price: string, description: string}) {


  return (
      <>

    <figure>
      {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}
      <figcaption>
        <p>{props.modele}</p>
      </figcaption>
    </figure>
    <p>à partir de {props.price}/mois, {props.description} </p>
    <button />


      </>
  )
};

CarCard(carList[0]);
export default CarCard

