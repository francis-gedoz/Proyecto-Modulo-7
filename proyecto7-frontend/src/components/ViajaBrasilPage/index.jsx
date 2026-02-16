import { useEffect, useRef, useState } from "react";

const regiones = [
    {
        nombre: "Norte",
        titulo: "Sabores del Amazonas y la Región Norte",
        descripcion:
        "La gastronomía del norte de Brasil refleja la riqueza natural y cultural de la región amazónica. Ingredientes como el tucupí, el açaí y el pescado fresco protagonizan platos como el tacacá, un caldo tradicional con un toque de jambu, y el pescado acompañado de farofa de plátano. Los sabores del norte sorprenden por su intensidad y autenticidad, conectando a quienes los prueban con la selva y sus tradiciones milenarias. El tacacá es un caldo único que combina tucupí, jambu y camarones, generando una mezcla de sabores intensos y una sensación ligeramente anestésica en el paladar gracias al jambu. Conocido como la feijoada del norte, el maniçoba se elabora con hojas de mandioca fermentadas y cocidas durante varios días, junto con embutidos y carnes saladas. Ambos platos son reflejo de la identidad cultural y culinaria de la región, ofreciendo una experiencia auténtica y profunda de los sabores amazónicos.",
        imagen:
        "https://blog.viajarfazbem.com/wp-content/uploads/2019/05/s8-2-1024x683.jpg",
    },
    {
        nombre: "Noreste",
        titulo: "Influencia africana y portuguesa",
        descripcion:
        "La cocina del noreste de Brasil es una vibrante fusión de tradiciones africanas, portuguesas e indígenas que refleja la rica historia cultural de la región. Ingredientes como el aceite de dendê, el coco y la mandioca dan vida a platos llenos de color y sabor. Desde el acarajé crujiente hasta la moqueca, un guiso de pescado y mariscos con leche de coco, cada bocado cuenta una historia. La feijoada adquiere un toque especial en el noreste gracias a los ingredientes frescos y el acompañamiento de farofa y naranjas, que realzan su sabor. Herencia de la cultura africana, el acarajé es un bollo frito de frijol fradinho relleno con vatapá, camarones y especias, creando una explosión de texturas y sabores. El caranguejo es un manjar marino preparado en diversas formas, desde sopas hasta ensopados con especias locales. La moqueca, típica de Bahía y Maranhão, es un guiso de pescado o mariscos con leche de coco, aceite de dendê y hierbas frescas, ofreciendo un platillo lleno de aromas y sabores exquisitos. Estos íconos de la gastronomía nordestina reflejan la conexión de la región con el mar y su rica herencia cultural.",
        imagen:
        "https://www.costadosauipe.com.br/images/news/0473/elevador-lacerda-salavdor_1.jpg",
    },
    {
        nombre: "Centro-Oeste",
        titulo: "Sabores del Pantanal y del Cerrado",
        descripcion:
        "La región Centro-Oeste de Brasil, compuesta por los estados de Goiás, Mato Grosso, Mato Grosso do Sul y el Distrito Federal, es un verdadero tesoro gastronómico. Su cocina refleja una mezcla de influencias indígenas, africanas y europeas, utilizando ingredientes locales como pescado de agua dulce, carnes exóticas, yuca y pequi. Además, las tradiciones agrícolas de la región han contribuido a crear platos ricos y sabrosos que conquistan a locales y turistas por igual. Los platos típicos de la región están impregnados de influencias culturales y de las historias de su gente, desde la población indígena hasta los inmigrantes que contribuyeron a dar forma a la identidad local. Ya sea el guiso de pollo de Goiás, el guiso de pescado pintado del Pantanal o el pastel de carne goianés, cada receta tiene su personalidad única y aporta un poco del espíritu del Centro-Oeste.",
        imagen:
        "https://content.skyscnr.com/m/592845dc75ef0b80/original/GettyImages-487786861.jpg?resize=1800px:1800px&quality=100",
    },
    {
        nombre: "Sudeste",
        titulo: "Sabores modernos con influencias internacionales",
        descripcion:
        "La región sudeste de Brasil es el corazón culinario del país, donde la tradición se mezcla con la innovación y las influencias internacionales. São Paulo, un epicentro cultural y gastronómico, deslumbra con su increíble diversidad culinaria. La pizza paulista es un ícono local, famosa por su masa fina, cobertura generosa y combinaciones innovadoras que compiten con las mejores del mundo. Plato tradicional que refleja la esencia de la cocina paulista, el virado a paulista es compuesto por arroz, frijoles, plátano frito, huevo, farofa y carne de cerdo. Río de Janeiro, además de sus paisajes icónicos, deleita con una cocina llena de tradición y sabor. El pão de queijo, originario de Minas Gerais pero amado en todo Brasil, es un bocadillo esponjoso perfecto para acompañar un café. La feijoada carioca, un guiso de frijoles negros con carne de cerdo, servido con arroz, farofa y rodajas de naranja, es el plato estrella de la ciudad. Ambos representan la riqueza gastronómica y cultural que hace de Río un destino inolvidable para los amantes de la buena mesa.",
        imagen:
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Rio_de_Janeiro_just_before_the_sunrise_2.jpg",
    },
    {
        nombre: "Sur",
        titulo: "Sabores europeos con un toque brasileño",
        descripcion:
        "La cocina del sur de Brasil destaca por su influencia europea, combinando tradiciones de Alemania, Italia y Portugal con ingredientes locales. El churrasco, símbolo culinario de Río Grande do Sul, y el barreado, un guiso típico de Paraná, son prueba de esta fusión única. La mezcla de técnicas tradicionales con un toque brasileño convierte al sur en un destino gastronómico incomparable. El churrasco gaúcho es una tradición profundamente arraigada en Rio Grande do Sul. Preparado con cortes selectos de carne asados lentamente sobre brasas, se sirve acompañado de farofa, arroz y chimichurri. Más que un plato, el churrasco es un símbolo de hospitalidad y convivencia. El barreado es un plato emblemático del estado de Paraná, lleno de historia y tradición. Cocido a fuego lento en una olla de barro sellada con masa de harina, este guiso combina carne deshebrada con especias y es servido con arroz, plátano y harina de mandioca. Su preparación, que puede durar hasta 12 horas, permite que los sabores se concentren, creando una experiencia única al paladar.",
        imagen:
        "https://blog.estribohotelestancia.com.br/wp-content/uploads/2022/09/BI26682-1-1536x1025.jpg",
    },
];

