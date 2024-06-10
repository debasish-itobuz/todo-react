import todoModel from "../models/todoModel.js";

const postTodo = async (req, res) => {
  try {
    // const data = await todoModel.create(req.body);
    const data = new todoModel(req.body);
    await data.save()

    console.log(data);
    return res.send({ data: data, succuss: "200", message: "Data added" });
  } catch (err) {
    console.log("Error", err);
  }
};
export { postTodo };
