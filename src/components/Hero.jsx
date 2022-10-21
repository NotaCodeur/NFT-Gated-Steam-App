import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
import logo from '../logo.svg';
import { Col, Row, Card, Button, Input, List, Typography } from 'antd';
import heroImage from '../images/heroImage.png'
import Wireframe1 from '../images/Wireframe1.png'
import WireframeTrans3 from '../images/WireframeTrans3.png'
import VideoJS from '../functions/VideoJS';
import HeroBG from '../images/HeroBG.mp4';



const { Title } = Typography;


const Hero = ({ state, dispatch }) => {
    const hero = useRef(null);

    useEffect(() => {
        if (hero !== state.refs.hero) {
            dispatch({ type: 'setRefs', payload: { ...state.refs, 'hero': hero } })
        }
    }, [state])






    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: true,
        muted: true,
        controls: false,
        responsive: true,
        playsInline: true,
        fluid: true,
        width: '100%',
        // height: '100%',
        sources: [{
            // https://drive.google.com/uc?export=download&id=1uqO4IbMx-sGHvYPztIEuZnMrcMCCscgi
            src: HeroBG,
            // src: ElsaExplainVideo,
            type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            // videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            // videojs.log('player will dispose');
        });
    };





    return (
        <Col>
            <div className="video-wrapper">
                {/* <VideoJS className='videoHeroBG' options={videoJsOptions} onReady={handlePlayerReady} /> */}
                <video className='videoHeroBG' playsInline  autoPlay muted loop >
                    {/* <source src={HeroBG} type="video/webm" /> */}
                    <source src={HeroBG} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <Row ref={hero} className='heroSection' justify='start' align='middle' style={{
                    // paddingTop: '100px',
                    // paddingBottom: '100px',
                    // height: '80vh',
                    width: '100%',
                    height: '100%',
                }}>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                        <div style={{ padding: '50px', paddingBottom: '100px' }}>
                            <h1 className='heroTitle'>WEB 3 Streaming</h1>
                            <h1 className='heroTitle'>NFT Gated Content</h1>
                            {/* <img src={WireframeTrans3} alt="heroImage" style={{ height: '10%', width: '100%', padding: '20px' }} /> */}
                        </div>
                    </Col>


                    {/* <Col xs={22} sm={8} md={8} lg={8} xl={8}>
                <Title>Wireframe</Title>
                <br />
                <br />
                <p>
                    Wireframe is a template React js Cardano NFT site.
                    You can copy the code from github to get your own project going.
                    You can use the site with NMKR.io to mint NFT's on the Cardano Blockchain.
                </p>
                <br />
                <br />

                <Button size='large' type='primary' block={true} target="_blank" style={{borderRadius: 20}} href='https://github.com/NotaCodeur/Cardano-NFT-DAPP'>
                    Call To Action !
                </Button>
                {/* <Row align='center' justify='center'>
                    <Col span={24} align='center' style={{
                        position: 'absolute',
                        bottom: 20,
                        zIndex: 1,
                        transition: 'all 0.2s',
                    }}>
                        <Row
                            className='createListBottomRow'
                            gutter={[20, 20]}
                            justify='center'
                        >
                            <Col span={24}  align='center'>
                                <Button block={true}>Call To Action !</Button>
                            </Col>
                        </Row>
                    </Col>

                </Row> */}
                    {/* </Col> */}



                </Row>

            </div>

        </Col>

    )
}

export default Hero