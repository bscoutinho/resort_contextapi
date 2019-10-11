import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: "Lorem ipsum dolor sir amet consectetur adipisicing. Magni, corporis!"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: "Lorem ipsum dolor sir amet consectetur adipisicing. Magni, corporis!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: "Lorem ipsum dolor sir amet consectetur adipisicing. Magni, corporis!"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: "Lorem ipsum dolor sir amet consectetur adipisicing. Magni, corporis!"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
