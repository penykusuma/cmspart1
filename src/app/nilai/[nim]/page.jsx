import cardMahasiswa from "../../components/CardMahasiswa"
import supabase from "../../../../utils/supabase";
import SearchSemester from "@/app/components/SearchSemester";


export default async function GetNilaiByNim({ params }) {
  const {nim} = params

  const { data: nilai, error } = await supabase.from('nilai').select(`
    nim,nilai,semester,matakuliah(kdmk,matakuliah,semester,sks)`)
    .eq('nim', nim);
  
  if (error) {
    console.log(error.message);
  }

  console.log(nilai)

  return (
    <div>
      <h1 className="font-semibold ml-2">Daftar Nilai</h1>
      <SearchSemester nim={nim} />
      {nilai.map((nil, idx) => 
        <div key={idx} className="ml-8 mb-3">
          <h2 className="font-medium">{nil.matakuliah.matakuliah}</h2>
          <li className="text">Kode MK : {nil.matakuliah.kdmk}</li>
          <li className="text">SKS : {nil.matakuliah.sks}</li>
          <li className="text">Semester : {nil.semester}</li>
          <li className="text">Kode MK : {nil.nilai}</li>
        </div>
      )}
    </div>
  )
}