import { useState } from "react";

const Bgchanger = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className=" w-full h-screen bg-blue-400  "
      style={{ backgroundColor: color }}
    >
      <div className=" main fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        
        <div className="fixed flex flex-wrap justify-center gap-4 bg-white rounded px-2 py-1 ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-2 py-1 rounded text-white "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-2 py-1 rounded text-white "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("greenyellow")}
            className="outline-none px-2 py-1 rounded text-white "
            style={{ backgroundColor: "greenyellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-2 py-1 rounded text-white "
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("crimson")}
            className="outline-none px-2 py-1 rounded text-white "
            style={{ backgroundColor: "crimson" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-2 py-1 rounded text-white "
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-2 py-1 rounded text-white "
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bgchanger;
