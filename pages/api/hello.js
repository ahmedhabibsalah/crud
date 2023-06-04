// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoConnection from "../../database/connection";

export default (req, res) => {
  mongoConnection();
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
