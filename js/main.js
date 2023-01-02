function MenuClick(){
    document.getElementById("menupopup").classList.toggle("menu_pop_open")
    document.getElementById("menupopupside").classList.toggle("menu_pop_side_open")
    document.getElementById("menupopupbox").classList.toggle("menu_pop_box_open")
    document.body.classList.toggle("stop_scroll");
}

const drinks = [
	[["COFFEE"], ["HOT / COLD"], ["*Extra shot 5k<br>*Oat milk 10k "], [
		["img/drinks/Empty.jpg", "ESPRESSO", "22", null],
		["img/drinks/Ice Bils Original.jpg", "CAPPUCCINO", "30/36", null],
		["img/drinks/Ice Latte.jpg", "LATTE", "30/32", null],
		["img/drinks/Hot Specialty.jpg", "FLAT WHITE", "30", null],
		["img/drinks/Empty.jpg", "PICCOLO", "28", null],
		["img/drinks/Ice Americano.jpg", "LONG BLACK", "28/30", null],
		["img/drinks/Hot Mocha.jpg", "MOCHA", "33/36", null],
	]],
	[["NON COFFEE"], ["HOT / COLD"], [null], [
		["img/drinks/Hot Choco.jpg", "CHOCOLATE", "30/33", null],
		["img/drinks/Hot green tea latte.jpg", "MATCHA LATTE", "30/33", null],
		["img/drinks/Hot Hibiscus tea.jpg", "TEA", "18/20", "Camomile & Lemongrass / Jasmine / Earl Grey / English Breakfast / Blackcurrent / Mixed Berries & Hibiscus"],
		["img/drinks/Ice Chocolate.jpg", "CHOCOLATE BLENDED", "35", null],
		["img/drinks/Ice Greentea Latte.jpg", "MATCHA BLENDED", "35", null],
	]],
	[["BIL'S REFRESHER"], [null], [null], [
		["img/drinks/Ice Mangorens Yakult.jpg", "MANGORENS YAKULT", "18", "Mango juice with yakult"],
		["img/drinks/Sweet Sour Lychee.jpg", "LYCHEE YAKULT", "18", "Lychee juice with yakult"],
		["img/drinks/Strawberry Freeze.jpg", "STRAWBERRY FREEZE", "18", "Homemade Strawberry juice"],
		["img/drinks/Ice Mangorens.jpg", "SWEET MANGORENS", "18", "Mango juice with sweet orange"],
		["img/drinks/Berrygo Lemonade.jpg", "BERRYGO LEMONADE", "18", "Cranberry and mango with lemonade"],
		["img/drinks/Pinky Winky.jpg", "PINKY WINKY", "18", "Strawberry juice and strawberry sauce with yakult"],
		["img/drinks/Ice Hibiscus Tea.jpg", "HIBISCUS BERRY LEMONADE", "23", "Hibiscus and mixedberries tea with lemonade"],
		["img/drinks/Ice Tea Idk.jpg", "BLACKCURRENT LEMONADE", "23", "Blackcurrant tea with lemonade"],
	]],
	[["BIL'S SIGNATURE"], [null], [null], [
		["img/drinks/Ice Bil's Caramel.jpg", "ICED BIL'S COFFEE", "20", "Original or Caramel"],
		["img/drinks/Ice Bils Original.jpg", "ICED SHAKEN VANILLA COFFEE", "34", "Iced Arabica coffee with milk and a hint of vanilla"],
		["img/drinks/Ice Regal.jpg", "ICED BIL'S REGAL", "23", "Cold milk with Regal crackers<br>*add coffee shot 5k"],
		["img/drinks/Ban Acai.jpg", "BIL'S BAN•ACAI", "48", "Banana with acai blended"],
		["img/drinks/Cookies & Cream.jpg", "BIL'S COOKIES N' CREAM", "28", "Oreo smoothie with vanilla iced cream"],
	]]
];

