import React, { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Pizza from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";
import { Link } from "react-router-dom";

interface ISinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizza: FC<ISinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    console.log("click");
    setEdit(!edit);
    // setEdit((prev) => !prev);
  };

  const handleDelete = () => {
    deletePizza(pizza.id);
  }

  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>
        <Link to={`/pizza/${pizza.id}`}>{pizza.title}</Link>
      </h2>
      <span>{pizza.price} $</span>

      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggleEdit} />
        <AiFillDelete onClick={handleDelete} />
      </div>

      {edit ? (
        <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
    </div>
  );
};

export default SinglePizza;