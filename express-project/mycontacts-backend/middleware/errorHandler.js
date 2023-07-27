
const {constants} = require("../constants")
//express-project\mycontacts-backend\routes\constants.js
const errorHandler = (err, req,res,next ) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title: "VALIDATION ERROR",
             message: err.message,
              stackTrace: err.stack
            });
        break;
        case constants.UNATHORISED:
            res.json({title: "UNAUTHORISED",
             message: err.message,
              stackTrace: err.stack
            });
        break;
        case constants.FORBIDDEN:
            res.json({title: "FORBIDDEN",
             message: err.message,
              stackTrace: err.stack
            });
        break;
        case constants.SERVER_ERROR:
            res.json({title: "SERVER ERROR",
             message: err.message,
              stackTrace: err.stack
            });
        break;
        case constants.NOT_FOUND:
            res.json({title: "NOT FOUND",
             message: err.message,
              stackTrace: err.stack
            });
            default:
                console.log("No errors occured")
                break;
    }

};

module.exports = errorHandler;