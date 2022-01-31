import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { render } from "react-dom";
import Styles from "./styles/payment";
import { Form, Field } from "react-final-form";
import Card from "../card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import axios from "axios";
axios.defaults.baseURL = "/api";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Payment() {
    const history = useHistory();
  useEffect(() => {
    if (!window.document.getElementById("stripe-script")) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window["Stripe"].setPublishableKey(
          "pk_test_51JSxdmKLp2r7ix2Pi5ILfQgjdc0pYNXFwZ9noGPoeS7jnPqmcL4zmUJhoVdtjAASrIfmWZPFmRxeLNICbstufWrh00UjKUrlKq"
        );
      };
      window.document.body.appendChild(s);
    }
  }, []);

  const onSubmit = async (values) => {
    await sleep(300);
    try {
      window.Stripe.card.createToken(
        {
          number: values.number,
          exp_month: values.expiry.split("/")[0],
          exp_year: values.expiry.split("/")[1],
          cvc: values.cvc,
          name: values.name,
        },
        (status, response) => {
          if (status === 200) {
            axios
              .post("/stripe-payment", {
                token: response,
                email: values.email,
                amount: values.amount,
              })
              .then((res) => window.alert(JSON.stringify(res.data, 0, 2)))
              .catch((err) => console.log(err));
          } else {
            console.log(response.error.message);
          }
        }
      );
    } catch (error) {}
  };

  return (
    <Styles>
      <h1>ENTER CARD DETAILS</h1>
      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          active,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Card
                number={values.number || ""}
                name={values.name || ""}
                expiry={values.expiry || ""}
                cvc={values.cvc || ""}
                focused={active}
              />
              
              <div>
                <Field
                  name="number"
                  component="input"
                  type="text"
                  pattern="[\d| ]{16,22}"
                  placeholder="CARD NUMBER"
                  format={formatCreditCardNumber}
                />
              </div>
              <div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="NAME"
                />
              </div>
              <div>
                <Field
                  name="expiry"
                  component="input"
                  type="text"
                  pattern="\d\d/\d\d"
                  placeholder="VALID THRU"
                  format={formatExpirationDate}
                />
                <Field
                  name="cvc"
                  component="input"
                  type="text"
                  pattern="\d{3,4}"
                  placeholder="CVC"
                  format={formatCVC}
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine} className="butt" onClick={(e) => {
                    e.preventDefault();
                    alert("Payment Successful!");
                    history.push("/user/customer")
                }}>
                  Submit
                </button>
                <button className="butt1"
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              {/*<h2>Values</h2>
              <pre>{JSON.stringify(values, 0, 2)}</pre>*/}
            </form>
          );
        }}
      />
    </Styles>
  );
}

export default Payment