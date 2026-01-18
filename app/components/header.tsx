import React from 'react';
import Link from "next/link"
import Image from 'next/image';

export function NavBar() {
    return (
        <div className="web-navbar rounded-xl mx-auto justify-center py-3 grid grid-cols-8 gap-10">
            <div className="col-span-2 p-5">
                <h4>Carlos Eduardo</h4>
            </div>
            <div className="col-span-4">
                <div className="rounded-xl item-center flex flex-row w-auto items-stretch bg-gray-600/40 py-2 content-center">
                    {NavBarButton("/", "Inicio", true)}
                    {NavBarButton("/", "Trabalhos", false)}
                    {NavBarButton("/", "Postagens", false)}
                    {NavBarButton("/", "Postage", false)}
                </div>
            </div>
            <div className="col-span-2 py-2 content-center">
                {
                    <Link
                        className={"px-5 py-4 mx-2 rounded-xl font-md text-center text-md border bg-gray-600/40 border-(--web-yellow-color)"}
                        href={""}
                    >
                        🡫 Curriculum
                    </Link>
                }
                {
                    <Link
                        className={"px-5 py-4 mx-2 rounded-xl font-md text-center text-md bg-(--web-yellow-color) text-black font-bold"}
                        href={""}
                    >
                        Contato
                    </Link>
                }
            </div>
        </div>
    )
}

export function HeaderInformation() {
    return (
        <div className="grid grid-row-4 gap-5">
            <div>
                <h4 className='text-(--web-black-color) font-bold text-8xl'>Carlos Eduardo</h4>
                {
                    <Image
                    className='rounded-full'
                        src="/my-face.png"
                        width={256}
                        height={200}
                        alt="Picture of the author"
                        />
                }
            </div>
            <div>
                <h4 className='text-stone-500/70 font-medium text-8xl'>Engenherio de Software &</h4>
            </div>
            <div>
                <h4 className='text-stone-500/70 font-medium text-8xl'>Alguma coisa aqui</h4>
            </div>
            <div>
                <p className='text-stone-900 font-md text-md '>AInda irei colocar alguma coisa aqui mas ainda nao sei</p>
            </div>
        </div>
    );
}

function NavBarButton(ref: string, title: string, selected: boolean): React.JSX.Element {

    var appendClass = selected ? "bg-gray-900/50 text-yellow-200" : "hover:bg-gray-900/30";

    return (
        <Link
            className={`px-5 py-4 mx-2 rounded-xl font-md text-center text-md ` + appendClass}
            href={ref}
        >
            {title}
        </Link>
    );
}
