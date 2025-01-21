import { Input } from "./ui/Input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const kelas = e.target.kelas.value;
    const order = e.target.order.value;

    if (!name || !kelas || !order) {
      alert("form tidak boleh kosong");
      return;
    }

    // console.log(name, kelas, order);

    try {
      const res = await fetch(import.meta.env.VITE_API_GOOGLE_SHEETS, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify([[name, kelas, order, new Date().toLocaleString()]]),
      });

      const data = await res.json();

    //   console.log(data);

      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <form action="" onSubmit={() => handleSubmit(event)}>
      <div className="mb-5">
        <label className="font-bold" htmlFor="name">
          Nama
        </label>
        <Input placeholder="contoh: Rizki" type="text" name="name" id="name" />
      </div>

      <div className="mb-5">
        <label className="font-bold" htmlFor="name">
          Kelas
        </label>
        <Input placeholder="contoh: 12 TKJ 1" type="text" name="kelas" id="kelas" />
      </div>

      <div className="mb-5">
        <label className="font-bold " htmlFor="pesanan">
          Pesanan
        </label>
        <Textarea placeholder="contoh: Nasi Cumi 1, Es Teh 2" name="order" id=""></Textarea>
      </div>

      <Button>ORDER</Button>
    </form>
  );
};

export default Form;
