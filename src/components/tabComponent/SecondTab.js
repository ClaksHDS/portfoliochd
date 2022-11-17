import React from "react";
import styled from "styled-components";

function SecondTab() {
  return (
    <Wrapper>
      <div className='second-tab'>
        <p>french version</p>
        <p>
          Man braid tacos pug JOMO, cardigan biodiesel food truck. Kombucha roof
          party pour-over semiotics marfa authentic pitchfork try-hard.
          Farm-to-table 3 wolf moon brunch tattooed plaid messenger bag.
          Adaptogen pabst same typewriter vaporware, kogi seitan whatever brunch
          iPhone squid street art pop-up photo booth.
        </p>
      </div>
    </Wrapper>
  );
}

export default SecondTab;

const Wrapper = styled.div`
  background: var(--backgroundColor);
  border-radius: var(--borderRadius);
  .second-tab p {
    text-align: left;
    padding: 2rem;
  }
`;
