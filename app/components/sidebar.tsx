import React from "react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="bg-black/20 border border-cyan-900/10 border-l-cyan-400/20 min-h-screen p-4">
            <p className="p-8 text-stone-300/70">
                Obrigado por vir até aqui. Esse é o meu portifolio, estará sempre em modificação. Mas não hesite em navegar por ele.
            </p>
            {
                SidebarButtonBlock(
                    "Social",
                    [
                        SidebarMediaButton("ci ci-instagram", "/link", "Instagram"),
                        SidebarMediaButton("ci ci-linkedin", "/link", "Linkedin")
                    ]
                )
            }

            {
                SidebarButtonBlock(
                    "Linguagens",
                    [
                        SidebarStackButton("ci ci-java", "Java"),
                        SidebarStackButton("ci ci-cpp", "C++"),
                        SidebarStackButton("ci ci-go", "Go"),
                        SidebarStackButton("ci ci-python", "Python"),
                        SidebarStackButton("ci ci-ts", "TypeScript")
                    ]
                )
            }
        </div>
    );
}

export function SidebarButtonBlock(title: string, buttons: Array<React.JSX.Element>) {
    return (
        <div className="justify-center text-left p-8">
            <h4 className="text-stone-300/70 uppercase font-bold text-lg">{title}</h4>
            <ul>
                {buttons.map((btn, index) => (
                    <li key={index}>
                        {btn}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function SidebarMediaButton(icon_class: string, route: string, title: string): React.JSX.Element {
    return (
        <Link
            href={route}
        >
            <div className="flex flex-row gap-5 font-medium text-stone-100/70 text-base content-center items-stretch my-1 font-poppins-mono">
                <div className="flex-none py-1">
                    <i className={`${icon_class} ci-lg`}></i>
                </div>

                <div className="flex-2">
                    <h4>{title}</h4>
                </div>
                <div className="flex-1 text-end">
                    <i className="text-xl">🠆</i>
                </div>
            </div>
        </Link>
    );
}

export function SidebarStackButton(icon_class: string, title: string) {
    return (
        <div className="flex flex-row gap-5 font-medium text-stone-100/70 text-base content-center items-stretch my-1 font-poppins-mono">
                <div className="flex-none py-1">
                    <i className={`${icon_class} ci-lg`}></i>
                </div>

                <div className="flex-2">
                    <h4>{title}</h4>
                </div>
            </div>
    );
}