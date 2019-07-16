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
                        A multistage liquid-fuel expendable launcher, the Saturn V was designed under
                        the direction of Wernher von Braun at the Marshall Space Flight Center. It was
                        the largest production model of the Saturn family, with a height of 111 m (363
                        ft), although larger models were theorized. The super heavy-lift launch
                        vehicle consisted of liquid-propellant rockets in three stages, the first of
                        which had a total mass at launch of 2.3 million kilograms (5.1 million
                        pounds), consisting mostly of its RP-1 fuel and liquid oxygen. As well as
                        launching Apollo missions, the Saturn V also launched the Skylab space
                        station. Thirteen rockets were launched from 1967 to 1973, with an almost
                        perfect launch record – Apollo 6 and Apollo 13 did lose engines, but the
                        onboard computers were able to compensate.
                    </p>
                </Content>
            </Article>
        );
    }
}


export default Home;
