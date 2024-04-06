import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../lib/db";

type ResponseData = {
  meetup?: Object;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const client = await connectToDatabase();
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
      client.close();

      res.status(201).json({ message: "Meetup was Added to the DB" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  res.status(200).json({ message: "Hello from Next.js!" });
}
