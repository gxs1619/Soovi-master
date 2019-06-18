let MyList = {
    index:0,
    items: [{
        name: "",
        link: "",
        checkMark: false,
        image: "box"
    },
        {
            name:"",
            link:"",
            checkMark:false,
            image: "box"
        },
        {
            name:"",
            link:"",
            checkMark:false,
            image: "box"
        },
        {
            name:"",
            link:"",
            checkMark:false,
            image: "box"
        },
        {
            name:"",
            link:"",
            checkMark:false,
            image: "box"
        }],
    removeItem(index){
        //for each item in items above the one at INDEX
        MyList.items[index].name = "";
        MyList.items[index].link = "";
        MyList.items[index].checkMark = false;
        MyList.index--;
        //until you run into a null item
        //copy item at current+1 to current
    },

    homeItem(name){
        MyList.items[MyList.index].name = name;
        MyList.items[MyList.index].checkMark = true;
        MyList.index++;
    }
};


export default MyList;