import { v4 as uuidv4 } from "uuid";
import "./Matcher.scss";
import { useEffect, useState } from "react";
import tops from "../../assets/data/tops.json";
import bottoms from "../../assets/data/bottoms.json";
import Divider from "../../components/Divider/Divider";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";

// const itemsFromBackend = [
//   {
//     id: 1,
//     title: "Travel Health Useful Medical Information For",
//     image: "https://project-2-api.herokuapp.com/images/image3.jpg",
//   },
//   {
//     id: 2,
//     title: "Become A Travel Pro In One Easy Lesson",
//     image: "https://project-2-api.herokuapp.com/images/image1.jpg",
//   },
//   {
//     id: 3,
//     title: "BMX Rampage: 2021 Highlights",
//     image: "https://project-2-api.herokuapp.com/images/image0.jpg",
//   },
//   {
//     id: 4,
//     title: "Les Houches The Hidden Gem Of The Chamonix",
//     image: "https://project-2-api.herokuapp.com/images/image2.jpg",
//   },

//   {
//     id: 5,
//     title: "Cheap Airline Tickets Great Ways To Save",
//     image: "https://project-2-api.herokuapp.com/images/image4.jpg",
//   },
//   {
//     id: 6,
//     title: "Choose the Perfect Accommodations",
//     image: "https://project-2-api.herokuapp.com/images/image6.jpg",
//   },
//   {
//     id: 7,
//     title: "Cruising Destination Ideas",
//     image: "https://project-2-api.herokuapp.com/images/image7.jpg",
//   },
// ];

// const columnsFromBackEnd = [
//   {
//     [uuidv4()]: {
//       name: "Tops",
//       items: [videosData],
//     },
//   },
// ];

const columnsFromBackEnd = {
  tops: {
    name: "Tops",
    items: tops.map((item) => ({ ...item, id: uuidv4() })),
  },
  outfit: {
    name: "Pick Your Outfit",
    items: [],
  },
  shoes: {
    name: "Shoes",
    items: [],
  },
  accessories: {
    name: "Bottoms",
    items: bottoms.map((item) => ({ ...item, id: uuidv4() })),
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, items: sourceItems },
      [destination.droppableId]: { ...destColumn, items: destItems },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }

  // if (
  //   source.droppableId === destination.droppableId &&
  //   source.index === destination.index
  // )
  //   return;

  // if (type === `group`) {
  //   const reorderedImages = [...images];
  //   const sourceIndex = source.index;
  //   const destinationIndex = destination.index;

  //   const [removedImage] = reorderedImages.splice(result.source.index, 1);
  //   reorderedImages.splice(result.destination.index, 0, removedImage);

  //   return setImages(reorderedImages);
  // }
};

// const handleDragDrop = (result) => {
//   console.log("drag and drop", result);
//   const { source, destination, type } = result;

//   if (!destination) return;

//   if (
//     source.droppableId === destination.droppableId &&
//     source.index === destination.index
//   )
//     return;

//   if (type === `group`) {
//     const reorderedImages = [...images];
//     const sourceIndex = source.index;
//     const destinationIndex = destination.index;

//     const [removedImage] = reorderedImages.splice(result.source.index, 1);
//     reorderedImages.splice(result.destination.index, 0, removedImage);

//     return setImages(reorderedImages);
//   }
// };

// const handleDragDrop = (result) => {
//   const { source, destination } = result;

//   if (!destination) return;

//   if (
//     source.droppableId === destination.droppableId &&
//     source.index === destination.index
//   )
//     return;

//   const startColumn = columns[source.droppableId];
//   const endColumn = columns[destination.droppableId];

//   // Move to a different column
//   const startItems = Array.from(startColumn.items);
//   const endItems = Array.from(endColumn.items);
//   const [movedItem] = startItems.splice(source.index, 1);
//   endItems.splice(destination.index, 0, movedItem);

//   const newColumns = {
//     ...columns,
//     [source.droppableId]: { ...startColumn, items: startItems },
//     [destination.droppableId]: { ...endColumn, items: endItems },
//   };

//   setColumns(newColumns);
// };

const Matcher = () => {
  // const [images, setImages] = useState(videosData);
  const [columns, setColumns] = useState(columnsFromBackEnd);

  return (
    <section className="matcher">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {/* <section className="matcher">
          <div className="matcher__container"> */}
        {Object.entries(columns).map(([columnId, column]) => (
          <div className="matcher__container">
            <h2>{column.name}</h2>
            <div className="matcher__column">
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightblue"
                        : "lightgrey",
                      padding: 4,
                      width: 250,
                      minHeight: 500,
                    }}
                  >
                    {/* <h1>Matcher</h1> */}
                    {/* <div className="matcher__container--side"> */}
                    {/* <h3>{column.name}</h3> */}
                    {column.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: "none",
                              padding: 1,
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            <img
                              className="matcher__images"
                              src={item.image}
                              alt="images"
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        ))}
        {/* </div>
        </section> */}
      </DragDropContext>
    </section>
  );
};

export default Matcher;
