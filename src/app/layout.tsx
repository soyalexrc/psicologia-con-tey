import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";

const inter = Montserrat({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        default: "Psicología con Tey",
        template: "%s | Psicología con Tey",
    },
    description: "Hola soy Teymar y en Psicología con Tey, tendras un espacio seguro, donde creemos que cada persona tiene el potencial para transformar su vida y alcanzar un bienestar pleno. Mi objetivo es acompañarte en este viaje, brindándote las herramientas y el apoyo necesarios para que descubras tu mejor versión.",
    keywords: [
        "atención psicológica online",
        "terapia en línea",
        "psicoterapia online",
        "psicología en línea",
        "consulta psicológica virtual",
        "terapia psicológica online",
        "psicólogo online",
        "terapia virtual",
        "psicoterapia en línea",
        "consulta psicológica online",
        "psicología virtual",
        "terapia psicológica en línea",
        "psicólogo en línea",
        "terapia psicológica virtual",
        "psicoterapia virtual"
    ],
    creator: 'Teymar Manzanares, Psicologa',
    publisher: 'Teymar Manzanares, Psicologa',
    applicationName: 'Psicologia con Tey',
    alternates: {
        canonical: 'https://psicologiacontey.com',
    },
    authors: [
        { url: 'https://alexleonardo.dev', name: 'Alex Rodriguez' },
        { url: 'https://soluminatech.com', name: 'Solumina Tech' },
    ],
    openGraph: {
        title: 'Psicologia con Tey',
        description: "Hola soy Teymar y en Psicología con Tey, tendras un espacio seguro, donde creemos que cada persona tiene el potencial para transformar su vida y alcanzar un bienestar pleno. Mi objetivo es acompañarte en este viaje, brindándote las herramientas y el apoyo necesarios para que descubras tu mejor versión.",
        type: 'website',
        url: 'https://psicologiacontey.com',
        countryName: 'Venezuela',
        siteName: 'https://psicologiacontey.com',
        locale: 'es_VE',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
