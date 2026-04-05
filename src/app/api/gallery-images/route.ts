import { readdirSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

const GALLERY_DIR = join(process.cwd(), "public", "vleispaleis-site-images");

export const dynamic = "force-dynamic";

export async function GET() {
    const filenames = readdirSync(GALLERY_DIR)
        .filter((f) => f.endsWith(".jpg"))
        .sort((a, b) => {
            const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
            const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
            return numA - numB;
        });
    const images = filenames.map((name) => ({
        src: `/vleispaleis-site-images/${name}`,
        alt: `De Vleispaleis ${name.replace(/\.jpg$/i, "")}`,
    }));
    return NextResponse.json(images, {
        headers: {
            "Cache-Control": "no-store, no-cache, max-age=0, must-revalidate",
        },
    });
}
