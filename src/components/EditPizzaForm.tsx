import React, { FC, FormEvent, ChangeEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface IEditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

const EditPizzaForm: FC<IEditPizzaFormProps> = ({
  data,
  updatePizza,
  handleToggleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditPizza({ ...editPizza, [name]: value });
  };

  const handlerFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
      handleToggleEdit();
    } else {
      alert("Не все данные введены!");
    }
  };

  // console.log("edit pizza>>", editPizza);

  return (
    <form className="edit-form" onSubmit={handlerFormSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Pizza's name"
        onChange={handlerChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handlerChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Image - pizza-1.jpg"
        onChange={handlerChange}
        value={editPizza.img}
      />
      <button type="submit"> Confirm changes</button>
    </form>
  );
};

export default EditPizzaForm;
