function MenuClick(){
    document.getElementById("menupopup").classList.toggle("menu_pop_open")
    document.getElementById("menupopupside").classList.toggle("menu_pop_side_open")
    document.getElementById("menupopupbox").classList.toggle("menu_pop_box_open")
    document.body.classList.toggle("stop_scroll");
}

const drinks = [
	[["Coffee"], ["Hot / Cold"], ["*Extra shot 5k<br>*Oat milk 10k "], [
		["img/drinks/Empty.jpg", "Espresso", "22k", null],
		["img/drinks/Ice Bils Original.jpg", "Cappuccino", "30k / 36k", null],
		["img/drinks/Ice Latte.jpg", "Latte", "30k / 32k", null],
		["img/drinks/Hot Specialty.jpg", "Flat White", "30k", null],
		["img/drinks/Empty.jpg", "Piccolo", "28k", null],
		["img/drinks/Ice Americano.jpg", "Long Black", "28k / 30k", null],
		["img/drinks/Hot Mocha.jpg", "Mocha", "33k / 36k", null],
	]],
	[["Non Coffee"], ["Hot / Cold"], [null], [
		["img/drinks/Hot Choco.jpg", "Chocolate", "30k / 33k", null],
		["img/drinks/Hot green tea latte.jpg", "Matcha Latte", "30k / 33k", null],
		["img/drinks/Hot Hibiscus tea.jpg", "Tea", "18k / 20k", "Camomile & Lemongrass / Jasmine / Earl Grey / English Breakfast / Blackcurrent / Mixed Berries & Hibiscus"],
		["img/drinks/Ice Chocolate.jpg", "Chocolate Blended", "35k", null],
		["img/drinks/Ice Greentea Latte.jpg", "Matcha Blended", "35k", null],
	]],
	[["Bils Refresher"], [null], [null], [
		["img/drinks/Ice Mangorens Yakult.jpg", "Mangorens Yakult", "18k", "Mango juice with yakult"],
		["img/drinks/Sweet Sour Lychee.jpg", "Lychee Yakult", "18k", "Lychee juice with yakult"],
		["img/drinks/Strawberry Freeze.jpg", "Strawberry Freeze", "18k", "Homemade Strawberry juice"],
		["img/drinks/Ice Mangorens.jpg", "Sweet Mangorens", "18k", "Mango juice with sweet orange"],
		["img/drinks/Berrygo Lemonade.jpg", "Berrygo Lemonade", "18k", "Cranberry and mango with lemonade"],
		["img/drinks/Pinky Winky.jpg", "Pinky Winky", "18k", "Strawberry juice and strawberry sauce with yakult"],
		["img/drinks/Ice Hibiscus tea.jpg", "Hibiscus Berry Lemonade", "23k", "Hibiscus and mixedberries tea with lemonade"],
		["img/drinks/Ice Tea Idk.jpg", "Blackcurrent Lemonade", "23k", "Blackcurrant tea with lemonade"],
	]],
	[["Bils Signature"], [null], [null], [
		["img/drinks/Ice Bil's Caramel.jpg", "Iced Bil's Coffee", "20k", "Original or Caramel"],
		["img/drinks/Ice Bils Original.jpg", "Iced Shaken Vanilla Coffee", "34k", "Iced Arabica coffee with milk and a hint of vanilla"],
		["img/drinks/Ice Regal.jpg", "Iced Bil's Regal", "23k", "Cold milk with Regal crackers<br>*add coffee shot 5k"],
		["img/drinks/Ban Acai.jpg", "Bil's Ban•Acai", "48k", "Banana with acai blended"],
		["img/drinks/Cookies & Cream.jpg", "Bil's Cookies N' Cream", "28k", "Oreo smoothie with vanilla iced cream"],
	]]
];

