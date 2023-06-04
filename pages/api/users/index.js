import mongoConnection from "../../../database/connection";
import Users from "../../../model/user";

export default async function handler(req, res) {
  mongoConnection().catch(() =>
    res.status(405).json({ error: "Error in The Connection" })
  );
  const { method } = req;
  const formData = req.body;
  const { userId } = req.query;

  switch (method) {
    case "GET":
      const users = await Users.find({});
      res.status(200).json(users);
      break;

    case "POST":
      const data = await Users.create(formData);
      return res.status(200).json(data);
      break;

    case "PUT":
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
      break;

    case "DELETE":
      const removed = await Users.findOneAndDelete(userId);
      res.status(200).json({ removed });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} not Allowed`);
      break;
  }
}
