import React from "react";

import Section from "../../Section";

const CompanyFormation = () => {
  return (
    <Section
      title="Company Formation"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, 
    auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, 
    auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
    Donec scelerisque sollicitudin enim eu venenatis."
      className={{
        card: "",
        cardTitle: "justify-self-center self-end",
        cardText: "justify-self-center self-center text-center pt-12 px-40",
        cardButton: {
          className:
            "justify-self-center self-center text-black border-amber-500",
          title: "Learn More",
        },
      }}
    />
  );
};

export default CompanyFormation;
