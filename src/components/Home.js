import React from "react";
import image from "../bg_2.jpg";

export default function home(){
        return (
                <main>
                        <img src={image} alt="img" className="absolute object-cover w-full h-full"/>
                        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                                <h1 className="texxt-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hi. I'm Roshen.</h1>
                        </section>
                </main>
        )
}