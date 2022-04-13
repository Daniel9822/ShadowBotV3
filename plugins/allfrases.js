let handler  = async (m, { conn }) => {
    conn.reply(m.chat,`*┌────「 MOTIVACION 」─*\n*“${pickRandom(global.allfrases)}”*\n*└────「 PAIN-BOT 」─*`, m)
  }
  handler.help = ['allfrases']
  handler.tags = ['frases']
  handler.customPrefix = /Buenos dias|Buenos días|buenos días/
  handler.command = new RegExp 
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  module.exports = handler
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  global.allfrases = [
    "El único modo de hacer un gran trabajo es amar lo que haces ",
    "El amor es el que hace que la vida se vuelva una experiencia inolvidable ",
    "Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo",
    "El dinero no es la clave del éxito; la libertad para poder crear lo es",
    "Cuanto más duramente trabajo, más suerte tengo",
    "La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica ",
    "El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu",
    "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan",
    "Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida ",
    "Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro ",
    "La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar",
    "A veces la adversidad es lo que necesitas encarar para ser exitoso",
    "Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso ",
    "Tu actitud, no tu aptitud, determinará tu altitud ",
    "Si no pierdes, no puedes disfrutar de las victorias",
    "Piensa, sueña, cree y atrévete ",
    "Los obstáculos son esas cosas atemorizantes que ves cuando apartas los ojos de tu meta",
    "Asegúrate de que colocas tus pies en el lugar correcto, y luego mantente firme",
    "Las ideas pueden cambiar la vida. A veces a lo único que tienes que abrir la puerta es a una buena idea ",
    "La mejor manera para empezar es callándote y empezar a hacer ",
    "Nadie se desembaraza de un hábito o de un vicio tirándolo de una vez por la ventana; hay que sacarlo por la escalera, peldaño a peldaño ",
    "Si te caes siete veces, levántate ocho ",
    "La perfección no es alcanzable, pero si perseguimos la perfección podemos conseguir la excelencia ",
    "Tienes que esperar cosas de ti mismo antes de poder hacerlas ",
    "La edad no es barrera. Es una limitación que pones en tu mente ",
    "Solo aquellos que se arriesgan a ir demasiado lejos pueden descubrir lo lejos que pueden llegar ",
    "Del sufrimiento emergieron las almas más fuertes, los caracteres sólidos tienen cicatrices",
    "El universo no conspira contra ti, pero tampoco se desvía para alinear tu camino",
    "Si puedes soñarlo, puedes hacerlo",
    "El secreto para salir adelante es comenzar ",
    "La vida es como montar en bicicleta. para mantener el equilibrio tienes que avanzar",
    "El éxito no es definitivo, el fracaso no es fatídico. Lo que cuenta es el valor para continuar",
    "Sé valiente. Toma riesgos. Nada puede sustituir la experiencia",
    "El futuro pertenece a aquellos que creen en la belleza de sus sueños",
    "He aprendido que el valor no es la ausencia de miedo, sino el triunfo sobre él. El hombre valiente no es el que no siente miedo, sino el que lo domina",
    "Aferrarse al rencor es como beber veneno y esperar que otra persona muera",
    "No pares cuando estés cansado. Para cuando hayas terminado",
    "No importa lo que te diga la gente, las palabras y las ideas pueden cambiar el mundo",
    "Si tienes un sueño y crees en él, corres el riesgo de que se convierta en realidad ",
    "Nunca se es demasiado viejo para fijar otra meta o para soñar un nuevo sueño",
    "Lo que no te mata, te hace más fuerte",
    "El hombre/mujer que mueven montañas comienza cargando pequeñas piedras",
    "Buenos amigos, buenos libros y una conciencia tranquila: esa es la vida ideal ",
    "El éxito es la suma de pequeños esfuerzos, que se repiten día tras día",
    "Sal de tu zona de confort. Solo puedes crecer si estás dispuesto a sentirte raro e incómodo cuando intentas algo nuevo ",
    "¿Por qué contentarnos con vivir a rastras cuando sentimos el anhelo de volar?",
    "Entrega siempre más de lo que esperan de ti",
    "Un día despertarás y descubrirás que no tienes más tiempo para hacer lo que soñabas. El momento es ahora. Actúa",
    "Hoy eres un lector y mañana serás un líder ",
    "Los dos guerreros más poderosos son la paciencia y el tiempo",
    "Recordar que vas a morir, es la mejor manera que conozco para no pensar que tienes algo que perder. Ya estás desnudo. No hay ninguna razón para no seguir a tu corazón",
    "Existe al menos un rincón del universo que con toda seguridad puedes mejorar, y eres tú mismo"

  ]