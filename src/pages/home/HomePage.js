import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { userData } from '../../DummyData';
import './HomePage.css';

function HomePage() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' datakey='Active User' grid />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default HomePage;
