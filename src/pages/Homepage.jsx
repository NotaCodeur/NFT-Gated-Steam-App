import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
import HeaderSection from '../components/Header';
import logo from '../logo.svg';
import Hero from '../components/Hero';
import SideScrollHero from '../components/SideScrollHero';
import Roadmap from '../components/Roadmap';
import Faq from '../components/Faq';
import Art from '../components/Art';
import Team from '../components/Team';
import NFTGateTestSection from '../components/NFTGateTestSection';
import ContentSection from '../components/ContentSection';

import { BackTop } from 'antd';

const Homepage = ({state, dispatch, stateTwo, dispatchTwo}) => {

  


  return (
    <div >
      <BackTop />
      <HeaderSection state={state} dispatch={dispatch} stateTwo={stateTwo} dispatchTwo={dispatchTwo} />

      {/* <SideScrollHero /> */}
      <Hero state={state} dispatch={dispatch} />

      <ContentSection state={state} dispatch={dispatch} stateTwo={stateTwo} dispatchTwo={dispatchTwo} />
      {/* <NFTGateTestSection state={state} dispatch={dispatch} stateTwo={stateTwo} dispatchTwo={dispatchTwo} /> */}
      
      {/* <Roadmap state={state} dispatch={dispatch} /> */}
      {/* <Art state={state} dispatch={dispatch}  /> */}
      {/* <Team state={state} dispatch={dispatch}  /> */}
      {/* <Faq state={state} dispatch={dispatch}  /> */}


    </div>
  )
}

export default Homepage