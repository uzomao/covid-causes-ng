import React, { useState } from 'react'

import '../styles/filter.css'

const Filter = ({ filters }) => {

    const filterParams = [
        { name: 'city', formatted: 'City' },
        { name: 'neighbourhood', formatted: 'Neighbourhood' },
        { name: 'aidProvided', formatted: 'Aid Provided'},
        {name: 'officialStatus', formatted: 'Official Status'},
        {name: 'digitalEvidence', formatted: 'Digital Evidence'}
    ]

    const [ filter, setFilter ] = useState('')

    return (
        <div className="is-overlay section" 
            style={{width: '100vw', 
                    height: '100vh', 
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
                        filterParams.map(({ name, formatted}) => 
                            <h4>
                                <button onClick={() => setFilter(name)} className="is-size-2 filter-btn" style={{
                                        background: 'none',
                                        border: 'none',
                                        color: '#FFF',
                                        cursor: 'pointer'
                                    }}>
                                    {formatted}
                                </button>
                            </h4>
                        )
                    }
                </div>

                <div className="column content">
                    {
                        filters[filter].map((filter) => <p>{filter}</p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Filter
