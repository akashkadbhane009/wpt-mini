import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const conn=createConnection({
    host: "localhost",
    user: "ITACHI",
    password: "123456789",
    database: "webx"
});
conn.connect((error)=>{
    if (error) {
        console.log(error);
    }
    else{
        console.log("Database connected !");
    }
});

app.post('/',(request,response)=>{
    var insertQry=`INSERT INTO signup VALUES(
        '${request.body.username}','${request.body.email}',
        '${request.body.phone}','${request.body.password}')`
    conn.query(insertQry,(error,result)=>{
        if (error) {
            response.status(500).send({message:'Error in inserting user'});
        }
        else{
            response.status(200).send({message:'User registered successfully'});
        }
    });
});
app.post('/feedback',(request,response)=>{
    var feedbackQry=`INSERT INTO feeback VALUES(
        '${request.body.name}','${request.body.email}',
        '${request.body.feedback}')`
    conn.query(feedbackQry,(error,result)=>{
        if (error) {
            response.status(500).send({message:'Error in inserting feedback'});
        }
        else{
            response.status(200).send({message:'Feedback entered successfully'});
        }
    });
});
app.get('/feedback',(request,response)=>{
    var userQry="SELECT * FROM feeback";
    conn.query(userQry,(error,result)=>{
        if (error) {
            response.status(500).send({message:'Error in fetching students'});
        } else {
            response.status(200).send(result);
        }
    })
});



// //worked
// app.get('/',(request,response)=>{
//     var userQry="SELECT * FROM signup where email='yash@gmail.com'";
//     conn.query(userQry,(error,result)=>{
//         if (error) {
//             response.status(500).send({message:'Error in fetching students'});
//         } else {
//             response.status(200).send(result);
//         }
//     })
// });
// app.get('/students',(request,response)=>{
//     var selectQry="SELECT * FROM student";
//     conn.query(selectQry,(error,result)=>{
//         if (error) {
//             response.status(500).send({message:'Error in fetching students'});
//         } else {
//             response.status(200).send(result);
//         }
//     })
// });


// app.delete('/students/:id',(request,response)=>{
//     var deleteQry="DELETE FROM student WHERE id="+request.params.id;
//     conn.query(deleteQry,(error,result)=>{
//         if (error) {
//             response.status(500).send({message:'Error in deleting students'});
//         } else {
//             response.status(200).send({message:'Successfully deleted student'});
//         }
//     })
// });

// app.get('/students/name/:pattern',(request,response)=>{
//     var fetchQry=`SELECT * FROM student WHERE name like '${request.params.pattern}%'`;
//     conn.query(fetchQry,(error,result)=>{
//         if (error) {
//             response.status(500).send({message:'Error in fetching students'});
//         } else {
//             response.status(200).send(result);
//         }
//     });
// });

app.listen(9800,()=>{
    console.log('listening on 9800');
});