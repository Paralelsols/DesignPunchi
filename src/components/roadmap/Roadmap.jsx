import React from 'react'

import roadmapTopShap from '/src/assets/img/roadmapTopShap.png'
import rocket from '/src/assets/img/rocket.png'
import roadmapBottomIcon from '/src/assets/img/roadmapBottomIcon.png'

const Roadmap = () => {
    return (
        <div><section className="roadmap-area" id="roadmap">
            <figure className="roadmapShap">
                <img src={roadmapTopShap} alt="" />
            </figure>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title text-center">
                            <h2>ROADMAP</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="roadmap-wrapper">
                        <verticaltimeline className="vertical-timeline">
                            <figure className="rocket">
                                <img src={rocket} alt="" />
                            </figure>
                            <figure className="roadmapBottomIcon">
                                <img src={roadmapBottomIcon} alt="" />
                            </figure>
                            <verticaltimelineelement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-content">
                                    <span className="dot" />
                                    <h3 className="vertical-timeline-element-title">phase 1</h3>
                                    <ul>
                                        <li>Concept Creation</li>
                                        <li>Token Development</li>
                                        <li>Community Building</li>
                                        <li>Influencers Marketing</li>
                                        <li>Launch of Presale</li>
                                    </ul>
                                </div>
                            </verticaltimelineelement>
                            <verticaltimelineelement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-content">
                                    <span className="dot" />
                                    <h3 className="vertical-timeline-element-title">phase 2</h3>
                                    <ul>
                                        <li>Dex launch</li>
                                        <li>Launch Whitepaper</li>
                                        <li>Gate Listing</li>
                                        <li>Mexc Listing</li>
                                        <li>Okx Listing</li>
                                    </ul>
                                </div>
                            </verticaltimelineelement>
                            <verticaltimelineelement className="vertical-timeline-element--work">
                                <div className="vertical-timeline-element-content">
                                    <span className="dot" />
                                    <h3 className="vertical-timeline-element-title">phase 3</h3>
                                    <ul>
                                        <li>Kucoin Listing</li>
                                        <li>More Cex Listing</li>
                                        <li>PunchiSwap Launch</li>
                                        <li>100,000 Holders</li>
                                        <li>1 Billion MarketCap</li>
                                    </ul>
                                </div>
                            </verticaltimelineelement>
                        </verticaltimeline>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Roadmap