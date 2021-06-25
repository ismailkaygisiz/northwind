import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initalValues = {
    productName: "",
    unitPrice: 10,
  };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün Adı Zorunludur"),
    unitPrice: Yup.number().required("Ürün Fiyatı Zorunludur"),
  });

  return (
    <Formik
      initialValues={initalValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="ui form">
        <KodlamaIoTextInput name="productName" placeholder="Ürün Adı" />
        <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
        <Button color="green" type="submit">
          Ürün Ekle
        </Button>
      </Form>
    </Formik>
  );
}
