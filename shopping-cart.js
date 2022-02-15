var cart1 = [];
var cart2 = [];
var cart3 = [];
var slice = [];
var tempCart = [];
// -Item needs to Add
function addItem() {
    // Get input values from the form
    var itemName = document.getElementById('itemName').value;
    var addToCartID = document.getElementById('addToCartID').value;
    // Validations 
    if (itemName == "") { alert('please enter item');  }
   else if (addToCartID == "") { alert('Enter cart number');  }
   else if (addToCartID < 1 || addToCartID > 3) {
        alert('please enter correct cart number between 1 to 3');
    }
    if (addToCartID == 1) {
        cart1.unshift(itemName);
        document.getElementById("cart1").innerHTML = cart1.join("<br>") + '<p>Total Item: ' + cart1.length + '</p>';
    }
    else if (addToCartID == 2) {
        cart2.unshift(itemName);
        document.getElementById("cart2").innerHTML = cart2.join("<br>") + '<p>Total items: ' + cart2.length + '</p>';
    }
   else if (addToCartID == 3) {
        cart3.unshift(itemName);
        document.getElementById("cart3").innerHTML = cart3.join("<br>") + '<p>Total items: ' + cart3.length + '</p>';
    }
}
function clearAll1() {
    document.getElementById("itemName").value = "";
    document.getElementById("addToCartID").value = "";
}
    //Item needs to Remove
function removeItem() {
    var totalRemove = Number(document.getElementById('totalRemove').value);
    var removeCartId = Number(document.getElementById('removeCartId').value);

    if (totalRemove == "") { alert('please enter item'); return; }

    if (removeCartId == "") { alert('Enter cart number'); return; }

    if (removeCartId < 1 || removeCartId > 3) {
        alert('please enter correct cart number between 1 to 3'); return;
    }

    if (removeCartId == 1) {
        if (cart1.length == 0) { alert('cart1 is empty'); return; }
        cart1 = cart1.slice(totalRemove);
        document.getElementById("cart1").innerHTML = cart1.join("<br>") + '<p>Total items: ' + cart1.length + '</p>';
    }
    if (removeCartId == 2) {
        if (cart2.length == 0) { alert('cart2 is empty'); return; }
        cart2 = cart2.slice(totalRemove);
        document.getElementById("cart2").innerHTML = cart2.join("<br>") + '<p>Total items: ' + cart2.length + '</p>';
    }
    if (removeCartId == 3 && cart3.length != 0) {
        if (cart3.length == 0) { alert('cart3 is empty'); return; }
        cart3 = cart3.slice(totalRemove);
        document.getElementById("cart3").innerHTML = cart3.join("<br>") + '<p>Total items: ' + cart3.length + '</p>';
    }
}

function clearAll2() {
    document.getElementById("totalRemove").value = "";
    document.getElementById("removeCartId").value = "";
}
    //Item needs to Transfer
function transfterAll() {
    var transferFrom = document.getElementById('transferFrom').value;
    var transferTo = document.getElementById('transferTo').value;
    var TransferItem = document.getElementById('TransferItem').value;
    var slice = "";

    if (transferFrom == "") { alert('Enter valid from cart number');  }
    else if (transferTo == "") { alert('Enter valid to cart number');  }
    else if (TransferItem == "") {
        alert('Enter transfer # of items'); return;
    }
    if (transferTo < 1 || transferTo > 3) {
        alert('please enter valid cart number between 1 to 3');
    } else if (transferFrom < 1 || transferFrom > 3) {
        alert('please enter valid cart number between 1 to 3');
    }

    if (transferFrom == 1) {
        if (cart1.length == 0) { alert('cart1 is empty'); return; }
        slice = cart1.slice(0, TransferItem);
        cart1 = cart1.slice(TransferItem);
    }  else if (transferFrom == 2) {
        if (cart2.length == 0) { alert('cart2 is empty'); return; }
        slice = cart2.slice(0, TransferItem);
        cart2 = cart2.slice(TransferItem);
    }   else if (transferFrom == 3) {
        if (cart3.length == 0) { alert('cart3 is empty'); return; }
        slice = cart3.slice(0, TransferItem);
        cart3 = cart3.slice(TransferItem);
    }
    if (transferTo == 1) {
        cart1 = cart1.concat(slice);
    } else if (transferTo == 2) {
        cart2 = cart2.concat(slice);
    } else if (transferTo == 3) {
        cart3 = cart3.concat(slice);
    }
    document.getElementById("cart1").innerHTML = cart1.join("<br>") + '<p>Total items: ' + cart1.length + '</p>';
    document.getElementById("cart2").innerHTML = cart2.join("<br>") + '<p>Total items: ' + cart2.length + '</p>';
    document.getElementById("cart3").innerHTML = cart3.join("<br>") + '<p>Total items: ' + cart3.length + '</p>';
}
function clearAll3() {
    document.getElementById("transferFrom").value = "";
    document.getElementById("transferTo").value = "";
    document.getElementById("TransferItem").value = "";
}
 // Put Image in the Carts

