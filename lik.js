        function verificar(){
            var l=document.getElementById("login").value;
            var s=document.getElementById("senha").value;
            if (l=="adm" && s=="123" ){
                window.open('linx.html','_blank');
            }else
            alert("Senha e usuário incorreto")
        }
        function entrar(){
            window.open('login.html','_blank')
        }



        let cart = [];
        let total = 0;

        function addToCart(productId) {
            const product = getProductById(productId);
            if (product) {
                cart.push(product);
                total += product.price;
                updateCart();
            }
        }

        function getProductById(productId) {
        
            if (productId === 1) {
                return { name: "Camisa Deveb's", price: 79.99 };
            } else if (productId === 2) {
                return { name: "Short Deveb's", price: 64.9 };
            }else if (productId === 3) {
                return { name: "Acessórios Deveb's", price: 94.99 };
            }else if (productId === 4) {
                return { name: "Adesivos da Deveb's", price: 15.45 };
            }
            return null;
        }

        function updateCart() {
            const cartItems = document.getElementById("cart-items");
            cartItems.innerHTML = "";
            cart.forEach((product) => {
                const li = document.createElement("li");
                li.textContent = product.name;
                cartItems.appendChild(li);
            });

            const cartTotal = document.getElementById("cart-total");
            cartTotal.textContent = total.toFixed(2);
        }
        function clearCart() {
            cart = []; 
            total = 0;
            updateCart(); 
        }

       
        function addToCart(productId) {
            const product = getProductById(productId);
            if (product) {
                cart.push(product);
                total += product.price;
                updateCart();
            }
        }
        
        function checkout() {
            if (cart.length === 0) {
                alert("Seu carrinho está vazio. Adicione itens antes de finalizar a compra.");
            } else {
                alert("Compra realizada com sucesso! Total: $" + total.toFixed(2));
                cart = [];
                total = 0;
                updateCart();
            }
        }
        
        // Funções getProductById, updateCart e clearCart continuam as mesmas do exemplo anterior.
       
