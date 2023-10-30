import { Response } from "express";
import axios from "axios";
import cors from "cors";

import { PORT } from "./env.js";
import ExpressConfig from "./Express/express.config.js";

const app = ExpressConfig();

app.use(cors());

app.get(
  "/top-stories",
  async (
    //@ts-ignore
    req,
    res: Response
  ) => {
    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=qP9Na59kYkt3gfUSUCj3AFIUhka9ogUt"
      );

      res.json({ data: response.data.results });
    } catch (error) {
      console.log(error);
    }
  }
);

app.listen(PORT, () => console.log("Server Running on Port " + PORT));
