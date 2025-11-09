import React, { useRef, useEffect } from 'react';

const ClusterGrowth: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Cluster animation by kirupa: https://github.com/kirupa/kirupa/tree/master

    const myCanvas = canvasRef.current;
    if (!myCanvas) return;

    const ctx = myCanvas.getContext('2d');
    if (!ctx) return;

    // Configuration variables
    let drawCount = 0;
    let activeCells = 0;
    let iterations = 0;
    let cellSize = 5; // Size of each cell in pixels
    let gap = -4; // Size of the gap between cells in pixels
    let totalOffset = cellSize + gap;

    // Calculate the grid dimensions based on canvas size and cell size
    let width = Math.floor(myCanvas.width / totalOffset);
    let height = Math.floor(myCanvas.height / totalOffset);
    let totalCells = (width - 1) * (height - 1);

    // Create an empty grid to start with
    let tempGrid: number[][] = createEmptyGrid();
    let growthProbability = customRandom(0.05, 0.2); // Set initial growth probability

    // Array of dark colors for the clusters
    const dark_colors = [
         "#ffffff01", // Almost transparent white
    ];

    // Select a random color for the current iteration
    let color = getRandomColor(dark_colors);

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
      let newCells: number[][] = [];

      for (let i = x - size; i < x + size; i++) {
        for (let j = y - size; j < y + size; j++) {
          if (i >= 0 && i < width && j >= 0 && j < height) {
            tempGrid[i][j] = 1;
            newCells.push([i, j]);
            activeCells++;
          }
        }
      }

      // Draw only the new cells
      newCells.forEach(([x, y]) => drawCell(x, y));
    }

    // Function to draw the current state of the grid
    function drawCell(x: number, y: number) {
      ctx.fillStyle = color;

      let xPos = Math.round(x * totalOffset - cellSize / 2);
      let yPos = Math.round(y * totalOffset - cellSize / 2)
      ctx.fillRect(xPos, yPos, cellSize, cellSize);
    }

    // Function to update the grid based on growth rules
    function updateGrid() {
      let newCells: number[][] = [];

      let updatedGrid = createEmptyGrid(); // Create a new empty grid

      // Iterate through each cell in the grid
      for (let i = 1; i < tempGrid.length - 1; i++) {
        for (let j = 1; j < tempGrid[0].length - 1; j++) {
          if (tempGrid[i][j] === 0) {
            let neighbors = countNeighbors(tempGrid, i, j); // Count the number of neighboring cells

            if (neighbors > 0) {
              if (growthProbability > Math.random()) {
                newCells.push([i, j]);
                updatedGrid[i][j] = 1; // Grow a new cell
                activeCells++;
              }
            }
          } else {
            updatedGrid[i][j] = tempGrid[i][j]; // Keep the existing cell
          }
        }
      }

      // Draw only the new cells
      newCells.forEach(([x, y]) => drawCell(x, y));

      tempGrid = updatedGrid; // Update the grid
    }

    // Function to count the number of active neighboring cells
    function countNeighbors(grid: number[][], x: number, y: number): number {
      let sum = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          sum += grid[x + i][y + j]; // Sum the values of the neighboring cells
        }
      }
      return sum;
    }

    // Function to reset the animation
    function reset() {
      activeCells = 0;
      tempGrid = createEmptyGrid();
      growthProbability = customRandom(0.05, 0.2); // Set new growth probability

      // Alternate between colored and white clusters
      if (iterations % 2 !== 0) {
        color = getRandomColor(dark_colors);
      } else {
        color = "ffffff00";
      }

      setInitialCluster(Math.ceil(width / 2), Math.ceil(height / 2), 2);

      iterations++;
      drawCount = 0;
    }

    // Set the initial cluster in the center of the grid
    setInitialCluster(Math.ceil(width / 2), Math.ceil(height / 2), 2);

    let animationFrameId: number;
    // Main animation function
    function growClusters() {
      drawCount++;
      updateGrid();

      // Reset if the entire grid is filled
      if (activeCells >= totalCells) {
        reset();
      }

      animationFrameId = requestAnimationFrame(growClusters);
    }

    // Start the animation
    growClusters();

    // Utility function to get a random color from the array
    function getRandomColor(colors: string[]): string {
      return colors[Math.floor(Math.random() * colors.length)];
    }

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


