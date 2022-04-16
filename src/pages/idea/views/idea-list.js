import React, { useState } from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    // <div className="data-list">
    //   {props.ideas ? props.ideas.map(idea => {
    //     return (
    //       <div key={idea.id} className="section-image-home">
    //         <div className="details">
    //           <Link to={'/ideas/' + idea.id}>{idea.title}</Link>
    //         </div>
    //         <div className="controls">
    //           {/* <button onClick={props.deleteIdea.bind(null, idea.id)} className="delete">Delete</button> */}
    //         </div>
    //       </div>
    //     );
    //   }) : <div/> }
    // </div>
    <div className="mt-5">
      <span className="mb-1 sub-title">Idea List</span>
      <div className=" d-flex flex-row pl-1 border mt-1 box-swapper align-items-center">
        {props.ideas.map((item, index) => (
          <RenderIdeaItem key={String(index)} item={item} />
        ))}
      </div>
    </div>
  );
}

const RenderIdeaItem = ({ item = {} }) => {
  const [show, setShow] = useState("");
  const { id = "", title = "", body = "", created_date: createdDate = "" } = item;
  const maxItemPlotLength = 95;
  
  let textConvert = body;
  if (textConvert.length >= maxItemPlotLength) {
    textConvert = textConvert.substring(0, maxItemPlotLength -5) + "...";
  }
  let fullContentClass = "item-content mb-1";
  let plotContentClass = "item-content mb-1 plot-content";
  if (typeof show == "boolean") {
    fullContentClass = show
      ? "item-content mb-1 slide-out"
      : "item-content mb-1 slide-in";
    plotContentClass = show
      ? "item-content mb-1 plot-content slide-in"
      : "item-content mb-1 plot-content slide-out";
  }
  return (
    <div
      className="col-md-2 col-sm-3 col-4 mx-2 my-4 border d-flex flex-column item-detail-content px-3"
      style={{
        overflow: "hidden"        
      }}
    >
      <div className="d-flex mt-2 pb-1 border-bottom">
        <span className="rate-title text-name-tag" style={{ fontSize: "1em" }}>
          {title}
        </span>
      </div>
      <div className="item-content" style={{ position: "relative" }}>
        <div className={fullContentClass} style={{ position: "absolute", width: '100%' }}>
          <div className="content-movie">
            <div className=" sub-tag ml-1 mt-1">
              <span className="m-0 text-name-tag"> {"Id: "} </span>
              <span className="m-0 text-sub-tag-content"> {id} </span>
            </div>
            <div className=" sub-tag ml-1 mt-1">
              <span className="m-0 text-name-tag"> {"Created Date: "} </span>
              <span className="m-0 text-sub-tag-content"> {createdDate} </span>
            </div>            
            <div
              className=" sub-tag-plot ml-1 mt-1"
              style={{ position: "relative" }}
            >
              <span className="m-0 text-name-tag"> {"Body: "} </span>
              <span className="m-0 text-sub-tag-content"> {textConvert} </span>
              {body.length >= maxItemPlotLength && (
                <i
                  onClick={() => setShow(true)}
                  className="fa fa-angle-double-right"
                  style={{
                    position: "absolute",
                    right: "10px",
                    color: "#00266b"
                  }}
                ></i>
              )}
            </div>
          </div>
        </div>

        <div className={plotContentClass}>
          <div className="">
            <div
              className=" ml-1"
              style={{
                position: "relative",
                lineHeight: "normal"
              }}
            >
              <span className="m-0 text-name-tag"> {"Body: "} </span>
              <span
                className="m-0"
                style={{
                  fontSize: "0.7em",
                  fontWeight: "200"
                }}
              >
                {" "}
                {body}{" "}
              </span>
              <i
                onClick={() => setShow(false)}
                className="fa fa-angle-double-left"
                style={{
                  position: "absolute",
                  right: "9px",
                  bottom: 0,
                  color: "#00266b "
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
