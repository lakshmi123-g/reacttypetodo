import React, { FormEvent, FunctionComponent as FC ,useState,} from "react";
//import TodoI from "../interfaces/Todointerface";

interface props{
  addTodo(todo:string):void;
  
}
const Form: FC<props> = ({addTodo}) => {
    const[todo,setTodo] =useState<string>("");

const handleSubmit= (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(!todo) return window.alert("plzz add todo....");
    addTodo(todo);
    setTodo("");
}


  return (
    <div className="col-md-8 mx-auto my-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group rounded-0  d-flex">
          <input
            type="text"
            placeholder="ADD TODO...."
            className="form-control rounded-0"
            style={{boxShadow: "none"}}
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
          />
          <button type="submit" className="btn btn-primary rounded-0">
            ADD
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default Form;
