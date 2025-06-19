import React from 'react';

const HeroSection = () => {
  return (
    // Mengubah warna background menjadi #101010
    <section className="bg-[#101010] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-20 md:py-0">
        {/* Kolom Teks (Kiri) */}
        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight">
            {/* Mengubah warna teks merah menjadi #FF1D1D */}
            Everyday get <span className="text-[#FF1D1D]">Satired</span>
            <br />
            and always <span className="text-[#FF1D1D]">Satiring.</span>
          </h1>
          <p className="mt-6 text-base lg:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, randomised words which don't look even slightly believable.
          </p>
          {/* Mengubah warna tombol menjadi #FF1D1D dan warna hover yang lebih gelap */}
          <button className="mt-8 bg-[#FF1D1D] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#D61A1A] transition duration-300">
            Learn More
          </button>
        </div>

        {/* Kolom Lingkaran (Kanan) */}
        <div className="md:w-1/2 lg:w-2/5 flex justify-center items-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;