/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SKILL_NAME: 'Sports Facts',
            GET_FACT_MESSAGE: 
                [
                 'Here\'s your fact: ',
                 'What about this: ',
                 'Did you know this?: '
                ],
            HELP_MESSAGE: 'You can say tell me a sports fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The Sports Facts skill can\'t help you with that.  It can help you discover facts about sports if you say tell me a sports fact. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            STOP_MESSAGE: 'Goodbye!',
            FACTS:
                [
                'Olympic cyclist John Howard is considered the fastest in history. In 1985 he reached 245 kilometers per hour on a bicycle designed especially for him. ',
                'Iranian President Mahmoud Ahmadinejad accused Paul the Octopus of spreading superstition and Western propaganda.',
                'In 1955, during the Le Mans race, the greatest sporting tragedy occurred: one of the competitors lost control and collided with an audience, killing 83 people and injuring 100 more. ',
                'Until now, the only sport that has been practiced outside of planet Earth has been golf. This thanks to the fact that in 1971 the American astronaut Alan Shepard played it during his moonwalk. ',
                'During Wimbledon in 2010 the longest tennis match in history was held. When American John Isner and Frenchman Nicholas Mahut met, they played for 11 hours, 6 minutes and 23 seconds, with a final score in favor of Isner. ',
                ],
        }
    },
    es: {
        translation: {
            SKILL_NAME: 'Curiosidades Deportivas',
            GET_FACT_MESSAGE: 
                [
                 'Aquí está tu curiosidad: ',
                 'Sabías esto?!  ',
                 'Qué tal esto?: ',
                ],
            HELP_MESSAGE: 'Puedes decir dime una curiosidad deportiva o puedes decir salir... Cómo te puedo ayudar?',
            HELP_REPROMPT: 'Como te puedo ayudar?',
            FALLBACK_MESSAGE: 'La skill Curiosidades Deportivas no te puede ayudar con eso.  Te puede ayudar a descubrir curiosidades sobre deportess si dices dime una curiosidad deportiva. Como te puedo ayudar?',
            FALLBACK_REPROMPT: 'Como te puedo ayudar?',
            ERROR_MESSAGE: 'Lo sentimos, se ha producido un error.',
            STOP_MESSAGE: 'Adiós!',
            FACTS:
                [
                'El ciclista olímpico John Howard es considerado el más veloz de la historia. En 1985 alcanzó 245 kilómetros por hora en una bicicleta diseñada especialmente para él. ',
                'El presidente de Irán, Mahmoud Ahmadinejad acusó al pulpo Paul de propagar la superstición y la propaganda occidental. ',
                'En 1955, durante la carrera de Le Mans, ocurrió la mayor tragedia deportiva: uno de los competidores perdió el control y chocó contra una platea, ocasionando la muerte de 83 personas e hiriendo a 100 más. ',
                'Hasta ahora, el único deporte que se ha practicado fuera del planeta Tierra ha sido el golf. Esto gracias a que en 1971 el astronauta estadounidense Alan Shepard lo jugó durante su caminata lunar. ',
                'Durante Wimbledon del 2010 se llevó a cabo el partido de tenis más largo de la historia. Cuando el estadounidense John Isner y el francés Nicholas Mahut se enfrentaron, jugaron por 11 horas, 6 minutos y 23 segundos, con un marcador final a favor de Isner. ',
                ],
        }
    }
}