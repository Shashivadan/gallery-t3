import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { posts } from "./db/schema";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
export async function getImages() {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");
  const images = await db.query.posts.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}

export async function getImagesId(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");
  const image = await db.query.posts.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });
  if (!image?.id) throw new Error("Not image found");
  if (user.userId !== image.userId) throw new Error("Unauthorized");
  return image;
}

export async function deleteImage(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(posts)
    .where(and(eq(posts.id, id), eq(posts.userId, user.userId)));

  redirect("/");
}
