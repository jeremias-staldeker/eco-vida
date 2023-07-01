const users = [
  {
    "id": "1",
    "name": "Administrador",
    "phone": "123456789",
    "email": "admin@example.com",
    "password": "admin123",
    "creationDate": "2023-06-30T12:00:00Z",
    "role": {
      "id": 1,
      "name": "admin"
    }
  },
  {
    "id": "2",
    "name": "Pablo Fernandez",
    "phone": "987654321",
    "email": "user@example.com",
    "password": "user123",
    "creationDate": "2023-06-30T12:00:00Z",
    "role": {
      "id": 2,
      "name": "usuario"
    }
  }
];

const news = [
  {
    "id": 1,
    "title": "Importante avance en la tecnología de energía solar",
    "description": "Científicos logran desarrollar una nueva tecnología solar que aumenta la eficiencia y reduce los costos de producción.",
    "content": "Investigadores de la Fundación EcoVida han logrado un avance significativo en la tecnología de energía solar. Han desarrollado un nuevo tipo de panel solar que utiliza materiales innovadores y procesos de fabricación eficientes, lo que aumenta la eficiencia de conversión y reduce los costos de producción. Esta tecnología promete ser una solución sostenible y accesible para la generación de energía limpia. La Fundación EcoVida planea implementar esta nueva tecnología en sus proyectos y promover su adopción en la comunidad.",
    "publicationDate": "2023-06-30T12:00:00Z",
    "author": "Juan Schwindt",
    "image": "assets/news/noticia1.jpg"
  },
  {
    "id": 2,
    "title": "Descubrimiento de nueva especie marina en peligro de extinción",
    "description": "Científicos identifican una nueva especie de coral que se encuentra en riesgo debido al cambio climático y la contaminación.",
    "content": "Un equipo de biólogos marinos de la Fundación EcoVida ha descubierto una nueva especie de coral en aguas cercanas a la costa. Lamentablemente, esta especie se encuentra en peligro de extinción debido al cambio climático y la contaminación del agua. Los científicos están trabajando en la creación de estrategias de conservación para proteger esta especie única y su hábitat. La Fundación EcoVida busca concientizar sobre la importancia de preservar los ecosistemas marinos y tomar medidas para mitigar los efectos del cambio climático en la vida marina.",
    "publicationDate": "2023-06-29T12:00:00Z",
    "author": "Jeremías Staldeker",
    "image": "assets/news/noticia2.jpg"
  },
  {
    "id": 3,
    "title": "Investigadores encuentran solución ecológica para la eliminación de residuos plásticos",
    "description": "Un equipo de científicos ha desarrollado un método innovador y sostenible para reducir y eliminar los residuos plásticos.",
    "content": "Un equipo de investigadores financiado por la Fundación EcoVida ha logrado un avance significativo en la búsqueda de soluciones para la eliminación de residuos plásticos. Han desarrollado un método innovador que utiliza enzimas naturales para descomponer el plástico y convertirlo en materiales biodegradables. Este descubrimiento promete ser una alternativa sostenible y efectiva a los métodos de eliminación de plásticos tradicionales. La Fundación EcoVida está trabajando en la implementación de este método en proyectos de reciclaje y educación ambiental.",
    "publicationDate": "2023-06-28T12:00:00Z",
    "author": "Juan Schwindt",
    "image": "assets/news/noticia3.jpg"
  },
  {
    "id": 4,
    "title": "Nuevas regulaciones para la protección de bosques nativos",
    "description": "Gobierno implementa medidas más estrictas para la conservación de los bosques nativos y la protección de la biodiversidad.",
    "content": "El gobierno ha anunciado nuevas regulaciones destinadas a fortalecer la protección de los bosques nativos y la biodiversidad. Estas medidas incluyen la creación de áreas protegidas adicionales, la implementación de políticas de reforestación y la prohibición de la tala indiscriminada. La Fundación EcoVida celebra esta iniciativa y se compromete a trabajar en colaboración con el gobierno y otras organizaciones para garantizar el cumplimiento y la efectividad de estas regulaciones en beneficio del medio ambiente y las futuras generaciones.",
    "publicationDate": "2023-06-27T12:00:00Z",
    "author": "María Gutiérrez",
    "image": "assets/news/noticia4.jpg"
  },
  {
    "id": 5,
    "title": "Proyecto de educación ambiental llega a comunidades rurales",
    "description": "La Fundación EcoVida implementa un programa de educación ambiental en comunidades rurales para promover prácticas sostenibles.",
    "content": "La Fundación EcoVida ha lanzado un proyecto de educación ambiental dirigido a comunidades rurales. A través de talleres interactivos y actividades prácticas, el programa busca concienciar a las personas sobre la importancia de la conservación del medio ambiente y promover prácticas sostenibles en sus actividades diarias. El proyecto incluye capacitación en agricultura orgánica, gestión de residuos y conservación del agua. La Fundación EcoVida está comprometida en brindar acceso a la educación ambiental a todas las comunidades, sin importar su ubicación geográfica.",
    "publicationDate": "2023-06-26T12:00:00Z",
    "author": "Luisa Fernández",
    "image": "assets/news/noticia5.jpg"
  },
  {
    "id": 6,
    "title": "Estudio demuestra los beneficios de los huertos urbanos",
    "description": "Investigación revela que los huertos urbanos contribuyen a la seguridad alimentaria y mejoran la calidad de vida en las ciudades.",
    "content": "Un estudio realizado por expertos en agricultura urbana de la Fundación EcoVida ha demostrado los numerosos beneficios de los huertos urbanos. Estos espacios verdes en las ciudades no solo proporcionan alimentos frescos y saludables, sino que también mejoran la calidad del aire, reducen el estrés, fomentan la interacción social y fortalecen la resiliencia de las comunidades. Basados en estos resultados, la Fundación EcoVida promoverá la creación de más huertos urbanos y brindará apoyo a iniciativas comunitarias en la implementación y mantenimiento de estos espacios.",
    "publicationDate": "2023-06-25T12:00:00Z",
    "author": "Ana Pérez",
    "image": "assets/news/noticia6.jpg"
  },
  {
    "id": 7,
    "title": "Campaña de reforestación logra plantar 10,000 árboles nativos",
    "description": "La Fundación EcoVida finaliza con éxito una campaña de reforestación masiva en áreas deforestadas.",
    "content": "La reciente campaña de reforestación organizada por la Fundación EcoVida ha logrado plantar exitosamente 10,000 árboles nativos en áreas previamente deforestadas. Esta iniciativa tiene como objetivo restaurar los ecosistemas dañados, aumentar la biodiversidad y mitigar el cambio climático. La Fundación EcoVida agradece el apoyo de voluntarios, comunidades locales y patrocinadores en la realización de esta importante labor. La organización continuará promoviendo proyectos de reforestación y la importancia de cuidar nuestros bosques y selvas.",
    "publicationDate": "2023-06-24T12:00:00Z",
    "author": "Carlos Ramírez",
    "image": "assets/news/noticia7.jpg"
  },
  {
    "id": 8,
    "title": "Nueva ley de protección animal prohíbe la caza deportiva",
    "description": "El gobierno aprueba una ley que prohíbe la caza deportiva y refuerza la protección de especies en peligro.",
    "content": "Una nueva ley aprobada por el gobierno tiene como objetivo fortalecer la protección de los animales y la conservación de especies en peligro. Una de las medidas más destacadas de esta ley es la prohibición de la caza deportiva, una práctica que ha sido ampliamente criticada por sus impactos negativos en la fauna silvestre. La Fundación EcoVida celebra esta iniciativa y continuará trabajando en la promoción del bienestar animal y la conservación de la biodiversidad.",
    "publicationDate": "2023-06-23T12:00:00Z",
    "author": "Laura Paredes",
    "image": "assets/news/noticia8.jpg"
  },
  {
    "id": 9,
    "title": "Alianza estratégica para la conservación marina",
    "description": "La Fundación EcoVida se une a otras organizaciones para proteger los ecosistemas marinos y sus especies.",
    "content": "La Fundación EcoVida ha establecido una alianza estratégica con otras organizaciones ambientales con el objetivo de conservar los ecosistemas marinos y proteger la diversidad de especies marinas. Esta colaboración permitirá implementar programas de monitoreo, promover la pesca sostenible y concientizar sobre la importancia de proteger nuestros océanos. Juntos, se trabajarán en la creación de áreas marinas protegidas y la promoción de prácticas responsables en el uso de los recursos marinos.",
    "publicationDate": "2023-06-22T12:00:00Z",
    "author": "Roberto Martínez",
    "image": "assets/news/noticia9.jpg"
  },
  {
    "id": 10,
    "title": "Estudiantes participan en programa de reciclaje en escuelas",
    "description": "La Fundación EcoVida implementa un programa de reciclaje en escuelas para promover la cultura ambiental desde temprana edad.",
    "content": "La Fundación EcoVida ha lanzado un programa de reciclaje en escuelas dirigido a estudiantes de primaria y secundaria. A través de actividades educativas y la instalación de puntos de reciclaje, se busca fomentar la conciencia ambiental y la práctica del reciclaje desde temprana edad. Los estudiantes aprenderán sobre la importancia de reducir, reutilizar y reciclar los materiales, y se convertirán en agentes de cambio en sus comunidades. La Fundación EcoVida proporcionará capacitación y recursos para el desarrollo y la continuidad de estos programas en las escuelas.",
    "publicationDate": "2023-06-21T12:00:00Z",
    "author": "Ana García",
    "image": "assets/news/noticia10.jpg"
  },
  {
    "id": 11,
    "title": "Investigadores descubren nueva especie de orquídea",
    "description": "Científicos de la Fundación EcoVida encuentran una nueva especie de orquídea en una reserva natural.",
    "content": "Un equipo de científicos de la Fundación EcoVida ha descubierto una nueva especie de orquídea en una reserva natural. Esta especie, denominada Orchidaceae EcoVida, se distingue por su colorido y su fragancia única. Los investigadores están trabajando en la documentación y protección de esta especie, así como en la conservación de su hábitat. El descubrimiento resalta la importancia de preservar los ecosistemas naturales y la diversidad biológica en nuestras áreas protegidas.",
    "publicationDate": "2023-06-20T12:00:00Z",
    "author": "Gabriela Sánchez",
    "image": "assets/news/noticia11.jpg"
  },
  {
    "id": 12,
    "title": "Inauguración de parque ecológico en zona urbana",
    "description": "La Fundación EcoVida inaugura un parque ecológico en una zona urbana para promover la conexión con la naturaleza.",
    "content": "La Fundación EcoVida ha inaugurado un parque ecológico en plena ciudad, con el objetivo de brindar a la comunidad un espacio verde donde puedan disfrutar de la naturaleza y aprender sobre su conservación. El parque cuenta con áreas recreativas, senderos naturales, jardines botánicos y espacios educativos. Además, se llevarán a cabo actividades y talleres relacionados con la biodiversidad y la sostenibilidad. La Fundación EcoVida espera que este parque sea un modelo inspirador para otras iniciativas similares en diferentes ciudades.",
    "publicationDate": "2023-06-19T12:00:00Z",
    "author": "Pedro Rodríguez",
    "image": "assets/news/noticia12.jpg"
  },
  {
    "id": 13,
    "title": "Investigación revela impacto de los plásticos en los ecosistemas acuáticos",
    "description": "Estudio científico evidencia el impacto negativo de los plásticos en los ecosistemas acuáticos y la necesidad de tomar medidas.",
    "content": "Un estudio realizado por científicos de la Fundación EcoVida ha revelado el impacto negativo de los plásticos en los ecosistemas acuáticos. Los microplásticos presentes en los océanos, ríos y lagos representan una amenaza para la vida marina y la salud humana. La investigación destaca la importancia de reducir el uso de plásticos de un solo uso, promover su reciclaje y fomentar prácticas sostenibles en la gestión de residuos. La Fundación EcoVida trabajará en campañas de concientización y colaborará con otras organizaciones para abordar esta problemática global.",
    "publicationDate": "2023-06-18T12:00:00Z",
    "author": "Andrés Méndez",
    "image": "assets/news/noticia13.jpg"
  },
  {
    "id": 14,
    "title": "Programa de conservación de tortugas marinas",
    "description": "La Fundación EcoVida implementa un programa de conservación de tortugas marinas en peligro de extinción.",
    "content": "La Fundación EcoVida ha puesto en marcha un programa de conservación de tortugas marinas en peligro de extinción. Este programa incluye la protección de las áreas de anidación, la investigación sobre sus hábitos y ciclos de vida, y la educación ambiental para las comunidades costeras. Además, se llevarán a cabo actividades de rescate y rehabilitación de tortugas heridas o enfermas. La Fundación EcoVida busca preservar estas especies marinas emblemáticas y concienciar sobre la importancia de proteger los ecosistemas marinos.",
    "publicationDate": "2023-06-17T12:00:00Z",
    "author": "Laura González",
    "image": "assets/news/noticia14.jpg"
  },
  {
    "id": 15,
    "title": "Premio internacional reconoce labor de la Fundación EcoVida",
    "description": "La Fundación EcoVida recibe premio internacional por su destacada contribución a la conservación del medio ambiente.",
    "content": "La Fundación EcoVida ha sido galardonada con el Premio Internacional de Conservación Ambiental por su destacada labor en la protección del medio ambiente y la promoción de la sostenibilidad. Este prestigioso premio reconoce los esfuerzos y logros de la organización en la conservación de ecosistemas, la educación ambiental y la promoción de prácticas sostenibles en diversas comunidades. La Fundación EcoVida agradece este reconocimiento y reafirma su compromiso de continuar trabajando por un futuro más verde y sostenible.",
    "publicationDate": "2023-06-16T12:00:00Z",
    "author": "Carolina Torres",
    "image": "assets/news/noticia15.jpg"
  },
  {
    "id": 16,
    "title": "Lanzamiento de campaña de limpieza de playas",
    "description": "La Fundación EcoVida organiza una campaña de limpieza de playas para concienciar sobre la contaminación marina.",
    "content": "La Fundación EcoVida ha lanzado una campaña de limpieza de playas con el objetivo de concienciar sobre la contaminación marina y promover prácticas responsables. Voluntarios de todas las edades se unen para recolectar los desechos que contaminan las playas y los océanos. Además, se realizan actividades educativas y se informa sobre la importancia de reducir los plásticos de un solo uso y gestionar adecuadamente los residuos. La Fundación EcoVida invita a la comunidad a sumarse a esta iniciativa y a cuidar nuestras costas y mares.",
    "publicationDate": "2023-06-15T12:00:00Z",
    "author": "Martín Guzmán",
    "image": "assets/news/noticia16.jpg"
  },
  {
    "id": 17,
    "title": "Creación de reserva natural en área protegida",
    "description": "La Fundación EcoVida impulsa la creación de una reserva natural en un área protegida para conservar la biodiversidad.",
    "content": "La Fundación EcoVida está trabajando en colaboración con las autoridades locales para la creación de una reserva natural en un área protegida. Esta reserva permitirá conservar la biodiversidad única de la región, proteger especies en peligro y preservar los ecosistemas naturales. Se llevarán a cabo estudios científicos, actividades de monitoreo y programas de educación ambiental para garantizar la conservación a largo plazo. La Fundación EcoVida invita a la comunidad a valorar y proteger nuestro patrimonio natural.",
    "publicationDate": "2023-06-14T12:00:00Z",
    "author": "Sofía Herrera",
    "image": "assets/news/noticia17.jpg"
  },
  {
    "id": 18,
    "title": "Charlas educativas sobre cambio climático",
    "description": "La Fundación EcoVida ofrece charlas educativas sobre el cambio climático en escuelas y comunidades.",
    "content": "La Fundación EcoVida ha implementado un programa de charlas educativas sobre el cambio climático, dirigido a estudiantes de diferentes niveles educativos y comunidades. Estas charlas brindan información sobre los efectos del cambio climático, las causas y las soluciones posibles. Se promueve la participación activa de los estudiantes en la búsqueda de alternativas sostenibles y se fomenta la acción colectiva para enfrentar este desafío global. La Fundación EcoVida busca empoderar a las nuevas generaciones y promover la conciencia ambiental en la sociedad.",
    "publicationDate": "2023-06-13T12:00:00Z",
    "author": "Ricardo Castro",
    "image": "assets/news/noticia18.jpg"
  },
  {
    "id": 19,
    "title": "Construcción de huertos urbanos comunitarios",
    "description": "La Fundación EcoVida impulsa la construcción de huertos urbanos comunitarios para promover la agricultura sostenible.",
    "content": "La Fundación EcoVida está promoviendo la construcción de huertos urbanos comunitarios en diferentes barrios de la ciudad. Estos huertos brindan espacios verdes donde los vecinos pueden cultivar alimentos de manera sostenible, promoviendo la soberanía alimentaria y reduciendo la huella ecológica. Además, se realizan talleres de agricultura orgánica y se fomenta el intercambio de conocimientos entre la comunidad. La Fundación EcoVida busca fortalecer la conexión entre las personas y la naturaleza, así como promover la seguridad alimentaria y la resiliencia urbana.",
    "publicationDate": "2023-06-12T12:00:00Z",
    "author": "María López",
    "image": "assets/news/noticia19.jpg"
  },
  {
    "id": 20,
    "title": "Proyecto de reforestación en áreas degradadas",
    "description": "La Fundación EcoVida inicia un proyecto de reforestación en áreas degradadas para restaurar los ecosistemas.",
    "content": "La Fundación EcoVida ha puesto en marcha un ambicioso proyecto de reforestación en áreas degradadas, con el objetivo de restaurar los ecosistemas y mitigar los efectos del cambio climático. Se plantarán árboles nativos y se llevarán a cabo acciones de recuperación de suelos y protección de fuentes de agua. Además, se involucrará a la comunidad en las labores de reforestación, promoviendo la participación ciudadana y la toma de conciencia sobre la importancia de conservar nuestros bosques. La Fundación EcoVida invita a todos a sumarse a este esfuerzo conjunto por un planeta más verde.",
    "publicationDate": "2023-06-11T12:00:00Z",
    "author": "Fernando Morales",
    "image": "assets/news/noticia20.jpg"
  },
  {
    "id": 21,
    "title": "Inauguración de centro de investigación marina",
    "description": "La Fundación EcoVida inaugura un centro de investigación marina para estudiar y conservar los ecosistemas marinos.",
    "content": "La Fundación EcoVida ha inaugurado un centro de investigación marina, dedicado al estudio y conservación de los ecosistemas marinos. Este centro contará con laboratorios, equipos de última generación y un equipo multidisciplinario de científicos. Se llevarán a cabo investigaciones sobre la biodiversidad marina, los efectos del cambio climático y la salud de los océanos. Además, se promoverá la educación ambiental y se buscará generar conciencia sobre la importancia de proteger nuestros mares. La Fundación EcoVida invita a la comunidad a conocer y apoyar este centro de investigación.",
    "publicationDate": "2023-06-10T12:00:00Z",
    "author": "Pablo Fernández",
    "image": "assets/news/noticia21.jpg"
  },
  {
    "id": 22,
    "title": "Alianza estratégica para la conservación del Amazonas",
    "description": "La Fundación EcoVida se une a una alianza estratégica para la conservación del Amazonas y la protección de su biodiversidad.",
    "content": "La Fundación EcoVida ha establecido una alianza estratégica con diversas organizaciones y gobiernos locales para la conservación del Amazonas y la protección de su biodiversidad. Esta alianza busca fortalecer las acciones de conservación, promover el desarrollo sostenible de la región y combatir la deforestación ilegal. Se implementarán programas de monitoreo, educación ambiental y apoyo a las comunidades locales. La Fundación EcoVida está comprometida con la protección de este invaluable tesoro natural y llama a la acción conjunta para su preservación.",
    "publicationDate": "2023-06-09T12:00:00Z",
    "author": "Luisa Ramírez",
    "image": "assets/news/noticia22.jpg"
  },
  {
    "id": 23,
    "title": "Iniciativa de energías renovables en comunidades rurales",
    "description": "La Fundación EcoVida impulsa una iniciativa de energías renovables en comunidades rurales para promover el acceso a la electricidad limpia.",
    "content": "La Fundación EcoVida está llevando a cabo una iniciativa de energías renovables en comunidades rurales, con el objetivo de promover el acceso a la electricidad limpia y reducir la dependencia de fuentes no renovables. Se están instalando sistemas solares fotovoltaicos y mini turbinas eólicas en hogares y escuelas, brindando energía sostenible y mejorando la calidad de vida de las comunidades. Además, se realizan capacitaciones en el mantenimiento y uso eficiente de estas tecnologías. La Fundación EcoVida busca impulsar la transición hacia un modelo energético más sostenible y equitativo.",
    "publicationDate": "2023-06-08T12:00:00Z",
    "author": "Andrea Sánchez",
    "image": "assets/news/noticia23.jpg"
  },
  {
    "id": 24,
    "title": "Campaña de protección de especies en peligro",
    "description": "La Fundación EcoVida lanza una campaña de protección de especies en peligro de extinción.",
    "content": "La Fundación EcoVida ha lanzado una campaña de protección de especies en peligro de extinción, con el objetivo de concienciar sobre la importancia de conservar la biodiversidad y tomar medidas para su protección. La campaña se enfoca en especies emblemáticas como el jaguar, el oso de anteojos y el cóndor, entre otros. Se busca involucrar a la comunidad en acciones de conservación, promover la creación de áreas protegidas y fomentar prácticas sostenibles en el uso de recursos naturales. La Fundación EcoVida invita a todos a sumarse a esta campaña y ser parte del cambio hacia un futuro más sostenible.",
    "publicationDate": "2023-06-07T12:00:00Z",
    "author": "Gabriela Pérez",
    "image": "assets/news/noticia24.jpg"
  },
  {
    "id": 25,
    "title": "Programa de educación ambiental para jóvenes",
    "description": "La Fundación EcoVida implementa un programa de educación ambiental para jóvenes con el objetivo de formar líderes en sostenibilidad.",
    "content": "La Fundación EcoVida ha puesto en marcha un programa de educación ambiental dirigido a jóvenes, con el propósito de formar líderes en sostenibilidad y promover la participación activa de esta generación en la protección del medio ambiente. El programa incluye talleres, actividades prácticas y proyectos de impacto social. Se abordan temas como el cambio climático, la conservación de la biodiversidad, el consumo responsable y la gestión de residuos. La Fundación EcoVida busca empoderar a los jóvenes y brindarles herramientas para ser agentes de cambio en sus comunidades.",
    "publicationDate": "2023-06-06T12:00:00Z",
    "author": "Carlos Rodríguez",
    "image": "assets/news/noticia25.jpg"
  },
  {
    "id": 26,
    "title": "Investigación científica sobre especies amenazadas",
    "description": "La Fundación EcoVida apoya la investigación científica sobre especies amenazadas y su conservación.",
    "content": "La Fundación EcoVida brinda apoyo a la investigación científica sobre especies amenazadas y su conservación. A través de alianzas con universidades y centros de investigación, se llevan a cabo estudios sobre la ecología, el comportamiento y la distribución de estas especies. Los resultados de estas investigaciones permiten generar conocimiento para implementar medidas efectivas de conservación y promover la toma de decisiones informadas. La Fundación EcoVida valora el papel crucial de la ciencia en la protección de la biodiversidad y el mantenimiento de los ecosistemas.",
    "publicationDate": "2023-06-05T12:00:00Z",
    "author": "Laura González",
    "image": "assets/news/noticia26.jpg"
  },
  {
    "id": 27,
    "title": "Programa de voluntariado ambiental",
    "description": "La Fundación EcoVida lanza un programa de voluntariado ambiental para fomentar la participación ciudadana en acciones de conservación.",
    "content": "La Fundación EcoVida ha lanzado un programa de voluntariado ambiental, con el objetivo de fomentar la participación ciudadana en acciones de conservación y promover el cuidado del medio ambiente. El programa ofrece diferentes actividades voluntarias, como limpieza de playas, reforestación, monitoreo de especies y educación ambiental. Se busca generar conciencia sobre la importancia de proteger nuestros recursos naturales y brindar a los voluntarios la oportunidad de contribuir activamente a la conservación. La Fundación EcoVida invita a todos a unirse como voluntarios y ser agentes de cambio en favor del medio ambiente.",
    "publicationDate": "2023-06-04T12:00:00Z",
    "author": "Ana Torres",
    "image": "assets/news/noticia27.jpg"
  },
  {
    "id": 28,
    "title": "Estrategias de adaptación al cambio climático",
    "description": "La Fundación EcoVida desarrolla estrategias de adaptación al cambio climático en comunidades vulnerables.",
    "content": "La Fundación EcoVida está desarrollando estrategias de adaptación al cambio climático en comunidades vulnerables, con el objetivo de reducir los impactos negativos y aumentar la resiliencia frente a eventos extremos. Se están implementando medidas como sistemas de alerta temprana, manejo sostenible de recursos hídricos, reubicación de viviendas en zonas seguras y capacitación en prácticas agrícolas resilientes. La Fundación EcoVida busca promover la justicia climática y garantizar que todas las comunidades tengan las herramientas necesarias para enfrentar los desafíos del cambio climático.",
    "publicationDate": "2023-06-03T12:00:00Z",
    "author": "David Medina",
    "image": "assets/news/noticia28.jpg"
  },
  {
    "id": 29,
    "title": "Campaña de reducción de plásticos de un solo uso",
    "description": "La Fundación EcoVida impulsa una campaña de reducción de plásticos de un solo uso para mitigar la contaminación.",
    "content": "La Fundación EcoVida ha puesto en marcha una campaña de reducción de plásticos de un solo uso, con el objetivo de mitigar la contaminación y promover prácticas más sostenibles. Se realizan acciones de concientización sobre los impactos del plástico en los ecosistemas, se promueve el uso de alternativas reutilizables y se trabajan en alianzas con empresas y gobiernos locales para implementar políticas de reducción de plásticos. La Fundación EcoVida invita a todos a sumarse a esta campaña y adoptar hábitos más responsables con el medio ambiente.",
    "publicationDate": "2023-06-02T12:00:00Z",
    "author": "María Gómez",
    "image": "assets/news/noticia29.jpg"
  },
  {
    "id": 30,
    "title": "Proyecto de conservación de humedales",
    "description": "La Fundación EcoVida desarrolla un proyecto de conservación de humedales para proteger su biodiversidad y funciones ecológicas.",
    "content": "La Fundación EcoVida está desarrollando un proyecto de conservación de humedales, con el objetivo de proteger su biodiversidad y preservar sus funciones ecológicas. Se están llevando a cabo acciones de restauración de humedales degradados, monitoreo de especies acuáticas y promoción de prácticas sostenibles en el uso de recursos hídricos. Además, se busca generar conciencia sobre la importancia de estos ecosistemas y su papel crucial en la regulación del clima y la protección contra inundaciones. La Fundación EcoVida invita a todos a conocer y apoyar este proyecto de conservación de humedales.",
    "publicationDate": "2023-06-01T12:00:00Z",
    "author": "Javier López",
    "image": "assets/news/noticia30.jpg"
  }
];

