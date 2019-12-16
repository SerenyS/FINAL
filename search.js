var propertyList = [//objectList
    {
        id: 1,
        cost: 500100,
        location: "milwaukee",
        propertyName: " Property One",
        description: "Description 1 - This property is located in Milwaukee"
    },
    {
        id: 2,
        cost: 600000,
        location: "waukesha",
        propertyName: " Property Two",
        description: "Description 2 - This property is located in Waukesha "
    },
    {
        id: 3,
        cost: 800000,
        location: "milwaukee",
        propertyName: " Property Three",
        description: "Description 3 - This property is located in Milwaukee "
    },
    {
        id: 4,
        cost: 120000,
        location: "oakcreek",
        propertyName: " Property Four",
        description: "Description 4 - This property is located in Oak Creek"
    },
    {
        id: 5,
        cost: 100000,
        location: "milwaukee",
        propertyName: " Property Five",
        description: "Description 5 -This property is located in Milwaukee"
    },
    {
        id: 6,
        cost: 100000,
        location: "waukesha",
        propertyName: " Property Six",
        description: "Description 6 - This property is located in Waukesha "
    },
    {
        id: 7,
        cost: 500000,
        location: "milwaukee",
        propertyName: " Property Seven",
        description: "Description 7 -This property is located in Milwaukee"
    },
    {
        id: 8,
        cost: 700000,
        location: "brookfield",
        propertyName: " Property Eight",
        description: "Description 8 -This property is located in Brookfield "
    },
];
var modal = $(".modal");
var backdrop = $(".backdrop");
var display = $("#displayModal");
$(init);

function init() {
    $(".view").click(viewProperty);
    $("#submit").click(filter);
    $("#close").click(closeModal);
}


// this is display a alternate description as modal , if property id selected match an id of object display this property "description" in popup
function viewProperty() {
    var htmlProperSelected = this.id;//view class = id selected

    for (var i = 0; i < propertyList.length; i++) {
        var propertySelected = propertyList[i];

        if (propertySelected.id == htmlProperSelected) {
            backdrop.css("display", "block");
            modal.css("display", "block");
            display.text(propertySelected.description);
        }
    }
}

function closeModal() {
    backdrop.css("display", "none");
    modal.css("display", "none");
}


//checked locations, run through array of property list , if theres a match display properties that fall under that location
function filter() {
    var paragraph = $("p");
    paragraph.empty();

    $("input[class=location]:checked").each(function () {
        locationsSelected.push(this.id);
    });

    var range = $("input[name='cost']:checked").val();

    for (var o = 0; o < propertyList.length; o++) {
        if (propertyList[o].cost <= range) {
            matches.push(propertyList[o].propertyName);

        }
    }
    var sentence = "These properties match your price range: " + matches +"  ,";

    paragraph.text(sentence);

}
