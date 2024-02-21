import "./Matcher.scss";
import { useEffect, useState } from "react";
import videosData from "../../assets/data/videos.json";
import Divider from "../../components/Divider/Divider";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "../../helpers/StrictModeDroppable";

const Matcher = () => {
  const [images, setImages] = useState(videosData);

  // const [images, updateImages] = useState(videosData || []);

  // useEffect(() => {
  //   updateImages(videosData);
  // }, [videosData]);

  const handleDragDrop = (result) => {
    console.log("drag and drop", result);

    const { source, destination, type } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === `group`) {
      const reorderedImages = [...images];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedImage] = reorderedImages.splice(result.source.index, 1);
      reorderedImages.splice(result.destination.index, 0, removedImage);

      return setImages(reorderedImages);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <Droppable droppableId="root" type="group">
        {(provided) => (
          <section {...provided.droppableProps} ref={provided.innerRef}>
            <section className="matcher">
              <div className="matcher__container">
                <div>Matcher</div>
                <div className="matcher__container--side">
                  {images.map((image, index) => (
                    <Draggable
                      key={image.id}
                      draggableId={image.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <img
                            className="matcher__images"
                            src={image.image}
                            alt="images"
                          />
                          <Divider />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
              <div className="matcher__container--center matcher__container">
                <p>PICK YOU OUTFIT</p>
              </div>
            </section>
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Matcher;
