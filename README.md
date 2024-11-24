Props:

Props is an object, which shares the data or information from parent to children component.
Props are immutable.


Attribute:
1. Additional information to element
Eg: <img src = "" alt = "" width = "" height = "">


2. Additional info to components.
Eg: <CustomImage source = "" alternateText = "">

Using the props we can customise the names
Using the props we can control what needs to display in the user interface
For the props we can give any names
Props stands for "Properties"

Props are of two types
1. General prop
Eg: <CustomImage source = "" alternateText = "">

2. Chiildren prop


Destructuring Example

const data = {
    name : Ray,
    marks : 70,
}

const{name} = data;
console.log(name);

or
const{name:customerName} = data
console.log(customerName);


<CustomButton text="login" bgColor="green">
<CustomButton text="sign-up" bgColor="red">


Props can be any data type or it can be the function

Map method for list rendering

nNote: Whenever we are using map method always use key prop, key props ensures unique for each list item(Faster updates and deletes)
