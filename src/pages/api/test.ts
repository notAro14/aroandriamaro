import type { NextApiHandler } from "next"

const handler: NextApiHandler = (req, res) => {
  const { query } = req

  return res.json({
    query,
  })
}

export default handler
