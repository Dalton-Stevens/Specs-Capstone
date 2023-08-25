import React, { useState, useEffect } from "react";

import withClickOutside from "./withClickOutside";
import classes from "./SelectBar.module.css";

const capitalize = (str, separators) => {
  separators = separators || [" "];
  let regex = new RegExp("(^|[" + separators.join("") + "])(\\w)", "g");
  return str.toLowerCase().replace(regex, function (x) {
    return x.toUpperCase();
  });
};

const SelectBar = React.forwardRef(
  (
    {
      options,
      placeholder,
      onChange,
      selectedKey,
      open,
      setOpen,
      setDisplayedObject,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
      if (selectedKey) {
        setInputValue(options.find((o) => o.id === selectedKey).name);
      }
    }, [selectedKey, options]);

    useEffect(() => {
      if (!open && options.findIndex((o) => o.name === inputValue) === -1) {
        if (!inputValue) {
          onChange("");
        } else {
          if (selectedKey) {
            setInputValue(options.find((o) => o.id === inputValue).name);
          } else {
            setInputValue("");
          }
        }
      }
    }, [inputValue, onChange, open, options, selectedKey]);

    const onInputChange = (evt) => {
      setInputValue(evt.target.value);
    };

    const onItemSelected = (option) => {
      // console.log(option);
      setDisplayedObject(option);
      onChange !== undefined && onChange(option.id);
      onChange !== undefined && setInputValue(option.name);
      setOpen(false);
    };

    const clearDropdown = () => {
      setInputValue("");
      onChange("");
    };

    const onInputClick = () => {
      setOpen((prevValue) => !prevValue);
    };

    const openDropdown = open ? classes.visible : "";

    return (
      <div className={classes.dropdown_container} ref={ref}>
        <div className={classes.input_container} onClick={onInputClick}>
          <input
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onChange={onInputChange}
          />

          <div className={classes.input_arrow_container}>
            <i className={classes.input_arrow} onClick={clearDropdown} />
          </div>

          {selectedKey || inputValue ? (
            <div
              onClick={clearDropdown}
              className={classes.input_clear_container}
            >
              x
            </div>
          ) : null}
        </div>
        <div className={`${classes.dropdown} ${openDropdown}`}>
          {options
            .filter((item) => {
              const searchItem = inputValue.toLowerCase();
              const v = item.name.toLowerCase();

              if (!searchItem) return true;

              return v.startsWith(searchItem);
            })
            .map((opt) => {
              return (
                <div
                  className={classes.option}
                  key={opt.id}
                  onClick={() => onItemSelected(opt)}
                >
                  {capitalize(opt.name, ["-"])}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
);

export default withClickOutside(SelectBar);
