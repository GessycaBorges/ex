//Carrinho de um e-commerce
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens: function () {
        let totalDeItens = 0;
        for (let item of carrinho.produtos){
            totalDeItens += item.qtd;
        }
        return totalDeItens;

    },
    calcularTotalAPagar: function () {
        let totalAPagarCents = 0;
        for (let item of carrinho.produtos) {
            totalAPagarCents += (item.precoUnit * item.qtd);
        }
        let totalAPagar = (totalAPagarCents / 100).toFixed(2);
        return totalAPagar;
    },
    imprimirResumo: function () {
        console.log (`Cliente: ${carrinho.nomeDoCliente}`);
        totalAPagar = this.calcularTotalAPagar ();
        console.log (`Total a pagar: R$ ${totalAPagar}`);
        totalDeItens = this.calcularTotalDeItens ();
        console.log (`Total de itens: ${totalDeItens} itens`);
    },
    addProduto: function (produto) {
        for (let item of carrinho.produtos) {
            if (this.id === produto.id){
                this.qtd += produto.qtd;
            }else {
                carrinho.produtos.push (produto);
                return;
            }
        }
    },
    imprimirDetalhes: function () {
        console.log (`Cliente: ${this.nomeDoCliente} \n`);
        for (let item of carrinho.produtos) {
            console.log (`Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${((item.qtd * item.precoUnit)/100).toFixed(2)}`);
        }
        console.log ("")
        totalAPagar = this.calcularTotalAPagar ();
        console.log (`Total a pagar: R$ ${totalAPagar}`);
        totalDeItens = this.calcularTotalDeItens ();
        console.log (`Total de itens: ${totalDeItens} itens`);
    },
    calcularDesconto: function (){
        //Desconto 1
        let totalDeItens = this.calcularTotalDeItens ();
        let totalAPagar = this.calcularTotalAPagar ();
        let desconto1 = 0;
        if (totalDeItens > 4){
            let maisBarato = 100000000;
            for (let item of carrinho.produtos){
                if (item.precoUnit <= maisBarato){
                    maisBarato = item.precoUnit;
                }
            }
            desconto1 = (maisBarato/100).toFixed(2);
        }
        
        let totalComDesconto1 = totalAPagar - desconto1;

        //Desconto 2
        let desconto2 = 0;
        if (totalAPagar > 100){
            desconto2 = totalAPagar * 0.1; // Valor do desconto 2
            let totalComDesconto2 = (totalAPagar - desconto2).toFixed(2); //-10%
        }
        //Desconto escolhido
        let desconto = 0;
        if (desconto1 > desconto2){
            desconto = desconto1
        } else if (desconto2 > desconto1){
            desconto = desconto2
        }
        return desconto;
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
console.log (carrinho.calcularDesconto());