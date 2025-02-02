import { Input } from "./ui/Input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Loaders from "./ui/Loaders";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import moment from "moment";

const warningPopup = () => {
  Swal.fire({
    title: "Form tidak boleh kosong!!",
    icon: "error",
  });
};

const Form = () => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [failed, setFailed] = useState(false);
  const [capVal, setCapVal] = useState(null);
  // const [ipAddress, setIpAddress] = useState("");

  ///// get IP Address
  // const fetchIP = async () => {
  //   try {
  //     const response = await fetch("https://api.ipify.org");

  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchIP();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim(); // validasi spasi
    const kelas = e.target.kelas.value.trim();
    const order = e.target.order.value.trim();
    const number = e.target.number.value;
    const honeyPot = e.target.honeypot.value;

    const handlePopUp = () => {
      Swal.fire({
        title: "Pesanan berhasil dikirim!",
        html: `<p>Nama : ${name}</p>
        <p>Kelas : ${kelas}</p>
        <p>Pesanan : ${order}</p>
        <p>Jam : ${moment().format("DD/MM/YYYY HH:mm A")}</p>`,
        icon: "success",
      });
    };

    if (!name || !kelas || !order || !number || honeyPot) {
      warningPopup();
      setWarning(true);
      return;
    } else {
      setWarning(false);
    }

    // console.log(name, kelas, order);
    setIsOrdered(false);
    setIsLoading(true);
    try {
      await fetch(import.meta.env.VITE_API_GOOGLE_SHEETS_2, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify([[name, kelas, order, number, new Date().toLocaleString()]]),
      });

      setIsOrdered(true);
      handlePopUp();

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
      setIsLoading(false);
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
          Nama Lengkap (Wajib)
        </label>
        <Input required placeholder="contoh: Agus Soleh" type="text" name="name" id="name" />
      </div>

      <div className="mb-5">
        <label className="font-bold" htmlFor="kelas">
          Kelas (Wajib)
        </label>

        <Input required placeholder="contoh: 12 TKJ 1" type="text" name="kelas" id="kelas" />
      </div>

      <div className="mb-5">
        <label className="font-bold" htmlFor="number">
          No. WhatsApp (Wajib)
        </label>
        <Input required placeholder="contoh: 0812345678" type="number" name="number" id="number" />
      </div>

      <div className="mb-5">
        <label className="font-bold " htmlFor="pesanan">
          Pesanan + catatan (Opsional)
        </label>
        <Textarea required placeholder="contoh: Nasi Rendang Ayam 1, Es Teh 2, Note : ..." name="order" id="pesanan"></Textarea>
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
        {isLoading ? <Loaders /> : "ORDER"}
      </Button>
    </form>
  );
};

export default Form;
