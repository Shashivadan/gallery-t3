import assert from "assert";
import React from "react";
import { deleteImage, getImagesId } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  const image = await getImagesId(photoId);

  return (
    <div className="">
      <form
        action={async () => {
          "use server";
          await deleteImage(photoId);
        }}
      >
        <button className="rounded-sm bg-zinc-700 p-3">delete</button>
      </form>
      <img src={image.url ?? ""} alt={image.name ?? "dfa"} />
    </div>
  );
}
