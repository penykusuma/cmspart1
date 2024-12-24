"use client";
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchForm() {
    const router = useRouter();
    const [nim, setNim] = useState("");

    return (
        <>
            <div className="flex justify-left">
                <div className="w-92">
                    <input
                        type="text"
                        className="w-full border rounded-md p-2"
                        placeholder="Cari Mahasiswa"
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                    />
                </div>
                <button className="bg-blue-600 text-white border rounded-md p-2 ml-2"
                    onClick={() => router.push(`/nilai/${nim}`)}>Cari Mahasiswa</button>
            </div>
        </>
    )
}