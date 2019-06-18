let List2 = {
    index:0,
    liked:false,
    items: [{
        name: "G Fuel",
        link: "",
        checkMark: false,
        image: "box"
    },
        {
            name:"8 GB Ram",
            link:"",
            checkMark:false,
            image: "box"
        },
        {
            name:"Gaming Headphones",
            link:"",
            checkMark:false,
            image: "box"
        },
        {
            name:"Steam Giftcard",
            link:"",
            checkMark:false,
            image: "box"
        },
        {
            name:"Gaming Chair",
            link:"",
            checkMark:false,
            image: "box"
        }],
    removeItem(index){
        //for each item in items above the one at INDEX
        let i;
        for(i = index; i < this.items.length; i++){

        }
        //until you run into a null item
        //copy item at current+1 to current
    },

    homeItem(){
        //same as removeItem but we're shifting up instead of down
    }
};


export default List2;