import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Dropdown, Label } from "semantic-ui-react";
import { removeFromCart } from "../store/actions/cartActions";

export default function CartSummary() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const handleDeleteFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.error(`${product.productName} Sepetten Kaldırıldı !!!`);
  };

  return (
    <div>
      <Dropdown item text="Sepet Özeti">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.id}>
              {cartItem.product.productName}

              <Label>{cartItem.quantity}</Label>

              <Button onClick={() => handleDeleteFromCart(cartItem.product)}>
                Sil
              </Button>
            </Dropdown.Item>
          ))}

          <Dropdown.Divider />

          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
