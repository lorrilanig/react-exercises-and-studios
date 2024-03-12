import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor = () => {
    let authorLink = './https://linktr.ee/miriamjsnice';
    let authorPhoto = 'https://images.immediate.co.uk/production/volatile/sites/30/2020/05/miriam-nice-thumb_0-82dff86.jpg?quality=90&resize=140,140';
    let authorName = 'Miriam Nice';
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Miriam Nice, project editor at goodfood.com" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Nice Food</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
   <div>
      <h1>Roasted Chickpea Wraps</h1>
      <p>This super-healthy vegetarian supper packs in 4 of your 5 a day, with avocados, roasted red peppers and spiced chickpeas</p>
   </div>
   <RecipeAuthor />
</div>
        );
    }
}
    
export default RecipeDescription;

