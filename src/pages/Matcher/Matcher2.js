// import "./Matcher.scss";
// import { useState } from "react";
// import videosData from "../../assets/data/videos.json";
// import React from "react";
// import Draggable from "react-draggable";

// // const itemsFromBackend = [
// //   {
// //     id: 1,
// //     title: "Travel Health Useful Medical Information For",
// //     image: "https://project-2-api.herokuapp.com/images/image3.jpg",
// //   },
// //   {
// //     id: 2,
// //     title: "Become A Travel Pro In One Easy Lesson",
// //     image: "https://project-2-api.herokuapp.com/images/image1.jpg",
// //   },
// //   {
// //     id: 3,
// //     title: "BMX Rampage: 2021 Highlights",
// //     image: "https://project-2-api.herokuapp.com/images/image0.jpg",
// //   },
// //   {
// //     id: 4,
// //     title: "Les Houches The Hidden Gem Of The Chamonix",
// //     image: "https://project-2-api.herokuapp.com/images/image2.jpg",
// //   },

// //   {
// //     id: 5,
// //     title: "Cheap Airline Tickets Great Ways To Save",
// //     image: "https://project-2-api.herokuapp.com/images/image4.jpg",
// //   },
// //   {
// //     id: 6,
// //     title: "Choose the Perfect Accommodations",
// //     image: "https://project-2-api.herokuapp.com/images/image6.jpg",
// //   },
// //   {
// //     id: 7,
// //     title: "Cruising Destination Ideas",
// //     image: "https://project-2-api.herokuapp.com/images/image7.jpg",
// //   },
// // ];

// // const columnsFromBackEnd = [
// //   {
// //     [uuidv4()]: {
// //       name: "Tops",
// //       items: [videosData],
// //     },
// //   },
// // ];

// // const handleDragDrop = (result) => {
// //   console.log("drag and drop", result);
// //   const { source, destination, type } = result;

// //   if (!destination) return;

// //   if (
// //     source.droppableId === destination.droppableId &&
// //     source.index === destination.index
// //   )
// //     return;

// //   if (type === `group`) {
// //     const reorderedImages = [...images];
// //     const sourceIndex = source.index;
// //     const destinationIndex = destination.index;

// //     const [removedImage] = reorderedImages.splice(result.source.index, 1);
// //     reorderedImages.splice(result.destination.index, 0, removedImage);

// //     return setImages(reorderedImages);
// //   }
// // };

// // const handleDragDrop = (result) => {
// //   const { source, destination } = result;

// //   if (!destination) return;

// //   if (
// //     source.droppableId === destination.droppableId &&
// //     source.index === destination.index
// //   )
// //     return;

// //   const startColumn = columns[source.droppableId];
// //   const endColumn = columns[destination.droppableId];

// //   // Move to a different column
// //   const startItems = Array.from(startColumn.items);
// //   const endItems = Array.from(endColumn.items);
// //   const [movedItem] = startItems.splice(source.index, 1);
// //   endItems.splice(destination.index, 0, movedItem);

// //   const newColumns = {
// //     ...columns,
// //     [source.droppableId]: { ...startColumn, items: startItems },
// //     [destination.droppableId]: { ...endColumn, items: endItems },
// //   };

// //   setColumns(newColumns);
// // };

// const Matcher2 = () => {
//   const [images, setImages] = useState(videosData);

//   return (
//     <section className="outfit">
//       {images.map((item) => (
//         <Draggable>
//           <img className="outfit__images" src={item.image} alt="images" />
//         </Draggable>
//       ))}
//     </section>
//   );
// };

// export default Matcher2;

// import React from "react";
// import Draggable from "react-draggable";
// import videosData from "../../assets/data/videos.json";
// import "./Matcher.scss";
// import logo from "../../assets/Icons/arrow_back-24px.svg";

// class Matcher2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: videosData,
//     };
//   }

//   contentUpdate = () => {
//     window.location.reload();
//   };

//   render() {
//     const { images } = this.state;

//     return (
//       <div>
//         <button onClick={this.contentUpdate}>Reload</button>

//         <Draggable
//           axis="both"
//           handle=".handle"
//           defaultPosition={{ x: 0, y: 0 }}
//           position={null}
//           scale={1}
//           onStart={this.handleStart}
//           onDrag={this.handleDrag}
//           onStop={this.handleStop}
//         >
//           <div>
//             <div className="handle">Drag from here</div>
//             <div>This readme is really dragging on...</div>
//           </div>
//         </Draggable>

//         <Draggable
//           axis="both"
//           handle=".handle"
//           defaultPosition={{ x: 0, y: 0 }}
//           position={null}
//           scale={1}
//           onStart={this.handleStart}
//           onDrag={this.handleDrag}
//           onStop={this.handleStop}
//         >
//           <div>
//             <h2 className="handle">Tops</h2>
//           </div>
//         </Draggable>
//         <Draggable
//           axis="both"
//           handle=".handle"
//           defaultPosition={{ x: 0, y: 0 }}
//           position={null}
//           scale={1}
//           onStart={this.handleStart}
//           onDrag={this.handleDrag}
//           onStop={this.handleStop}
//         >
//           <div className="handle">
//             <img src={logo} />
//           </div>
//         </Draggable>

//         {images.map((item) => (
//           <Draggable
//             axis="both"
//             handle=".handle"
//             defaultPosition={{ x: 0, y: 0 }}
//             position={null}
//             scale={1}
//             onStart={this.handleStart}
//             onDrag={this.handleDrag}
//             onStop={this.handleStop}
//           >
//             <div className="handle">
//               <img className="outfit__images" src={item.image} alt="tops" />
//             </div>
//           </Draggable>
//         ))}
//       </div>
//     );
//   }
// }

// export default Matcher2;

import React, { useState } from "react";
import Draggable from "react-draggable";
import topsData from "../../assets/data/tops.json";
import bottomsData from "../../assets/data/bottoms.json";
import "./Matcher.scss";
import logo from "../../assets/Icons/arrow_back-24px.svg";

const Matcher2 = () => {
  const [tops, setTops] = useState(topsData);
  const [bottoms, setBottoms] = useState(bottomsData);

  const contentUpdate = () => {
    window.location.reload();
  };

  return (
    <div className="outfit">
      <button onClick={contentUpdate}>Reload</button>
      <Draggable axis="both" handle=".handle" defaultPosition={{ x: 0, y: 0 }}>
        <div className="handle">
          <p>Text to test dragging</p>
          <div>
            <img src={logo} />
          </div>
        </div>
      </Draggable>

      <div className="outfit__wrapper">
        <div className="outfit__column">
          <h2>Tops</h2>
          {tops.map((item) => (
            <Draggable
              axis="both"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
            >
              <div className="handle image__wrapper">
                <img className="outfit__images" src={item.image} alt="tops" />
              </div>
            </Draggable>
          ))}
        </div>

        <div className="outfit__column">
          <h2>Bottoms</h2>
          {bottoms.map((item) => (
            <Draggable
              axis="both"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
            >
              <div className="handle image__wrapper">
                <img
                  className="outfit__images"
                  src={item.image}
                  alt="bottoms"
                />
              </div>
            </Draggable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matcher2;
