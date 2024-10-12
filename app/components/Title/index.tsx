import React from "react";

interface TitleProps {
  text: string;
}

const Title = (props: TitleProps) => {
  return <h1 className='title has-text-primary is-capitalized text-center text-4xl'>{props.text}</h1>;
};

export default Title;
