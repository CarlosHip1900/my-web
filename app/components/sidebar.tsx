import React from "react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="bg-black/20 border min-h-screen border-cyan-400/20 px-4 py-2">
            {
                SidebarButtonBlock(
                    "Social",
                     [
                        SidebarButton("/link", "Instagram"),
                        SidebarButton("/link", "Linkedin")
                    ]
                )
            }
        </div>
    );
}

export function SidebarButtonBlock(title: string, buttons: Array<React.JSX.Element>) {
    return (
        <div className="justify-center text-left">
            <h4 className="">{title}</h4>
            <ul>
                {buttons.map((btn, index) => (
                <li key={index} className="w-full">
                    {btn}
                </li>
            ))}
            </ul>
        </div>
    );
}

export function SidebarButton(route: string, title: string): React.JSX.Element {
    return (
        <Link
            href={route}
        >
            <h4>{title}</h4>
        </Link>
    );
}
