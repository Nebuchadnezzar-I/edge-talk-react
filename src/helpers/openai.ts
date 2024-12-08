import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: import.meta.env.VITE_AI_KEY,
    dangerouslyAllowBrowser: true,
});

export const GetMessage = async (history: string) => {
    const stream = await client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content:
                    'Act like negotiation consultant, this is previous comminication: ' +
                    history,
            },
        ],
        stream: true,
    });

    let result = '';
    for await (const chunk of stream) {
        if (chunk.choices && chunk.choices[0]?.delta?.content) {
            result += chunk.choices[0].delta.content;
        }
    }
    return result;
};
