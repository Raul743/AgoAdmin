import styled from "styled-components";

export const Input = styled.input`
    border: 1px solid #999;
    padding: 0.5rem;
    width: 100%;
    padding-right: 36px;
`;

export const NoSuggestions = styled.div`
    color: #999;
    padding: 0.5rem;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    white-space: normal;
    text-align: left;
    text-transform: none;
    background: #fff;
    margin-top: 0.5em;
    width: 96%;
    position: absolute;
    border-radius: 0.28571429rem;
    -webkit-box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
        0 2px 10px 0 rgba(34, 36, 38, 0.15);
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
        0 2px 10px 0 rgba(34, 36, 38, 0.15);
    border: 1px solid #d4d4d5;
    z-index: 998;
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
    z-index: 11;
    will-change: transform, opacity;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
`;

export const Suggestions = styled.ul`
    border: 1px solid #999;
    border-top-width: 0;
    list-style: none;
    display: block !important;
    visibility: visible !important;
    max-height: 236px;
    overflow-y: auto;
    padding-left: 0;
    position: absolute;
    top: 100%;
    left: 0;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    white-space: normal;
    text-align: left;
    text-transform: none;
    background: #fff;
    margin-top: 0.5em;
    width: 100%;
    border-radius: 0.28571429rem;
    -webkit-box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
        0 2px 10px 0 rgba(34, 36, 38, 0.15);
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
        0 2px 10px 0 rgba(34, 36, 38, 0.15);
    border: 1px solid #d4d4d5;
    z-index: 998;
    -webkit-transition: opacity 0.1s ease;
    transition: opacity 0.1s ease;
    z-index: 11;
    will-change: transform, opacity;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: ease;
    animation-timing-function: ease;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    /* * {
        scrollbar-width: thin;
        scrollbar-color: blue orange;
    }

    *::-webkit-scrollbar {
        width: 12px;
    }
    *::-webkit-scrollbar-track {
        background: orange;
    }
    *::-webkit-scrollbar-thumb {
        background-color: blue;
        border-radius: 20px;
        border: 3px solid orange;
    }
    */
    li {
        padding: 0.5rem;
        cursor: pointer;
        display: block;
        overflow: hidden;
        font-size: 1em;
        padding: 0.85714286em 1.14285714em;
        color: rgba(0, 0, 0, 0.87);
        line-height: 1.33;

        margin: -0.14285714em 0 0;
        font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 1em;
        color: rgba(0, 0, 0, 0.85);
    }

    li:hover {
        background: #f9fafb;
        /* color: #fae042; */
        cursor: pointer;
    }

    li:not(:last-of-type) {
        border-bottom: 1px solid rgba(34, 36, 38, 0.1);
    }
`;

// .suggestion-active,
// .suggestions li:hover {
//   background-color: #008f68;
//   color: #fae042;
//   cursor: pointer;
//   font-weight: 700;
// }

// .suggestions li:not(:last-of-type) {
//   border-bottom: 1px solid #999;
// }

export const Icon = styled.i`
    position: absolute;
    right: 35px;
    top: 30.8%;
`;
