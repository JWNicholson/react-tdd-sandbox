import React from 'react'


const Congrats = (props) => {

  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">

          Herzliche Glückwünsche!&nbsp;
          Du bist nicht so dumm wie du aussiehst.
        </span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" />
    )
  }
}


export default Congrats;