import { Link } from "lucide-react";
import Image from "next/image";
export default function PersonagensCard(){
    return(
        <Link href={'/'} className="group">
            <div className="flex group-hover:shadow-2xl rounded-xl duration-300">
                <div className="overflow-hidden rounded-t-xl text-gray-700">
                    <Image
                        src='/logo/produtos/kittyeamigos.jpg'
                        alt="Placeholder"
                        width={1920}
                        height={1080}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </Link>
    )
}