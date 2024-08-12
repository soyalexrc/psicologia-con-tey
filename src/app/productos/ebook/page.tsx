import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Page() {
    return (
        <main className="flex justify-center overflow-x-hidden">
            <div className="">
                <div className='flex flex-col items-center mb-20 p-4'>
                    <p className='font-bold text-xl text-darkBlue'>@psicologiacontey</p>
                    <p className="text-xl text-darkBlue text-center">Te ayudo a descubrir y alcanzar tu mejor versión.</p>
                </div>
                <div className="relative mb-32">
                    <Image width={1920} height={1080} alt="Imagen de fondo"
                           className="hidden lg:block -z-10 object-cover absolute -right-32 top-0 w-full h-full"
                           src='/img/ebook/background-banner.webp'/>
                    <div className="grid grid-cols-12 lg:gap-10 px-4 lg:px-16 items-end">
                        <div className="col-span-12 lg:col-span-5">
                            <div className='bg-bgBrownLight py-10 lg:py-20 px-6 lg:px-12 rounded-xl'>
                                <p className="text-md mb-4 font-medium text-darkBlue tracking-[2px] lg:text-center">Bienvenido
                                    a tu viaje de bienestar</p>
                                <h2 className="text-3xl lg:text-[2.5rem] leading-10 lg:leading-[3.25rem] font-bold text-textBrownLighter">
                                    ¡Por una vida más saludable y feliz!
                                </h2>
                                <div className="w-full my-8 h-[1px] bg-textBrownLighter"></div>
                                <p className="leading-7">Hola soy Teymar y en <strong> Psicología con Tey</strong>,
                                    tendras un espacio seguro, donde creemos que
                                    cada persona tiene el potencial para transformar su vida y alcanzar un bienestar
                                    pleno.
                                    Mi objetivo es acompañarte en este viaje, brindándote las herramientas y el apoyo
                                    necesarios para que descubras tu mejor versión.</p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-1 hidden lg:block"></div>
                        <div className="col-span-12 lg:col-span-6 hidden lg:block">
                            <Image width={600} height={600} src="/img/ebook/banner-1.png" className="w-full"
                                   alt="Ebook"/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center px-4 lg:p-0 mb-10">
                    <div className="max-w-[1200px]  w-full">
                        <h2 className="text-3xl lg:text-[2.5rem] leading-10 lg:leading-[3rem] font-bold text-textBrownDark text-center">
                            DESCUBRE TU MEJOR VERSIÓN
                        </h2>
                        <div className="h-[1px] mt-5 mb-2 bg-gray-900 w-full"></div>
                        <p className="text-center text-darkBlue text-lg mb-10">Estas son las creencias que pueden estar
                            restringiendo tu progreso...</p>
                        <div className='flex gap-x-24 gap-y-10 justify-center flex-wrap'>
                            <div className="flex flex-col items-center w-full lg:w-auto border-b-2 pb-4 lg:pb-0 lg:border-none">
                                <Image alt="check icon" src="/img/ebook/check-icon.png" width={40} height={40}
                                       className="mb-6"/>
                                <p className="text-darkBlue">No tengo tiempo</p>
                            </div>
                            <div className="flex flex-col items-center w-full lg:w-auto border-b-2 pb-4 lg:pb-0 lg:border-none">
                                <Image alt="check icon" src="/img/ebook/check-icon.png" width={40} height={40}
                                       className="mb-6"/>
                                <p className="text-darkBlue">No logro organizarme</p>
                            </div>
                            <div className="flex flex-col items-center w-full lg:w-auto border-b-2 pb-4 lg:pb-0 lg:border-none">
                                <Image alt="check icon" src="/img/ebook/check-icon.png" width={40} height={40}
                                       className="mb-6"/>
                                <p className="text-darkBlue">No se como empezar</p>
                            </div>
                            <div className="flex flex-col items-center w-full lg:w-auto border-b-2 pb-4 lg:pb-0 lg:border-none">
                                <Image alt="check icon" src="/img/ebook/check-icon.png" width={40} height={40}
                                       className="mb-6"/>
                                <p className="text-darkBlue">No puedo hacerlo sola/o</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-bgBrown py-16 lg:pt-52 lgpb-16 px-4 relative my-20">
                    <div
                        className="hidden lg:block bg-bgPurple rounded-2xl px-12 py-8 absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <p className="text-white tracking-[2px] text-center font-medium text-md">Si este eres tú,
                            entonces...</p>
                        <h4 className="text-white text-center text-[2.813rem] font-bold whitespace-nowrap">¡Estás en el
                            lugar correcto!</h4>
                    </div>
                    <div
                        className="lg:hidden bg-bgPurple rounded-2xl px-8 py-4 mb-8">
                        <p className="text-white tracking-[2px] text-center font-medium text-md">Si este eres tú,
                            entonces...</p>
                        <h4 className="text-white text-center text-3xl font-bold">¡Estás en el
                            lugar correcto!</h4>
                    </div>
                    <div className="grid grid-cols-12 lg:gap-20 lg:px-24 items-center">
                        <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                            <h3 className="text-textBrownDark mb-4 font-bold text-3xl lg:text-[2.8rem] leading-10 lg:leading-[3.25rem]">Descubre
                                tu mejor versión con las herramientas y el apoyo necesarios</h3>
                            <p className="text-lg text-darkBlue leading-7">Confía en ti mismo y en este proceso. El
                                primer paso hacia tu mejor versión comienza ahora. ¡Vamos a hacerlo juntos!</p>
                        </div>
                        <div className="col-span-12 lg:col-span-6 flex justify-center lg:block order-1 lg:order-2 mb-8 lg:mb-0">
                            <Image src="/img/ebook/banner-2.jpg" alt="banner 2"
                                   className="w-[380px] lg:w-full rounded-2xl"
                                   width={540} height={370}/>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h1 className="text-textBrownDark font-bold text-3xl lg:text-[2.5rem] text-center leading-[3.25rem] mb-4">Tiempo
                        Inteligente</h1>
                    <p className="text-center text-textBrownDark font-bold text-xl">eBook</p>
                </div>

                <div className="grid grid-cols-12 lg:gap-5 px-4 lg:px-24">
                    <div className="col-span-12 lg:col-span-6 flex justify-center mb-8 lg:mb-0 lg:block">
                        <Image alt="Productos digitales" src="/img/ebook/digital-product.png" width={530} height={530}
                               className="w-[350px] lg:w-full"/>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <h4 className="font-bold text-textBrownDark text-2xl lg:text-4xl leading-8 lg:leading-[2.5rem]">Productividad
                            y
                            Bienestar: <br/> Cómo Gestionar Mejor tu Tiempo</h4>
                        <div className="w-full my-4 h-[1px] bg-textBrownLighter"></div>
                        <p className="text-darkBlue text-md lg:text-xl leading-[2rem] mt-4">
                            ¿Te has sentido abrumado por la cantidad de tareas pendientes y la falta de tiempo para
                            disfrutar de lo que realmente importa?. En un mundo donde las demandas parecen no tener fin,
                            gestionar tu tiempo de manera efectiva es la clave para encontrar el equilibrio entre
                            productividad y bienestar personal. <br/>

                            <strong>Productividad y Bienestar: Cómo Gestionar Mejor tu Tiempo </strong>es más que un
                            simple manual de organización; es tu guía para transformar la manera en que vives cada día.
                            Este libro electrónico te proporcionará herramientas prácticas y estrategias probadas que te
                            permitirán maximizar tu productividad sin sacrificar tu salud mental ni tu felicidad. <br/>

                            Descubre cómo establecer prioridades claras, eliminar la procrastinación y crear un horario
                            flexible que se adapte a tus necesidades, todo mientras te aseguras de que haya espacio para
                            el descanso, la creatividad y las relaciones personales. <br/>

                            No dejes que el estrés y la sobrecarga te controlen. Aprende a gestionar tu tiempo de manera
                            consciente y alcanza tus metas con mayor facilidad y satisfacción. ¡Haz de la productividad
                            una aliada de tu bienestar y transforma tu vida desde hoy! <br/>
                        </p>

                        <div className="flex justify-center mt-5">
                            <Button
                                className="bg-bgPurple w-full lg:w-[17.25rem] h-[3.75rem] rounded-2xl text-md">¡COMPRAR!</Button>
                        </div>
                    </div>
                </div>

                <div className="my-10">
                <h2 className="text-3xl lg:text-[2.5rem] leading-10 lg:leading-[3rem] mb-4 font-bold text-textBrownDark text-center">
                        ¡SÍGUEME EN REDES SOCIALES!
                    </h2>
                    <p className="text-center text-darkBlue text-lg mb-10">Sígueme para descubrir contenido e inspiración diaria.</p>
                </div>
            </div>

        </main>
    )
}
