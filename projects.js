const projects = [
    {
    id:1,
    title: "Prio - Task Manager",
    description:
      "Prio is a simple and efficient task manager built with React and Firebase, designed to help users stay organized. It allows users to create, update, delete, and manage tasks effortlessly with a clean and responsive UI.",
    image: "images/project4.jpg",
    liveLink: "https://react-task-manager-tawny.vercel.app/",
    githubLink: "https://github.com/AbhishekGoswam1/React-Task-Manager",
  },
  {
    id:2,
    title: "Pokemon card Generator",
    description:
      "The Pokémon Card Generator is a web app built with HTML, CSS, and JavaScript that dynamically creates Pokémon cards using the Pokémon API. It fetches and displays detailed Pokémon information, showcasing API integration, responsive design, and interactive UI development skills.",
    image: "images/project5.jpg",
    liveLink: "https://abhishekgoswam1.github.io/PokemonCard/",
    githubLink: "https://github.com/AbhishekGoswam1/PokemonCard",
  },
  {
    id:3,
    title: "Eco-life Hub",
    description:
      "Eco-life Hub is a comprehensive platform dedicated to promoting sustainable living. It offers a wealth of short articles, practical tips, and resources to help users adopt eco-friendly habits and make informed decisions for a greener lifestyle.",
    image: "images/project1.jpg",
    liveLink: "https://ecolife-hub.netlify.app/",
    githubLink: "https://github.com/AbhishekGoswam1/EcoLife-Hub",
  },
  {
    id:4,
    title: "Etch-a-Sketch",
    description:
      "Etch-a-Sketch is a web-based drawing application inspired by the classic toy. Users can create drawings by moving their cursor over the grid, with options to adjust the grid size and clear the canvas. This project demonstrates my skills in JavaScript, HTML, and CSS.",
    image: "images/project2.jpg",
    liveLink: "https://abhishekgoswam1.github.io/Etch-a-Sketch/",
    githubLink: "https://github.com/AbhishekGoswam1/Etch-a-Sketch",
  },
  {
    id:5,
    title: "Recipe Index",
    description:
      "Recipe Index is a user-friendly website that helps you find and cook your favorite dishes easily. Browse through various recipes with simple instructions and ingredient lists, perfect for quick meals or elaborate dishes.",
    image: "images/project3.jpg",
    liveLink: "https://abhishekgoswam1.github.io/Recipe_Project/",
    githubLink: "https://github.com/AbhishekGoswam1/Recipe_Projec",
  },
]

function createProjects() {
    var clutter = "";
    projects.forEach(project=>{
        clutter += `<div class="project-card">
                        <img src="${project.image}" class="project-image" alt="Project image" />
                        <div class="project-info">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                        <div class="links">
                            <button class="live-link"><a href="${project.liveLink}" target="_blank">Project Link</a></button>
                            <span><a href="${project.githubLink}}" target="_blank"><i class="fa-brands fa-github"></i></a></span>
                        </div>
                        </div>
                    </div>`;

        let projectContainer = document.querySelector(".project-content");
        projectContainer.innerHTML = clutter;

    })
}

createProjects();