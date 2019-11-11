import { css } from 'styled-components';

const buttonStyles = css`
  width: 65px;
  height: 30px;
  border-radius: 2px;
  border: solid 0.5px #0077ff;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 28px;
  letter-spacing: normal;
  color: #0077ff;
  cursor: pointer;
  position: relative;
  display: inline-block;
  text-align: center;

  &:active {
    background-color: #0077ff;
    color: #fff;
  }

  // &:after {
  //   display: block;
  //   height: 26px;
  //   width: 26px;
  //   background-color: #fecf33;
  //   position: absolute;
  //   top: -13px;
  //   right: -13px;
  //   border-radius: 50%;
  //   content: attr(data-count);
  //   border: 2px solid #fff;
  //   box-shadow: 0 1px 1px 0 #554d5699;
  //   padding: 3px;
  //   line-height: 16px;
  //   font-size: 12px;
  //   font-family: Roboto, Helvetica, sans-serif;
  //   color: #fff;
  // }

  &.sent {
    background-color: #0077ff;
    color: #fff;
  }


`;

export default buttonStyles;
