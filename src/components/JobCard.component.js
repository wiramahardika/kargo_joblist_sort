import React from 'react';

const placeSeparatorStyle = {
    height: '2rem',
    borderLeft: '0.1rem dotted grey',
    marginLeft: '0.5rem',
    marginTop: '1rem',
    marginBottom: '1rem'
}

function JobCard({ origin, destination, price, date }) {
    const formatDate = (timestamp) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const dateObject = new Date(timestamp * 1000);
        return `${dateObject.getDate()} ${monthNames[dateObject.getMonth()]} ${dateObject.getFullYear()}`
    }

    const formatPrice = (price) => {
        const priceString = String(price)
        let result = ''
        for (let index = 0; index < priceString.length; index++) {
            const indexNow = priceString.length - index - 1
            if (index%3 === 0 && index > 0) {
                result = '.' + result
            }
            result = priceString.charAt(indexNow) + result
        }
        return 'Rp' + result
    }

    return (
        <div className="JobCard">
            <div className="card">
            <div className="card-body">
                <p className="card-text">{formatDate(date)}</p>
                <h5 className="card-title m-0">{origin.toUpperCase()}</h5>
                <div style={placeSeparatorStyle}></div>
                <h5 className="card-title m-0">{destination.toUpperCase()}</h5>
                <p className="card-text">{formatPrice(price)}</p>
            </div>
            </div>
        </div>
    );
}

export default JobCard;
