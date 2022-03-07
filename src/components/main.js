const Main = () => {
  return (
    <div>
      <div className="px-5 md:px-20 pt-16 tracking-widest text-2xl text-white font-judul text-center">
        <p>Produk Baru / Fresh</p>
        <p>Harga Terjangkau</p>
        <p>Siap Antar</p>
      </div>

      <div className="absolute bottom-0 w-full px-3">
        <div className="flex justify-center">
          <div className="box h-60 w-40 bg-white rounded-t-full hover:scale-110 hover:-translate-y-4 transition-all ease-in-out duration-500">
            <p className="font-body font-semibold text-xl h-20 pt-8 text-center">
              BAWANG
            </p>
            <img
              src="https://res.cloudinary.com/duohdrpvb/image/upload/v1646632856/abdi/joe-green-4LJYzvrxISI-unsplash_q7bhpv.jpg"
              alt=""
              className="object-cover h-40 w-40 bottom-0"
            />
          </div>
          <div className="box h-60 w-40 bg-white mx-1 md:mx-10 rounded-t-full hover:scale-110 hover:-translate-y-4 transition-all ease-in-out duration-500">
            <p className="font-body font-semibold text-xl h-20 pt-8 text-center">
              SEMBAKO
            </p>
            <img
              src="https://res.cloudinary.com/duohdrpvb/image/upload/v1646632023/abdi/market-g618d4bd0e_1920_pyddeu.jpg"
              alt=""
              className="object-cover h-40 w-40 bottom-0"
            />
          </div>
          <div className="box h-60 w-40 bg-white rounded-t-full hover:scale-110 hover:-translate-y-4 transition-all ease-in-out duration-500">
            <p className="font-body font-semibold text-xl h-20 pt-8 text-center">
              IKAN
            </p>
            <img
              src="https://res.cloudinary.com/duohdrpvb/image/upload/v1646632025/abdi/dried-fish-g44d5554f4_1920_vzwse1.jpg"
              alt=""
              className="object-cover h-40 w-40 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
