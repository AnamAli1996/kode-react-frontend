import React from 'react'

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }

    render() {
        return (
            <div className='header'>
                <div className='header-content header-content__left'>

                </div>
                <div className='header-content header-content__middle'>
                    Flash Cards
                </div>
                <div className='header-content header-content__right'>

                </div>
            </div>
        )
    }
}