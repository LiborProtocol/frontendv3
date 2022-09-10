import React, { useEffect, useState } from 'react';
import { Countdown } from '../components/Countdown/countdown';
import styled from 'styled-components';
import { ReactComponent as hills } from '../assets/pattern-hills.svg';
import { ReactComponent as bgStars } from '../assets/bg-stars.svg';

export default function HomePage() {
  return (
    <div className='Ido'>
      <$wrapper>
        <h2>We're Launching Soon</h2>    
        <Countdown />
        <$bgStars />
        <$styledHills />

  {/*     
    <h2>JOin our waitlist </h2>  <div>
    <script src="https://f.convertkit.com/ckjs/ck.5.js"/>
      <form action="https://app.convertkit.com/forms/3517762/subscriptions" method="post" data-sv-form="3517762" data-uid="4abbd13446" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800"><div data-style="clean"><ul data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false" ><div>
        
        <input name="email_address" aria-label="Email Address" placeholder="Email Address"  type="email" /></div>
        
        <button data-element="submit" ><div><div></div><div></div><div></div></div><span>Subscribe</span></button></div><div></div></div>
      
      
      </form>
      </div>  */}

      </$wrapper>
    </div>
  );
}

const $wrapper = styled.div`
  color: #EEEEEE;
  display: flex;
  flex-direction: column;
  height: 600px;
  align-content: flex-start;
  align-items: center;
  text-transform: uppercase;

  h2 {
    font-size: 1.4em;
    letter-spacing: 0.3em;
    margin-bottom: 128px;
    color: var(--color-white);
  }
`;

const $styledHills = styled(hills)`
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const $bgStars = styled(bgStars)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;




