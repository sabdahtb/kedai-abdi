import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

const Kontak = () => {
  return (
    <div className="pt-16 font-body text-center text-abu tracking-wide">
      <p className="font-semibold text-2xl text-putih">CONTACT US</p>
      <div className="my-5">
        <p>Untuk pemesanan barang bisa langsung chat ke : </p>
      </div>
      <div className="flex justify-center">
        <a
          href="https://bit.ly/35CnNC3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="pr-10 pl-5 py-3 bg-blue-500 hover:bg-blue-700 transition-all ease-in-out duration-300 text-white rounded-full mx-5 flex items-center">
            <FaFacebookF size={"1.6em"} className="mr-2" />
            Facebook
          </p>
        </a>

        <a
          href="https://bit.ly/3IQH01e"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="pr-10 pl-5 py-3 bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-white rounded-full mx-5 flex items-center">
            <FaWhatsapp size={"1.6em"} className="mr-2" />
            WhatsApp
          </p>
        </a>
      </div>
    </div>
  );
};

export default Kontak;
