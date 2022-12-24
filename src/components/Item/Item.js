import React from 'react';
import style from './Item.module.css'

const Item = ({n, remove}) => {


    return (
        <div className={style.container}>
            <div style={{background: n.color}} className={style.color}></div>
            <div>
                <p>{n.title}</p>
                <p>{n.color.toUpperCase()}</p>
            </div>
            <button onClick={() => remove(n)} className={style.btn}> Delete </button>
        </div>
    );
};

export default Item;