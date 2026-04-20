
import Footer from "./components/Footer";
import Header from "./components/Header";
import Level10 from "./components/level10";
// import Level6 from "./components/Level6";
// import Level7 from "./components/Level7";
// import Level8 from "./components/Level8";
// import Level9 from "./components/Level9";
// import Level2 from "./components/Level2";
// import Level3 from "./components/Level3";
// import Level4 from "./components/Level4";
// import Level5 from "./components/Level6";
function APP(){
  const data = [{id:1 , name:"Saurav",age:20},
    {id:2,name:"Priyam",age:17}
  ]
  return<>
  {/* <Header/>
  <h1>Daskbnoard </h1>
  {data.map((item)=>(<Level8 key={item.id} users={item}/>))}
  <Footer/> */}

  <Level10/>
  </>
}
export default APP