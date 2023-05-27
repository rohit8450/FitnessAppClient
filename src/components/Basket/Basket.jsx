import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../Item/Item';
import Search from '../Search/Search';

const Basket = () => {

    const [items, setItems] = useState([]);
    const [foodItem, setFoodItem] = useState('');
    

    useEffect(() => {

        const fetchDetails = async () => {

            let foodSearched = foodItem;

            await  axios
            .get(`https://api.calorieninjas.com/v1/nutrition?query=${foodSearched}`, {
              headers: {
                "X-Api-Key": "hW0nPXoI867n6vDfXE9s1A==ADrbiKlTA8NCRNKH"
              }
            })
            .then((response) => {

            //  console.log(response.data.items);
             setItems(response.data.items);

            //  console.log(items);

             })
            .catch((error) => console.log(error.message));
    
        }

        fetchDetails();

    }, []);



    const fetchItems = () => {
        
        axios
          .get(`https://api.calorieninjas.com/v1/nutrition?query=${foodItem}`, {
            headers: {
              "X-Api-Key": "9AWK9Jt/hdW4RBKFSPPApQ==zDIOA8e7Ci1fw8hJ"
            }
          })
          .then((response) => {
          //  console.log(response.data.items);
           setItems(response.data.items);
           })
          .catch((error) => console.log(error.message));
      
      }

      const getItems = () => {

        let foodlist = [];

        items.map((item, index) => {
         return (
          foodlist.push(<Item 
            key={index}
            name={item.name}
            calories={item.calories}
            carbs={item.carbohydrates_total_g}
            serve={item.serving_size_g}
            cholesterol={item.cholesterol_mg}
            fat_saturated={item.fat_saturated_g}
            fat_total={item.fat_total_g}
            fiber={item.fiber_g}
            potassium={item.potassium_mg}
            protein={item.protein_g}
            sodium={item.sodium_mg}
            sugar={item.sugar_g}
            />)
         )
        });
        
        return foodlist;
      }


      let allItems = getItems();

      const storeValue = (searchValue) => {
 
        setFoodItem(searchValue);
        fetchItems();
        // console.log(foodItem)
      }
      
      const storeClick = () => {
        fetchItems();
        console.log('click')
      }
      
  

  return (
    <div className="basket">
       <Search sendValue={storeValue} sendEnter={storeClick} sendClick={storeClick} />
        
        <div className='items'>
          { allItems.length === 0 ? <div className='error'>No food found... <i className="fas fa-pizza-slice"></i></div> : allItems }
        </div>   
    </div>
  )
}

export default Basket
