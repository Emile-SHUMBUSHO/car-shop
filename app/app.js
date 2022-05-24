const carObjects = {
  carCard : [
    {
      title: "Cheverloret Camaro",
      imgUrl:
        "https://www.chevrolet.ca/content/dam/chevrolet/na/canada/english/index/performance/2022-camaro/mov/new/2022-camaro-masthead-01.jpg?imwidth=960",
      price: 230000,
      description: "A better and fast car"
    },
    {
      title: "Hyundai Tucson",
      imgUrl:
        "https://www.indiacarnews.com/wp-content/uploads/2022/03/2022-Hyundai-Tucson-7-Seater.jpg",
      price: 260000,
      description: "A better and family car"
    },
    {
      title: "Hyundai Tucson",
      imgUrl:
        "https://www.indiacarnews.com/wp-content/uploads/2022/03/2022-Hyundai-Tucson-7-Seater.jpg",
      price: 260000,
      description: "A better and family car"
    },
    {
      title: "Cheverloret Camaro",
      imgUrl:
        "https://www.chevrolet.ca/content/dam/chevrolet/na/canada/english/index/performance/2022-camaro/mov/new/2022-camaro-masthead-01.jpg?imwidth=960",
      price: 230000,
      description: "A better and fast car"
    }
  ],
  render(){
    const wallper = document.getElementById("wallper");
    wallper.className = 'container-fluid bg-dark'
    const header = document.createElement("nav")
    header.className = 'navbar navbar-light bg-light'
    header.innerHTML = `
    <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    `
    const contents = document.createElement("div")
    contents.className = "container mt-4"
    const cardContainer = document.createElement("div")
    cardContainer.className = 'row'
    for(let car of this.carCard){
      const cardContent = document.createElement("div")
      cardContent.className = "col-md-4"
      cardContent.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${car.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${car.title}</h5>
            <p class="card-text">${car.description}</p>
            <a href="#" class="btn btn-primary">Add</a>
          </div>
        </div>
      `,
      cardContainer.append(cardContent)
    }
    contents.append(cardContainer)
    wallper.append(header, contents)
  }
}
carObjects.render()

