import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        
        <div
            style={{ backgroundColor: '#FF9E9E' }}
            className="text-center w-full mt-24 py-8 min-h-[250px] flex flex-col gap-12 items-center justify-center"
        >
            <div className="flex flex-col gap-4 px-4">
                <span className="text-2xl font-semibold text-white text-center">Kitty Shop</span>
                <span className="text-base text-center text-white">2024 | Todos os direitos reservados. Desenvolvido por CodeJr</span>
            </div>
            <Link href="https://codejr.com.br/" target="_blank">
            
                <Image
                    src='/logo/code.png'
                    width={150}
                    height={80}
                    alt="Logo da CodeJR"
                    className="max-w-[14rem] lg:max-w-sm opacity-80 hover:opacity-100 transition-all"
                />
            </Link>
        </div>
    );
}