const projects = [
  {
    "id": 1,
    "title": "Campaña de reciclaje en escuelas",
    "description": "Promoviendo la conciencia ambiental desde temprana edad.",
    "content": "La campaña de reciclaje en escuelas tiene como objetivo fomentar la conciencia ambiental entre los estudiantes desde temprana edad. A través de charlas educativas, actividades interactivas y la implementación de programas de reciclaje en las escuelas, buscamos enseñar a los niños sobre la importancia de reducir, reutilizar y reciclar. Además, se llevarán a cabo competencias y premiaciones para motivar la participación activa de los estudiantes. Esta iniciativa busca formar ciudadanos responsables y comprometidos con el cuidado del medio ambiente.",
    "startDate": "2023-01-15T09:00:00Z",
    "endDate": "2023-04-30T15:30:00Z",
    "image": "assets/proyectos/proyecto1.jpg"
  },
  {
    "id": 2,
    "title": "Reforestación de áreas naturales",
    "description": "Restaurando los ecosistemas y conservando la biodiversidad.",
    "content": "El proyecto de reforestación de áreas naturales tiene como objetivo restaurar los ecosistemas dañados y conservar la biodiversidad en nuestra región. Mediante la siembra de árboles nativos y la implementación de técnicas de restauración ecológica, trabajaremos en la recuperación de zonas degradadas, como bosques y riberas de ríos. También se realizarán jornadas de limpieza y mantenimiento de áreas naturales para garantizar su preservación a largo plazo. Invitamos a la comunidad a participar en estas actividades y ser parte del cambio hacia un entorno más sostenible.",
    "startDate": "2023-02-01T10:00:00Z",
    "endDate": "2023-06-30T16:00:00Z",
    "image": "assets/proyectos/proyecto2.jpg"
  },
  {
    "id": 3,
    "title": "Programa de educación ambiental",
    "description": "Promoviendo la conciencia ambiental y la sostenibilidad.",
    "content": "El programa de educación ambiental tiene como objetivo promover la conciencia ambiental y la sostenibilidad en nuestra comunidad. A través de charlas, talleres y actividades prácticas, abordaremos temas como el cambio climático, la conservación de recursos naturales y la protección de la fauna y flora local. Además, trabajaremos en alianza con instituciones educativas para integrar la educación ambiental en los planes de estudio y desarrollar materiales didácticos. Nuestro objetivo es formar generaciones comprometidas con el cuidado del medio ambiente.",
    "startDate": "2023-03-15T08:30:00Z",
    "endDate": "2023-07-31T14:00:00Z",
    "image": "assets/proyectos/proyecto3.jpg"
  },
  {
    "id": 4,
    "title": "Creación de huertas urbanas",
    "description": "Fomentando la agricultura urbana y la seguridad alimentaria.",
    "content": "El proyecto de creación de huertas urbanas tiene como objetivo promover la agricultura urbana y fomentar la seguridad alimentaria en la comunidad. Trabajaremos en la implementación de huertos comunitarios en espacios urbanos disponibles, como parques y solares abandonados. Estos huertos proporcionarán alimentos frescos y saludables a los residentes locales, promoverán la conexión con la naturaleza y brindarán oportunidades educativas sobre el cultivo de alimentos. Además, se llevarán a cabo talleres y capacitaciones sobre técnicas de cultivo sostenible y prácticas agrícolas urbanas.",
    "startDate": "2023-10-01T08:00:00Z",
    "endDate": "2024-01-31T16:30:00Z",
    "image": "assets/proyectos/proyecto4.jpg"
  },
  {
    "id": 5,
    "title": "Programa de energías renovables",
    "description": "Impulsando el uso de energías limpias y renovables en la comunidad.",
    "content": "El programa de energías renovables tiene como objetivo impulsar el uso de fuentes de energía limpias y renovables en la comunidad. A través de alianzas con empresas e instituciones, la Fundación EcoVida promoverá la instalación de paneles solares en viviendas, edificios públicos y comercios. Además, se llevarán a cabo campañas de concientización sobre el ahorro de energía y se brindarán recursos educativos sobre las ventajas de las energías renovables. El programa también contempla la implementación de proyectos piloto, como la instalación de parques solares y sistemas de energía eólica en áreas estratégicas.",
    "startDate": "2023-11-15T10:00:00Z",
    "endDate": "2024-06-30T18:00:00Z",
    "image": "assets/proyectos/proyecto5.jpg"
  },
  {
    "id": 6,
    "title": "Protección de especies en peligro de extinción",
    "description": "Preservando la vida silvestre y sus hábitats.",
    "content": "El proyecto de protección de especies en peligro de extinción tiene como objetivo preservar la vida silvestre y sus hábitats naturales. Trabajaremos en colaboración con organizaciones especializadas en conservación para implementar estrategias de protección y monitoreo de especies en riesgo, como el lince ibérico y el oso panda. Además, se llevarán a cabo campañas de sensibilización sobre la importancia de la biodiversidad y se promoverá la adopción de prácticas responsables para minimizar el impacto humano en los ecosistemas frágiles.",
    "startDate": "2023-02-15T09:30:00Z",
    "endDate": "2023-08-31T17:00:00Z",
    "image": "assets/proyectos/proyecto6.jpg"
  },
  {
    "id": 7,
    "title": "Programa de reducción de residuos plásticos",
    "description": "Promoviendo el uso responsable y la gestión adecuada de plásticos.",
    "content": "El programa de reducción de residuos plásticos tiene como objetivo promover el uso responsable y la gestión adecuada de plásticos en nuestra comunidad. A través de campañas de sensibilización, talleres educativos y la implementación de sistemas de reciclaje, buscamos reducir la cantidad de plásticos de un solo uso y fomentar alternativas más sostenibles. Trabajaremos en colaboración con empresas locales para promover el uso de materiales biodegradables y la implementación de políticas de reducción de plásticos en establecimientos comerciales.",
    "startDate": "2023-05-01T08:30:00Z",
    "endDate": "2023-10-31T16:30:00Z",
    "image": "assets/proyectos/proyecto7.jpg"
  },
  {
    "id": 8,
    "title": "Rehabilitación de espacios naturales",
    "description": "Restaurando y conservando nuestros espacios naturales.",
    "content": "El proyecto de rehabilitación de espacios naturales tiene como objetivo restaurar y conservar nuestros espacios naturales para el disfrute de la comunidad. A través de jornadas de limpieza, reforestación y mantenimiento, trabajaremos en la recuperación de parques, playas y reservas naturales. También se llevarán a cabo actividades de concientización y educación ambiental para promover el respeto hacia la naturaleza y la adopción de prácticas sostenibles. Invitamos a todos los ciudadanos a sumarse a estas acciones y contribuir al cuidado de nuestro entorno natural.",
    "startDate": "2023-07-01T09:00:00Z",
    "endDate": "2024-01-31T17:00:00Z",
    "image": "assets/proyectos/proyecto8.jpg"
  },
  {
    "id": 9,
    "title": "Programa de conservación del agua",
    "description": "Promoviendo el uso responsable y la preservación del agua.",
    "content": "El programa de conservación del agua tiene como objetivo promover el uso responsable y la preservación del agua en nuestra comunidad. A través de campañas de sensibilización, talleres educativos y la implementación de tecnologías eficientes, buscamos reducir el consumo de agua potable y preservar nuestros recursos hídricos. Trabajaremos en alianza con instituciones gubernamentales y organizaciones locales para implementar medidas de ahorro de agua en hogares, escuelas y empresas. Juntos, podemos hacer la diferencia en la protección de este recurso vital.",
    "startDate": "2023-03-01T08:00:00Z",
    "endDate": "2023-09-30T15:30:00Z",
    "image": "assets/proyectos/proyecto9.jpg"
  },
  {
    "id": 10,
    "title": "Programa de movilidad sostenible",
    "description": "Fomentando el uso de medios de transporte sostenibles.",
    "content": "El programa de movilidad sostenible tiene como objetivo fomentar el uso de medios de transporte sostenibles en nuestra comunidad. A través de campañas de concientización, la promoción de la bicicleta como medio de transporte y la mejora de las infraestructuras peatonales, buscamos reducir la dependencia de los vehículos particulares y disminuir las emisiones de gases de efecto invernadero. Además, promoveremos la adopción de vehículos eléctricos y la implementación de sistemas de transporte público eficientes y ecológicos.",
    "startDate": "2023-09-01T07:30:00Z",
    "endDate": "2024-06-30T17:30:00Z",
    "image": "assets/proyectos/proyecto10.jpg"
  },
  {
    "id": 11,
    "title": "Programa de educación ambiental en escuelas",
    "description": "Formando a los estudiantes como agentes de cambio ambiental.",
    "content": "El programa de educación ambiental en escuelas tiene como objetivo formar a los estudiantes como agentes de cambio ambiental. A través de actividades educativas, charlas interactivas y la implementación de proyectos escolares sostenibles, buscamos promover la conciencia ambiental y desarrollar habilidades para la sostenibilidad. Trabajaremos en alianza con docentes y directivos para integrar la educación ambiental en el currículo escolar y brindar herramientas para la participación activa de los estudiantes en la protección del medio ambiente.",
    "startDate": "2023-01-15T09:30:00Z",
    "endDate": "2023-07-31T15:00:00Z",
    "image": "assets/proyectos/proyecto11.jpg"
  },
  {
    "id": 12,
    "title": "Creación de áreas verdes urbanas",
    "description": "Mejorando la calidad de vida en la ciudad a través de espacios verdes.",
    "content": "El proyecto de creación de áreas verdes urbanas tiene como objetivo mejorar la calidad de vida en la ciudad a través de la incorporación de espacios verdes. Trabajaremos en la creación y mejora de parques, plazas y jardines públicos, promoviendo la plantación de árboles, la instalación de áreas recreativas y la preservación de la biodiversidad urbana. Además, se llevarán a cabo actividades de educación ambiental y participación ciudadana para fomentar el cuidado y la apropiación de estos espacios por parte de la comunidad.",
    "startDate": "2023-02-15T10:00:00Z",
    "endDate": "2023-09-30T17:30:00Z",
    "image": "assets/proyectos/proyecto12.jpg"
  },
  {
    "id": 13,
    "title": "Protección de humedales",
    "description": "Conservando los ecosistemas acuáticos y su biodiversidad.",
    "content": "El proyecto de protección de humedales tiene como objetivo conservar los ecosistemas acuáticos y su biodiversidad en nuestra región. Trabajaremos en la identificación y monitoreo de humedales, implementando estrategias de conservación y restauración de estos importantes ecosistemas. También se llevarán a cabo campañas de sensibilización sobre la importancia de los humedales para la regulación del agua y la preservación de especies. Invitamos a la comunidad a participar en actividades de voluntariado y cuidado de los humedales.",
    "startDate": "2023-05-01T08:30:00Z",
    "endDate": "2023-11-30T16:00:00Z",
    "image": "assets/proyectos/proyecto13.jpg"
  },
  {
    "id": 14,
    "title": "Programa de eco turismo",
    "description": "Promoviendo el turismo sostenible y el contacto con la naturaleza.",
    "content": "El programa de eco turismo tiene como objetivo promover el turismo sostenible y el contacto con la naturaleza en nuestra región. Trabajaremos en la identificación y promoción de destinos turísticos que fomenten la conservación del entorno natural y la cultura local. Además, se ofrecerán actividades turísticas educativas, como caminatas guiadas, avistamiento de aves y talleres sobre prácticas sostenibles. El programa también contempla la capacitación de los actores turísticos para brindar servicios de calidad y respetuosos con el medio ambiente.",
    "startDate": "2023-08-01T09:00:00Z",
    "endDate": "2024-03-31T17:00:00Z",
    "image": "assets/proyectos/proyecto14.jpg"
  },
  {
    "id": 15,
    "title": "Programa de protección costera",
    "description": "Preservando y restaurando los ecosistemas costeros.",
    "content": "El programa de protección costera tiene como objetivo preservar y restaurar los ecosistemas costeros en nuestra región. Trabajaremos en la recuperación de playas y manglares, implementando medidas de protección contra la erosión y promoviendo la conservación de la biodiversidad marina. Además, se llevarán a cabo campañas de sensibilización sobre la importancia de los ecosistemas costeros y se promoverá la adopción de prácticas sostenibles en actividades turísticas y pesqueras.",
    "startDate": "2023-10-15T08:30:00Z",
    "endDate": "2024-05-31T16:30:00Z",
    "image": "assets/proyectos/proyecto15.jpg"
  },
  {
    "id": 16,
    "title": "Programa de educación ambiental en empresas",
    "description": "Promoviendo prácticas sostenibles y responsables en el sector empresarial.",
    "content": "El programa de educación ambiental en empresas tiene como objetivo promover prácticas sostenibles y responsables en el sector empresarial. A través de capacitaciones, asesorías y la implementación de planes de acción ambiental, buscamos impulsar la reducción de la huella ecológica de las empresas, la gestión adecuada de residuos y el uso eficiente de recursos. Trabajaremos en alianza con cámaras empresariales y organismos públicos para fomentar la adopción de políticas ambientales y el reconocimiento de empresas comprometidas con la sostenibilidad.",
    "startDate": "2023-02-01T09:30:00Z",
    "endDate": "2023-09-30T15:30:00Z",
    "image": "assets/proyectos/proyecto16.jpg"
  },
  {
    "id": 17,
    "title": "Proyecto de energía solar comunitaria",
    "description": "Impulsando la generación de energía renovable a nivel comunitario.",
    "content": "El proyecto de energía solar comunitaria tiene como objetivo impulsar la generación de energía renovable a nivel comunitario. A través de la instalación de paneles solares en espacios públicos y comunidades locales, buscamos promover la autosuficiencia energética y reducir la dependencia de fuentes de energía no renovables. Además, se ofrecerán capacitaciones sobre el uso y mantenimiento de sistemas de energía solar, fomentando la participación activa de la comunidad en la transición hacia un modelo energético más sostenible.",
    "startDate": "2023-04-01T08:00:00Z",
    "endDate": "2023-11-30T16:00:00Z",
    "image": "assets/proyectos/proyecto17.jpg"
  },
  {
    "id": 18,
    "title": "Programa de reforestación urbana",
    "description": "Recuperando áreas verdes y mejorando la calidad del aire en la ciudad.",
    "content": "El programa de reforestación urbana tiene como objetivo recuperar áreas verdes y mejorar la calidad del aire en la ciudad. Trabajaremos en la plantación de árboles en espacios públicos, calles y plazas, promoviendo la participación ciudadana en la conservación del medio ambiente. Además, se realizarán actividades de educación ambiental sobre la importancia de los árboles en la mitigación del cambio climático y la creación de hábitats para la fauna urbana. Juntos, podemos hacer de nuestra ciudad un lugar más verde y saludable.",
    "startDate": "2023-06-15T09:30:00Z",
    "endDate": "2024-03-31T16:30:00Z",
    "image": "assets/proyectos/proyecto18.jpg"
  },
  {
    "id": 19,
    "title": "Programa de conservación de bosques",
    "description": "Preservando nuestros bosques y su diversidad biológica.",
    "content": "El programa de conservación de bosques tiene como objetivo preservar nuestros bosques y su diversidad biológica. Trabajaremos en la protección de áreas forestales, la prevención de incendios y la recuperación de ecosistemas degradados. Además, se llevarán a cabo actividades de investigación y monitoreo de la flora y fauna forestal, promoviendo la participación de voluntarios y la sensibilización sobre la importancia de los bosques como sumideros de carbono y hábitats de especies amenazadas.",
    "startDate": "2023-07-01T10:00:00Z",
    "endDate": "2024-04-30T18:00:00Z",
    "image": "assets/proyectos/proyecto19.jpg"
  },
  {
    "id": 20,
    "title": "Proyecto de agricultura orgánica",
    "description": "Fomentando prácticas agrícolas sostenibles y libres de químicos.",
    "content": "El proyecto de agricultura orgánica tiene como objetivo fomentar prácticas agrícolas sostenibles y libres de químicos. Trabajaremos en la promoción de técnicas de cultivo orgánico, el uso de abonos naturales y la conservación de la biodiversidad agrícola. Además, se brindarán capacitaciones a agricultores locales sobre las ventajas de la agricultura orgánica y se establecerán canales de comercialización para los productos orgánicos. Juntos, podemos contribuir a la protección del medio ambiente y a la producción de alimentos saludables.",
    "startDate": "2023-03-15T09:30:00Z",
    "endDate": "2023-10-31T17:30:00Z",
    "image": "assets/proyectos/proyecto20.jpg"
  },
  {
    "id": 21,
    "title": "Restauración de ecosistemas degradados",
    "description": "Recuperando la salud y la biodiversidad de ecosistemas degradados.",
    "content": "El proyecto de restauración de ecosistemas degradados tiene como objetivo recuperar la salud y la biodiversidad de áreas naturales afectadas por actividades humanas. A través de la reforestación, la reintroducción de especies nativas y la implementación de prácticas de manejo sostenible del suelo, la Fundación EcoVida busca restaurar la funcionalidad de los ecosistemas y promover la recuperación de especies en peligro de extinción. Se realizarán jornadas de voluntariado y se establecerán alianzas con otras organizaciones y comunidades locales.",
    "startDate": "2024-04-01T09:30:00Z",
    "endDate": "2024-12-31T09:30:00Z",
    "image": "assets/proyectos/proyecto21.jpg"
  },
  {
    "id": 22,
    "title": "Programa de agroecología",
    "description": "Promoviendo prácticas agrícolas sostenibles y respetuosas con el medio ambiente.",
    "content": "El programa de agroecología tiene como objetivo promover prácticas agrícolas sostenibles y respetuosas con el medio ambiente. A través de capacitaciones, asesorías técnicas y la creación de huertos agroecológicos demostrativos, la Fundación EcoVida busca fomentar la producción de alimentos saludables, la conservación de la biodiversidad agrícola y la reducción del uso de agroquímicos. También se realizarán actividades de educación alimentaria y se trabajará en la creación de redes de productores agroecológicos.",
    "startDate": "2024-05-01T09:30:00Z",
    "endDate": "2024-12-31T09:30:00Z",
    "image": "assets/proyectos/proyecto22.jpg"
  },
  {
    "id": 23,
    "title": "Investigación de especies endémicas en peligro",
    "description": "Estudiando y protegiendo a las especies endémicas en riesgo de desaparecer.",
    "content": "El proyecto de investigación de especies endémicas en peligro tiene como objetivo estudiar y proteger a las especies únicas de nuestra región que se encuentran en riesgo de desaparecer. A través de monitoreos, análisis genéticos y la implementación de medidas de conservación, la Fundación EcoVida busca garantizar la supervivencia de estas especies y su hábitat. Se trabajará en estrecha colaboración con instituciones científicas y se buscará involucrar a la comunidad en la protección de estas especies emblemáticas.",
    "startDate": "2024-06-01T09:30:00Z",
    "endDate": "2024-12-31T09:30:00Z",
    "image": "assets/proyectos/proyecto23.jpg"
  },
  {
    "id": 24,
    "title": "Programa de monitoreo de calidad del aire",
    "description": "Evaluar y mejorar la calidad del aire en nuestra región.",
    "content": "El programa de monitoreo de calidad del aire tiene como objetivo evaluar y mejorar la calidad del aire en nuestra región. A través de la instalación de estaciones de monitoreo y el análisis de datos, la Fundación EcoVida buscará identificar los contaminantes atmosféricos y sus fuentes, así como proponer medidas de mitigación. Se promoverá la educación ambiental sobre la importancia de respirar un aire limpio y se buscará concientizar sobre los efectos de la contaminación atmosférica en la salud.",
    "startDate": "2024-07-01T09:30:00Z",
    "endDate": "2024-12-31T09:30:00Z",
    "image": "assets/proyectos/proyecto24.jpg"
  },
  {
    "id": 25,
    "title": "Proyecto de conservación de humedales",
    "description": "Preservando y restaurando los humedales para proteger la biodiversidad.",
    "content": "El proyecto de conservación de humedales tiene como objetivo preservar y restaurar los humedales de nuestra región para proteger la biodiversidad y los servicios ecosistémicos que brindan. A través de acciones de limpieza, reforestación de áreas cercanas y la promoción de buenas prácticas agrícolas en zonas aledañas, la Fundación EcoVida busca conservar estos ecosistemas clave y garantizar su funcionalidad. También se trabajará en la educación ambiental sobre la importancia de los humedales y se fomentará la participación ciudadana en su protección.",
    "startDate": "2024-08-01T09:30:00Z",
    "endDate": "2024-12-31T09:30:00Z",
    "image": "assets/proyectos/proyecto25.jpg"
  },
  {
    "id": 26,
    "title": "Programa de educación ambiental en escuelas",
    "description": "Fomentando la conciencia ambiental desde edades tempranas.",
    "content": "El programa de educación ambiental en escuelas tiene como objetivo fomentar la conciencia ambiental desde edades tempranas. A través de actividades lúdicas, charlas educativas y la implementación de huertos escolares, la Fundación EcoVida busca promover el cuidado del medio ambiente, la importancia de la biodiversidad y la adopción de prácticas sostenibles. Se trabajará en alianza con instituciones educativas y se buscará involucrar a docentes, estudiantes y familias en la educación ambiental.",
    "startDate": "2024-09-01T09:30:00Z",
    "endDate": "2024-12-31T09:30:00Z",
    "image": "assets/proyectos/proyecto26.jpg"
  },
  {
    "id": 27,
    "title": "Proyecto de protección de especies migratorias",
    "description": "Contribuyendo a la protección de especies migratorias y sus rutas de migración.",
    "content": "El proyecto de protección de especies migratorias tiene como objetivo contribuir a la protección de las especies migratorias y sus rutas de migración en nuestra región. A través de la identificación de áreas clave y la implementación de medidas de conservación, la Fundación EcoVida buscará garantizar la supervivencia y el bienestar de estas especies durante sus desplazamientos. Se trabajará en colaboración con organizaciones internacionales y se promoverá la sensibilización sobre la importancia de la conservación de las rutas migratorias.",
    "startDate": "2024-10-01T09:30:00Z",
    "endDate": "2024-12-31T09:30:00Z",
    "image": "assets/proyectos/proyecto27.jpg"
  },
  {
    "id": 28,
    "title": "Programa de reciclaje y gestión de residuos",
    "description": "Promoviendo la reducción, reutilización y reciclaje de residuos.",
    "content": "El programa de reciclaje y gestión de residuos tiene como objetivo promover la reducción, reutilización y reciclaje de residuos en nuestra comunidad. A través de campañas de sensibilización, la implementación de puntos de reciclaje y la promoción de buenas prácticas en el manejo de residuos, la Fundación EcoVida busca reducir la cantidad de residuos enviados a vertederos y fomentar una cultura del reciclaje. Se establecerán alianzas con empresas y se buscará involucrar a la ciudadanía en la gestión adecuada de los residuos.",
    "startDate": "2024-11-01T09:30:00Z",
    "endDate": "2024-12-31T09:30:00Z",
    "image": "assets/proyectos/proyecto28.jpg"
  },
  {
    "id": 29,
    "title": "Proyecto de energías renovables comunitarias",
    "description": "Fomentando el uso de energías renovables a nivel comunitario.",
    "content": "El proyecto de energías renovables comunitarias tiene como objetivo fomentar el uso de energías renovables a nivel comunitario. A través de la instalación de sistemas solares y eólicos en espacios públicos y comunidades rurales, la Fundación EcoVida busca promover la generación de energía limpia y la reducción de emisiones de gases de efecto invernadero. Se capacitará a los miembros de las comunidades en el mantenimiento de los sistemas y se trabajará en la sensibilización sobre los beneficios de las energías renovables.",
    "startDate": "2024-12-01T09:30:00Z",
    "endDate": "2024-12-31T09:30:00Z",
    "image": "assets/proyectos/proyecto29.jpg"
  },
  {
    "id": 30,
    "title": "Programa de restauración de ecosistemas marinos",
    "description": "Recuperando la salud de los ecosistemas marinos y protegiendo la vida marina.",
    "content": "El programa de restauración de ecosistemas marinos tiene como objetivo recuperar la salud de los ecosistemas marinos y proteger la vida marina en nuestra región. A través de la implementación de estrategias de restauración, la protección de áreas marinas clave y la promoción de prácticas pesqueras sostenibles, la Fundación EcoVida busca conservar la biodiversidad marina y garantizar la sostenibilidad de los recursos pesqueros. Se realizarán acciones de limpieza de playas y se fomentará la educación ambiental sobre la importancia de los ecosistemas marinos.",
    "startDate": "2024-01-01T09:30:00Z",
    "endDate": "2024-12-31T09:30:00Z",
    "image": "assets/proyectos/proyecto30.jpg"
  }
];