const ViajaBrasilPage = () => {
    const inicioRef = useRef(null);
    const primeraSeccionRef = useRef(null);
    const seccionesRef = useRef({});
    const [seccionesVisibles, setSeccionesVisibles] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("data-seccion");
                setSeccionesVisibles((previo) => ({ ...previo, [id]: true }));
            }
            });
        },
        { threshold: 0.2 }
    );

    Object.values(seccionesRef.current).forEach((nodo) => {
        if (nodo) observer.observe(nodo);
    });

    return () => observer.disconnect();
    }, []);

    const irAPrimeraRegion = () => {
        primeraSeccionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const irASiguienteSeccion = (indexActual) => {
        const esUltimaRegion = indexActual === regiones.length - 1;

        if (esUltimaRegion) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const idSiguiente = `region-${indexActual + 1}`;
        seccionesRef.current[idSiguiente]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <main className="bg-white text-neutral-900">
        <section ref={inicioRef} className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-3xl text-center space-y-8 -mt-24 md:-mt-32">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-neutral-900">
                Gastronomía en Brasil: Un viaje por los sabores típicos de sus regiones
            </h1>
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
                Brasil es un país lleno de sabores únicos, donde cada región cuenta su historia a través de la gastronomía. ¡Prepárese para un recorrido lleno de aromas, texturas y sabores que deleitarán todos tus sentidos!
            </p>
            <button
                type="button"
                onClick={irAPrimeraRegion}
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
                Comenzar recorrido
            </button>
            </div>
        </section>

        {regiones.map((region, index) => {
            const esPar = index % 2 === 0;
            const idSeccion = `region-${index}`;
            const esPrimera = index === 0;
            const esUltima = index === regiones.length - 1;

            return (
            <section
                key={region.nombre}
                ref={(nodo) => {
                seccionesRef.current[idSeccion] = nodo;
                if (esPrimera) primeraSeccionRef.current = nodo;
                }}
                data-seccion={idSeccion}
                className="min-h-screen border-t border-neutral-200 px-6 py-16 md:py-24 flex items-center"
            >
                <div
                className={`mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center transition-all duration-700 ${
                    seccionesVisibles[idSeccion] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                >
                <div className={esPar ? "md:order-1 md:col-span-5" : "md:order-2 md:col-span-5"}>
                    <img
                    src={region.imagen}
                    alt={`Paisaje gastronómico de la región ${region.nombre} de Brasil`}
                    className="h-[48vh] md:h-[58vh] w-full rounded-2xl shadow-sm object-cover"
                    loading="lazy"
                    />
                </div>

                <div className={esPar ? "md:order-2 md:col-span-7 flex" : "md:order-1 md:col-span-7 flex"}>
                    <div className="w-full max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                        {region.nombre}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight mb-2">
                        {region.titulo}
                    </h2>
                    <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                        {region.descripcion}
                    </p>
                    <div className="mt-4 flex justify-center">
                        <button
                        type="button"
                        onClick={() => irASiguienteSeccion(index)}
                        className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all duration-300"
                        >
                        <span>{esUltima ? "Volver al inicio" : "Seguir leyendo"}</span>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            );
        })}
        </main>
    );
};

export default ViajaBrasilPage;
