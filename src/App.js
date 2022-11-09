import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

/*============================================*/
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";

/*============================================*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Стул серый',
                    img: 'chair.jpg',
                    category: 'chairs',
                    desc: "Lorem Ipsum",
                    price: '49,50'
                },
                {
                    id: 2,
                    title: 'Стул',
                    img: 'chair2.jpg',
                    category: 'chairs',
                    desc: "Ipsum Lorem",
                    price: '59,99'
                },
                {
                    id: 3,
                    title: 'Стол',
                    img: 'table.jpg',
                    category: 'tables',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                },
                {
                    id: 4,
                    title: 'Стол',
                    img: 'table1.jpg',
                    category: 'tables',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                },
                {
                    id: 5,
                    title: 'Стол',
                    img: 'table1.jpg',
                    category: 'tables',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                },
                {
                    id: 6,
                    title: 'Стол',
                    img: 'table1.jpg',
                    category: 'tables',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                },
                {
                    id: 7,
                    title: 'Стол',
                    img: 'table.jpg',
                    category: 'tables',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                },
                {
                    id: 8,
                    title: 'Лампа',
                    img: 'light2.jpg',
                    category: 'lights',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                },
                {
                    id: 9,
                    title: 'Лампа',
                    img: 'light2.jpg',
                    category: 'lights',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                },
                {
                    id: 10,
                    title: 'Лампа',
                    img: 'light2.jpg',
                    category: 'lights',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                },
                {
                    id: 11,
                    title: 'Диван',
                    img: 'sofa1.jpg',
                    category: 'sofa',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                },
                {
                    id: 12,
                    title: 'Диван',
                    img: 'sofa2.jpg',
                    category: 'sofa',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                },
                {
                    id: 13,
                    title: 'Диван',
                    img: 'sofa3.jpg',
                    category: 'sofa',
                    desc: "Ipsum Lorem",
                    price: '39,99'
                }
            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    render() {
    return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer/>

    
       {/* <PayPalScriptProvider>
            <PayPalButtons/>
        </PayPalScriptProvider>*/}

    </div>
  );
    }

    onShowItem(item){
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category){
        if( category === 'all'){
            this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)
        })
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id)
                isInArray = true
        })
        if(!isInArray)

        this.setState({orders: [...this.state.orders, item]
        })
        if(isInArray)

            this.setState({orders: [...this.state.orders, item]
            })
    }
}

export default App;
