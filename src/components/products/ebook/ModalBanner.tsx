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

export function ModalBanner() {
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        // const isEbookBannerShown = JSON.parse(sessionStorage.getItem('isEbookBannerShown') ?? 'false');
        // console.log(isEbookBannerShown);
        // if  (JSON.parse(sessionStorage.getItem('isEbookBannerShown') ?? 'false') === false) {
        //     setTimeout(() => {
        //         showModal();
        //     }, 5000);
        // }
    }, []);

    function showModal() {
        // sessionStorage.setItem('isEbookBannerShown', 'true');
        setOpen(true);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
