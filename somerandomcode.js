// // async function logInUser(req,res) {
// //     try {
// //     let data = req.body;
// //     userModel.findOne({email:data.email}).then( (user) => {
// //         console.log(user)
// //         if(user.password == data.password) {
// //             // let uid = user['_id'];
// //             // let token = jwt.sign({payload:uid},JWT_KEY, {expiresIn: '2000s'});
// //             // console.log(token)
// //             // res.json({
// //             //     message:"Cookie"
// //             // })
// //             // document.cookie = token;
// //             // return;
// //             res.cookie('isLoggedIn',true,{secure:true, httponly:false});
// //             return res.json({
// //                 message:"successfully signed in",
// //                 userDetails:data
// //             })
// //         } else {
// //             res.json({
// //                 message:"wrong credentials"
// //             })
// //         }
// //     });
// //     }
// //     catch (err) {
// //         return res.status(500).send({
// //             message:err
// //         })
// //     }
// // }

// // module.exports.getCookies = function getCookies (req,res) {
// //     let cookie = req.cookies.logIn;
// //     console.log(req.cookies);
// //     res.send("cookie received");
// // }

// // function setCookies(req,res) {
// //     // res.setHeader('Set-Cookie','isLoggedIn=true');
// //     res.cookie('LogIn',"tihis is again me",{maxAge:1000*60*60*24, secure:true, httpOnly:false});
// //     res.send("this is me");
// // }

// // let arr = await ratings.find( { rating: {$gt: 0}} );


// // let arr = []
// // if (arr) {
// //     console.log("hey bro");
// // } else {
// //     console.log("wtf");
// // }

// await axios.post('/',{
//     rate: index
//   });
//   console.log("this is after the axios call");
//   await axios.get('/data').then(function(res) {
//     document.getElementById("rating").innerHTML = res.data.data;
//   })

//   app.post("/", (req,res) => {
//     let rate = new ratings({
//         rating: req.body.rate
//     });
//     rate.save()
//     .then(() => {
//         console.log("saved!!");
//     })
//     .catch((err) => {
//         res.send(err);
//     })
//     const con = "con";
//     const params = { title: "title", content: con };
//     res.status(200).render("index.pug", params);
// })

// app.get("/data", async (req,res) => {
//     let arr = await ratings.find( { rating: {$gt: 0}} );
//     let count = 0;
//     for (let i = 0; i < arr.length;i++) {
//         count+=arr[1].rating;
//     }
//     let average = count/arr.length;
//     res.json({
//         data: average
    
app.post("/Home", async (req,res) => {
    let arr = await user_info.find( { email: req.body.emailid} );
    if (arr) {
        let user = new user_info({
        email: req.body.emailid,
        password: req.body.password
        });
        user.save()
        .then((req,res) => {
            console.log("hey bro");
        })
        .catch((err) => {
            res.send(err);
        })
        res.cookie("user", true, {
            maxAge: 12000000,
            httpOnly: true
        });
        const con = "con";
        const params = { title: "title", content: con };
        res.status(200).render("home.pug", params);
    } else {
        console.log("fuck bro");
        res.status(200).render("index.pug");
    }
});

app.post("/userHome", async (req,res) => {
    let arr = await user_info.find( { email: req.body.emailid} );
    console.log(arr);
    if (arr) {
        res.render("index.pug");
    } else {
        let pass = arr[0].password;
        console.log("test1");
        if (pass == req.body.password) {
            console.log("test2");
            const con = "con";
            const params = { title: "title", content: con };
            res.status(200).render("home.pug", params);
        } else {
            res.status(200).render("index.pug");
        }
    }
});