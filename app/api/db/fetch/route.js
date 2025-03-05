import { fetch } from '../../../db/fetch';

export async function GET(request) {
    try {
        const list = await fetch(); 
        return new Response(JSON.stringify(list), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}