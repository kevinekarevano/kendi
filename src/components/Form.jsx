import { Input } from "./ui/Input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

const Form = () => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const kelas = e.target.kelas.value;
    const order = e.target.order.value;

    if (!name || !kelas || !order) {
      setWarning(true);
      return;
    } else {
        setWarning(false)
    }

    // console.log(name, kelas, order);
    setIsOrdered(false);
    try {
      const res = await fetch(import.meta.env.VITE_API_GOOGLE_SHEETS, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify([[name, kelas, order, new Date().toLocaleString()]]),
      });

      const data = await res.json();

      //   console.log(data);

      setIsOrdered(true);
      e.target.reset();

      setTimeout(() => {
        setIsOrdered(false);
      }, 5000);
    } catch (error) {
      console.log(error);
      setIsOrdered(false);
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
        <Textarea placeholder="contoh: Nasi Cumi 1, Es Teh 2, Note : ..." name="order" id=""></Textarea>
        {isOrdered && <p className="text-green-800 font-medium mt-2">Pesanan berhasil dikirim😎</p>}
        {warning && <p className="text-red-800 font-medium mt-2">Form tidak boleh kosong..!</p>}
      </div>

      <Button className="w-full">ORDER</Button>
    </form>
  );
};

export default Form;
