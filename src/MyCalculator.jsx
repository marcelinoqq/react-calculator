/* eslint-disable no-eval */
import React, { useState, useEffect } from "react";

export default function MyCalculator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    try {
      const newResult = eval(value);
      setResult(newResult);
    } catch (error) {
      setResult("");
    }
  }, [value]);

  const handleNumber = (event) => {
    setValue(value + event.target.value);
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleClear = () => {
    setValue("");
    setResult("");
  };

  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={value} />
            <input type="text" value={result} />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DE" onClick={handleDelete} />
            <input type="button" value="." onClick={handleNumber} />
            <input type="button" value="/" onClick={handleNumber} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleNumber} />
            <input type="button" value="8" onClick={handleNumber} />
            <input type="button" value="9" onClick={handleNumber} />
            <input type="button" value="*" onClick={handleNumber} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleNumber} />
            <input type="button" value="5" onClick={handleNumber} />
            <input type="button" value="6" onClick={handleNumber} />
            <input type="button" value="+" onClick={handleNumber} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleNumber} />
            <input type="button" value="2" onClick={handleNumber} />
            <input type="button" value="3" onClick={handleNumber} />
            <input type="button" value="-" onClick={handleNumber} />
          </div>
          <div>
            <input
              type="button"
              value="00"
              onClick={handleNumber}
              style={{ width: "123px" }}
            />
            <input
              type="button"
              value="0"
              onClick={handleNumber}
              style={{ width: "123px" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
