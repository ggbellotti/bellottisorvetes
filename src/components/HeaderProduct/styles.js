import Img from "gatsby-image"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  .navigation-wrapper {
    margin-left: -50px;
    width: 50%;
    position: relative;
  }
  .keen-slider {
    height: 100vh;
    min-width: 600px;
    cursor: grab;
  }
  .prevNext {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 25px;
    right: 25px;
    span {
      background-color: var(--third-color);
      width: 40px;
      height: 40px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all var(--animations-time);
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
      &:first-of-type {
        margin-bottom: 25px;
      }
      &:hover {
        background-color: var(--fourth-color);
        svg {
          fill: white;
        }
      }
      &[disabled] {
        opacity: 0.5;
        cursor: default;
        &:hover {
          background-color: var(--third-color);
          svg {
            fill: black;
          }
        }
      }
    }
    svg {
      width: 15px;
      height: auto;
    }
  }
`
export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
export const InfoProduct = styled.div`
  margin-left: 50px;
  margin-top: 65px;
  p {
    margin-bottom: 45px;
  }
  span {
    font-size: 1.125rem;
  }
`
export const Pack = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  select {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 12px 27px;
    background-color: var(--five-color);
    color: white;
    font-family: "Titillium Web";
    font-size: 1rem;
    border: none;
    margin-top: 10px;
    background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.25 3L7.07156 13.6875L0 3H14.25Z' fill='white'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: 80%;
    background-position-y: center;
    max-width: 150px;
    &:focus {
      border: none;
      outline: none;
    }
    option {
      background-color: #da955d;
    }
  }
`
export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  .react-numeric-input {
    display: flex !important;
    max-width: 110px;
    border: none !important;
    border-radius: 0 !important;
    input {
      padding: 12px 20px !important;
      padding-right: 25px !important;
      background-color: var(--five-color);
      color: white;
      font-family: "Titillium Web";
      font-size: 1rem;
      border: none !important;
      border-radius: 0 !important;
      margin-top: 10px;
      max-width: 115px;
      text-align: center;
      &:focus {
        border: none !important;
        border-radius: 0 !important;
        outline: none;
      }
    }
    b {
      cursor: pointer !important;
      border: none !important;
      border-radius: none !important;
      background: none !important;
      box-shadow: none !important;
      background-image: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.25 3L7.07156 13.6875L0 3H14.25Z' fill='white'/%3E%3C/svg%3E%0A") !important;
      width: 20px !important;
      height: 20px !important;
      background-repeat: no-repeat !important;
      background-position: center;
      background-size: contain !important;
      right: -52px !important;
      left: 0 !important;
      top: 26px !important;
      transform: rotate(-90deg);
      margin: 0 auto;
      i {
        display: none;
      }
      &:last-of-type {
        margin-top: 1px;
        right: 0 !important;
        left: -50px !important;
        transform: rotate(90deg);
      }
    }
  }
`
export const Price = styled.div`
  margin-top: 40px;
  span {
    color: var(--second-color);
    letter-spacing: 3px;
  }
  span:first-of-type {
    font-size: 2.375rem;
  }
  span:last-of-type {
    font-size: 1.0625rem;
    font-weight: 200;
  }
`
