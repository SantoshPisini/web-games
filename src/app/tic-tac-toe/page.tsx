"use client";

import { useState } from "react";
import Square from "./square";
import Link from "next/link";

const WIN_STATES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToe() {
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [isGameInWinState, setIsGameInWinState] = useState(false);
  const [message, setMessage] = useState("Click any tile to start the game!");
  const [previousGameStates, setPreviousGameStates] = useState([] as any[]);

  function clickAction(slot: number) {
    if (isGameInWinState) {
      return;
    }
    const state = [...gameState];
    previousGameStates.push(gameState);
    state[slot] = isXTurn ? "X" : "O";
    setGameState(state);
    checkWinner(state);
    setMessage(
      previousGameStates.length == 9
        ? "Draw!!!"
        : `Player ${isXTurn ? "O" : "X"}'s turn.`
    );
    setIsXTurn(!isXTurn);
  }

  function undoState() {
    const state = previousGameStates.pop();
    for (let i = 0; i < 9; i++) {
      if (state[i] != gameState[i]) {
        setGameState(state);
        setIsXTurn(gameState[i] == "X");
        setMessage(`Player ${gameState[i]}'s turn.`);
        setIsGameInWinState(false);
        break;
      }
    }
  }

  function restartGame() {
    if (
      isGameInWinState ||
      previousGameStates.length == 9 ||
      confirm("Are you sure to restart the game?")
    ) {
      setIsXTurn(true);
      setPreviousGameStates([]);
      setIsGameInWinState(false);
      setGameState(Array(9).fill(null));
      setMessage("Click any tile to start the game!");
    }
  }

  function checkWinner(state: any[]) {
    for (let i = 0; i < WIN_STATES.length; i++) {
      const [a, b, c] = WIN_STATES[i];
      if (state[a] && state[a] == state[b] && state[a] == state[c]) {
        setIsGameInWinState(true);
      }
    }
  }

  return (
    <div className="flex flex-col m-4">
      <div className="flex flex-row gap-2 items-center justify-between">
        <Link href={"/"} className="group rounded-lg text-indigo-700">
          <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
            &lt;-
          </span>
          Home
        </Link>
        <h3 className="text-2xl font-bold">Tic-Tac-Toe</h3>
        <div className="w-16"></div>
      </div>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem-4rem)]">
        <div className="mt-10 mb-10 border">
          <div className="flex flex-row">
            <Square value={gameState[0]} clickAction={() => clickAction(0)} />
            <Square value={gameState[1]} clickAction={() => clickAction(1)} />
            <Square value={gameState[2]} clickAction={() => clickAction(2)} />
          </div>
          <div className="flex flex-row">
            <Square value={gameState[3]} clickAction={() => clickAction(3)} />
            <Square value={gameState[4]} clickAction={() => clickAction(4)} />
            <Square value={gameState[5]} clickAction={() => clickAction(5)} />
          </div>
          <div className="flex flex-row">
            <Square value={gameState[6]} clickAction={() => clickAction(6)} />
            <Square value={gameState[7]} clickAction={() => clickAction(7)} />
            <Square value={gameState[8]} clickAction={() => clickAction(8)} />
          </div>
        </div>
        <span className="text-base">
          {isGameInWinState ? `Player ${isXTurn ? "O" : "X"} won! 🎉` : message}
        </span>
        <div className="mt-4 flex flex-row gap-4">
          <button
            type="button"
            disabled={previousGameStates.length == 0}
            className="rounded-md bg-gray-500 text-white pt-2 pb-2 pr-4 pl-4"
            onClick={undoState}
          >
            {"Undo"}
          </button>
          <button
            type="button"
            className="rounded-md bg-blue-700 text-white pt-2 pb-2 pr-4 pl-4"
            onClick={restartGame}
          >
            {"Restart"}
          </button>
        </div>
      </div>
    </div>
  );
}