const food = [
	[["Pastries"], [null], ["*ask our barista for other options"], [
		["img/food/pastries/Plain Croissant.jpg", "Plain Croissant", "23k", null],
		["img/food/pastries/Almond Croissant.jpg", "Almond Croissant", "32k", null],
		["img/food/placeholder.jpg", "Almond Choco Croissant", "35k", null],
		["img/food/pastries/Choco Croissant.jpg", "Choco Croissant", "25k", null],
		["img/food/pastries/Cheese Croissant.jpg", "Cheese Croissant", "35k", null],
		["img/food/pastries/Smoked Chicken Croissant.jpg", "Smoked Chicken Croissant", "38k", null],
		["img/food/pastries/Molen.jpg", "Molen", "12k", null],
		["img/food/pastries/Banana Bread.jpg", "Banana Bread<br>( Chocolate / Cheese )", "23k", null],
		["img/food/pastries/Brookie.jpg", "Brookie", "35k", null],
		["img/food/pastries/Choco Crumble Pie.jpg", "Choco Crumble Pie", "38k", null],
	]],
	[["Starters"], ["( Kemang )"], [null], [
		["img/food/starter/Chicken Strip.jpg", "Chicken Strips", "40k", "Boneless Marinated Fried Chicken Thigh"],
		["img/food/starter/Fries.jpg", "Fries", "25k", "Fresh Cut Potato, Special Sauce"],
		["img/food/starter/Potato Wedges.jpg", "Potato Wedges", "25k", "Fried Potato Crisp on the Outside, Soft on the Inside "],
		["img/food/starter/Fish Skin.jpg", "Fish Skin", "40k", "Fried Fish Skin Coated in Salted Egg Sauce (Singapore Style)"],
		["img/food/starter/Tahu Isi.jpg", "Tahu Isi", "35k", "Fried Tofu, Chicken, Vegetables (Spicy Peanut Sauce on the Side)"],
		["img/food/starter/Nashville Chicken Wings.jpg", "Nashville Chicken Wings", "48k", "4 Fried Hot Wings"],
		["img/food/starter/Mixed Platter.jpg", "Mixed Platter", "55k", "3 Chicken Strips, 2 Tahu Isi, Potato Wedges"],
		["img/food/starter/Mango Salad.jpg", "Mango Salad", "45k", "Iceberg Lettuce, Sliced Chicken, Carrot, Mango Sliced, Sweet & Sour Thai Dressing "],
		["img/food/starter/Chicken Caesar Salad.jpg", "Chicken Caeser Salad", "52k", "Romaine Lettuce, Grilled Chicken, Boiled Egg, Caesar Dressing, Parmesan Cheese, Croutons "],
	]],
	[["Brunch"], ["( Kemang )"], ["*Available up to 11.30AM"], [
		["img/food/brunch/Granola Yogurt with Berries.jpg", "Granola Yogurt With Berries", "52k", "Homemade Granola, Yogurt, Strawberry, Raspberry"],
		["img/food/brunch/French Toast With Berries.jpg", "French Toast With Berries", "55k", "Brioche Toast, Honey, Mixed Berries"],
		["img/food/brunch/Avocado On Toast.jpg", "Avocado On Toast<br>( On Weekends )", "55k", "Sourdough, Soft Boiled Egg, Avocado Slice, Lemon Zest"],
		["img/food/brunch/Eggs Benedict.jpg", "Eggs Benedict", "65k", "Croissant, Poached Egg, Beef Bacon, Hollandaise Sauce"],
		["img/food/brunch/Turkish Eggs.jpg", "Turkish Eggs", "58k", "Sourdough, Poached Egg, Herb Yoghurt, Chilli Oil"],
		["img/food/brunch/Scrambled Eggs.jpg", "Scrambled Eggs", "58k", "Sourdough, Creamy Egg, Sauted Mushroom, Chives"],
		["img/food/brunch/Shaksuka.jpg", "Shaksuka", "62k", "Sourdough, Sunny Side Up, Beef Crumbles, Feta Cheese, Tomato Sauce"],
		["img/food/brunch/Cured Salmon.jpg", "Cured Salmon", "25k", "(add on)"],
	]],
	[["Toasties"], ["( Kemang )"], [null], [
		["img/food/toasties/.jpg", "Cheese", "26k", null],
		["img/food/placeholder.jpg", "Cheese & Mushroom", "28k", null],
		["img/food/placeholder.jpg", "Bacon & Cheese", "35k", null],
		["img/food/placeholder.jpg", "Beef Bolognese", "30k", null],
		["img/food/placeholder.jpg", "Tuna", "28k", null],
	]],
	[["Asian"], ["( Kemang )"], ["*Available from 11.30AM"], [
		["img/food/asian/Bil's Butter Chicken.jpg", "Bil's Butter Chicken", "40k", "Steamed Rice, Marinated Fried Chicken, Egg and Butter Floss, Curry Leaves, Garlic Sambal"],
		["img/food/asian/Nasi Goreng Bil's.jpg", "Nasi Goreng Bil's<br>(*all Day)", "38k", "Fried Rice, Chicken, Indonesian Pickle, Garlic Sambal, Garlic Crackers, Egg (Sunny Side Up/ Omelette / Scrambled)"],
		["img/food/asian/Mie Goreng Bil's.jpg", "Mie Goreng Bil's<br>(*all Day)", "38k", "Fried Noodle, Chicken, Meatball, Vegetables, Garlic Sambal Chilli Oil, Indonesian Pickle, Garlic Sambal, Garlic Crackers"],
		["img/food/asian/Szechuan Chicken.jpg", "Szechuan Chicken", "45k", "Steamed Rice, Marinated Chicken, Special Sauce, Chilli Flakes"],
		["img/food/asian/Chicken Katsu.jpg", "Chicken Katsu", "45k", "Steamed Rice, Boneless Fried Chicken, Tonkatsu Sauce "],
		["img/food/asian/Nasi Bali By Dapuwr.jpg", "Nasi Bali By Dapuwr", "48k", "Steamed Rice, Fried Chicken, Mixed Vegetables, Minced Chicken Satay, Balinese Sambal"],
		["img/food/asian/Nasi Jeruk By Dapuwr.jpg", "Nasi Jeruk By Dapuwr", "48k", "Fragrant Rice, Fried Chicken, Chilli Potatoes, Garlic Sambal "],
	]],
	[["Western"], ["( Kemang )"], ["*Available from 11.30AM"], [
		["img/food/western/Smashed Cheese Burger.jpg", "Smashed Cheese Burger", "65k", "Brioche Bun, 80/20 Patty, Caramelised Onion, Gherkin, Fries"],
		["img/food/western/Buttermilk Chicken Burger.jpg", "Buttermilk Chicken Burger", "63k", "Brioche Bun, Marinated Chicken Thigh, Mayo and Herb Sauce, Fries"],
		["img/food/western/Spaghetti Meatball.jpg", "Spaghetti Meatball", "55k", "Spaghetti, Beef Meatball, Bolognese Sauce"],
		["img/food/western/Aglio Olio Tuna.jpg", "Aglio Olio Tuna", "55k", "Spaghetti, Tuna Chunk, Basil, Chilli Flakes and Italian Herbs"],
		["img/food/western/Bil's Fried Chicken.jpg", "Bil's Fried Chicken", "55k", "Buttermilk Marinated Quarter Chicken, Potato Wedges, Side Salad"],
	]],
	[["Bil 's x Nalu Bowls"], ["( Kemang )<br>Reg / Small"], [null], [
		["img/food/placeholder.jpg", "Mavericks", "95k / 48k", "Our Secret Acai Blend topped with Granola, Sliced of Banana, Strawberry, Coconut flake and Honey will quickly be your newest health addiction."],
		["img/food/placeholder.jpg", "Uluwatu", "80k / 40k", "Dragon Fruit, Banana, Pepaya, Raspberries, Apple juice & Topped with Granola, Slice of Banana, Strawberry, Mango, Coconut flake & Honey."],
		["img/food/placeholder.jpg", "J-bay", "75k / 38k", "Peanut butter, Banana and Soy Milk... Topped with Granola, Slice of Banana & honey (The J-Bay is Protein packed, Get a Protein Boost out of this Smooth tasty treat). "],
		["img/food/placeholder.jpg", "Macaronis", "70k / 35k", "Pepaya, Mango, Dragon fruit, Pineapple, Strawberry, Apple juice (Refreshing The Macaronis bowl is tart and icy like your favorite sorbet) Topped with Granola, Slice of Banana, Strawberry & Coconut flake."],
		["img/food/placeholder.jpg", "Teahupo'o", "75k / 38k", "Spinach Ginger, Bananas, Fresh Orange, Pineapple, Mango, Apple juice."],
		["img/food/placeholder.jpg", "Pipeline", "70k / 35k", "Banana, Pineapple, Mango, Fresh Coconut meat, Coconut Water and Coconut Milk...<br>Feel like you are in Hawaiian Paradise With our Creamy pina Colada bowls...<br>Topped with Granola, Slice of Banana, Strawberry and Coconut Flake."],
		["img/food/placeholder.jpg", "Waimea", "75k / 38k", "Pear, Dates, Coconut meat, Banana Topped with Homemade Granola & Slice of Banana<br>Feels like healthy coconut ice cream, a must try!"],
	]]
];

