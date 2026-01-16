import React from 'react';
import Link from "next/link"

export default function NavBar(){
    return (
        <header className="pt-5">
        <div className="max-w-[1650px] mx-auto flex justify-center">
            <nav className="bg-black/40 border border-cyan-400/20 rounded-full px-4 py-2">
                <ul className="flex items-center gap-3">
                    { NavBarButton("Test","Test") }
                    { NavBarButton("Test","Test") }
                    { NavBarButton("Test","Test") }
                </ul>
            </nav>
        </div>
    </header>
    )
}

export function NavBarButton(ref: string, title: string): React.JSX.Element {
    return (
        <Link 
            className="px-6 py-2 rounded-full font-bold text-sm hover:border hover:border-blue-500 hover:bg-black"
            href={ref}
        >
            {title}
        </Link>
    );
}