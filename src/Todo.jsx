import { useState } from "react";

function Todo() {
    const [list,setlist]=useState(["working","happning","kill vinay"])
    const [newlist,setnew]=useState("")
    function del(index) {
        const t=list.filter((i,ind)=>{
            return ind!=index })
        setlist(t) 
    }
    function chg(index, value) {
        const updatedList = [...list];
        updatedList[index] = value;
        setlist(updatedList);
      }
    return(
        <>
        <input onChange={(e)=>{setnew(e.target.value)}}/>
        <button onClick={()=>{
        setlist([...list,newlist])
        setnew("")
        }}>Submit</button>
        <div className="tasks">
        <h1>hi</h1>
        {list.map((i, ind) => (
        <>
        {/* <h1>{i}</h1> */}
        <input value={i} onChange={(e)=>{chg(ind,e.target.value)}}/>
        <button onClick={() => del(ind)}>Delete</button>
        </>
))}
            </div>
        </>
    )
}
export default Todo;