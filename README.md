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

Note: Whenever we are using map method always use key prop, key props ensures unique for each list item(Faster updates and deletes)

1. General prop provides additional information to a component <image source={} alternateText={} >
2. Children prop : It is used to nest the components or jsx or text content.

2.1 -> jsx

<Image>

<h3>Hello</h3>
<h4>Good Morning</h4>

</Image>

2.2 -> Text

<Image>

Good Afternoon

</Image>

2.3 -> Component

<Image>

<heading/>

</Image>

Note: To receive the children prop we must use the children keyword.

Hooks:

1. Conatiner + Fiunctional components
2. Presentation functional components

Hooks were introduced in 2018 version 16.8

Def: Hooks are reusable functions which let us use of state and other react features without writing the class.

Rules of Hooks:

1. Hooks were only use in functions, it doesn't support in class.
2. Hooks must always call at the top of the component and must import only from react.
3. Hooks cannot be used inside the conditions, loops, switch statements.
4. Hooks cannot be used in event triggerings.

Examples:

1. useState
2. useEffect
3. useRef
4. useReducer
5. useContext
6. useCallback
7. useMemo
8. custom Hooks ex: useCounter

useState:

useState is used in functional based components, it allows us to create and manage the data or information of a particular component.

useState is replica of creating of state by constructor and using setState method in class components.

Syntax:
useState will accept initial argument.

useState(10)

initial argument can be any data type or function returning a value.
Note: this argument is executed only for the first time, corresponding renders will ignore the initial argument changes.

useState will return array

const counter = useState(10)

const [count, setCount] = useState(10) ---> Final Syntax

This array contains 2 elements.

1. Current state
2. set function

Here in the useState we will always use "const" keyword which represents immutability of the state directly.

The only way to change the state in useState is by using set function.

useRef:

useRef is used to persists the values between renders without causing re-render for the component.

useRef is used to store the previous state.

useRef is used to access the elements in the dom.

Syntax:

useRef accepts initial argument and returns the object.

object contains current property.

To access the content from the object, we need to use object.current

React Forms:

1. Uncontrolled Components
2. Controlled Components

Uncontrolled components: In Uncontrolled components form state controls is controlled by DOM, React doesn't have any control with the forms.

We cannot do any field validation.

In Uncontrolled components, to access the elements from DOM we use "useRef Hook".

Steps for Uncontrolled Components:

1. Consider form in JSX
2. To control the input elements in DOM, we need to attach ref attribute for the input element and value will be taken form useRef object reference.
3. On Submit to collect the value we will use "object.current.value"
4. Validate the inputs and submit the form (post api call)

Controlled components: In Controlled components form state controls is controlled by React.

We can do field validations here.

Controlled Components: React have control over the input states.

Steps for Controlled Components:

1. Take the form in react component.
2. Take a states for each input in the form or single state for entire form.
3. Provide valuee attribute for the input, assign the state that we created.
4. For the field controls, we have onChange attribute which accepts the function.
5. With in function we can collect input value by event.target.value

useEffect Hook:

useEffect is a react functional hook which is used to cause side effects with in the component.

Side Effects : async actions - dom manipulation, event-listener, data fetching, third party subscriptions.

useEffect is replacement of 3 life cycle methods in class components.

1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount

Syntax : useEffect(()=>{},[])

Note: useEffect behaviour will depends on second argument which is an array.

Case1: If array is empty, component will behave like componentDidMount. It will run only once in a life cycle.

useEffect(()=>{},[])

Case2: If array is filled with values, depending upon value changes useEffect will behave like a componentDidUpdate.

useEffect(()=>{},[value1,value2,....])
If values were changing then useEffect will run.

This array will call it as a dependency array.

Case3 : No Dependency array

useEffect(()=>{})

If no dependency array, component will keep on re-rendering whenever state or prop changes.
It might also leads to infinite rendering of components.

Case4: If useEffect callback functions returns the function, within the returned function we can prevent memory leaks of the comopnent - componentWillUnmount.

useEffect(()=>{
return () => {
// Prevent the memory leaks
}
},[])
