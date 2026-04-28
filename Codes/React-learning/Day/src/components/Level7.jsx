function Level7(){
    const data = [{id:1 , name:"Samsung", price: 50000},
        {id:2 , name:"apple",price:100000}
    ]
    return<>
    <h1>Welcome to Level 7</h1>
    <ul>
        {data.map((item)=>{
            return<li key={item.id}>
                <strong>{item.name}</strong> - Price is {item.price}
            </li>
        })}


    </ul>
    
    </>
}
export default Level7