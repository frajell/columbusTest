if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

const shopItems = document.querySelector(".shop-items");

const shopItemArray = [{"shopItemTitle": "Blood, Sugar", "shopItemDetails": "Probably the greatest album ever", "shopItemPrice": "129:-", "shopItemImage": "Images/Album 6.jpg"},
{"shopItemTitle": "Trans Europe", "shopItemDetails": "Probably the greatest album ever", "shopItemPrice": "129:-", "shopItemImage": "Images/Album 5.jpg"},
{"shopItemTitle": "Random Access", "shopItemDetails": "Probably the greatest album ever", "shopItemPrice": "129:-", "shopItemImage": "Images/Album 3.jpg"},
{"shopItemTitle": "Changes", "shopItemDetails": "Probably the greatest album ever", "shopItemPrice": "129:-", "shopItemImage": "Images/Album 4.jpg"},
{"shopItemTitle": "Breaking Out", "shopItemDetails": "Probably the greatest album ever", "shopItemPrice": "129:-", "shopItemImage": "Images/Album 1.png"},
{"shopItemTitle": "Superfly", "shopItemDetails": "Probably the greatest album ever", "shopItemPrice": "129:-", "shopItemImage": "Images/Album 2.png"}
];

function ready() {
    // var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    // for (var i = 0; i < removeCartItemButtons.length; i++) {
    //     var button = removeCartItemButtons[i]
    //     button.addEventListener('click', removeCartItem)
    // }

        for (let i = 0; i < shopItemArray.length; i++) {
        const tempShopItems = shopItemArray[i];
        const info = document.createElement("shop-item")
        info.innerHTML = `<div class ="shop-item">
                    <img class="shop-item-image" src="${tempShopItems.shopItemImage}">
                    <span class="shop-item-title">${tempShopItems.shopItemTitle}</span>
                    <div class="shop-item-details">
                        <div>${tempShopItems.shopItemDetails}</div>                       
                        <div class="shop-item-price">${tempShopItems.shopItemPrice}</div>
                        <button class="btn btn-primary shop-item-button"type="button">ADD TO LIST</button>
                    </div>
                    </div>`
        shopItems.appendChild(info);
    }  

    var addToListButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToListButtons.length; i++) {
        var button = addToListButtons[i]
        button.addEventListener('click', addToListClicked)
    }
}

function addToListClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;    
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToList(title, price)
    updateListTotal()
}

function addItemToList(title, price) {
    var listRow = document.createElement('div')
    listRow.classList.add('list-row')
    var listItems = document.getElementsByClassName('list-items')[0]   
    
    var listRowContents = `
        <div class="list-item list-column">            
            <span class="list-item-title">${title}</span>
            <span class="list-price list-column">${price}</span>
            </div>
        `
    listRow.innerHTML = listRowContents
    listItems.append(listRow)   
}

function updateListTotal() {
    var listItemContainer = document.getElementsByClassName('list-items')[0]
    var listRows = listItemContainer.getElementsByClassName('list-row')
    var total = 0
    for (var i = 0; i < listRows.length; i++) {
        var listRow = listRows[i]
        var priceElement = listRow.getElementsByClassName('list-price')[0]        
        var price = parseFloat(priceElement.innerText.replace('$', ''))        
        total = total + (price)    }
    total = Math.round(total * 100) / 100    
    document.getElementsByClassName('list-total-price')[0].innerText =  total + ":-"
}