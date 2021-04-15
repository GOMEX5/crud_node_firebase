const admin = require('firebase-admin');

var serviceAccount = require('../../node-firebase-example-b71ae-firebase-adminsdk-vw7a5-88d2c9423f.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://node-firebase-example-b71ae-default-rtdb.firebaseio.com/'
});

exports.insertar = (req,res)=>{
    res.render('insert');
}

exports.actualizar = (req,res)=>{
    res.render('update');
}

const db = admin.database();
exports.home = (req,res)=>{
    db.ref('contacts').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('index',{contacts : data});
    });
};

exports.insert = (req,res)=>{
    const newContacts = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    };
    db.ref('contacts').push(newContacts);
    res.redirect('/');
};

exports.delete = (req,res)=>{
    db.ref('contacts/' + req.params.id).remove();
    res.redirect('/');
};

