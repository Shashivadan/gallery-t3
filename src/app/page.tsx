import { getImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";
// export const dynamic = "force-static"

export default async function HomePage() {
  const images = await getImages();

  return (
    <main className="flex p-6">
      <div className="flex flex-wrap gap-4">
        {images.map((img) => (
          <>
            <Link href={`/img/${img.id}`}>
              {" "}
              <div
                key={img.id}
                className="flex w-48 flex-col items-center justify-center"
              >
                <Image
                  src={img.url ?? ""}
                  style={{ objectFit: "contain" }}
                  width={100}
                  height={50}
                  alt="dsfa"
                  className="rounded-[6px]"
                />
                <div className="text-center text-sm">{img.name}</div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </main>
  );
}
