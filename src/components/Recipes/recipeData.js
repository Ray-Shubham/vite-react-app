import { recipeData } from "../../data/recipeData";

// export const recipeData = [
//   {
//     id: 1,
//     data1: "Biryani",
//     data2: "60 minutes",
//     data3: "Hyderabad",
//   },
//   {
//     id: 1,
//     data1: "Pizza",
//     data2: "30 minutes",
//     data3: "Bangalore",
//   },
// ];

export const recipeDataStructure = () => {
  const recipeData = [
    {
      id: 1,
      name: "Biryani",
      cookTime: "60 minutes",
      origin: "Hyderabad",
    },
    {
      id: 1,
      name: "Pizza",
      cookTime: "30 minutes",
      origin: "Bangalore",
    },
  ];

  const structuredData = recipeData.map((each) => {
    return {
      id: each.id,
      data1: each.name,
      data2: each.cookTime,
      data3: each.origin,
    };
  });

  return structuredData;
};
