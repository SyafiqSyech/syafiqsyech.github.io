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
	[["TITLE"], [null], [null], [
		["img/placeholder.jpg", "PRODUCT", "11", null],
		["img/placeholder.jpg", "PRODUCT", "11", "test"],
		["img/placeholder.jpg", "PRODUCT", "11", "test"],
		["img/placeholder.jpg", "PRODUCT", "11", null],
		["img/placeholder.jpg", "PRODUCT", "11", "test"],
	]],
	[["TITLE"], [null], [null], [
		["img/placeholder.jpg", "PRODUCT", "11", null],
		["img/placeholder.jpg", "PRODUCT", "11", "test"],
		["img/placeholder.jpg", "PRODUCT", "11", "test"],
		["img/placeholder.jpg", "PRODUCT", "11", null],
		["img/placeholder.jpg", "PRODUCT", "11", "test"],
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

const menu = [[food, "food"], [drinks, "drinks"], [bigbottle, "bigbottle"]];

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