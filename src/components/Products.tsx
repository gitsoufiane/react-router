import { Link, Outlet } from "react-router-dom";
export default function Products() {
  return (
    <div>
      Products
      <input type="text" placeholder="Search product" />
      <nav>
        <Link to={"featured"}>Featured</Link>
        <Link to={"new"}>New</Link>
      </nav>
      <Outlet />
    </div>
  );
}