const food = [
	[["PASTRIES"], [null], ["*ask our barista for other options"], [
		["img/food/placeholder.jpg", "PLAIN CROISSANT", "23", null],
		["img/food/placeholder.jpg", "ALMOND CROISSANT", "32", null],
		["img/food/placeholder.jpg", "ALMOND CHOCO CROISSANT", "35", null],
		["img/food/placeholder.jpg", "CHOCO CROISSANT", "25", null],
		["img/food/placeholder.jpg", "CHEESE CROISSANT", "35", null],
		["img/food/placeholder.jpg", "SMOKOED CHICKEN CROISSANT", "38", null],
		["img/food/placeholder.jpg", "MOLEN", "12", null],
		["img/food/placeholder.jpg", "BANANA BREAD<br>( CHOCOLATE / CHEESE )", "23", null],
	]],
	[["STARTERS"], ["( KEMANG )"], [null], [
		["img/food/placeholder.jpg", "CHICKEN STRIPS", "40", "Boneless Marinated Fried Chicken Thigh"],
		["img/food/placeholder.jpg", "FRIES", "25", "Fresh Cut Potato, Special Sauce"],
		["img/food/placeholder.jpg", "POTATO WEDGES", "25", "Fried Potato Crisp on the Outside, Soft on the Inside "],
		["img/food/placeholder.jpg", "FISH SKIN", "40", "Fried Fish Skin Coated in Salted Egg Sauce (Singapore Style)"],
		["img/food/placeholder.jpg", "TAHU ISI", "35", "Fried Tofu, Chicken, Vegetables (Spicy Peanut Sauce on the Side)"],
		["img/food/placeholder.jpg", "NASHVILLE CHICKEN WINGS", "48", "4 Fried Hot Wings"],
		["img/food/placeholder.jpg", "MIXED PLATTER", "55", "3 Chicken Strips, 2 Tahu Isi, Potato Wedges"],
		["img/food/placeholder.jpg", "MANGO SALAD", "45", "Iceberg Lettuce, Sliced Chicken, Carrot, Mango Sliced, Sweet & Sour Thai Dressing "],
		["img/food/placeholder.jpg", "CHICKEN CEASER SALAD", "52", "Romaine Lettuce, Grilled Chicken, Boiled Egg, Caesar Dressing, Parmesan Cheese, Croutons "],
	]],
	[["BRUNCH"], ["( KEMANG )"], ["*Available up to 11.30AM"], [
		["img/food/placeholder.jpg", "GRANOLA YOGHURT WITH BERRIES", "52", "Homemade Granola, Yogurt, Strawberry, Raspberry"],
		["img/food/placeholder.jpg", "FRENCH TOAST WITH BERRIES", "55", "Brioche Toast, Honey, Mixed Berries"],
		["img/food/placeholder.jpg", "AVOCADO ON TOAST<br>( ON WEEKENDS )", "55", "Sourdough, Soft Boiled Egg, Avocado Slice, Lemon Zest"],
		["img/food/placeholder.jpg", "EGGS BENEDICT", "65", "Croissant, Poached Egg, Beef Bacon, Hollandaise Sauce"],
		["img/food/placeholder.jpg", "TURKISH EGG", "58", "Sourdough, Poached Egg, Herb Yoghurt, Chilli Oil"],
		["img/food/placeholder.jpg", "SCRAMBLED EGGS", "58", "Sourdough, Creamy Egg, Sauted Mushroom, Chives"],
		["img/food/placeholder.jpg", "SHAKSUKA", "62", "Sourdough, Sunny Side Up, Beef Crumbles, Feta Cheese, Tomato Sauce"],
	]],
	[["TOASTIES"], ["( KEMANG )"], [null], [
		["img/food/placeholder.jpg", "CHEESE", "26", null],
		["img/food/placeholder.jpg", "CHEESE & MUSHROOM", "28", null],
		["img/food/placeholder.jpg", "BACON & CHEESE", "35", null],
		["img/food/placeholder.jpg", "BEEF BOLOGNESE", "30", null],
		["img/food/placeholder.jpg", "TUNA", "28", null],
	]],
	[["ASIAN"], ["( KEMANG )"], ["*Available from 11.30AM"], [
		["img/food/placeholder.jpg", "BIL'S BUTTER CHICKEN", "40", "Steamed Rice, Marinated Fried Chicken, Egg and Butter Floss, Curry Leaves, Garlic Sambal"],
		["img/food/placeholder.jpg", "NASI GORENG BIL'S<br>(*ALL DAY)", "38", "Fried Rice, Chicken, Indonesian Pickle, Garlic Sambal, Garlic Crackers, Egg (Sunny Side Up/ Omelette / Scrambled)"],
		["img/food/placeholder.jpg", "MIE GORENG BIL'S<br>(*ALL DAY)", "38", "Fried Noodle, Chicken, Meatball, Vegetables, Garlic Sambal Chilli Oil, Indonesian Pickle, Garlic Sambal, Garlic Crackers"],
		["img/food/placeholder.jpg", "SZECHUAN CHICKEN", "45", "Steamed Rice, Marinated Chicken, Special Sauce, Chilli Flakes"],
		["img/food/placeholder.jpg", "CHICKEN KATSU", "45", "Steamed Rice, Boneless Fried Chicken, Tonkatsu Sauce "],
		["img/food/placeholder.jpg", "NASI BALI BY DAPUWR", "48", "Steamed Rice, Fried Chicken, Mixed Vegetables, Minced Chicken Satay, Balinese Sambal"],
		["img/food/placeholder.jpg", "NASI JERUK BY DAPUWR", "48", "Fragrant Rice, Fried Chicken, Chilli Potatoes, Garlic Sambal "],
	]],
	[["WESTERN"], ["( KEMANG )"], ["*Available from 11.30AM"], [
		["img/food/placeholder.jpg", "SMASHED CHEESEBURGER", "65", "Brioche Bun, 80/20 Patty, Caramelised Onion, Gherkin, Fries"],
		["img/food/placeholder.jpg", "BUTTERMILK CHICKEN BURGER", "63", "Brioche Bun, Marinated Chicken Thigh, Mayo and Herb Sauce, Fries"],
		["img/food/placeholder.jpg", "SPAGHETTI MEATBALL", "55", "Spaghetti, Beef Meatball, Bolognese Sauce"],
		["img/food/placeholder.jpg", "AGLIO OLIO TUNA", "55", "Spaghetti, Tuna Chunk, Basil, Chilli Flakes and Italian Herbs"],
		["img/food/placeholder.jpg", "BIL'S FRIED CHICKEN", "55", "Buttermilk Marinated Quarter Chicken, Potato Wedges, Side Salad"],
	]],
	[["BIL'S x FITDELI"], ["( KEMANG )"], [null], [
		["img/food/placeholder.jpg", "CHICKEN PESTO SANDWICH", "30/55", null],
		["img/food/placeholder.jpg", "CHICKEN CAESAR SANDWICH", "32/58", null],
		["img/food/placeholder.jpg", "TUNA SALAD SANDWICH", "32/58", null],
		["img/food/placeholder.jpg", "BEEF SALSA SANDWICH", "36/64", null],
		["img/food/placeholder.jpg", "PHILLY CHEESE SANDWICH", "34/64", null],
		["img/food/placeholder.jpg", "ROAST BEEF SANDWICH", "38/68", null],
		["img/food/placeholder.jpg", "CHIMICHURRI CHICKEN SANDWICH", "34/62", null],
		["img/food/placeholder.jpg", "ROTI NOUGAT KACANG", "20", null],
		["img/food/placeholder.jpg", "ROTI NOUGAT COKLAT", "20", null],
		["img/food/placeholder.jpg", "ROTI NOUGAT KEJU", "20", null],
	]],
	[["BIL'S x NALU BOWLS"], ["( KEMANG )<br>REG / SMALL"], [null],[
		["img/food/placeholder.jpg", "MAVERICKS", "95/48", "Our Secret Acai Blend topped with Granola, Sliced of Banana, Strawberry, Coconut flake and Honey will quickly be your newest health addiction."],
		["img/food/placeholder.jpg", "ULUWATU", "80/40", "Dragon Fruit, Banana, Pepaya, Raspberries, Apple juice & Topped with Granola, Slice of Banana, Strawberry, Mango, Coconut flake & Honey."],
		["img/food/placeholder.jpg", "J-BAY", "75/38", "Peanut butter, Banana and Soy Milk... Topped with Granola, Slice of Banana & honey (The J-Bay is Protein packed, Get a Protein Boost out of this Smooth tasty treat). "],
		["img/food/placeholder.jpg", "MACARONIS", "70/35", "Pepaya, Mango, Dragon fruit, Pineapple, Strawberry, Apple juice (Refreshing The Macaronis bowl is tart and icy like your favorite sorbet) Topped with Granola, Slice of Banana, Strawberry & Coconut flake."],
		["img/food/placeholder.jpg", "TEAHUPO'O", "75/38", "Spinach Ginger, Bananas, Fresh Orange, Pineapple, Mango, Apple juice."],
		["img/food/placeholder.jpg", "PIPELINE", "70/35", "Banana, Pineapple, Mango, Fresh Coconut meat, Coconut Water and Coconut Milk...<br>Feel like you are in Hawaiian Paradise With our Creamy pina Colada bowls...<br>Topped with Granola, Slice of Banana, Strawberry and Coconut Flake."],
		["img/food/placeholder.jpg", "WAIMEA", "75/38", "Pear, Dates, Coconut meat, Banana Topped with Homemade Granola & Slice of Banana<br>Feels like healthy coconut ice cream, a must try!"],
	]]
];

