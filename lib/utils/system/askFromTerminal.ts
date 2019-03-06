//para hacer pregunta respuesta en terminal like npm init

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const AskQuestion = (rl, question) => {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
};

/*Ejemplo de uso
const q = [
 'Cual es tu primer nombre? ',
 'Cual es tu primer apellido? ',
 'Cual es tu edad? '
];
askFromTerminal(q)
  .then(q => {
    console.log(`Hola ${q[0]}${q[1]}, tu edad es la siguiente: ${q[2]}`);
  })*/
export const askFromTerminal = questions => {
  return new Promise(async resolve => {
    let results = [];
    for (let i = 0; i < questions.length; i++) {
      const result = await AskQuestion(rl, questions[i]);
      results = [...results, result];
    }
    rl.close();
    resolve(results);
  });
};
