'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {useEffect, useState} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export function ModalBanner() {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const isEbookBannerShown: boolean = JSON.parse(sessionStorage.getItem('isEbookBannerShown') ?? 'false');
        if (!isEbookBannerShown) {
            setTimeout(() => {
                showModal();
            }, 30000);
        }
    }, []);

    function showModal() {
        sessionStorage.setItem('isEbookBannerShown', 'true');
        setOpen(true);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="border-4 border-bgPurple">
                <DialogHeader>
                    <DialogTitle className='text-center text-darkBlue mb-4 text-2xl'>¡No te pierdas esta
                        oportunidad!</DialogTitle>
                    <DialogDescription className='text-center text-darkBlue'>
                        <p>Aprovecha este descuento</p>
                        <p className="my-4">Por tiempo limitado ☀️</p>
                        <p className="font-bold">Transforma tu vida con el eBook &quot;Productividad y Bienestar: Como
                            Gestionar Mejor tu Tiempo&quot; + Bonos exclusivos</p>

                        <div className="my-4"/>

                        <p className="font-bold line-through">Antes $ 20.00 </p>
                        <p className="font-bold">Ahora $ 12.97</p>

                        <Link href="https://pay.hotmart.com/Q95102650L?bid=1724622895733"
                              className="w-full flex justify-center my-4" target="_blank">
                            <Button
                                variant="purple"
                                className="w-full flex flex-col items-center lg:w-[17.25rem] h-[3.75rem] rounded-2xl text-md">
                                ¡COMPRAR AHORA!
                                <span className="text-sm font-bold">Obten acceso inmediato</span>
                            </Button>
                        </Link>

                        <p><strong>Advertencia:</strong> Esta oferta es <strong>limitada</strong> y los bonos solo
                            estaran disponibles para los primeros en aprovecharla. <strong>¡No te quedes por
                                fuera!</strong> Aprovecha esta oportunidad para hacer un cambio real en tu vida.</p>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
