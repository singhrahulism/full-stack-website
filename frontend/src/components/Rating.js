import React from 'react'

function Rating({ value, text, color }) {
    return (
        <div>
            <span style={{color}}>
                <i className={
                    value >= 1
                    ?
                        'fas fa-star'
                        :
                        value >= 0.5
                        ?
                            'fas fa-star-half-alt'
                            :
                            'far fa-star'
                }/>
            </span>
            <span style={{color}} className='mx-1'>
                <i className={
                    value >= 2
                    ?
                        'fas fa-star'
                        :
                        value >= 1.5
                        ?
                            'fas fa-star-half-alt'
                            :
                            'far fa-star'
                }/>
            </span>
            <span style={{color}} className='mx-1'>
                <i className={
                    value >= 3
                    ?
                        'fas fa-star'
                        :
                        value >= 2.5
                        ?
                            'fas fa-star-half-alt'
                            :
                            'far fa-star'
                }/>
            </span>
            <span style={{color}} className='mx-1'>
                <i className={
                    value >= 4
                    ?
                        'fas fa-star'
                        :
                        value >= 3.5
                        ?
                            'fas fa-star-half-alt'
                            :
                            'far fa-star'
                }/>
            </span>
            <span style={{color}} className='mx-1'>
                <i className={
                    value >= 5
                    ?
                        'fas fa-star'
                        :
                        value >= 4.5
                        ?
                            'fas fa-star-half-alt'
                            :
                            'far fa-star'
                }/>
            </span>
            
            {text}
        </div>
    )
}

export default Rating