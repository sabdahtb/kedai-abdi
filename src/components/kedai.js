const datas = [
  {
    judul: "Sembako",
    deskripsi:
      "Berbagai macam sembako/kebutuhan pangan sehari hari seperti beras, telur, minyak, dll.",
    foto: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646632023/abdi/market-g618d4bd0e_1920_pyddeu.jpg",
  },
  {
    judul: "Bawang",
    deskripsi:
      "Bawang merah yang diimpor dari jawa dan juga bawang putih yang dipilih dengan kesegaran dan kualitas terbaik.",
    foto: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646632856/abdi/joe-green-4LJYzvrxISI-unsplash_q7bhpv.jpg",
  },
  {
    judul: "Ikan",
    deskripsi:
      "Berbagai macam ikan kering khas tanjung balai yang langsung dipilih dari petani ikan di Tanjung Balai Sumatera Utara.",
    foto: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646632025/abdi/dried-fish-g44d5554f4_1920_vzwse1.jpg",
  },
  {
    judul: "Kerupuk",
    deskripsi:
      "Berbagai macam kerupuk/ makanan ringan yang diambil dari pabrik kerupuk Pematang Siantar Sumatera Utara.",
    foto: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646657576/abdi/20220307_194750_nxp4y2.jpg",
  },
  {
    judul: "Kopi",
    deskripsi:
      "Berbagai macam kopi sachet yang harganya terjangkau dan sangat mudah dalam pembuatannya",
    foto: "https://res.cloudinary.com/duohdrpvb/image/upload/v1646657570/abdi/shutterstock_1512611969_hwg85p.jpg",
  },
];

const Kedai = () => {
  return (
    <div className="pt-16 font-body text-center text-abu tracking-wide">
      <p className="font-semibold text-2xl text-putih">KEDAI ABDI</p>
      <div className="mt-5 grid md:grid-cols-2 gap-10 justify-self-center place-items-center px-5 py-10">
        {datas.map((data) => (
          <div
            key={data.judul}
            className=" bg-abu text-gelap p-5 rounded-md text-left hover:-rotate-2 hover:scale-105 transition-all ease-in-out duration-200"
          >
            <img
              src={data.foto}
              alt=""
              className="w-80 lg:w-96 h-48 object-cover"
            />
            <p className="font-semibold text-xl mt-2 text-hitam">
              {data.judul}
            </p>
            <p className="italic w-80 lg:w-96">{data.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kedai;
