import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour.jsx';
import { tourData } from './tourData';

class TourList extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        const { tours } = this.state;
        const sortTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortTours
        })
    }
    render() {
        console.log(this.state.tours)
        const { tours } = this.state;
        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                    )
                })}
            </section>
        )
    }
}
export default TourList;
