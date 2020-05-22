import React, { useState } from 'react';
import Card from './Card.js';
import './list.css';

function List(props){
    //setting up cards state
    //const [cards, ? ] = useState();

    return(
    <section className="List">
        <header className="List-header">
            <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
            {//error here calling map on 'undefined'}
            {props.cards.map(card => 
                <Card
                    key={'card-'+card.id}
                    title={card.title}
                    content={card.content}
                />
            )}
        <button type="button" class="List-add-button">
              + Add Random Card
        </button> 
        </div>
     
    </section>
    );
}

export default List;