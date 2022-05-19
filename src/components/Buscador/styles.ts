import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 500px;
  transform: translate(-50%, -50%);
`
export const Form = styled.form`
  input{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
  }


    input[type="text"]{
      width: 340px;
      height: 50px;
      outline: none;
      border-radius: 23px 0 0 25px;
      padding: 0 25px;

    }
    input[type="submit"]{
      position: relative;
      width: 150px;
      height: 50px;
      border-radius: 0 25px 25px 0;
      outline: none;
      cursor: pointer;
      background:  #9ddfdf;
      
    }
  
` 