const food2 = [
	
]

const bottle = [
	[["Big Bottle"], ["0.5Lt / 1Lt"], [null], [
		["img/bottle/Big BIL'S Original.jpg", "Iced Bil's Original", "35k", null],
		["img/bottle/Big Long Black.jpg", "Iced Long Black", "40k / 65k", null],
		["img/bottle/Big Matcha Latte.jpg", "Matcha Latte", "50k / 80k", null],
		["img/bottle/Big Chocolate.jpg", "Iced Chocolate", "50k / 80k", null],
		["img/bottle/Big Sweet Mangorens.jpg", "Sweet Mangorens", "30k / 50k", null],
		["img/bottle/Big Berrygo Lemonade.jpg", "Berrygo Lemonade", "30k / 50k", null],
		["img/bottle/Big Strawberry Freeze.jpg", "Strawberry Freeze", "30k / 50k", null],
	]],
	[["Vitamin"], [null], [null], [
		["img/bottle/Apple Vitamin.jpg", "Apple Vitamin", "1111k", null],
		["img/bottle/Lime Vitamin.jpg", "Lime Vitamin", "1111k", null],
		["img/bottle/Orange Vitamin.jpg", "Orange Vitamin", "1111k", null],
	]]
];

const menu = [[drinks, "drinks"], [food, "food"], [bottle, "bottle"]];

