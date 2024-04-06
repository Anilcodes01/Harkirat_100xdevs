
export function CreateTodo() {
    return (
<div>
        <input style={{
            padding: 5,
            margin: 5,
            borderRadius: 15
        }} type="text" placeholder="title"/><br /><br />
        <input style={{
            padding: 5,
            margin: 5,
            borderRadius: 15
        }} type="text" placeholder="description"/> <br /><br />

        <button style={{
            padding: 5, 
            margin: 5,
            borderRadius: 15
        }}>Add a todo!</button>
    </div>
    )
    
} 
