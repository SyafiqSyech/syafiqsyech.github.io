function ImgClick(n){
    document.getElementById("im"+n).classList.toggle("imgtoggle")
    document.getElementById("tx"+n).classList.toggle("desctoggle")
}

function make_prod(category, opt){
    const main_box = document.getElementById("mainbox");
    let title_box_count = 0;
    let prod_count = 0;
    category.forEach((ctgy) => {
        title_box_count++;
        const outer_box = make_div("outer_box", null);

        const title_box = make_div("title_box", opt+title_box_count);
        
        title_box.appendChild(make_para("title", ctgy[0]));
        if(ctgy[1] != null){
            title_box.appendChild(make_para("hotcold", ctgy[1]));
        }
        if(ctgy[2] != null){
            title_box.appendChild(make_para("title_desc", ctgy[2]));
        }
        
        outer_box.appendChild(title_box);
        
        const products = make_div("products", null);
        if(opt === "f" && ctgy[0] != 'Pastries'){ products.className = "products1"; }
        
        ctgy[3].forEach((prod) => {
            prod_count++;
            const product_box = make_div("product_box", null);
            const img_box = make_div("img_box", null);
            if(opt === "f" && ctgy[0] != 'Pastries'){ img_box.className = "img_box1"; }
            
            const img = document.createElement("img");
            img.src = (prod[0]);
            img.alt = "product_img";
            img.className = "product_img";
            
            if(prod[3] != null){
                const para = make_para("tapme", "TAP ME");
                const desc_box = make_div("desc_box", "tx"+prod_count);
                
                const span = document.createElement("span");
                span.innerHTML = prod[3];
                
                desc_box.appendChild(span);
                
                img.id = "im"+prod_count;
                
                img_box.appendChild(para);
                img_box.appendChild(desc_box);
                
                img_box.className = "img_box pointer";
                if(opt === "f" && ctgy[0] != 'Pastries'){ img_box.className = "img_box1 pointer"; }
                img_box.setAttribute("onclick", "ImgClick("+prod_count+")");
            }
            
            
            img_box.appendChild(img);
            product_box.appendChild(img_box);

            const product_txt = make_div("product_txt", null)
            product_txt.appendChild(make_para("product_txt_name", prod[1]));
            product_txt.appendChild(make_para("product_txt_price", prod[2]));

            product_box.appendChild(product_txt);
            products.appendChild(product_box);
        });

        outer_box.appendChild(products);
        main_box.appendChild(outer_box);
    });
}