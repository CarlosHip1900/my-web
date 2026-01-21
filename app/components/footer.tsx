import Link from "next/link";
import Image from "next/image";

export function Footer() {

    const ctnVars = "p-3 flex items-center text-stone-300 rounded-xl";

    return (
        <footer className="bg-(--web-black-color) px-20 py-10 rounded-3xl content-center">
            <div className="grid grid-cols-5 flex flex-no-wrap rounded-xl p-5 mb-5 bg-(--web-black-second-color)">
                <div className="col-start-1 col-end-3 w-full">
                    <h4 className="text-2xl mb-3">Está precisando de um desenvoledor para um</h4>
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-orange-500 to-red-500 text-6xl font-bold">
                        Projeto ou Ideia
                    </h4>
                    <div className="grid grid-cols-2 w-full gap-5">
                        
                        <div className={ctnVars}>
                            <Image
                                src={"/icons/device-mobile-message.svg"}
                                className="invert"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <p className="pl-2">+55 13 996616841</p>
                        </div>
                           <div className={ctnVars}>
                            <Image
                                src={"/icons/mail-forward.svg"}
                                className="invert"
                                alt=""
                                width={32}
                                height={32}
                            />
                            <p className="pl-2">carloshipolito.contato@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-start-4 col-end-6 text-left w-full">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero quidem aperiam ad nostrum iste, aut neque, aliquam non odit voluptatum, delectus optio sequi tempora omnis ipsa esse id repellendus!</p>
                </div>
            </div>
            <div className="grid grid-cols-2 flex flex-no-wrap">
                <div>
                    <h4>Carlos Eduardo</h4>
                </div>
                <div className="grid grid-cols-6 justify-items-end">
                    <div className="col-start-1 col-end-6"></div>
                    <div className="flex space-x-4">
                        {FooterSocialGitHub()}
                        {FooterSocialLinkedin()}
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-100/40 rounded-md border my-5">

            </div>
            <div className="grid grid-cols-6 flex">
                <div className="col-span-3 w-full text-stone">
                    <p className="p-0 m-0">© 2026 Carlos Eduardo - Todos os direitos reservados | Obrigado a Rayan Hipolito</p>
                </div>
            </div>
        </footer>
    )
}

function FooterSocialGitHub() {
    return (
        <Link href={"github"}>
            <div className="bg-(--web-black-second-color) w-fit rounded-md border border-gray-100/10 p-3">
                {
                    <Image
                        src={"/icons/brand-github.svg"}
                        className="invert"
                        height={32}
                        width={32}
                        alt="GitHub icon"
                    />
                }
            </div>
        </Link>
    );
}

function FooterSocialLinkedin() {
    return (
        <Link href={"linkedin"}>
            <div className="bg-(--web-black-second-color) w-fit rounded-md border border-gray-100/10 p-3">
                {
                    <Image
                        src={"/icons/brand-linkedin.svg"}
                        className="invert"
                        height={32}
                        width={32}
                        alt="Linkedin icon"
                    />
                }
            </div>
        </Link>
    );
}