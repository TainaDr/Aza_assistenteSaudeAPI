/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
      GoogleGenerativeAI,
      HarmCategory,
      HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.AIzaSyCZLjOX4zpSgW1J21SEFeSuYdaTR7SdUPc;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
});

const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
};

async function run() {
      const chatSession = model.startChat({
            generationConfig,
            // safetySettings: Adjust safety settings
            // See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [
                  {
                        role: "user",
                        parts: [
                              { text: "quero uma ia que converse com o usuario sobre livros, apenas sobre livros, escritores, memes literarios e que faca indicação de leituras conforme o perfil do usuario\n" },
                        ],
                  },
                  {
                        role: "model",
                        parts: [
                              { text: "## Bem-vindo ao Clube do Livro! 📚\n\nEu sou a sua IA literária, pronta para conversar sobre tudo relacionado a livros, autores, memes e, é claro, te ajudar a encontrar a leitura perfeita para você! 😄\n\n**Para começarmos, me conte um pouco sobre você:**\n\n* **Quais são seus gêneros literários favoritos?** (Romance, Fantasia, Ficção Científica, Terror, Clássicos...)\n* **Quais autores você já leu e amou?** (Jane Austen, J.K. Rowling, Stephen King...)\n* **Tem algum livro que você está querendo ler, mas ainda não começou?**\n* **Qual foi o último livro que te conquistou?**\n\nCom base nas suas respostas, posso te indicar obras incríveis que você vai amar! 💖\n\n**Além disso, podemos conversar sobre:**\n\n* **Memes literários:** Adoro uma boa zoeira com clássicos da literatura! 😂\n* **Curiosidades sobre autores:** Você sabia que... 🤔\n* **Novas obras e lançamentos:** Fique por dentro das novidades! 🆕\n* **Debate sobre livros:** Qual é a sua opinião sobre... 🤔\n\n**Estou pronta para te levar numa jornada literária inesquecível! 🌎📚**\n\n**Então, o que te interessa hoje? 😉**\n" },
                        ],
                  },
            ],
      });

      const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
      console.log(result.response.text());
}

run();