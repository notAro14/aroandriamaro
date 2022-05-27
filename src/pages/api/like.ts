import type { NextApiHandler } from "next"

import { prisma } from "utils/prisma-client"

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "POST": {
      const userUUID = req.body.uniqueId
      const articleSlug = req.body.slug
      const ip = req.socket.remoteAddress

      const uniqueId = ip ?? userUUID
      try {
        const currentLikeCount = await prisma.like.findUnique({
          where: {
            uniqueId_articleSlug: {
              uniqueId,
              articleSlug,
            },
          },
        })

        if (currentLikeCount && currentLikeCount.count >= 7) {
          return res.json(
            JSON.parse(
              JSON.stringify({
                ...currentLikeCount,
                message: "MAX_LIKE_REACHED",
              })
            )
          )
        }

        const upserted = await prisma.like.upsert({
          where: {
            uniqueId_articleSlug: {
              uniqueId,
              articleSlug,
            },
          },
          update: {
            count: {
              increment: 1,
            },
            updatedAt: new Date(),
          },
          create: {
            uniqueId,
            articleSlug,
          },
        })
        return res.json(JSON.parse(JSON.stringify(upserted)))
      } catch (e) {
        console.error(e)
        return res.status(500).json({
          error: "Failed to handle request",
        })
      }
    }
    case "GET": {
      try {
        const articleSlug = req.query.slug
        if (!articleSlug || typeof articleSlug !== "string")
          throw new Error("Missing article slug")

        const grouped = await prisma.like.groupBy({
          by: ["articleSlug"],
          _sum: {
            count: true,
          },
          where: {
            articleSlug,
          },
        })
        return res.json({
          count: grouped?.length ? grouped[0]._sum.count : 0,
        })
      } catch (e) {
        console.error(e)
        return res.status(500).json({ error: "Some Error Happened" })
      }
    }
    default: {
      return res.status(405).send({
        error: "Method not allowed",
      })
    }
  }
}

export default handler
