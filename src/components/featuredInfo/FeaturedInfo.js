import './FeaturedInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTilte'>Revenue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$5,600</span>
                    <span className='featuredMoneyRate'>
                        -11.4 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTilte'>Sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$7,200</span>
                    <span className='featuredMoneyRate'>
                        -1.4 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTilte'>Cost</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$3,400</span>
                    <span className='featuredMoneyRate'>
                        +7.4 <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo;
