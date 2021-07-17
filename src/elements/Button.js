import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { color, text, _onClick, is_float, children, margin, width, padding, backgroundColor } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    backgroundColor:backgroundColor,
    color:color,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  position: false,
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
  padding: "12px 0px",
  backgroundColor:'pink',
  color: 'white',
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  /* background-color: #42b72a; */
  /* background-color: rgb(102,163,51); */
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  font-weight: bold;
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  /* background-color: #212121; */
  background-color: lightpink;
  color: ${(props) => props.color};
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default Button;
