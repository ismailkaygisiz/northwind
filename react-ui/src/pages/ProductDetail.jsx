import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProductByName(name)
      .then((result) => setProduct(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.category?.categoryName}</Card.Meta>
            <Card.Description>{product.quantityPerUnit}</Card.Description>
            <Card.Description>
              Stok Adedi : {product.unitsInStock}
            </Card.Description>
            <Card.Description>
              Birim Fiyatı : {product.unitPrice}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
