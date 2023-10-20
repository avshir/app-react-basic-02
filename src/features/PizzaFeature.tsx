import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";

import Pizza from "../models/Pizza";

const PizzaFeature: FC = () => {
  const [pizza, setPizza] = useState<Pizza | null>(null);

  const { id } = useParams();
  console.log("id >>", id);

  useEffect(() => {
    const pizzasState = localStorage.getItem("pizzasState");

    if (pizzasState && id) {
      const pizzasList: Pizza[] = JSON.parse(pizzasState);
      const searchId = parseInt(id);

      const currentPizza = pizzasList.find((pizza) => pizza.id === searchId);
      if (currentPizza) setPizza(currentPizza);
    }
  }, []);

  return (
    <>
      <span className="heading">Your pizza</span>
      <div className="pizza pizza-page">
        <img src={`/images/${pizza?.img}`} alt={pizza?.title} />
        <h2>{pizza?.title}</h2>
        <span>{pizza?.price} $</span>
        <p><FcLike />Best in the city!</p>
      </div>
    </>
  );
};

export default PizzaFeature;
