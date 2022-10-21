import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
import { Col, Row, Card, Button, Input, List, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import VideoJS from '../functions/VideoJS';
import Rick from '../images/Rick.mp4';
import holoman from '../images/hologif.gif';
import NFTGateTestSection from './NFTGateTestSection';

const { Title, Text } = Typography;



const ContentSection = ({ state, dispatch, stateTwo, dispatchTwo }) => {

    const [hasNFT, setHasNFT] = useState(false);

    // const NFTGateTest = useRef();

    // useEffect(() => {
    //     if (NFTGateTest !== state?.refs?.NFTGateTest) {
    //         dispatch({ type: 'setRefs', payload: { ...state?.refs, 'NFTGateTest': NFTGateTest } })
    //     }
    // }, [state])





    useEffect(() => {
        console.log('hasNFT changing', hasNFT)


    }, [hasNFT])








    if (stateTwo?.hasNFT === true) {

        return (
            <div>
                <NFTGateTestSection state={state} dispatch={dispatch} stateTwo={stateTwo} dispatchTwo={dispatchTwo} />
                <NFTGateTestSection state={state} dispatch={dispatch} stateTwo={stateTwo} dispatchTwo={dispatchTwo} />
                <NFTGateTestSection state={state} dispatch={dispatch} stateTwo={stateTwo} dispatchTwo={dispatchTwo} />

            </div>
        )

    } else {
        return (
            <div>
                <Row justify='center' className='NFTGateSectionSubDiv' style={{
                    height: '100%',
                    //  paddingTop: '100px', 
                    paddingBottom: '100px'
                }}>
                    <Col xs={18} sm={12} md={8} lg={6} xl={6}>

                        <Card
                            hoverable
                            style={{
                                // width: artSize,
                                borderRadius: 40,
                            }}
                            cover={<img alt="example" src={holoman} style={{
                                borderTopLeftRadius: 40,
                                borderTopRightRadius: 40,
                            }} />}
                            actions={[
                            ]}
                        >
                            <h3 className='buyNFTButtonText' style={{ color: 'black' }}>
                                holoman
                            </h3>
                            <br />
                            <button className='buyNFTButton' onClick={() => window.open('https://holoman.netlify.app/')} target="_blank">
                                <h3 className='buyNFTButtonText'  >
                                    Get access
                                </h3>
                            </button >


                            {/* <Button justify='center' align='middle' size='large' block={true}
                            // onClick={() => window.open(image.buyLink)} target="_blank" style={{ borderRadius: 60, padding: 10, height: 'auto' }}
                            >
                                <div>
                                    <h3 className='buyNFTButtonText' style={{ color: 'black' }} >
                                        Get access
                                    </h3>
                                    <Title style={{ paddingTop: 4, color: 'black' }} level={3}>Buy Now!</Title>
                                    <Space>
                                    </Space>
                                </div>
                            </Button> */}
                        </Card>


                    </Col>
                </Row>
            </div>
        )
    }



}

export default ContentSection
