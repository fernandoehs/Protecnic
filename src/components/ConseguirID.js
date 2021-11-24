const { db } = require("../firebase");

import{db} from '../firebase';

db.collection('clientes-bd').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
    })
})