function changeBackgroundImg() {
    var imageUrl = document.getElementById('imageUrl').value;
    var imageCart = document.getElementById('imageCart').value;

    if (imageUrl == "") {
        alert('url should not be empty');
    } else if (imageCart == "") {
        alert('cart number should be required');
    } else if (imageCart < 1 || imageCart > 3) {
        alert('please enter correct cart number between 1 to 3');
        return;
    }
    if (imageCart == 1) {
        document.getElementById("div1").style.backgroundImage = "url('" + imageUrl + "')";
    } else if (imageCart == 2) {
        document.getElementById("div2").style.backgroundImage = "url('" + imageUrl + "')";
    } else {
        document.getElementById("div3").style.backgroundImage = "url('" + imageUrl + "')";
    }
}
function clearAll4() {
    document.getElementById("imageUrl").value = "";
    document.getElementById("imageCart").value = "";
}

//Text-Color change in the cart
function changeFontColor() {
    var fontColor = document.getElementById('fontColor').value;
    var cartNumber = document.getElementById('cartNumber').value;

    if (fontColor == "") {
        alert('please enter font color');
    } else if (cartNumber == "") {
        alert('please enter cart number');
    } else if (cartNumber < 1 || cartNumber > 3) {
        alert('please enter cart number between 1 to 3');
        return;
    }

    if (cartNumber == 1) {
        document.getElementById("div1").style.color = fontColor;
    } else if (cartNumber == 2) {
        document.getElementById("div2").style.color = fontColor;
    } else {
        document.getElementById("div3").style.color = fontColor;
    }
}
function clearAll5() {
    document.getElementById("fontColor").value = "";
    document.getElementById("cartNumber").value = "";
}
// Search item in the carts
function speicalSearch() {
    var searchItem = document.getElementById("searchItem").value;
    var searchFrom = document.getElementById("searchFrom").value;
    var searchTransfer = document.getElementById("searchTransfer").value;
    var tempCart = [];

    if (searchItem == "") {
        alert('Enter valid search item cart number');
    } else if (searchFrom == "") {
        alert('Enter valid to cart number');
    } else if (searchTransfer == "") {
        alert('Enter transfer # of items');
    }
    if (searchFrom < 1 || searchFrom > 3) {
        alert('please enter valid cart number between 1 to 3');
    } else if (searchTransfer < 1 || searchTransfer > 3) {
        alert('please enter valid cart number between 1 to 3');
    }
    if (searchFrom == 1) {
        if (cart1.length == 0) { alert('cart1 is empty');  }
        //cart1.forEach(searchFn());
       else if (cart1.indexOf(searchItem) != -1) {
            tempCart.push(searchItem);
            cart1.splice(cart1.indexOf(searchItem), 1);
        }
    }
    if (searchFrom == 2) {
        if (cart2.length == 0) { alert('cart2 is empty');  }
         else if (cart2.indexOf(searchItem) != -1) {
            tempCart.push(searchItem);
            cart2.splice(cart2.indexOf(searchItem), 1);
        }
    }
    if (searchFrom == 3) {
        if (cart3.length == 0) { alert('cart3 is empty'); }
       else if (cart3.indexOf(searchItem) != -1) {
            tempCart.push(searchItem);
            cart3.splice(cart3.indexOf(searchItem), 1);
        }
    }
    if (searchTransfer == 1) {
        cart1 = cart1.concat(tempCart);
    } else if (searchTransfer == 2) {
        cart2 = cart2.concat(tempCart);
    } else if (searchTransfer == 3) {
        cart3 = cart3.concat(tempCart);
    }
    document.getElementById("cart1").innerHTML = cart1.join("<br>") + '<p>Total items: ' + cart1.length + '</p>';
    document.getElementById("cart2").innerHTML = cart2.join("<br>") + '<p>Total items: ' + cart2.length + '</p>';
    document.getElementById("cart3").innerHTML = cart3.join("<br>") + '<p>Total items: ' + cart3.length + '</p>';
}
function searchFn(item, index) {
    if (item == searchItem) {
        slice.push(item);
    } else {
        tempCart.push(item);
    }
}
function clearAll1(){
    document.getElementById("searchItem").value;
    document.getElementById("searchFrom").value;
    document.getElementById("searchTransfer").value;
}
// adds word either begining or ending
function spcialWord() {

    var wordName = document.getElementById("wordName").value;
    var wordLoc = document.getElementById("wordLoc").value;
    var wordCart = document.getElementById("wordCart").value;
    var tempCart = [];

    if (wordCart == 1) {
        if (cart1.length == 0) { alert('cart1 is empty'); return; }
        if (wordLoc == 0) {
            tempCart = cart1.map(x => wordName + x);
        } else {
            tempCart = cart1.map(x => x + wordName);
        }
        cart1 = tempCart;
    }
    if (wordCart == 2) {
        if (cart2.length == 0) { alert('cart2 is empty'); return; }
        if (wordLoc == 0) {
            tempCart = cart2.map(x => wordName + x);
        } else {
            tempCart = cart2.map(x => x + wordName);
        }
        cart2 = tempCart;
    }
    if (wordCart == 3) {
        if (cart3.length == 0) { alert('cart3 is empty'); return; }
        if (wordLoc == 0) {
            tempCart = cart3.map(x => wordName + x);
        } else {
            tempCart = cart3.map(x => x + wordName);
        }
        cart3 = tempCart;
    }

    document.getElementById("cart1").innerHTML = cart1.join("<br>") + '<p>Total items: ' + cart1.length + '</p>';
    document.getElementById("cart2").innerHTML = cart2.join("<br>") + '<p>Total items: ' + cart2.length + '</p>';
    document.getElementById("cart3").innerHTML = cart3.join("<br>") + '<p>Total items: ' + cart3.length + '</p>';
}
function clearWord() {
    document.getElementById("wordName").value = "";
    document.getElementById("wordLoc").value = "";
    document.getElementById("wordCart").value = "";

}
    // Search item All or Some
