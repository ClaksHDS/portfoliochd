import React from "react";
import styled from "styled-components";

function FirstTab() {
  return (
    <Wrapper>
      <div className='first-tab'>
        <p>english version</p>
        <p>
          Praxis salvia leggings, bicycle rights schlitz wolf etsy gatekeep
          gentrify ethical street art fit cliche vice. Paleo echo park sriracha
          3 wolf moon fingerstache seitan deep v health goth neutra tofu enamel
          pin locavore pour-over. Waistcoat Brooklyn scenester shabby chic cray
          letterpress woke craft beer kogi disrupt. Salvia pok pok cold-pressed
          hot chicken pabst tumeric waistcoat.
        </p>
      </div>
    </Wrapper>
  );
}

export default FirstTab;

const Wrapper = styled.div`
  background: var(--backgroundColor);
  border-radius: var(--borderRadius);
  .first-tab p {
    text-align: left;
    padding: 2rem;
  }
`;