const bigbottle = [
	[["0.5Lt / 1Lt"], [null], [null], [
		["img/bigbottle/Big BIL'S Original.jpg", "ICED BIL'S ORIGINAL", "35", null],
		["img/bigbottle/Big Long Black.jpg", "ICED LONG BLACK", "40/65", null],
		["img/bigbottle/Big Matcha Latte.jpg", "MATCHA LATTE", "50/80", null],
		["img/bigbottle/Big Chocolate.jpg", "ICED CHOCOLATE", "50/80", null],
		["img/bigbottle/Big Sweet Mangorens.jpg", "SWEET MANGORENS", "30/50", null],
		["img/bigbottle/Big Berrygo Lemonade.jpg", "BERRYGO LEMONADE", "30/50", null],
		["img/bigbottle/Big Strawberry Freeze.jpg", "STRAWBERRY FREEZE", "30/50", null],
	]]
];

const menu = [[drinks, "drinks"], [food, "food"], [bigbottle, "bigbottle"]];

function make_menu(char){
    menu.forEach((menu_cat) => {
        const category = menu_cat[0];
        const name = menu_cat[1];
        const menu_box = document.getElementById("menubox");
        let prod_count = 0;
    
        const link = document.createElement("a");
        const para = make_para("menu_opt", make_name(name))
        link.href = (name+".html#"+name[0]+"top")

        if(name[0] === char){
            link.addEventListener('click', function () {
                MenuClick();
            })
        }

        link.appendChild(para);
        menu_box.appendChild(link);

        if(category[0][0] != null && name[0] !== "b"){
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

const background = ["rgb(197, 239, 207)", "rgb(197, 208, 239)", "rgb(239, 228, 197)", "rgb(239, 197, 197)", "rgb(239, 197, 212)"]