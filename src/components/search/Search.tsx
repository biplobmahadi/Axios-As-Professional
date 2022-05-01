import { Fragment } from "react";
import { handleSearch } from "./handlers";

export function Search() {
  
  return (
      <Fragment>
          <h4><strong>Search</strong></h4>
          <input type="search" onChange={handleSearch} />
      </Fragment>
  )
}
