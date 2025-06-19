import React, { useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useQuery } from "@tanstack/react-query";
import productsQuery from "../api/productsQuery";
import { Button, Skeleton } from "@mui/material";

import cartStore from "../store/cartStore";

const Home = () => {
  //declare variable to get the query function form tanstack
  const { data, isPending, error } = useQuery(productsQuery());
  const [disabled, setDisabled] = useState(false);

  const addToCart = cartStore((state) => state.addToCart);
  const { orders } = cartStore();

  const handleAddToCart = (items) => {
    addToCart(items);
  };

  return (
    <div className="grid gap-10 shadow-md">
      <h1></h1>
      <section>
        {/* Items content */}
        <div className="flex flex-wrap gap-10 justify-center">
          {isPending ? (
            <h1>Loading ...</h1>
          ) : (
            data.map((el) => (
              <div
                className="grid justify-start content-start w-70 h-107 overflow-hidden shadow-lg p-2 cursor-pointer"
                key={el.id}
              >
                <figure className="h-50">
                  <img
                    src={el.image}
                    alt=""
                    className="h-40 mx-auto object-contain "
                  />

                  <figcaption className="grid justify-start items-center content-center">
                    <span className="font-bold ">{el.category}</span>
                  </figcaption>
                </figure>

                {/* pricing */}
                <div className="flex justify-between content-center  h-10 items-center">
                  <span className="text-gray-500">
                    <LocalOfferIcon
                      className="text-orange-500"
                      fontSize="small"
                    />
                    ${el.price}
                  </span>

                  <span
                    className={
                      el.rating.count >= 300
                        ? "bg-green-300  w-15 text-center rounded-2xl"
                        : el.rating.count <= 300 && el.rating.count >= 200
                        ? "bg-yellow-200 w-15 text-center rounded-2xl"
                        : el.rating.count <= 200
                        ? "bg-red-300 w-15 text-center rounded-2xl"
                        : "bg-red"
                    }
                  >
                    x{el.rating.count}
                  </span>
                </div>
                {/* end of pricing */}

                {/* description */}
                <div className="w-full h-33 overflow-hidden  p-2">
                  <p className="text-sm text-wrap ">{el.description}</p>
                </div>
                {/* end of description */}

                {/* add to cart action button */}
                <Button
                  color="warning"
                  size="medium"
                  variant="contained"
                  className="flex gap-5 justify-center items-center"
                  onClick={() => handleAddToCart(el)}
                  disabled={orders.some((data) => data.id === el.id)}
                >
                  <AddShoppingCartIcon fontSize="small" />
                  {orders.some((data) => data.id === el.id) ? (
                    <span>Checked out!</span>
                  ) : (
                    <span>Add to cart</span>
                  )}
                </Button>
                {/* end of add to cart action button */}
              </div>
            ))
          )}
        </div>
        {/* end of items content */}
      </section>

      <section></section>
    </div>
  );
};

export default Home;
