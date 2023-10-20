import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import './styles.css'
import Pizza from '../models/Pizza';

const initState = {
  title: '',
  price: '',
  img: '',
}

interface IAddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const AddPizzaForm: FC<IAddPizzaFormProps> = ({
  addPizza,
}: IAddPizzaFormProps) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;

    setNewPizza({ ...newPizza, [name]: value });
  };

  const handlerFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({
        title,
        img,
        price: Number(price),
        id: Date.now(),
      });
      console.log('Pizza add successfully!');
      setNewPizza(initState);

    } else {
      alert('Не все данные введены!')
    }
  };

  // console.log("newPizza >>", newPizza);

  return (
    <form onSubmit={handlerFormSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Pizza's name"
        onChange={handlerChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handlerChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Image - pizza-1.jpg"
        onChange={handlerChange}
        value={newPizza.img}
      />
      <button type="submit"> + Add to menu</button>
    </form>
  );
};

export default AddPizzaForm; 