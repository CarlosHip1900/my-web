import React from 'react';
import Link from "next/link"
import Image from 'next/image';

export function NavBar() {
    return (
        <div className="bg-(--web-black-color) rounded-xl mx-auto justify-center py-3 grid grid-cols-8 gap-10">
            <div className="col-span-2 p-5">
                <h4>Carlos Eduardo</h4>
            </div>
            <div className="col-span-4">
                <div className="rounded-xl item-center flex flex-row w-auto items-stretch bg-(--web-black-second-color) py-2 content-center">
                    {NavBarButton("/", "Inicio", true)}
                    {NavBarButton("/", "Trabalhos", false)}
                    {NavBarButton("/", "Postagens", false)}
                    {NavBarButton("/", "Postage", false)}
                </div>
            </div>
            <div className="col-span-2 py-2 content-center">
                <div className='grid grid-cols-2 flex flex-no-wrap grid-rows-1'>
                    <div className='px-5 py-4 mx-2 rounded-xl font-md text-center text-md border bg-gray-600/40 border-(--web-yellow-color)'>
                        {
                            <Link
                                href={""}
                            >

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                                <h4>
                                    Curriculum

                                </h4>
                            </Link>
                        }
                    </div>
                    <div className='px-5 py-4 mx-2 rounded-xl font-md text-center text-md bg-(--web-yellow-color) text-black font-bold'>
                        <Link
                            className={"px-5 py-4 mx-2 rounded-xl font-md text-center text-md bg-(--web-yellow-color) text-black font-bold"}
                            href={""}
                        >
                            Contato
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function HeaderInformation() {
    return (
        <div className="grid grid-row-4 gap-5 px-50 py-25">
            <div className='grid grid-cols-4 flex content-center items-stretch'>
                <div className='col-span-2 w-full text-right self-center pr-10'>
                    <h4 className='text-(--web-black-color) font-bold text-8xl'>Carlos Eduardo</h4>
                </div>

                <div className='col-span-2 flex w-full text-left'>
                    {
                        <Image
                            className='rounded-full'
                            src="/profile.png"
                            width={196}
                            height={128}
                            alt=""
                        />
                    }
                    <h4 className='pl-10 text-(--web-black-color) font-bold text-9xl self-center'>-</h4>

                </div>
            </div>
            <div className='pl-30'>
                <h4 className='text-stone-500/70 font-medium text-8xl'>Engenherio de Software &</h4>
            </div>
            <div className='text-right'>
                <h4 className='text-stone-500/70 font-medium text-8xl'>Java | Backend</h4>
            </div>
            <div className='text-right'>
                <p className='text-stone-900 font-md text-xl '>Sistemas distribuidos, Multi linguagens & Administrador de Banco de Dados</p>
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
