// app/api/upload-avatar/route.ts
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
    const formData = await req.formData();
    const file = formData.get('avatar') as File;

    if (!file) {
        return NextResponse.json({error: 'No file provided'}, {status: 400});
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const imgurResponse = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`,
        },
        body: buffer,
    });

    const data = await imgurResponse.json();

    if (!imgurResponse.ok) {
        return NextResponse.json({error: data?.data?.error || 'Upload failed'}, {status: 500});
    }

    return NextResponse.json({link: data.data.link});
}
