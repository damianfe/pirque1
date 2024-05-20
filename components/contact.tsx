"use client";
import { AnimationDefinition, motion } from "framer-motion";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";
import useInterSection from "@/utils/use-inter-section";

export default function Contact() {
    const animacion: AnimationDefinition = {
    // Define las propiedades de tu animación aquí
    };
    const { elementRef } = useInterSection("contact", animacion);
    return (
    <motion.section
        ref={elementRef}
        id="contacto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex mx-auto flex-col px-6 mt-5 max-w-2xl"
    >
        <h1 className="text-center text-2xl sm:text-3xl">Contacto</h1>
        <div className="mt-8 p-2 md:p-0">
        <form className="bg-green-900 shadow-md px-4 md:px-8 py-4 md:py-8 mb-4 rounded-2xl">
            <div className="mb-4">
            <label
                htmlFor="email"
                className="block text-gray-200 text-sm font bold mb-2"
            >
                Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={320}
                className="shadow appearance-none bg-sky-100 border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus: shadow-outline"
            />
        </div>
        <div className="mb-6">
            <label
                className="block  text-gray-200 text-sm font-bold mb-2"
                htmlFor="message"
            >
                Mensaje
            </label>
            <textarea
                id="message"
                name="message"
                maxLength={2000}
                rows={7}
                className="resize-none bg-sky-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            </div>
            <div className="flex items-start">
            <SubmitButton />
            </div>
        </form>
    </div>
    </motion.section>
    );
}
