import Image from "next/image";
import React from "react";
import { Source_Code_Pro_Font } from "../layout";
import Link from "next/link";

const linkClass : string = "hover:text-red-200 p-5 text-xl rounded-sm font-bold";

export default function Navbar(){
    return( 
        <nav className="p-5 flex justify-between">
            <div className="flex items-center gap-5"> {/* Left */}
                <Image src={"/urbanshade_small.png"} height={95} width={95} alt="Urbanshade Logo"></Image>
                <h1 className={`text-4xl font-bold hidden sm:flex ${Source_Code_Pro_Font.className}`}>URBANSHADE</h1>
            </div>

            <div className="flex items-center gap-5"> {/* Right */}
                <Link className={linkClass} href={"https://youtube.com"}>About Urbanshade</Link>
                <Link className={linkClass} href={"https://youtube.com"}>Our Research</Link>
                <Link className={linkClass} href={"https://youtube.com"}>Join our Ranks</Link>
                <Link className={linkClass} href={"https://youtube.com"}>Contact Us</Link>
            </div>
        </nav>
    )
}