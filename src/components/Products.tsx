import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
export default function Products() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("filter"));
  return (
    <div>
      Products
      <form onSubmit={() => setSearchParams({ filter: query })}>
        <input
          type="text"
          placeholder="Search product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>submit</button>
      </form>
      <nav>
        <Link to={"featured"}>Featured</Link>
        <Link to={"new"}>New</Link>
      </nav>
      <Outlet />
    </div>
  );
}
