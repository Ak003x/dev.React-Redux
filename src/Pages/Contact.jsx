import React from "react";
import { useParams } from "react-router-dom";

export default function Contact() {
  const { Contact } = useParams();
  return (
    <div>
      <h1>Contact: {Contact} </h1>
    </div>
  );
}
