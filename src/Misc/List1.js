let List1 = {
    index:0,
    liked:false,
    items: [
        {
        name: "Sweater",
        link: "",
        checkMark: false,
        image: "box"
        },
        {
            name:"Wool Socks",
            link:"",
            checkMark:false,
            image: "box"
        },
        {
            name:"Calendar",
            link:"",
            checkMark:false,
            image: "box"
        },
        {
            name:"Laptop",
            link:"",
            checkMark:false,
            image: "box"
        },
        {
            name:"25$ Gas Gift Card",
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


export default List1;