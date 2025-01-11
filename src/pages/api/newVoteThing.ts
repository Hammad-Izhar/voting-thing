import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();

    const name = data.get("vote-name");
    const top_n = data.get("vote-top-n");

    if (!name || !top_n) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        );
    }

    return new Response(
        JSON.stringify({
            message: "Success! Redirecting...",
        }),
        { status: 200 }
    );
};
