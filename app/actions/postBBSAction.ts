"use server"

import prisma from "@/libs/prismaClient"
import { formSchema } from "../posts/new/page"
import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const postBBS = async ({
  username,
  title,
  content,
}: z.infer<typeof formSchema>) => {
  await prisma.post.create({
    data: {
      username,
      title,
      content,
    }
  })

  revalidatePath("/")
  redirect("/")
}