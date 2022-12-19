import React from 'react'
import Testimonials from '../../Components/Testimonials/Testimonials';
import Brief from '../../Components/Brief/Brief';
import Process from '../../Components/Process/Process';
import Issues from '../../Components/Issues/Issues';

const HomeRedo = () => {
  const isMobile = window.screen.width < 600;

  return (
    <div>
      <Brief />
      <Process />
      <Issues />
      {!isMobile && <Testimonials id="testimonials-to-hide" />}
    </div>
  )
}

export default HomeRedo