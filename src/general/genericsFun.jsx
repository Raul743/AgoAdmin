/* eslint-disable valid-typeof */
// import { isArray } from "util";
import React from "react";
// import graphQL from "../services/graphQl";

export const _Ob_generator = (obj) => {
  return Object.keys(obj).map((f) => {
    if (typeof obj[f] === "object") {
      if (Array.isArray(obj[f])) {
        let tmp = [];
        obj[f].forEach((kk) => {
          tmp.push(kk.value);
        });
        obj[f] = tmp;
      } else {
        obj[f] = obj[f].value;
      }
    }
    return obj[f];
  });
};

export const Round_Values = (num, dec) => {
  if (typeof num !== "number" || typeof dec !== "number") return false;

  var num_sign = num >= 0 ? 1 : -1;

  return (
    Math.round(num * Math.pow(10, dec) + num_sign * 0.0001) / Math.pow(10, dec)
  )
    .toFixed(dec)
    .replace(".", ",");
};
/**
 *
 * @param {any} x
 */
export const NumberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const loadingEffect = ({
  e,
  type,
  OriginalText,
  loadingText,
  render,
}) => {
  const target = e;
  if (type === "success" || type === "false") {
    target.classList.remove("loading");
    target.removeAttribute("disabled");
    target.textContent = OriginalText;
    if (!isEmpty(render)) {
      if (render === "refresh") render = "";
      setTimeout(() => {
        window.location = render;
      }, 2000);
    }
  } else if (type === "load") {
    target.classList.add("loading");
    target.textContent = loadingText;
    target.setAttribute("disabled", true);
  }

  return true;
};

export const notify = (type, { msm, title }, _this) => {
  let options = {
    place: "tc",
    message: (
      <div className="alert-text">
        <span className="alert-title" data-notify="title">
          {" "}
          {title}
        </span>
        <span data-notify="message">{msm}</span>
      </div>
    ),
    type: type,
    icon: "ni ni-bell-55",
    autoDismiss: 7,
  };
  _this.refs.notificationAlert.notificationAlert(options);
};

export const IssCodeGenerator = () => {
  var _code = "";
  var type = "abcdefghijklmnopqsrtuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < 10; i++) {
    var pos = Math.floor(Math.random() * type.length);
    _code += type.charAt(pos);
  }
  return _code;
};

export const IS_TYPEOF = {
  object: (input) =>
    !Object.getOwnPropertySymbols(input).length &&
    !Object.getOwnPropertyNames(input).length,
  array: (input) => typeof input === "array",
  string: (input) => typeof input === "string",
};

export const isEmpty = (input) => {
  if (typeof input === "array") return input.length === 0;

  if (typeof input === "number") return false;

  return !input || Object.keys(input).length === 0;
};

// export const isEqualToZero = input => input === 0;
export const isEqualToZero = (input) => false;

export const LOADING_SCREEN = () => {
  return (
    <>
      <div className="overlay is-open overlay01"></div>
      <div
        className="row"
        style={{ position: "absolute", top: "43%", left: "50%" }}
      >
        <div className="col-sm-2 test col-xs-4 text-center">
          <div className="dots-loader" style={{ zIndex: "3" }}>
            {" "}
          </div>
        </div>
      </div>
    </>
  );
};

export const getDataWith = ({ data, value, label }) => {
  return data == null
    ? []
    : data.map((item) => {
        let data = { value: null, label: null };
        data.value = item[value];
        data.label = item[label];
        return data;
      });
};

export const issDateFormatter = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

export const numberFormatter = (value) => {
  return Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "AOA",
  }).format(value);
};

export const numberTransform = (value) => {
  value = Round_Values(value * 1, 2).toString();
  for (let i = 0; i < value.length; i++) value = value.replace(".", "");
  value = value.replace(",", ".");
  return value * 1;
};

export const debounceEvent = (fn, wait = 100, time) => (...args) => {
  clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));
};

export const strLimitChars = (string, limit) => {
  if (string.length <= limit) {
    return string;
  }

  if (string.charAt(limit) == " ") {
    return string.substring(0, limit - 1) + "...";
  } else {
    return string.substring(0, limit) + "...";
  }
};

export const copyToClipboard = (id) => {
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      navigator.clipboard.writeText(id).then(
        () => {
          return true;
        },
        () => {
          return false;
        }
      );
    }
  });
};

export const isNameWithoutSpace = (string) => {
  let pattern = /([a-zA-Z0-9])+/g;

  return pattern.test(string);
};

export const generateArrayForSelectComponent = (array, label = "") => {
  let component = [];

  array.forEach((item) => {
    if (label === "") label = "name";
    component.push({ value: item.id, label: item[label] });
  });

  return component;
};
