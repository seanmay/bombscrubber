import React, { useState } from "react";

import Title from "../../design-components/title";
import Text from "../../design-components/text";

import type { BoardWidth, BoardHeight } from "../../game/core.types";
import { createBoard, isInBounds } from "../../game/services/game-board.service";
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

  const innerX = randomIntBetween(1, board.width - 1);
  const innerY = randomIntBetween(1, board.height - 1);

  const offByOneX = board.width;
  const offByOneY = board.height;

  const subX = -5;
  const subY = -3;
  const superX = board.width + 4;
  const superY = board.height + 2;

  const innerTest = isInBounds(board, innerX, innerY);
  const offByOneXTest = !isInBounds(board, offByOneX, innerY);
  const offByOneYTest = !isInBounds(board, innerX, offByOneY);


  return (
    <section>
      <header>
        <Title level={2}>Populate A 2D Grid</Title>
        <Text style={{ color: "var(--theme-subdued)" }} className="pv2 lh3">
          Presuming we have a <code>GameBoard</code> full of <code>GameCells</code>, one of the operations that will need to be performed most often is checking to see if a coordinate is in-bounds.
          <br />
          These checks might need to occur when a user clicks on a cell, or they might need to occur as a part of some logical operation, behind the scenes. As such, this logic has been moved to its own function.
          <br />
          Find <code>isInBounds</code> in the <code>GameBoard</code> service. It takes a <code>GameBoard</code>, an <code>X</code>, and a <code>Y</code> coordinate, and returns a boolean representing whether that coordinate exists on the board without going off the side.
          <br />
          Solve this problem without using the grid, itself (ie: avoid checking for <code>null</code> or <code>undefined</code>), as we want this code to be as safe and as stable as possible.
        </Text>
      </header>
      <section className="pv3">
        <Title level={3}>Tests:</Title>
        <Text className="pv3 lh3">
          Making a <code>GameBoard</code> that is {width}&times;{height}.
          <br />
          Testing that different <code>(X,Y)</code> coordinates return the correct answer.
        </Text>
      </section>
      <section className="pv3">
        <Title level={3}>Test Results: <RerollButton onReset={resetBoard} /></Title>
        <TestSuite tests={[
          { expression: `(${innerX}, ${innerY}) == true`, output: `${innerTest}`, passed: innerTest },
          { expression: `(${offByOneX}, ${innerY}) == false`, output: `${offByOneXTest}`, passed: offByOneXTest },
          { expression: `(${innerX}, ${offByOneY}) == false`, output: `${offByOneYTest}`, passed: offByOneYTest },
        ]} />
      </section>
    </section>
  );
};

export default Page;
