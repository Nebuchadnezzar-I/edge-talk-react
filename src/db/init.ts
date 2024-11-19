import { supabase } from './create-client';
import { z } from 'zod';

const NegotiationDataSchema = z.array(
    z.object({
        id: z.string(),
        name: z.string(),
        created_at: z.string(),
    })
);

export type NegotiationData = z.infer<typeof NegotiationDataSchema>;

export async function GetInitData() {
    // TODO: Handle error: let { data, error } = await supabase
    let { data } = await supabase.from('Negotiations').select('*');

    const parsedData = NegotiationDataSchema.safeParse(data);
    console.log(parsedData);

    if (!parsedData.success) {
        throw new Error(parsedData.error.errors.join(', '));
    }

    if (parsedData.data.length === 0) {
        return { firstNegotiation: true };
    }

    return { firstNegotiation: false, data: parsedData.data };
}