import Users from "../model/user";

export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if (!users) {
      res.status(404).json({ error: "Data Not Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

export async function postUsers(req, res) {
  try {
    const formData = req.body;
    if (!formData) {
      res.status(404).json({ error: "Form Data Not Provided" });
      Users.create(formData, function (err, data) {
        res.status(200).json(data);
      });
    }
  } catch (error) {
    res.status(405).json({ error });
  }
}
