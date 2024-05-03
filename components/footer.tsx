import { socialMedia } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className="flex flex-col sm:flex-row w-full bg-green-800 text-white justify-center py-5 mt-[3rem]">
            <div className="flex flex-col items-center justify-center mb-4 sm:mb-0">
                <h2 className="text-bold text-[1.5rem] mb-2">Disfrutá Pirque</h2>
                <div className="flex flex-row space-x-4">
                    {socialMedia.map((item) =>
                        <div
                            key={item.id}
                            className="hover:opacity-50 flex bg-green-950 rounded-full p-2">
                            <Link href={item.link}>
                                <Image
                                    className="rounded-full"
                                    width={25}
                                    height={25}
                                    src={item.icon}
                                    alt={item.alt}
                                />
                            </Link>

                        </div>
                    )}
                </div>
                <h5 className="text-[0.7rem] mt-4" >
                    © {currentYear} - Todos los derechos reservados.
                </h5>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
            </div>
        </footer>
    )
}