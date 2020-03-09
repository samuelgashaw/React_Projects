import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi harum, iure iste perspiciatis iusto, voluptatum soluta nemo vero magnam asperiores. Dolor ullam error ipsum iusto rem et placeat voluptatum!'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi harum, iure iste perspiciatis iusto, voluptatum soluta nemo vero magnam asperiores. Dolor ullam error ipsum iusto rem et placeat voluptatum!'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi harum, iure iste perspiciatis iusto, voluptatum soluta nemo vero magnam asperiores. Dolor ullam error ipsum iusto rem et placeat voluptatum!'
      },
      {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi harum, iure iste perspiciatis iusto, voluptatum soluta nemo vero magnam asperiores. Dolor ullam error ipsum iusto rem et placeat voluptatum!'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
