import React from 'react'
import Togglable from '../utility/Togglable'
import EmissionImage from '../../assets/emissions.png'
import FoodVolume from '../../assets/volume_food.png'

const ClimateTalk = (props) => {
    return (
        <div>
            <h1>Why is Agriculture Reform Important for Humanity?</h1>
            <Togglable buttonLabel='Click Here to Find Out More' closeLabel='Close'>
                <h2>The Emissions Associated with Agriculture</h2>
                <img src={EmissionImage} style={{width:'400px'}}/>
                <h3>10% of US Emissions is due to Agriculture</h3>
                <p>"The US food system as a whole is responsible for the emissions of approximately 2.6 tCO2e per person per year [35]. By our calculations, this accounts for roughly 10% of overall US GHG emissions [35, 36]. Fresh produce accounts for roughly one-tenth of food-related GHG emissions, or approximately 1% of overall US GHG emissions [35]. While 1% of US GHG emissions may not seem like much, the United States emits roughly 20% of the world's greenhouse gases, despite having only 5% of the world's population. With global population growth and increasing preference for the consumer patterns of wealthier nations, food-related emissions—in particular, emissions associated with specialty commodities such as fresh produce—are likely to increase."</p>
                <p>Source:
                    <br />
                    <a href='https://iopscience.iop.org/article/10.1088/1748-9326/ab6c2f'>Scientific Paper</a>
                </p>
                <br/>
                <h2>The Food Wastage</h2>
                <h3>30% of global food production is wasted</h3>
                <p>"The United Nations’ Food and Agriculture Organization estimates that, with over 30% of global food production ending up as food waste, it is $2.6 trillion dollar issue.... According to ReFED, a nonprofit committed to reducing US food waste, over 80% of food waste occurs at food service and retail locations as well as consumers’ homes so, the quicker food gets to its destination, the less likely it will have to be thrown away."</p>
                <p>Source:
                    <br />
                    <a href='https://indooragtechnyc.com/is-agriculture-the-next-area-to-experience-decentralization/'>Eco Investor Op-ed</a>
                </p>
                <h3>Total Vood Volume</h3>
                <img src={FoodVolume} style={{width:'400px'}}/>
                <p>Source:
                    <br />
                    <a href='https://css.umich.edu/factsheets/us-food-system-factsheet'>Source for Total Volume of Food</a>
                </p>
            </Togglable>
        </div>
    )
}

export default ClimateTalk