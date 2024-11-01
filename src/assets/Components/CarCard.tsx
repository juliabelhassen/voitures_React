import React, { useState } from "react";

function CarCard(props: {
  modele: string;
  imgSrc: string;
  price: string;
  description: string;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const Readmore =
    " Cette voiture, elle est trop belle ! Elle brille comme un trésor et roule super bien, comme un éclair magique ! Elle est rapide comme un guépard et ne s’arrête jamais, même si tu roules très très loin. Quand tu montes dedans, c'est comme voler dans un rêve. Les sièges sont tout doux, et le volant tourne sans faire de bruit, c’est trop parfait ! C'est la meilleure voiture du monde entier, et tout le monde va la regarder avec des grands yeux.";


  return (
    <>
      <section className="cardSection">
        <figure>
          {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}

          <figcaption>
            <p>{props.modele}</p>
          </figcaption>

          <p>
            à partir de {props.price}/mois <br />  {props.description} ,
            {isExpanded
              ? ""
              :  Readmore}
          </p>

          <button onClick={toggleText}>
            {" "}
            {isExpanded ? "Read more" : "Read less"}{" "}
          </button>
        </figure>
      </section>
    </>
  );
}

export default CarCard;