function make_menu(char){
    menu.forEach((menu_cat) => {
        const category = menu_cat[0];
        const name = menu_cat[1];
        const menu_box = document.getElementById("menubox");
        let prod_count = 0;
    
        const link = document.createElement("a");
        const para = make_para("menu_opt", make_name(name));
        link.href = (name+".html#"+name[0]+"top")

        if(name[0] === char){
            link.addEventListener('click', function () {
                MenuClick();
            })
        }

        link.appendChild(para);
        menu_box.appendChild(link);

        if(category[0][0] != null){
            category.forEach((ctgy) => {
                prod_count++;
                const sublink = document.createElement("a");
                const subpara = make_para("menu_sub_opt", ctgy[0])
                sublink.href = (name+".html#"+name[0]+prod_count)
                
                if(name[0] === char){
                    sublink.addEventListener('click', function () {
                        MenuClick();
                    })
                }

                sublink.appendChild(subpara);
                menu_box.appendChild(sublink);
            });
        }
    });
}

function make_div(a, b){
    const element = document.createElement("div");
    element.className = a;
    if(b != null) element.id = b;
    return element;
}

function make_para(a, b){
    const element = document.createElement("p");
    element.className = a;
    element.innerHTML = b;
    return element;
}

function make_name(name){
    return [...(name.toUpperCase())].join(" ");
}