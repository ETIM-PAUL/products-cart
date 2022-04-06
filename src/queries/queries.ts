import {
  gql,
} from "@apollo/client";

export const Categories = gql`
          query Categories {
            categories {
              products {
                id
                name
                inStock
                gallery
                description
                category
                brand
              }
            }
          }
        `;

export function openCategory(category) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}