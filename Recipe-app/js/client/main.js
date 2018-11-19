//client Functionality


/*
Add More function
	- Add another input box in div
		- give name, p values etc...
*/

try {
    if (!window.RTA) {
        RTA = {
            client: {
                start: function () {
                    jQuery("button.add_more").on("mousedown", this.add_input)
                    jQuery("button.search").on("click", this.search)
                },
                add_input: function () {
                    let elem = document.createElement("p");
                    let inside_elem = document.createElement("input");
                    let val = jQuery(this).closest(".section").find("form .elements").children().length + 1;
                    elem.innerText = `Ingredient #${val}`;
                    jQuery(elem).append("<input></input>");
                    jQuery(this).closest(".section").find("form .elements").append(elem);
                },
                search: function () {
                    var obj = {};
                    var data_arr = [];
                    var submissions = jQuery(this).prev("form").find(".elements p input");
                    var type = jQuery(this).prev("form").attr("id") || "browse";

                    for (var i = 0; i < submissions.length; i++) {
                  		if(submissions[i].value && submissions[i].value !== ""){
                  			data_arr.push(submissions[i].value);
                  		}
                    }

                    obj.type = type;
                    
                    if (obj.type == "browse"){
                    	obj.tags = data_arr;
                    } else {
                    	obj.ingredients = data_arr;
                    }
                    
                    console.log(obj);
                    /*
                     Send form data: https://stackoverflow.com/questions/21662836/send-form-data-using-ajax
                    */

                }
            }
        }
    }
} catch (e) {
    console.log(e)
}

// hide secondary search buttons -- delete
jQuery("button.search").css("display","none");

//******** Test Ajax Methods 
//Goal send ajax request, print it on screen & console.

// var obj = {
//   "type": "fridge_ing",
//   "ingredients": [
//     "gdgdf",
//     "dgfdgd",
//     "ggdf"
//   ]
// }

// var settings = {
//     complete: ()=>console.log("It Worked"),
//     /*contents: obj,*/
//     contentType: "application/x-www-form-urlencoded; charset=UTF-8",
//     data: obj,
//     error: (e) => console.log("uh oh, somethings up" + e),
//     type:"GET"


// }

// jQuery.ajax("butts", settings).done(data=>document.write(data))
// //code above works tho doesnt do anything significant







