//import carList from "./tableau"

function CarCard(props: {
  modele: string;
  imgSrc: string;
  price: string;
  description: string;
}) {
  return (
    
  
      <section className="cardSection">
        <figure>
          {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}
        </figure>
        <p>{props.modele}</p>

        <p>à partir de {props.price} </p>
        <p> {props.description} </p>
        <button> Read More </button> 
      </section>
    
    
  );
}

export default CarCard;
