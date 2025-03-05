import { setup } from '../../../db/seed';

export async function GET(request) {
    try {
        setup()
            .catch(err => {
            console.error(err.message)
            })  
        return new Response(JSON.stringify('ok'), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}