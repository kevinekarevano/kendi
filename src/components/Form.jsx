import { Input } from "./ui/Input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [warning, setWarning] = useState(false);
  const [failed, setFailed] = useState(false);
  const [capVal, setCapVal] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const kelas = e.target.kelas.value;
    const order = e.target.order.value;
    const honeyPot = e.target.honeypot.value;

    if (!name || !kelas || !order || honeyPot) {
      setWarning(true);
      return;
    } else {
      setWarning(false);
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

      setTimeout(() => {
        setIsOrdered(false);
      }, 5000);
    } catch (error) {
      console.log(error);
      setIsOrdered(false);

      setFailed(true);

      setTimeout(() => {
        setFailed(false);
      }, 2000);
    } finally {
      e.target.reset();
    }
  };

  const handleCaptchaChange = (value) => {
    setCapVal(value);
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
        {failed && <p className="text-red-800 font-medium mt-2">Gagal mengirim pesanan, periksa kembali jaringan anda..!</p>}
      </div>

      {/* HoneyPot Field */}

      <div style={{ display: "none" }}>
        <label htmlFor="honeypot">Honeypot</label>
        <input type="text" name="honeypot" id="honeypot" />
      </div>

      <ReCAPTCHA onChange={handleCaptchaChange} sitekey={import.meta.env.VITE_RECAPTCHA_SECRET_KEY} />

      <Button disabled={!capVal} className="w-full mt-5">
        ORDER
      </Button>
    </form>
  );
};

export default Form;
