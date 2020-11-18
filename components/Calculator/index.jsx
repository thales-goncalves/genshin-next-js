import React from "react";

import { Container, CardWrapper, Card } from "./styles";

const Calculator = () => {
  return (
    <Container>

      <form>
        <label htmlFor="currentLevel">Enter your current level</label>
        <input id="currentLevel" placeholder="Current Level" />

        <label htmlFor="currentExp">Enter your current Exp</label>
        <input id="currentExp" placeholder="Current Exp" />

        <label htmlFor="nextLevel">Next Level?</label>
        <input id="nextLevel" placeholder="Level UP" />

        <button>Level UP!</button>
      </form>

      <CardWrapper>
        <Card>
          <img
            className="epic"
            src="/image/cards/herosWit.png"
            alt="heros wit"
          />
        </Card>
        <Card>
          <img
            className="rare"
            src="/image/cards/adventurersExperience.png"
            alt="adventurers experience"
          />
        </Card>
        <Card>
          <img
            className="uncommom"
            src="/image/cards/wanderersAdvice.png"
            alt="wanderes advice"
          />
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default Calculator;
