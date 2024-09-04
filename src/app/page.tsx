import { db } from "~/server/db";

// export const dynamic = "force-static"



export default async function HomePage() {

  const images = await db.query.posts.findMany()
  return (
    <main className="flex min-h-screen p-6">
      <div className="flex flex-wrap gap-4 ">
        {images.map((img) =>
          <>
            <div key={img.id} className="w-48">
              <img src={img.url ?? ""} alt="dsfa" className=" rounded-[6px]" />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
