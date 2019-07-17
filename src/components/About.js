import React from 'react';
import Footer from '../template/Footer'
import Navbar from '../template/Navbar';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Layout from '../template/Layout';
import Article, { TopSection, Content, Title } from '../template/Functions';
// import './chart.html'
class About extends React.Component {

	render() {

		return (

			<React.Fragment>
				<Article>
					<TopSection>
						<Title>
							Salutare
                        </Title>
					</TopSection>
					<Content>
						<p>
							ce faci
						</p>
						{/* <a href='#chartdiv'></a> */}
					</Content>
				</Article>
			</React.Fragment>
		);
	}
}

export default About