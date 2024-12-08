import { supabase } from './create-client';
import { z } from 'zod';

const ChatHistorySchema = z.array(
    z.object({
        id: z.string(),
        negotiation_id: z.string(),
        created_at: z.string(),
        message: z.string(),
        is_send_by_user: z.boolean(),
    })
);

export type ChatHistory = z.infer<typeof ChatHistorySchema>;

export async function GetChatData(id: string) {
    let { data } = await supabase
        .from('ChatHistory')
        .select('*')
        .eq('negotiation_id', id);

    const parsedData = ChatHistorySchema.safeParse(data);
    console.log(data);

    if (!parsedData.success) {
        throw new Error(parsedData.error.errors.join(', '));
    }

    return parsedData.data;
}

export async function AddChatData(
    msg: string,
    is_send_by_user: boolean,
    id: string
): Promise<ChatHistory> {
    let { data } = await supabase
        .from('ChatHistory')
        .insert([
            {
                id: id,
                is_send_by_user: is_send_by_user,
                msg: msg,
            },
        ])
        .eq('id', id);

    const parsedData = ChatHistorySchema.safeParse(data);

    if (!parsedData.success) {
        throw new Error(parsedData.error.errors.join(', '));
    }

    if (parsedData.data.length === 0) {
        return [];
    }

    return parsedData.data;
}
