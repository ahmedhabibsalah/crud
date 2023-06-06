import mongoConnection from "../../../database/connection";
import Users from "../../../model/user";

export default async function handler(req, res) {
  mongoConnection().catch(() =>
    res.status(405).json({ error: "Error in The Connection" })
  );
  const { method } = req;
  const { userId } = req.query;
  const formData = req.body;

  switch (method) {
    case "GET":
      const user = await Users.findById(userId);
      res.status(200).json(user);
      break;
    case "PUT":
      const updatedUser = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(updatedUser);
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
