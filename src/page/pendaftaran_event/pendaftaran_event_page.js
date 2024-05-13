import React from "react";
import NavbarComponent from "../../components/navbar_component";
import FooterComponent from "../../components/footer_component";

const PendaftaranEventPage = () => {
  return (
    <div>
      <NavbarComponent />
      {/* Section 1 - Form Pendaftaran */}
      <section>
        <div className="flex flex-col justify-center items-center w-screen">
          <form className="w-3/5 mt-32">
            <p className="text-3xl font-bold mb-12">Pendaftaran</p>
            <p className="">Nama</p>
            <input
              type="text"
              className="w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4"
              placeholder="Masukkan Nama"
            />
            <p>Email</p>
            <input
              type="text"
              className="w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4"
              placeholder="Masukkan Email"
            />
            <p>Nomor Handphone</p>
            <input
              type="text"
              className="w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4"
              placeholder="Masukkan Nomor Handphone"
            />
            <p>Afiliasi</p>
            <input
              type="text"
              className="w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4"
              placeholder="Masukkan Afiliasi"
            />
            <p>Jenis Tiket</p>
            <select id="jenis_tiket" name="jenis_tiket" className="w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4"> 
              <option value="">Tiket 1</option>
              <option value="">Tiket 2</option>
              <option value="">Tiket 3</option>
            </select>
            <p>Catatan</p>
            <input
              type="text"
              className="w-full h-14 mb-4 rounded-xl bg-[#FBFBFB] border border-[#B6B6B6] text-black px-4"
              placeholder="Masukkan Catatan"
            />
          </form>
        <button className="bg-[#092040] text-white px-16 py-3 rounded-2xl mt-8 mb-24">Kirim</button>
        </div>
      </section>
      {/* Footer */}
      <FooterComponent/>
    </div>
  );
};

export default PendaftaranEventPage;
