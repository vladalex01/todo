import React from 'react';
import Article, { Title, TopSection, Author, Date, Content } from '../template/Functions';
import Toggle from '../template/Functions'

class Home extends React.Component {

    render() {
        return (
            <Article>
                <TopSection>
                    <Date>
                        16.07.2019
                    </Date>
                    <Title>
                        What is the meaning of life?
                    </Title>
                    <Author>
                        Vlad Catanoiu
                    </Author>
                </TopSection>
                <Content>
                    <p>
                        The Saturn V SA-506 carrying Apollo 11, the first crewed lunar landing
                        mission, on July 16, 1969, at 13:32 UTC. Launching from Launch Pad 39A at
                        Florida's Kennedy Space Center, the five Rocketdyne F-1 engines of the
                        rocket's S-IC first stage can be seen arrayed in a quincunx, with a fixed
                        center engine and four outer engines that gimballed for steering.
                    </p>

                    <p>
                    </p>
                </Content>
            </Article>
        );
    }
}


export default Home;
