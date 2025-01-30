import React from "react";
import { useParams } from "react-router";
import { NavList } from "../../components";
import { ProductList } from "../../containers";
export default function SubCategory() {
  let { mainCat, subCat } = useParams();
  const NavLists = [
    { title: "Home", link: "/" },
    { title: mainCat, link: `/products/${mainCat}` },
    { title: subCat, link: `/products/${mainCat}/${subCat}` },
  ];
  return (
    <div>
      <NavList list={NavLists} />
      <ProductList PageName={subCat} />
    </div>
  );
}
