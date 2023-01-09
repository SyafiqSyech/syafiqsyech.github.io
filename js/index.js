function make_big_menu(){
    menu.forEach((menu_cat) => {
        const category = menu_cat[0];
        const name = menu_cat[1];
        const big_menu_box = document.getElementById("bigmenubox");
        let prod_count = 0;
    
        const link = document.createElement("a");
        const div = make_div("big_menu_opt", null);

        const span = document.createElement("span");
        span.className = "material-symbols-outlined";
        span.innerHTML = "arrow_right";        
        const h2 = document.createElement("h2");
        h2.innerHTML = make_name(name);

        div.appendChild(span);
        div.appendChild(h2);

        link.href = (name+".html#"+name[0]+"top")
        link.appendChild(div);
        big_menu_box.appendChild(link);
    
        if(category[0][0] != null){
            category.forEach((ctgy) => {
                prod_count++;
                
                const sublink = document.createElement("a");
                const subpara = make_para("big_menu_sub_opt", ctgy[0])
                sublink.href = (name+".html#"+name[0]+prod_count)
                sublink.appendChild(subpara);
                big_menu_box.appendChild(sublink);
            });
        }
    });
}