function checkOption() {
    var searchCriteria = document.getElementById('searchCriteria').value;
    var searchCartID = document.getElementById('searchCartID').value;
    var searchOption = document.getElementById('searchOption').value;
    // make temporary lowercase carts to match any strings (upper or lower)
    // search string example: Apple or apple or appLE or APPLE 

    if (searchCriteria == "") { alert('please enter search item'); return; }
    if (searchCartID == "") { alert('Enter cart number'); return; }
    if (searchCartID < 1 || searchCartID > 3) {
        alert('please enter correct cart number between 1 to 3');
    }

    if (searchCartID == 1) {
        if (cart1.length == 0) { alert('cart1 is empty'); return; }
        // Search exact same string in original cart if Search Option = Total
        if (searchOption == 1) {
            if (cart1.indexOf(searchCriteria) != -1) {
                alert('true');
            } else { alert('false'); }
        }
        if (searchOption == 0) {
            var cartSome = cart1.map(x => x.toLowerCase());
            // search any lower / upper case strings
            if (cartSome.indexOf(searchCriteria.toLowerCase()) != -1) {
                alert('true');
            } else { alert('false'); }
        }

    }
    if (searchCartID == 2) {
        if (cart2.length == 0) { alert('cart2 is empty'); return; }
        if (searchOption == 1) {
            if (cart2.indexOf(searchCriteria) != -1) {
                alert('true');
            } else { alert('false'); }
        }
        if (searchOption == 0) {
            var cartSome = cart2.map(x => x.toLowerCase());
            // search any lower / upper case strings
            if (cartSome.indexOf(searchCriteria.toLowerCase()) != -1) {
                alert('true');
            } else { alert('false'); }
        }
    }
    if (searchCartID == 3) {
        if (cart3.length == 0) { alert('cart3 is empty'); return; }
        if (searchOption == 1) {
            if (cart3.indexOf(searchCriteria) != -1) {
                alert('true');
            } else { alert('false'); }
        }
        if (searchOption == 0) {
            var cartSome = cart3.map(x => x.toLowerCase());
            // search any lower / upper case strings
            if (cartSome.indexOf(searchCriteria.toLowerCase()) != -1) {
                alert('true');
            } else { alert('false'); }
        }
    }
}

function clearAll6() {
    document.getElementById("searchCriteria").value = "";
    document.getElementById("searchCartID").value = "";
    document.getElementById("searchOption").value = "";

}