import Dish from './Dish';
import dataDishes from '../../data/dataDishes';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../Redux/dishesSlice';

const Dishes = () => {

    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            {dataDishes
            .filter(dish => {
                if(selectedCategory === 'ALL') return true;
                return selectedCategory === dish.category;
            })
            .map((dish) => <Dish dish={dish} key={dish.id} />)}
        </div>
    )
}
export default Dishes;