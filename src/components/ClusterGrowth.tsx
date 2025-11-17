import React, { useRef, useEffect } from 'react';

const ClusterGrowth: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Based on kirupa's cluster animation: https://github.com/kirupa/kirupa/tree/master

    const myCanvas = canvasRef.current;
    if (!myCanvas) return;

    const ctx = myCanvas.getContext('2d');
    if (!ctx) return;

    const cellDuration = 4000; // 2 seconds in milliseconds

    // Configuration variables
    let cellSize = 5; // Size of each cell in pixels
    let gap = -4; // Size of the gap between cells in pixels
    let totalOffset = cellSize + gap;

    // Calculate the grid dimensions based on canvas size and cell size
    let width = Math.floor(myCanvas.width / totalOffset);
    let height = Math.floor(myCanvas.height / totalOffset);

    // Create an empty grid to start with
    let tempGrid: number[][] = createEmptyGrid();
    let growthProbability = customRandom(0.0, 0.3); // Set initial growth probability

    // Function to create an empty grid filled with zeros
    function createEmptyGrid(): number[][] {
      let emptyGrid: number[][] = [];
      for (let i = 0; i < width + 1; i++) {
        let row: number[] = [];
        for (let j = 0; j < height + 1; j++) {
          row.push(0); // Initialize each cell to 0
        }
        emptyGrid.push(row);
      }
      return emptyGrid;
    }

    // Function to set the initial cluster of active cells
    function setInitialCluster(x: number, y: number, size: number) {
      const now = Date.now();
      for (let i = x - size; i < x + size; i++) {
        for (let j = y - size; j < y + size; j++) {
          if (i >= 0 && i < width && j >= 0 && j < height) {
            tempGrid[i][j] = now;
          }
        }
      }
    }

    // Function to draw a single cell
    function drawCell(x: number, y: number) {
      ctx.fillStyle = "#1c016205";
      // ctx.fillStyle = "#402e9003";
      let xPos = Math.round(x * totalOffset - cellSize / 2);
      let yPos = Math.round(y * totalOffset - cellSize / 2)
      ctx.fillRect(xPos, yPos, cellSize, cellSize);
    }

    // Function to update the grid based on growth and expiration rules
    function updateGrid() {
      const now = Date.now();
      let updatedGrid = createEmptyGrid();

      for (let i = 1; i < width - 1; i++) {
        for (let j = 1; j < height - 1; j++) {
          const cellValue = tempGrid[i][j];

          if (cellValue === 0) { // Inactive cell
            let neighbors = countNeighbors(tempGrid, i, j);
            if (neighbors > 0 && growthProbability > Math.random()) {
              updatedGrid[i][j] = now; // New cell is born
            }
          } else { // Active cell
            if (now - cellValue > cellDuration) {
              // Cell is old, make it transparent (inactive)
              updatedGrid[i][j] = 0;
            } else {
              // Cell is still alive, keep it
              updatedGrid[i][j] = cellValue;
            }
          }
        }
      }
      tempGrid = updatedGrid;
    }

    // Function to draw all active cells
    function drawGrid() {
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          if (tempGrid[i][j] > 0) {
            drawCell(i, j);
          }
        }
      }
    }

    // Function to count the number of active neighboring cells
    function countNeighbors(grid: number[][], x: number, y: number): number {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (grid[x + i][y + j] > 0) {
            count++;
          }
        }
      }
      return count;
    }

    // Set the initial cluster in the center of the grid
    setInitialCluster(Math.ceil(width / 2), Math.ceil(height / 2), 2);

    let animationFrameId: number;
    // Main animation function
    function growClusters() {
      updateGrid();
      drawGrid();
      animationFrameId = requestAnimationFrame(growClusters);
    }

    // Start the animation
    growClusters();

    // Utility function to generate a random number within a range
    function customRandom(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} id="canvas"></canvas>
  );
};

export default ClusterGrowth;

