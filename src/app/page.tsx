import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-darkBlue text-xl lg:text-4xl text-center font-bold ">Esta pagina se encuentra en progreso...</h1>
            <p className="my-2 text-md lg:text-lg text-center text-darkBlue">Te invitamos a ver el nuevo ebook disponible</p>
            <Link href="/productos/productividad-y-bienestar-como-gestionar-mejor-tu-tiempo">
                <Button variant="purple" className="w-full">Ver eBook</Button>
            </Link>
        </div>
    )
}
