

let button = document.getElementById('submit');
button.addEventListener("click", getFood);

// function setup() {
//   var can = createCanvas(500, 500);
//   background(255, 255, 255);
//   can.parent("draw");
// }
// function draw(){
// 	if(mouseIsPressed){
// 		fill(0);
// 	}else{
// 		fill(255);
// 	}
// 	ellipse(mouseX, mouseY, 20,20);
// }


function getFood(){
	let id = "88384fca";
	let key= "a9877f0ffd7780503e870fafbb8dd4cf"
	var food = document.getElementById('food-input').value;
	const div = document.createElement('div');
	const draw = document.createElement('div');

	div.setAttribute("id", "content");
	draw.setAttribute("id","draw");
	const url3 = 'https://api.edamam.com/search?q='+ food + '&app_id='+ id + '&app_key='+key+'&from=0&to=3';

  fetch(url3)
  .then(response => {
	  return response.json();})
  .then(data =>{
	  	let li = document.createElement('li'),
			img = document.createElement('img'),
			span = document.createElement('span'),
			ingre = document.createElement('span');

	  let caloriesVal = Math.round(data.hits[0].recipe.calories);

	  img.src = data.hits[0].recipe.image;
	  span.innerHTML = data.hits[0].recipe.label;
	  ingre.innerHTML = data.hits[0].recipe.ingredientLines.toString();
	  li.appendChild(img);
      li.appendChild(span);
	  li.appendChild(ingre);
      div.appendChild(li);
      document.body.appendChild(div);
	     //document.body.appendChild(draw);
    })

//catch errors
  .catch(function(error) {
    //console.log(JSON.stringify(error));
	let msg = "Sorry, No recipe for you."
    document.getElementById('output').innerHTML = '<p>'+ msg +'</p>';
  });
		//clear Input
	const erase = document.getElementById('reset');
	erase.addEventListener('click', function(){
      	document.getElementById('food-input').value='';
      	document.getElementById('content').innerHTML ='';
    });
}
