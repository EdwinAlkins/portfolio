// import "./style.css";
import { PropsWithChildren, useRef, useCallback, useEffect, useState, useMemo } from "react";
import styled from 'styled-components';

import GameOfLife from "../../../core/gameoflife";

export interface GameOfLifeProps extends PropsWithChildren<any> {
  width: number;
  height: number;
  cellInit: { x: number; y: number }[];
  zoom: number;
  speed: number;
  style?: {
    backgroundColor?: string;
    cellColor?: string;
  };
}

const Canvas = styled.canvas`
  background-color: ${props => props?.style?.backgroundColor||"white"};
  width: 100%;
  height: 100%;
`;


function GameOfLifeView(props: GameOfLifeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const game = useMemo(() => {
    return new GameOfLife(props.width, props.height);
  }, [props.width, props.height]);

  const [isRunning, setRun] = useState(false);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = props?.style?.cellColor||"black";
        for (let x = 0; x < props.width; x++) {
          for (let y = 0; y < props.height; y++) {
            if (game.getCell(x, y)) {
              ctx.fillRect(x * props.zoom, y * props.zoom, props.zoom, props.zoom);
            }
          }
        }
      }
    }
  }, [game, props.width, props.height, props.zoom]);

  useEffect(() => {
    draw();
  }, [draw]);

  useEffect(() => {
    game.init();
    for (let cell of props.cellInit) {
      game.setCell(cell.x, cell.y, true);
    }
    draw();
  }, [props.cellInit]);

  const next = useCallback(() => {
    game.nextGeneration();
    draw();
  }, [draw, game]);

  const toggleRun = useCallback(() => {
    setRun(!isRunning);
  }, [isRunning]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning){
        game.nextGeneration();
        draw();
      }
    }, props.speed);
    return () => clearInterval(interval);
  }, [draw, isRunning, props.speed]);

  return (
    <div>
      <button onClick={draw}>Draw</button>
      <button onClick={next}>Next</button>
      <button onClick={toggleRun}>{isRunning ? "Stop" : "Start"}</button>
      <Canvas
      className="gameoflife"
        ref={canvasRef}
        width={props.width * props.zoom}
        height={props.height * props.zoom}
      />
    </div>
  );
}

GameOfLifeView.defaultProps = {
  width: 10,
  height: 10,
  cellInit: [],
  style: {
    backgroundColor: "white",
    cellColor: "black",
  },
  zoom: 10,
  speed: 50,
};

export default GameOfLifeView;
