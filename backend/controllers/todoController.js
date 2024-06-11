import todoModel from "../models/todoModel.js";

const postTodo = async (req, res) => {
  try {
    // console.log(req.body)
    const data = await todoModel.create(req.body);
    // const data = new todoModel(req.body);
    // await data.save()

    // console.log(data);
    return res.status(200).send({ data: data, succuss: "200", message: "Data added" });
  } catch (err) {
    console.log("Error", err);
    return res.status(400).send({ data: null, succuss: "400", message: "Data not added" });
  }
};

const getTodo = async (req, res) => {
  try {
    const data = await todoModel.find()
    // console.log(data);
    return res.status(200).send({ data: data, succuss: "200", message: "Data fetched successfully" });
  }catch (err) {
    console.log("Error", err);
    return res.status(400).send({ data: null, succuss: "400", message: "Data not found" });
  }
}


// http://localhost:8000/todo/update/?id=6667dacfbdbf1190113de812 //query in thunderclient
const updateTodo = async (req, res) =>{
  try{
    const {id} = req.query; //destructure id , id got from frontend
    const data = await todoModel.findByIdAndUpdate(id, req.body)
    return res.status(200).send({data:data , success:"200", message:"Data updated successfully"})

  }catch(err){
    console.log("Error", err)
    return res.status(400).send({ data: null, succuss: "400", message: "Data not updated" });
  }
}

const deleteTodo = async(req, res) =>{
  try {
    const {id} = req.query;
    const data = await todoModel.findByIdAndDelete(id)
    return res.status(200).send({data:data , success:"200", message:"Data deleted successfully"})
  }
  catch(err){
    console.log("Error", err)
    return res.status(400).send({ data: null, succuss: "400", message: "Data not deleted" });
  }
}

export { postTodo, getTodo, updateTodo, deleteTodo };