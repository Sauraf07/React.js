function Level8({users}){
    return<>
    <h1>Helo {users.name} and your age is {users.age}</h1>
    <p>Status {users.age > 18 ?"Adult ": "not Adult" }</p>
    </>


}
export default Level8;