function MenuClick(){
    document.getElementById("menupopup").classList.toggle("menu_pop_open")
    document.getElementById("menupopupside").classList.toggle("menu_pop_side_open")
    document.getElementById("menupopupbox").classList.toggle("menu_pop_box_open")
    document.body.classList.toggle("stop_scroll");
}

const drinks = [
	[["COFFEE"], [null], ["*Extra shot 5k<br>*Oat milk 10k "], [
		["img/drinks/Empty.jpg", "HOT CAPPUCCINO", "30", null],
		["img/drinks/DSC_5886.jpg", "ICED CAPPUCCINO", "36", null],
		["img/drinks/DSC_5794.jpg", "HOT LATTE", "30", null],
		["img/drinks/Ice Latte.jpg", "ICED LATTE", "32", null],
		["img/drinks/Empty.jpg", "ESPRESSO", "22", null],
		["img/drinks/Empty.jpg", "FLAT WHITE", "30", null],
		["img/drinks/Empty.jpg", "HOT LONG BLACK", "28", null],
		["img/drinks/DSC_5792.jpg", "ICED LONG BLACK", "30", null],
		["img/drinks/Hot Mocha.jpg", "HOT MOCHA", "33", null],
		["img/drinks/Ice Mocha.jpg", "ICED MOCHA", "36", null],
		["img/drinks/Empty.jpg", "PICCOLO", "28", null],
	]],
	[["NON COFFEE"], [null], [null], [
		["img/drinks/Hot Choco.jpg", "HOT CHOCOLATE", "30", null],
		["img/drinks/Ice Chocolate.jpg", "ICED CHOCOLATE", "33", null],
		["img/drinks/Hot green tea latte.jpg", "HOT MATCHA LATTE", "30", null],
		["img/drinks/Ice Greentea Latte.jpg", "ICED MATCHA LATTE", "33", null],
		["img/drinks/Hot Hibiscus tea.jpg", "HOT MIXED BERRIES & HIBISCUS TEA", "0", null],
		["img/drinks/Ice Hibiscus tea.jpg", "ICED MIXED BERRIES & HIBISCUS TEA", "0", null],
		["img/drinks/Hot Jasmine tea.jpg", "IDK", "0", null],
		["img/drinks/Ice Tea Earl Grey.jpg", "IDK", "0", null],
		["img/drinks/Ice Lemon Tea.jpg", "IDK", "0", null],
		["img/drinks/Hot tea.jpg", "IDK", "18", null],
		["img/drinks/Ice Tea.jpg", "TEA", "18/20", "Camomile&Lemongrass / Blackcurrant / English Breakfast / Earl Grey Mixed Berries&Hibiscus"],
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
		["img/drinks/Empty.jpg", "HIBISCUS BERRY LEMONADE", "23", "Hibiscus and mixedberries tea with lemonade"],
		["img/drinks/Empty.jpg", "BLACKCURRENT LEMONADE", "23", "Blackcurrant tea with lemonade"],
	]],
	[["BIL'S SIGNATURE"], [null], [null], [
		["img/drinks/Empty.jpg", "ICED BIL'S COFFEE", "20", "Original or Caramel"],
		["img/drinks/Empty.jpg", "ICED SHAKEN VANILLA COFFEE", "34", "Iced Arabica coffee with milk and a hint of vanilla"],
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
	[[null], [null], [null], [
		["img/placeholder.jpg", "PRODUCT", "11", null],
		["img/placeholder.jpg", "PRODUCT", "11", "test"],
		["img/placeholder.jpg", "PRODUCT", "11", "test"],
		["img/placeholder.jpg", "PRODUCT", "11", null],
		["img/placeholder.jpg", "PRODUCT", "11", "test"],
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