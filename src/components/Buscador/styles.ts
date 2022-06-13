import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  margin-top: 5rem;
  @media (max-width: 375px) {
    padding-left: 6rem;
  }
`
export const Form = styled.form`
  input{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
  }


    input[type="text"]{
      border: 0;
      width: 340px;
      height: 50px;
      outline: none;
      border-radius: 23px 0 0 25px;
      padding: 0 25px;
      @media (max-width: 375px) {
        width: 200px;
      }
    }
    input[type="button"]{
      position: relative;
      border: 0;
      width: 150px;
      height: 50px;
      border-radius: 0 25px 25px 0;
      outline: none;
      cursor: pointer;
      background:  #9ddfdf;
      @media (max-width: 375px) {
        width: 100px;
      }
    }
  
` 