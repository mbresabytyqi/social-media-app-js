
let database = [
    {
        username: "ken",
        password: "1234",
        email: "ken@gmail.com",
        isAdmin: true,
        login: function () {
            console.log("Welcome back, " + database.username + "!");
        }
    },
    {
        username: "ana",
        password: "abcd",
        email: "ana@gmail.com",
        isAdmin: false,
        login: function () {
            console.log("Welcome back, " + database.username + "!");
        }
    },
    {
        username: "leo",
        password: "pass",
        email: "leo@gmail.com",
        isAdmin: false,
        login: function () {
            console.log("Welcome back, " + database.username + "!");
        }
    }
];


let newsfeed = [
    {
        username: "ken",
        timeline: "Learning JavaScript today",
        likes: 10,
        comments: ["Great job"]
    },
    {
        username: "ana",
        timeline: "My first post",
        likes: 5,
        comments: ["Welcome"]
    },
    {
        username: "leo",
        timeline: "JavaScript is fun",
        likes: 8,
        comments: ["Cool"]
    }
];

// 1) Login
let usernamePrompt = prompt('Username');
let passwordPrompt = prompt('Password');
let userAktual = null;

database.forEach((user) => {
    if (usernamePrompt === user.username && passwordPrompt === user.password) {
        console.log('Logged In');
        userAktual = user;
        // 2) Welcome Message
        userAktual.login();
    }
})
console.log(userAktual)

// 3) Show all posts
// if (userAktual !== null) {
//     newsfeed.forEach((item) => {
//         console.log(`${item.username} ka postuar ${item.timeline}`)
//     })
// }
// 4) Show only my posts
// for (let i = 0; i < newsfeed.length; i++) {
//     if (userAktual.username === newsfeed[i].username) {
//         console.log('Show only my posts', newsfeed[i].timeline)
//     }
// }
// database.forEach((post) => {
//     if(post.username === userAktual.username){
//         console.log('my post', post.timeline)
//     }
// })
// 5) Add a new post
// let newPost = prompt('newPost');
// let newObject = {
//     username: 'New user',
//     timeline: newPost,
//     likes: 0,
//     comments: []
// }
// newsfeed.push(newObject);
// console.log(newsfeed)
// 6) Like the first post
// newsfeed[0].likes = newsfeed[0].likes + 1;
// console.log(newsfeed)
// 7) Add a comment to the first post
// let newComment = prompt('New Comment');
// newsfeed[0].comments.push(newComment)
// console.log('komenti', newsfeed[0])
// 8) Admin Check Function
//Arrow function
const isAdminUser = username => {
    for (let i = 0; i < database.length; i++) {
        if (username === database[i].username) {
            if (database[i].isAdmin === true) {
                console.log('Admin access granted')
            }
            else {
                console.log('Access denied')
            }
        }
    }
}

isAdminUser(userAktual.username)


// isAdminUser = username => {
//     for (let i = 0; i < database.length; i++) {
//         if (username === database[i].username) {
//             if (database[i].isAdmin === true) {
//                 console.log('Admin access granted')

//             }
//             else {
//                 console.log('Access denied')
//             }
//         }
//     }

// }
// isAdminUser(userAktual.username);

//me forEach 
// database.forEach((user) =>  {
//     if(user.username === userAktual.username){
//         // console.log(user)
//         if(user.isAdmin === true){
//              console.log('Admin access granted')

//             }
//             else {
//                 console.log('Access denied')
//             }
//     }
// })

// 9) Full Logic: 
let option = prompt('Choose an option:\n1. Show all posts\n2. Show my posts\n3. Add post\n4. Like first post\n5. Check admin\n6. Comment on first post')
switch (option) {
    case '1':

        newsfeed.forEach((item) => {
            console.log(`${item.username} ka postuar ${item.timeline}`)
        })
        break;
    case '2':
        for (let i = 0; i < newsfeed.length; i++) {
            if (userAktual.username === newsfeed[i].username) {
                console.log('Show only my posts', newsfeed[i].timeline)
            }
        }
        break;
    case '3':
        let newPost = prompt('newPost');
        let newObject = {
            username: 'New user',
            timeline: newPost,
            likes: 0,
            comments: []
        }
        newsfeed.push(newObject);
        console.log(newsfeed)
        break;
    case '4':
        newsfeed[0].likes = newsfeed[0].likes + 1;
        console.log(newsfeed)
        break;
    case '5':

        isAdminUser(userAktual.username);
        break;
    case '6':
        let newComment = prompt('New Comment');
        newsfeed[0].comments.push(newComment)
        console.log('komenti', newsfeed[0])
        break;
    default:
        console.log('ju lutem shtypni numrat 1-6')
        break;
}

// git status me i kqyr a i komente
// git add . (git add all )
// git commit -m "Social media implemetion"
// git push
// git config user.name "mbresabytyq"
//git config user.email "mbresabytyq@gmail.com"