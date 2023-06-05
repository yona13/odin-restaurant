import Burratta from "../images/azerbaijan-burrata.jpg";
import GarlicBread from "../images/azerbaijan-cheesy-garlic-bread.jpg";
import SpankopitaRolls from "../images/azerbaijan-spanakopita-spring-rolls.jpg";
import BurrataPizza from "../images/azerbaijan-burrata-pizza.jpg";
import MargharitaPizza from "../images/azerbaijan-margharita-pizza.jpg";
import SpicyPizza from "../images/azerbaijan-spicy-pizza.jpg";
import MushroomPizza from "../images/azerbaijan-mushroom-pizza.jpg";
import MiniPizza from "../images/azerbaijan-mini-pizza.jpg";
import ChocBrownie from "../images/azerbaijan-choc-brownie.jpg";
import Tiramisu from "../images/azerbaijan-tiramisu.jpg";

/**
 * List of Menu Objects
 * 
 * Contains: 
 *      -> Course Type
 *      -> Name for meal
 *      -> Description of Meal
 *      -> Price
 *      -> Image Source
 */
export default [
    {
        course: "starter",
        name: "Burrata",
        description: "Fresh tomatoes served with burrata cheese on grilled bread",
        price: 5,
        src: Burratta
    }, {
        course: "starter",
        name: "Garlic Bread",
        description: "Oven baked cheesy garlic bread",
        price: 7,
        src: GarlicBread
    }, {
        course: "starter",
        name: "Spanakopita Spring Rolls",
        description: "Samian style spanakopita, rolled up",
        price: 5,
        src: SpankopitaRolls
    }, {
        course: "main",
        name: "Burrata Pizza",
        description: "Want a burrata? Want a pizza? Why not both?",
        price: 11,
        src: BurrataPizza
    }, {
        course: "main",
        name: "Margharitta Pizza",
        description: "The safe one. Tomato sauce and cheese on pizza",
        price: 11,
        src: MargharitaPizza
    }, {
        course: "main",
        name: "The Central Fire Pizza",
        description: "Olives & Serrano Peppers. Served with hot sauce",
        price: 13,
        src: SpicyPizza
    }, {
        course: "main",
        name: "Pizza ai Funghi",
        description: "For all the mycologists out there",
        price: 13,
        src: MushroomPizza
    }, {
        course: "main",
        name: "Kids Pizza",
        description: "The kid-sized pizza. A mini margharitta",
        price: 7,
        src: MiniPizza
    }, {
        course: "dessert",
        name: "Chocolate Brownie with Vanilla Ice Cream",
        description: "This rich chocoloate brownie is served with some vanilla ice cream",
        price: 7,
        src: ChocBrownie
    }, {
        course: "dessert",
        name: "Tiramisu",
        description: "Elegant and rich, this delicately made dessert is made with espresso, wine, rum and cocoa powder",
        price: 11,
        src: Tiramisu
    },
];