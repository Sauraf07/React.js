function Level6(){
    const data = [
        {id:1,name:"Saurav",age:22},
        {id:2,name:"Rahul",age:25},]
    return<>
    <h1>Welcome to Level 6</h1>
    <ul>
        {data.map((item) => (
            <li key={item.id}>
                <strong>{item.name}</strong> - {item.age} years old
            </li>
        ))}
    </ul>
    </>
}
export default Level6;