console.log(data);

// WRITE YOUR CODE BELOW!
// You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog



let dogsUpperList=document.querySelector('.dogs-list') 

let dogMainSection=document.querySelector(".main__dog-section")


function dogsList(){
    // <li class="dogs-list__button dogs-list__button">Mr.Bunkers</li>

    for(let dog of data){
    let dogList=document.createElement('li')
    dogList.className='dogs-list__button'
    dogList.textContent=dog.name
    dogsUpperList.append(dogList)
    }
}


dogsList()





function displayDog(){
    // <h2>Mr. Bonkers</h2>
    // <img
    //   src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    //   alt=""
    // />
    // <div class="main__dog-section__desc">
    //   <h3>Bio</h3>
    //   <p>
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
    //     minima voluptates libero cumque rerum consequatur optio aliquid sint
    //     eum maxime illo laborum omnis quo ab rem cupiditate nulla
    //     perspiciatis ipsum!
    //   </p>
    // </div>
    // <p><em>Is naughty?</em> yes!</p>
    // <button class="main__dog-section__btn">Good dog!</button>

let dogName=document.createElement('h2')
let img=document.createElement('img')
let dogSection=document.createElement('div')
let Bio=document.createElement('h3')
let BioContent=document.createElement('p')
let isNgh=document.createElement('p')
let button=document.createElement('button')

dogMainSection.append(dogName,img,dogSection,isNgh,button)

dogSection.append(Bio,BioContent)



}

