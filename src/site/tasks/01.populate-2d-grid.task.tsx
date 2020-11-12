import React, { useState } from "react";

import Title from "../../design-components/title";
import Text from "../../design-components/text";

import type { BoardWidth, BoardHeight } from "../../game/core.types";
import { createBoard } from "../../game/services/game-board.service";
import TestSuite from "./test-suite";
import RerollButton from "./reroll-button";

const randomIntBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const Page = () => {
  const minSize = 5;
  const maxSize = 15 + 1; // Exclusive upper-bound on random function
  const [width, setWidth] = useState<BoardWidth>(randomIntBetween(minSize, maxSize) as BoardWidth);
  const [height, setHeight] = useState<BoardHeight>(randomIntBetween(minSize, maxSize) as BoardHeight);
  const [board, setBoard] = useState(createBoard(width, height));

  const resetBoard = () => {
    const width = randomIntBetween(minSize, maxSize) as BoardWidth;
    const height = randomIntBetween(minSize, maxSize) as BoardHeight;
    const board = createBoard(width, height);
    setWidth(width);
    setHeight(height);
    setBoard(board);
  };

  const widthTest = board.width === width;
  const heightTest = board.height === height;
  const rowTest = board.cells.length === height;
  const columnTest = board.cells[0]?.length === width;

  return (
    <section>
      <header>
        <Title level={2}>Populate A 2D Grid</Title>
        <Text style={{ color: "var(--theme-subdued)" }} className="pv2 lh3">
          The first step in making Bombscrubber work is to create a grid of a specified width and height.
          <br />
          In the <code>/game/services</code> folder, find the <code>GameBoard</code> service and modify <code>createBoard</code> to take a width, a height, and produce a 2D array of that size.
          <br />
          In order to appease the compiler, you will need to fill the grid with cells of one kind or another; whether they are all safe, all bombs, or a random distribution, at this point, is irrelevant.
        </Text>
      </header>
      <section className="pv3">
        <Title level={3}>Tests:</Title>
        <Text className="pv3 lh3">
          Making a <code>GameBoard</code> that is {width}&times;{height}.
          <br />
          Testing that width = {width}, height = {height}, and that the dimensions of the 2D cells grid match.
        </Text>
      </section>
      <section className="pv3">
        <Title level={3}>Test Results: <RerollButton onReset={resetBoard} /></Title>
        <TestSuite tests={[
          { expression: `gameBoard.width == ${width};`, output: `${widthTest}`, passed: widthTest },
          { expression: `gameBoard.height == ${height};`, output: `${heightTest}`, passed: heightTest },
          { expression: `gameBoard.cells.length == gameBoard.height;`, output: `${rowTest}`, passed: rowTest },
          { expression: `gameBoard.cells[0].length == gameBoard.width;`, output: `${columnTest}`, passed: columnTest },
        ]} />
      </section>
    </section>
  );
};

export default Page;
