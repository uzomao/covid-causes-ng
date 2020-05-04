import React, { useState } from 'react'

import '../styles/filter.css'

const Filter = ({ filters, setFilterValue, setShowFilter }) => {

    const filterParams = [
        { name: 'city', formatted: 'City' },
        { name: 'neighbourhood', formatted: 'Neighbourhood' },
        { name: 'aidProvided', formatted: 'Aid Provided' },
        { name: 'officialStatus', formatted: 'Official Status' },
        { name: 'digitalEvidence', formatted: 'Digital Evidence' }
    ]

    const [ filter, setFilter ] = useState(null)
    
    //setFilter is a state property of the filter component that sets what we are filtering by white
    //setFilterValue is a state setter imported from the table component that sets the value of that thing we are filtering by

    const hiddenBtnStyle = {
        background: 'none',
        border: 'none',
        color: '#FFF',
        cursor: 'pointer'
    }

    return (
        <div className="is-overlay section" 
            style={{
                    backgroundColor: '#1E272E',
                    color: '#FFFFFF',
                    opacity: 0.95,
                    overflowY: 'none'
                }}
        >
            
            <div>
                <h2 className='title has-text-weight-bold' style={{color: '#FFF'}}>Filter By</h2>
            </div>

            <div className="columns section" style={{paddingLeft: 0}}>
                <div className="column content">
                    {
                        filterParams.map(({ name, formatted}, index) => 
                            <h4 key={index}>
                                <button onClick={() => setFilter(name)} className="is-size-2 filter-btn" style={hiddenBtnStyle}>
                                    {formatted}
                                </button>
                            </h4>
                        )
                    }
                </div>

                {
                    filter &&
                        <div className="column content">
                            {
                                filters[filter].map((filter, index) => 
                                    <p key={index}>
                                        <button onClick={() => {
                                            setFilterValue(filter)
                                            setShowFilter(false) //close the filtering overlay
                                        }}
                                            className="is-size-4 filter-btn" style={hiddenBtnStyle}
                                        >
                                            {filter}
                                        </button>
                                    </p>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Filter
