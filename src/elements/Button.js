import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { color, text, _onClick, is_float, children, margin, width, 
          padding, backgroundColor, height, fontSize} = props;

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
    height:height,
    fontSize:fontSize,
    padding:padding,
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
  margin: 'auto',
  width: '100%',
  padding: "12px 0px",
  backgroundColor:'pink',
  color: 'white',
  height: '50px',
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  /* background-color: #42b72a; */
  /* background-color: rgb(102,163,51); */
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 17px;
  font-weight: bold;
  margin: ${(props) => props.margin};
  border: none;
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
`;

const FloatButton = styled.button`
  width: 50px;
  height: ${(props) => props.height};
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
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
`;

export default Button;