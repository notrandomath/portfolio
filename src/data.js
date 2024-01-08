export const featuredPortfolio = new Set([0, 1, 2])

export const aiPortfolio = new Set([1, 2, 3])

export const frontendPortfolio = new Set([0, 4])

export const backendPortfolio = new Set([0])

export const mobilePortfolio = new Set([])

export const worksData = [
    {
     id: "0",
     icon: "https://cdn.pixabay.com/photo/2015/12/03/01/27/play-1073616_1280.png",
     title: "Omar's Entertainmentopedia",
     desc: 
       `A fullstack application with a mySQL database 
       that stores info about the entertainment that I've consumed as well 
       as the rating I gave it. The frontend then searches the database
       as well as adds to it. Uses amazon cognito and react-auth-kit for authentication 
       when adding to database. 
       Credentials: (username: guest, password: 2tubZX#Gc5FbhQXDCe[5)`,
     img: "./assets/entertainmentopedia.png",
     link: "https://omars-entertainmentopedia.yahia.space",
    },
    {
     id: "1",
     icon: "./assets/github_logo.webp",
     title: "Recipe AI Version 1",
     desc: 
       `A generative AI built using the LSTM architecture that generates food recipes
       using a food.com dataset from Kaggle`,
     img: "./assets/LSTM_Cell.svg.png",
     link: "https://gist.github.com/notrandomath/1c9afc98455b0ea8cdc62c2b0d2ecbb9",
    },
    {
     id: "2",
     icon: "./assets/github_logo.webp",
     title: "Recipe AI Version 2",
     desc: 
       `A generative AI using a fine-tuned pretrained Huggingface GPT2 model that generates food recipes
       using a food.com dataset from Kaggle`,
     img: "./assets/huggingface_logo.svg",
     link: "https://gist.github.com/notrandomath/ba8d543240e8a093ec55b677c3df2824",
    },
    {
     id: "3",
     icon: "./assets/github_logo.webp",
     title: "AI Notes",
     desc: 
       `A notes page for storing notes on transformers and neural networks
       Includes topics such as perceptrons and attention mechanisms.`,
     img: "./assets/ai-notes.png",
     link: "https://ai-notes-tau.vercel.app/transformers/attention",
    },
    {
     id: "4",
     icon: "./assets/cae.png",
     title: "Animage.moe",
     desc: 
       `A frontend for the cal animage network of anime clubs in California.
       Made using Nuxt (including Vue.js and vite)`,
     img: "./assets/animage.moe.png",
     link: "https://animage.moe",
    },
]