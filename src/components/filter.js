import React, { useState } from 'react'

import '../styles/filter.css'

const Filter = ({ filters, setFilterValue, setShowFilter, setTableFilterBy }) => {

    const filterParams = [
        { name: 'city', formatted: 'City' },
        { name: 'neighbourhood', formatted: 'Neighbourhood' },
        { name: 'aidProvided', formatted: 'Aid Provided' },
        { name: 'officialStatus', formatted: 'Official Status' },
        // { name: 'digitalEvidence', formatted: 'Digital Evidence' }
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
                    overflowY: 'scroll',
                    position: 'fixed'
                }}
        >
            
            <div className="level">
                <h2 className='level-left title has-text-weight-bold' style={{color: '#FFF'}}>Filter By</h2>
                <button onClick={() => setShowFilter(false)}
                className='level-right'
                style={hiddenBtnStyle}
                >
                    <h2 className='level-right is-size-1 is-size-3-mobile has-text-weight-bold' 
                    style={{paddingRight: '10px'}}>
                        X
                    </h2>
                </button>   
            </div>

            <div className="columns section" style={{paddingLeft: 0}}>
                <div className="column content">
                    {
                        filterParams.map(({ name, formatted}, index) => 
                            <h4 key={index}>
                                <button onClick={() => { 
                                    setFilter(name)
                                    setTableFilterBy(name)
                                }} className="is-size-2 is-size-4-mobile has-text-left filter-btn" style={hiddenBtnStyle}>
                                    {formatted}
                                </button>
                            </h4>
                        )
                    }
                </div>

                {
                    filter &&
                        <div className="column content" style={{overflowY: 'scroll'}}>
                            {
                                filters[filter].map((filter, index) => 
                                    <p key={index}>
                                        <button onClick={() => {
                                            setFilterValue(filter)
                                            setShowFilter(false) //close the filtering overlay
                                        }}
                                            className="is-size-4 filter-btn has-text-left" style={hiddenBtnStyle}
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
