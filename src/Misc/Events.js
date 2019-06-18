let Events = {
    index:0,
    karen:false,
    added:false,
    items: [
        {
            name: "",
            date: "",
            group: ""
        },
        {
            name: "",
            date: "",
            group: ""
        },
        {
            name: "",
            date: "",
            group: ""
        },
        {
            name: "",
            date: "",
            group: ""
        },
        {
            name: "",
            date: "",
            group: ""
        }
        ],
    addEvent(name, date, group){
        Events.items[Events.index].name = name;
        Events.items[Events.index].date = date;
        Events.items[Events.index].group = group;
        Events.index++;
        Events.added = true;
    }
};


export default Events;