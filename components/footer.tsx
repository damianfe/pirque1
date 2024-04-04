import { socialMedia } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className="flex flex-col sm:flex-row w-full bg-gray-800 text-white justify-around py-5 mt-[3rem]">
            <div className="flex flex-col items-center justify-center mb-4 sm:mb-0">
                <h4 className="text-[1.2rem] mb-2">Legal Notice</h4>
                <h5 className="opacity-30 mb-1">Terms of Service</h5>
                <h5 className="opacity-30">Privacy Policy</h5>
            </div>
            <div className="flex flex-col items-center justify-center mb-4 sm:mb-0">
                <h2 className="text-bold text-[1.5rem] mb-2">Disfrute Pirque</h2>
                <div className="flex flex-row space-x-4">
                    {socialMedia.map((item) =>
                        <div
                            key={item.id}
                            className="hover:opacity-50 flex bg-slate-700 rounded-full p-2">
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
                    © {currentYear} - All rights reserverd
                </h5>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
                <h3>Get the app</h3>
                <Image
                    className='cursor-pointer object-contain hover:scale-110 w-[13rem] h-[4rem]'
                    src={'/appstore.png'}
                    width={300}
                    height={300}
                    alt='apple store button'
                />

                <Image
                    className='cursor-pointer object-contain hover:scale-110 w-[13rem] h-[4rem]'
                    src={'/playstore.png'}
                    width={300}
                    height={300}
                    alt='playstore  store button'
                />
            </div>
        </footer>
    )
}