import React from "react";

type Props = {
  email: string;
  phone: string;
};
//This is an email template for the company to let us know that a user has signed up for the beta program
export const Beta = (props: Props) => {
  return (
    <div>
      <p>A user has signed up for the Shift Beta Program</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
};
