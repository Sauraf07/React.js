function toggle(){
      const [dark,setdark]= useState(false)
  return <>
  <div style={{
    background:dark?"black":"white",
    color:dark?"white":"black",
    height:"100vh"

  }}>
    <button onClick={()=> setdark(!dark)}>
      Toggle theme
    </button>
  </div>
  </>
}
export default toggle