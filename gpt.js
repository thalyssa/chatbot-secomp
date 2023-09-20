import axios from "axios";

//Responsável pela conexão com a OpenAI

export async function chat(chatMessages) {
   const response = await axios.post(
       "https://api.openai.com/v1/chat/completions",
    {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role:"system",
                content: "Fale com gírias",
            },
            ...chatMessages,
        ],

    },
    {
        headers: {
            Authorization: "Bearer " + process.env.OPENAI_API_KEY,
        },
        }
    );

    return response.data;
}             
