"use client";
import CardMahasiswa from "./components/CardMahasiswa";
import supabase from "../../utils/supabase";
import SearchForm from "./components/SearchForm";


export default async function Home() {
  const { data: mahasiswa, error } = await supabase.from('mahasiswa').select('').order('id',{ ascending: true })

  if (error) {
    console.log(error.message);
  }

  return (
    <>
        <h1 className="text-3x1 font-bold text-slate-400 ml-2">Daftar Mahasiswa</h1>
        <SearchForm />
      <div className="flex p-4">
        {mahasiswa && mahasiswa.map((mhs,idx) => (
          <CardMahasiswa
            key = {idx}
            nim = {mhs.nim}
            nama = {mhs.nama}
            angkatan = {mhs.angkatan}
            prodi = {mhs.prodi}
            foto = {mhs.foto}
          />
        ))}
      </div>
    </>  
  );
}