import React, { useState } from "react";
import data from "./data";
import "./style.css";
//single selection
//multiple selection

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultidSelection, setEnableMultiSelection] = useState(false);
  // const [multiple, setMultiple] = useState([]);

  const handlesingleselection = (getcurrentId) => {
    setSelected(getcurrentId === selected ? null : getcurrentId);
  };
  // const handleMultiSelection = (getcurrentId) => {
  //   let cpymultiple = [...multiple];
  //   const findIndexOfCurrentId = cpymultiple.indexOf(getcurrentId);
  // };
  return (
    <>
      <div className="wrapper">
        {/* <button onClick={() => setEnableMultiSelection(!enableMultidSelection)}>
          Enable Multi Selection{" "}
        </button> */}

        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataitem) => (
              <div className="item">
                <div className="title">
                  <h3>{dataitem.question}</h3>
                  <span onClick={() => handlesingleselection(dataitem.id)}>
                    +
                  </span>
                </div>
                {selected === dataitem.id ? (
                  <div className="content">{dataitem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