const usersTbody = document.getElementById('users-tbody');
const newsTbody = document.getElementById('news-tbody');
const projectsTbody = document.getElementById('projects-tbody');
const usersSearch = document.getElementById('user-search');
const projectSearch = document.getElementById('project-search');
const newsSearch = document.getElementById('news-search');

const loadContent = (userList = [], projectList = [], newsList = []) => {
  const tbodyU = userList.map((user) => {
    const tr = `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td>${new Date(user.creationDate).toLocaleDateString()}</td>
        <td>${user.role.name}</td>
      </tr>
    `;
    return tr;
  });
  usersTbody.innerHTML = tbodyU.join('');

  const tbodyP = projectList.map((project) => {
    const tr = `
      <tr>
        <td>${project.id}</td>
        <td>${project.title}</td>
        <td>${project.description}</td>
        <td>${new Date(project.startDate).toLocaleDateString()}</td>
        <td>${new Date(project.endDate).toLocaleDateString()}</td>
      </tr>
    `;
    return tr;
  });
  projectsTbody.innerHTML = tbodyP.join('');

  const tbodyN = newsList.map((n) => {
    const tr = `
      <tr>
        <td>${n.id}</td>
        <td>${n.title}</td>
        <td>${n.description}</td>
        <td>${new Date(n.publicationDate).toLocaleDateString()}</td>
        <td>${n.author}</td>
      </tr>
    `;
    return tr;
  });
  newsTbody.innerHTML = tbodyN.join('');
}

loadContent(users, projects, news);

usersSearch.addEventListener('keyup', (e) => {
  const criteria = e.target.value;
  if (criteria.length > 0) {
    const filteredUsers = users.filter((user) =>
      user.id.toString().toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || user.name.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || user.name.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || user.phone.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || user.email.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || user.role.name.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
    );
    loadContent(filteredUsers, projects, news);
  } else {
    loadContent(users, projects, news);
  }
});

projectSearch.addEventListener('keyup', (e) => {
  const criteria = e.target.value;
  if (criteria.length > 0) {
    const filteredProjects = projects.filter((project) =>
      project.id.toString().toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || project.title.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || project.description.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
    );
    loadContent(users, filteredProjects, news);
  } else {
    loadContent(users, projects, news);
  }
});

newsSearch.addEventListener('keyup', (e) => {
  const criteria = e.target.value;
  if (criteria.length > 0) {
    const filteredNews = news.filter((n) =>
      n.id.toString().toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || n.title.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || n.description.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
      || n.author.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())
    );
    loadContent(users, projects, filteredNews);
  } else {
    loadContent(users, projects, news);
  }
});
