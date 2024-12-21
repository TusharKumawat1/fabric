import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import { clipPathArray, ClipPathType } from "./shapesPreset";

const CanvasEditor: React.FC = () => {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null); // State for selected shape
  const [shapes, setShapes] = useState<ClipPathType | null>(null);

  const [text, setText] = useState("Editable Text");

  const elements = [
    {
      type: "image",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MHzzuYV6tQFjMV1NpVVOEO3_EVdOjJ5F7w&s",
      left: 50,
      top: 50,
    },
    {
      type: "text",
      text: "Editable Text",
      left: 200,
      top: 50,
      fontSize: 24,
      fill: "#000",
    },
    {
      type: "customShape",
      left: 150,
      top: 150,
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", // Example custom clip-path for shape
      fill: "#FF5733", // Custom shape color
    },
  ];

  // Initialize the canvas and add elements
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      width: 500,
      height: 500,
      backgroundColor: "#f3f3f3",
      selection: true,
    });

    canvasRef.current = canvas;

    // Load image using HTMLImageElement
    const loadImage = (url: string): Promise<fabric.Image> => {
      return new Promise((resolve, reject) => {
        const imgElement = new Image();
        imgElement.src = url;
        imgElement.onload = () => {
          const fabricImg = new fabric.Image(imgElement);
          resolve(fabricImg);
        };
        imgElement.onerror = (error) => {
          reject(new Error("Image failed to load"));
        };
      });
    };
    const addElements = async () => {
      try {
        // Add image element and apply clip-path
        const img = await loadImage(elements[0].url!); // Ensure correct typing for img
        img.set({ left: elements[0].left, top: elements[0].top });


        canvas.add(img);

        // Add editable text element
        const text = new fabric.Textbox(elements[1].text!, {
          left: elements[1].left,
          top: elements[1].top,
          fontSize: elements[1].fontSize,
          fill: elements[1].fill,
          editable: true, // Enable text editing
        });
        canvas.add(text);

        // Add custom shape element (polygon)
        const customShape = new fabric.Polygon([
          { x: 0, y: 0 },
          { x: 50, y: 50 },
          { x: 100, y: 0 }
        ], {
          left: elements[2].left,
          top: elements[2].top,
          fill: elements[2].fill,
          selectable: true,
        });

        // Apply custom clip-path mask
        const clipPath = new fabric.Polygon([
          { x: 0, y: 0 },
          { x: 50, y: 100 },
          { x: 100, y: 100 }
        ], {
          fill: 'transparent',
          selectable: false,
        });

        customShape.set({ clipPath });
        canvas.add(customShape);

        canvas.renderAll();
      } catch (error) {
        console.error(error);
      }
    };

    addElements();

    return () => {
      canvas.dispose();
    };
  }, []);
  const addRandomShape = () => {
    const randomShapeType = Math.random() > 0.5 ? "circle" : "rectangle"; // Randomly choose between circle or rectangle

    let shape: fabric.Object;

    if (randomShapeType === "circle") {
      shape = new fabric.Circle({
        radius: 50,
        left: Math.random() * 400, // Random position within the canvas
        top: Math.random() * 400,
        fill: getRandomColor(),
      });
    } else {
      shape = new fabric.Rect({
        width: 100,
        height: 100,
        left: Math.random() * 400, // Random position within the canvas
        top: Math.random() * 400,
        fill: getRandomColor(),
      });
    }

    // Add the shape to the canvas
    canvasRef.current?.add(shape);
    canvasRef.current?.renderAll();
  };

  // Helper function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  // Handle text change from the input box
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (!shapes || !canvasRef.current) return;
  
    const { clipPath } = shapes;

    let shapeObject;
  
    if (clipPath.startsWith("circle")) {
      // Handle circle clip-path
      const match = /circle\((\d+)% at (\d+)% (\d+)%\)/.exec(clipPath);
      if (match) {
        const radius = (parseInt(match[1]) / 100) * 200;
        const left = (parseInt(match[2]) / 100) * 200;
        const top = (parseInt(match[3]) / 100) * 200;
  
        shapeObject = new fabric.Circle({
          left,
          top,
          radius,
          fill: "rgba(0, 0, 0, 0.3)",
        });
      }
    } else if (clipPath.startsWith("polygon")) {
      // Handle polygon clip-path
      const points = clipPath
        .replace("polygon(", "")
        .replace(")", "")
        .split(", ")
        .map((point) => {
          const [x, y] = point.trim().split(" ");
          return {
            x: (parseFloat(x) / 100) * 200, // Scale to canvas size
            y: (parseFloat(y) / 100) * 200,
          };
        });
  
      shapeObject = new fabric.Polygon(points, {
        left: 150,
        top: 150,
        fill: "#000000",
      });
    } else if (clipPath.startsWith("inset")) {
      // Handle inset clip-path
      const match = /inset\((\d+)% (\d+)% (\d+)% (\d+)%\)/.exec(clipPath);
      if (match) {
        const top = (parseInt(match[1]) / 100) * 200;
        const right = (parseInt(match[2]) / 100) * 200;
        const bottom = (parseInt(match[3]) / 100) * 200;
        const left = (parseInt(match[4]) / 100) * 200;
  
        shapeObject = new fabric.Rect({
          left,
          top,
          width: 200 - left - right,
          height: 200 - top - bottom,
          fill: "rgba(0, 0, 0, 0.3)",
        });
      }
    }
  
    if (shapeObject) {
      canvasRef.current.add(shapeObject);
      canvasRef.current.renderAll();
    }
  }, [shapes]);
  
  const handleShapeClick = (shape: ClipPathType) => {
    setShapes(shape);
    setSelectedShapeId(shape.shape);
  };
  
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Fabric.js Canvas Editor</h1>

      {/* Input for editable text */}
      <button
        onClick={addRandomShape}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Add Random Shape
      </button>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        className="mb-4 p-2 border rounded"
        placeholder="Edit text"
      />
      {/* <div
        className="grid w-full gap-2 justify-center items-center overflow-y-auto hideScrollbar"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        }}
      >
        {clipPathArray.map((shape: ClipPathType, index: number) => (
          <div
            key={index}
            className={`w-[100px] h-[100px] p-3 rounded-md cursor-pointer ${selectedShapeId === shape.shape
              ? "border-[2px] border-black"
              : "border-[1px] border-[#DAC0A3]"
              } flex justify-center items-center`}
            style={{
              minWidth: "100px",
              minHeight: "100px",
              maxWidth: "150px",
              maxHeight: "150px",
            }}
            onClick={() => handleShapeClick(shape)}
          >
            <div
              className="w-full h-full"
              style={{
                clipPath: shape.clipPath,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                border: "1px solid transparent",
              }}
            ></div>
          </div>
        ))}
      </div> */}
      <div
        className="grid-container"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        }}
      >
        {clipPathArray.map((shape: ClipPathType, index: number) => (
          <div
            key={index}
            className={`grid-item ${selectedShapeId === shape.shape ? "border-active" : "border-inactive"
              }`}
            onClick={() => handleShapeClick(shape)}
          >
            <div
              className="inner-div"
              style={{
                clipPath: shape.clipPath,
              }}
            ></div>
          </div>
        ))}
      </div>

      <canvas id="canvas" className="border border-gray-400"></canvas>
    </div>
  );
};

export default CanvasEditor;
