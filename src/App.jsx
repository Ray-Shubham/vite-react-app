import CustomButton from "./components/button.jsx";
import MainHeading, { SecondaryHeading } from "./components/heading.jsx";
import CustomImage from "./components/image.jsx";
import CustomList from "./components/list.jsx";
import { recipeData } from "./data/recipeData.js";


const App = () => {

  const imageListing = [
    {
      name:"bag1",
      src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      height:"100",
      width:"100",

    },
    {
      name:"bag2",
      src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      height:"100",
      width:"100",

    },
    {
      name:"bag3",
      src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      height:"100",
      width:"100",

    }
  ]
  return (
    <>

    {
      recipeData.map(eachRecipe => {
        return(
          <div key={eachRecipe.id}>
            <MainHeading heading={eachRecipe.name} />
            <CustomImage source={eachRecipe.image} height={200} width={200} />
            <SecondaryHeading heading={"Ingredients Required"} />
            <CustomList list={eachRecipe.ingredients} />
            <SecondaryHeading heading={"Instructions to Prepare"} />
            <CustomList list={eachRecipe.instructions} />
            <CustomButton text={"Start Preparation"} />
          </div>
        )
      })
    }



    {/* {
      imageListing.map(eachImage => {
        return <CustomImage source={eachImage.src} width={eachImage.width} height={eachImage.height} alt={eachImage.name}></CustomImage>
      })
    } */}

    {/* <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alternateText="bag" width={100} height={100} />

    <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alternateText="bag" width={150} height={150} /> */}

    {/* <CustomButton text="Login" onPress={()=>{}} bgColor="green"></CustomButton>
    <CustomButton text="Signup" onPress={()=>{}} bgColor="yellow"></CustomButton>
    <CustomButton text="Order" onPress={()=>{}} bgColor="red"></CustomButton>
    <CustomButton></CustomButton>


    <MainHeading heading="List of Fruits" />
    <CustomList list={["Apple", "Banana"]}/>
    <MainHeading heading="List of Cricketers"/>
    <CustomList list={["Virat", "Dhoni", "Rohit"]}/>
    <MainHeading heading="List of Vegetables"/>
    <CustomList list={["Tomato", "Capsicum", "Cabbage"]}/> */}









    </>
  )
}

export default App;