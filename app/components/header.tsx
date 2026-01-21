import React from 'react';
import Link from "next/link"
import Image from 'next/image';

export function NavBar() {
    return (
        <div className="bg-(--web-black-color) rounded-xl mx-auto justify-center p-3 grid grid-cols-8 gap-10">
            <div className="col-span-2 p-5">
                <h4>Carlos Eduardo</h4>
            </div>
            <div className="col-span-4">
                <div className="p-2 space-x-4 rounded-xl item-center flex flex-row w-auto items-stretch bg-(--web-black-second-color) content-center">
                    {NavBarButton("home", "/", "Inicio", true)}
                    {NavBarButton("briefcase", "/", "Trabalhos", false)}
                    {NavBarButton("bubble-text", "/", "Postagens", false)}
                </div>
            </div>
            <div className="col-span-2 content-center">
                <div className='grid grid-cols-2 flex flex-no-wrap grid-rows-1 gap-5'>
                    <div className="p-4 rounded-xl bg-gray-600/40 border border-(--web-yellow-color) flex items-center justify-center">
                        <Link
                            href=""
                            className="flex items-center justify-center gap-2 text-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="icon icon-tabler icon-tabler-download"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                <path d="M7 11l5 5l5 -5" />
                                <path d="M12 4l0 12" />
                            </svg>

                            <h4 className="text-md font-md">Curriculum</h4>
                        </Link>
                    </div>


                    <div className='p-4 rounded-xl font-md text-center text-md bg-(--web-yellow-color) text-black font-bold'>
                        <Link
                            href={""}
                        >
                            <h4 className="text-md font-md">Contato</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function HeaderInformation() {
    return (
        <div className="grid gap-10 px-5 py-12 md:px-12 lg:px-10">

            <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-6">

                <div className="lg:col-span-3 text-center lg:text-right lg:pr-10">
                    <h4 className="text-(--web-black-color) font-black text-3xl sm:text-5xl md:text-6xl xl:text-8xl">
                        Carlos Eduardo
                    </h4>
                </div>

                <div className="lg:col-span-2 flex justify-center lg:justify-start items-center gap-6">
                    <Image
                        className="rounded-full"
                        src="/avatar.png"
                        width={196}
                        height={196}
                        alt="Avatar"
                    />
                </div>
            </div>

            <div className="text-center lg:text-left lg:pl-40">
                <h4 className="text-stone-500/70 font-medium text-3xl sm:text-4xl md:text-5xl xl:text-8xl">
                    Engenheiro de Software &
                </h4>
            </div>

            <div className="text-center lg:text-right">
                <h4 className="text-stone-500/70 font-medium text-3xl sm:text-4xl md:text-5xl xl:text-8xl">
                    Java | Backend
                </h4>
            </div>

            <div className="text-center lg:text-right px-4">
                <p className="text-stone-900 font-md text-base sm:text-lg xl:text-xl">
                    Sistemas distribuídos, Multi linguagens & Administrador de Banco de Dados
                </p>
            </div>
        </div>

    );
}

function NavBarButton(icon: string, ref: string, title: string, selected: boolean): React.JSX.Element {

    var appendClass = selected ? "bg-gray-900/50 text-yellow-200" : "hover:bg-gray-900/30";

    return (
        <Link
            className={`px-5 py-3 flex rounded-xl font-md text-center text-md ` + appendClass}
            href={ref}
        >
            {
                <Image
                    src={`icons/${icon}.svg`}
                    className="invert mr-3"
                    height={24}
                    width={24}
                    alt="GitHub icon"
                />
            }
            {title}
        </Link>
    );
}
