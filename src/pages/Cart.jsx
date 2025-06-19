import React from "react";
import cartStore from "../store/cartStore";
import { Button } from "@mui/material";

const Cart = () => {
  const { orders } = cartStore();
  return (
    <div>
      <section>
      <div className="grid justify-center">
          <div className="overflow-x-scroll p-2 bg-white shadow-2xl ">
          <table className="min-w-300 m-2 mx-auto">
            <thead>
              <tr>
                <th className="border border-gray-300">Name</th>
                <th className="border border-gray-300">Description</th>
                 <th className="border border-gray-300">Category</th>
                  <th className="border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((data) => (
                  <tr key={data.id}>
                    <td className="border border-gray-300">
                      <figure className="flex justify-start items-center gap-10 p-2">
                        <img src={data.image} alt="" width={40} height={40} />
                        <figcaption>{data.title}</figcaption>
                      </figure>
                    </td>

                    <td className="border border-gray-300 max-w-50 p-2">
                      {data.description}
                    </td>

                    <td className="border border-gray-300">{data.category}</td>
                    <td className="border border-gray-300 text-center">
                      <Button variant="contained" color="warning">
                        Order Now!
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Cart;
