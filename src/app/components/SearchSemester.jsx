"use client";
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchSemester({nim}) {
    const router = useRouter();
    const [semester, setSemester] = useState("");

    return (
        <>
            <div className="flex justify-left">
                <div className="w-92">
                    <input
                        type="text"
                        className="w-full border rounded-md p-2"
                        placeholder="Cari Semester"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white border rounded-md p-2 ml-2"
                    onClick={() => router.push(`/nilai/${nim}/${semester}`)}>Cari Semester</button>
            </div>
        </>
    )
}