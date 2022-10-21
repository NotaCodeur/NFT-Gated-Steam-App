import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
import { Col, Row, Card, Button, Input, List, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import VideoJS from '../functions/VideoJS';
import Rick from '../images/Rick.mp4';
import holoman from '../images/hologif.gif';

const { Title, Text } = Typography;



const NFTGateTestSection = ({ state, dispatch, stateTwo, dispatchTwo }) => {

    const [hasNFT, setHasNFT] = useState(false);

    // const NFTGateTest = useRef();

    // useEffect(() => {
    //     if (NFTGateTest !== state?.refs?.NFTGateTest) {
    //         dispatch({ type: 'setRefs', payload: { ...state?.refs, 'NFTGateTest': NFTGateTest } })
    //     }
    // }, [state])


    // useEffect(() => {

    //     let userHasNFT = false;

    //     if (stateTwo?.Utxos?.length) {
    //         console.log('Utxos: ', stateTwo?.Utxos)

    //         stateTwo?.Utxos?.map((Utxo) => {
    //             console.log('Utxo in map: ', Utxo)
    //             console.log('Utxo . multiAssetStr : ', Utxo?.multiAssetStr)

    //             if (Utxo?.multiAssetStr?.includes('NMKR')) {
    //                 console.log('Utxo includes NMKR Yay!')
    //                 console.log('set hasNFT to true')
    //                 userHasNFT = true
    //                 if (hasNFT === false) {
    //                     // setHasNFT( true)
    //                 }

    //             }

    //         })

    //         // if (stateTwo?.Utxos?.inlcudes('NMKR')) {
    //         //     console.log(' aray includes !! Utxos: ', stateTwo?.Utxos)

    //         // }
    //     }

    //     if (hasNFT !== userHasNFT) {
    //         console.log(' hasNFT !== userHasNFT, setHasNFT( userHasNFT ) ', userHasNFT)
    //         setHasNFT(userHasNFT)
    //     }

    // }, [stateTwo.Utxos])


    useEffect(() => {
        console.log('hasNFT changing', hasNFT)


    }, [hasNFT])







    const playerRef = React.useRef(null);

    const videoJsOptions = {
        autoplay: false,
        muted: false,
        controls: true,
        responsive: true,
        fluid: true,
        // height: '100%',
        style: { borderRadius: '20px' },
        // borderRadius: '40px',
        sources: [{
            // https://drive.google.com/uc?export=download&id=1uqO4IbMx-sGHvYPztIEuZnMrcMCCscgi
            // src: 'https://drive.google.com/uc?export=download&id=1EA7tS9hEuzVT9idctv1WV2PNPyK-q_L1',
            src: Rick,
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


    if (stateTwo?.hasNFT === true) {

        return (

            <div className='NFTGateSection' style={{
            }}>
                <Row justify='center' className='NFTGateSectionSubDiv' style={{
                    height: '100%',
                    //  paddingTop: '100px', 
                    paddingBottom: '100px'
                }}>
                    <Col xs={22} sm={22} md={22} lg={22} xl={22} style={{ height: '100%' }}>
                        <p className='introSectionText' style={{ textAlign: 'left', color: '#F9C6CB' }}> NFT Gated content  </p>
                        <br />
                        <Row justify='center' gutter={[20, 20]}>
                            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                {/* <p className='introSectionText' style={{ color: '#F9C6CB' }}> NFT Gated content  </p> */}
                                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                {/* <p className='introSectionText' style={{ color: '#F9C6CB' }}> NFT Gated content  </p> */}
                                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                {/* <p className='introSectionText' style={{ color: '#F9C6CB' }}> NFT Gated content  </p> */}
                                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                                {/* <p className='introSectionText' style={{ color: '#F9C6CB' }}> NFT Gated content  </p> */}
                                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
                            </Col>
                        </Row>



                    </Col>

                </Row>
            </div>
        )


    } else {
        return (
            null
            // <div>
            //     <Row justify='center' className='NFTGateSectionSubDiv' style={{
            //         height: '100%',
            //         //  paddingTop: '100px', 
            //         paddingBottom: '100px'
            //     }}>
            //         <Col xs={22} sm={12} md={6} lg={6} xl={6}>

            //             <Card
            //                 hoverable
            //                 style={{
            //                     // width: artSize,
            //                     borderRadius: 40,
            //                 }}
            //                 cover={<img alt="example" src={holoman} style={{
            //                     borderTopLeftRadius: 40,
            //                     borderTopRightRadius: 40,
            //                 }} />}
            //                 actions={[
            //                 ]}
            //             >
            //                 <h3 className='buyNFTButtonText'  style={{ color: 'black' }}>
            //                     holoman
            //                 </h3>
            //                 <br />
            //                 <button className='buyNFTButton'>
            //                     <h3 className='buyNFTButtonText'  >
            //                         Get access
            //                     </h3>
            //                 </button >


            //                 {/* <Button justify='center' align='middle' size='large' block={true}
            //                 // onClick={() => window.open(image.buyLink)} target="_blank" style={{ borderRadius: 60, padding: 10, height: 'auto' }}
            //                 >
            //                     <div>
            //                         <h3 className='buyNFTButtonText' style={{ color: 'black' }} >
            //                             Get access
            //                         </h3>
            //                         <Title style={{ paddingTop: 4, color: 'black' }} level={3}>Buy Now!</Title>
            //                         <Space>
            //                         </Space>
            //                     </div>
            //                 </Button> */}
            //             </Card>


            //         </Col>
            //     </Row>
            // </div>
        )
    }



}

export default NFTGateTestSection
