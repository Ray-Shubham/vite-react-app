import React from "react";
import TableComponent from "../table/table";
import { recipeDataStructure } from "./recipeData";

const RecipeComponent = () => {
  return <TableComponent rowData={recipeDataStructure()} />;
};

export default RecipeComponent;
