import type { ColProps } from "antd";

import { BasicContent } from "#src/components";
import { Col, Row } from "antd";

import BarChart from "./components/bar-chart";
import CardList from "./components/card-list";
import LineChart from "./components/line-chart";

import PieChart from "./components/pie-chart";
import RatingBarChart from "./components/rating-bar-chart";
import TopMoviesRatingBarChart from "./components/top-movies-rating-bar-chart";
import MonthlyViewsBarChart from "./components/monthly-views-bar-chart";
import TopUsersBarChart from "./components/top-users-bar-chart";
import AvgWatchtimeUserBarChart from "./components/avg-watchtime-user-bar-chart";
import TopMoviesViewsBarChart from "./components/top-movies-views-bar-chart";
import ViewsByGenrePieChart from "./components/views-by-genre-pie-chart";
import ViewsByPeriodCharts from "./components/views-by-period-charts";
import Last30DaysViewsLineChart from "./components/last-30-days-views-line-chart";
import RatingDistributionHistogram from "./components/rating-distribution-histogram";
import TopMoviesLikesBarChart from "./components/top-movies-likes-bar-chart";

const wrapperCol: ColProps = {
	xs: 24,
	sm: 24,
	md: 12,
	lg: 12,
	xl: 12,
	xxl: 12,
};

export default function Home() {
	return (
		<BasicContent>
			<CardList />
			<Row gutter={[20, 20]} style={{ marginTop: 20 }}>
				<Col {...wrapperCol}><MonthlyViewsBarChart /></Col>
				<Col {...wrapperCol}><Last30DaysViewsLineChart /></Col>
			</Row>
			<Row gutter={[20, 20]} style={{ marginTop: 20 }}>
				<Col {...wrapperCol}><TopUsersBarChart /></Col>
				<Col {...wrapperCol}><AvgWatchtimeUserBarChart /></Col>
			</Row>
			<Row gutter={[20, 20]} style={{ marginTop: 20 }}>
				<Col {...wrapperCol}><TopMoviesViewsBarChart /></Col>
				<Col {...wrapperCol}><TopMoviesRatingBarChart /></Col>
			</Row>
			<Row gutter={[20, 20]} style={{ marginTop: 20 }}>
				<Col {...wrapperCol}><ViewsByGenrePieChart /></Col>
				<Col {...wrapperCol}><TopMoviesLikesBarChart /></Col>
			</Row>
			<Row gutter={[20, 20]} style={{ marginTop: 20 }}>
				<Col span={24}><ViewsByPeriodCharts /></Col>
			</Row>
			<Row gutter={[20, 20]} style={{ marginTop: 20 }}>
				<Col {...wrapperCol}><RatingBarChart /></Col>
				<Col {...wrapperCol}><RatingDistributionHistogram /></Col>
			</Row>
		</BasicContent>
	);
}
