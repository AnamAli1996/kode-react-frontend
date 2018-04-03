import React from 'react'
import image from '.././logo.png'

export default class NavigationBar extends React.Component {
    render() {
        let styles ={
            width: "160px",
            height: "100px",
        };
        return (

            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <div>
                             <a className="image-nav" href='#'> <img  src={image} style={styles} alt="my image"/></a>
                        </div>
                        <a href="/login"> Login </a>
                        <a href="/signUp"> Register </a>
                        <a href="/dashboard"> Dashboard </a>
                    </div>
                </div>
                <div className="navNarrow">
                    <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                    <div className="narrowLinks">
                        <a href="#" onClick={this.burgerToggle}>Kode</a>
                        <a href="#" onClick={this.burgerToggle}>Login</a>
                        <a href="#" onClick={this.burgerToggle}>SignUp</a>
                    </div>
                </div>
            </nav>
        );
    }

    burgerToggle = function(){
        let linksEL = document.querySelector('.narrowLinks');
        if(linksEL.style.display === 'block') {
            linksEL.style.display = 'none';
        }else{
            linksEL.style.display = 'block';
        }
    }
}


